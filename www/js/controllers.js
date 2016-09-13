angular.module('BhishakReports.controllers', [])
  
.controller('reportsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('settingsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
         
.controller('loginCtrl', ['$scope', '$state','$stateParams', '$ionicLoading', 'LoginSvc',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $state, $stateParams, $ionicLoading, LoginSvc) {
    $scope.login = {};

    $scope.loginUser = function() {
        if ($scope.login.userId == null) {
            return;
        }
        if ($scope.login.password == null) {
            return;
        }
        $ionicLoading.show({template:'Logging in User'});
        $scope.labCounts = LoginSvc.authenticate($scope.login.userId, $scope.login.password,
            $scope.loginSuccess, $scope.loginError);
    }

    // Success Handler. Set the $scope with dailyActivities.
    $scope.loginSuccess = function(resp){
        //$scope.labCounts = resp.data.LabTestCount;
        var respStatus = resp.data.LoginValidation;
        if ( respStatus == "Success") {
            $ionicLoading.hide();
            $state.go('tabsController.labCountsReport');
        } else {
            $ionicLoading.show({
                template: 'Authentication Failure: Could not login User. ',
                duration: 3000
            });
        }
    }
    // Error Handler. Show an Alert message.
    $scope.loginError = function(err){
        $ionicLoading.show({
            template: 'Could not login User. ' + err.data,
            duration: 3000
        });
    }

}])
   
.controller('labReportCtrl', ['$scope', '$filter','$stateParams', '$ionicLoading','LabTestsDataSvc',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $filter, $stateParams, $ionicLoading, LabTestsDataSvc) {
    $scope.labCounts = [];
    $scope.report = {};
    $scope.report.reportDate = new Date();

    // Called when the input filed value changes.
    $scope.dateChanged = function() {
        if ($scope.report.reportDate == null) {
            $scope.report.reportDate = new Date();
        }
        var rptDate = $filter('date')($scope.report.reportDate, 'MM-dd-yyyy');
        $ionicLoading.show({template:'Loading Lab Counts Data'});
        $scope.labCounts = LabTestsDataSvc.getData(rptDate,$scope.onSuccess, $scope.onError);
    }

    // Success Handler. Set the $scope with dailyActivities.
    $scope.onSuccess = function(resp){
        $scope.labCounts = resp.data.LabTestCount;
        $ionicLoading.hide();
    }
    // Error Handler. Show an Alert message.
    $scope.onError = function(err){
        $ionicLoading.show({
            template: 'Could not load Lab Report Data. ' + err.data,
            duration: 3000
        });
        $scope.labCounts = [];
    }
    $scope.dateChanged();

}])

.controller('labDetailsReportCtrl', ['$scope', '$filter','$stateParams', '$ionicLoading','LabTestsDataSvc',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $filter, $stateParams, $ionicLoading, LabTestsDataSvc) {
 
    $scope.report = {};
    $scope.labDetails = [];
    
    var labId = $stateParams.labId;
    $scope.report.labId = labId;
    $scope.report.labName = $stateParams.labName;
    $scope.report.reportDate = $stateParams.reportDate;

    // $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
    //     viewData.enableBack = true;
    // });
    // Called when the input filed value changes.
    $scope.showDetails = function() {
        if ($scope.report.reportDate == null) {
            $scope.report.reportDate = new Date();
        }
        $ionicLoading.show({template:'Loading Lab Details'});
        $scope.labDetails = LabTestsDataSvc.getDetails($scope.report.reportDate, labId, $scope.onDetailsSuccess, $scope.onError);
    }

    // Success Handler. Set the $scope with dailyActivities.
    $scope.onDetailsSuccess = function(resp){
        $scope.labDetails = resp.data.LabTestCount;
        $ionicLoading.hide();
    }
    // Error Handler. Show an Alert message.
    $scope.onError = function(err){
        $ionicLoading.show({
            template: 'Could not load Lab Report Data. ' + err.data,
            duration: 3000
        });
        $scope.labCounts = [];
    }
    // By Default, load Details
    $scope.showDetails();

}])

.controller('dailyCancellationsReportCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('dailyActivityReportCtrl', ['$scope', '$filter','$stateParams', '$ionicLoading','DailyActivitySvc', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $filter, $stateParams, $ionicLoading, DailyActivitySvc) {
	$scope.dailyActivities = [];
    $scope.report = {};
    $scope.report.reportDate = new Date();

    // Called when the input filed value changes.
	$scope.dateChanged = function() {
        if ($scope.report.reportDate == null) {
            $scope.report.reportDate = new Date();
        }
        var rptDate = $filter('date')($scope.report.reportDate, 'MM-dd-yyyy');
        $ionicLoading.show({template:'Loading Activity Data'});
        $scope.dailyActivities = DailyActivitySvc.getData(rptDate,$scope.onSuccess, $scope.onError);
	}

    // Success Handler. Set the $scope with dailyActivities.
	$scope.onSuccess = function(resp){
        $scope.dailyActivities = resp.data.Activities;
        $ionicLoading.hide();
    }
    // Error Handler. Show an Alert message.
	$scope.onError = function(err){
        $ionicLoading.show({
            template: 'Could not load Activity Report Data. ' + err.data,
            duration: 3000
        });
        $scope.dailyActivities = [];
    }
    // By Default, load today's data on first load
    $scope.dateChanged();
}])


.controller('doctorConsultationsReportCtrl', ['$scope', '$filter','$stateParams', '$ionicLoading','DoctorConsultationsSvc',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $filter, $stateParams, $ionicLoading, DoctorConsultationsSvc) {
    $scope.consultationCounts = [];
    $scope.report = {};
    $scope.report.reportDate = new Date();

    // Called when the input filed value changes.
    $scope.dateChanged = function() {
        if ($scope.report.reportDate == null) {
            $scope.report.reportDate = new Date();
        }
        var rptDate = $filter('date')($scope.report.reportDate, 'MM-dd-yyyy');
        $ionicLoading.show({template:'Loading Doctor Consultations Data'});
        $scope.consultationCounts = DoctorConsultationsSvc.getData(rptDate, $scope.onSuccess, $scope.onError);
    }

    // Success Handler. Set the $scope with dailyActivities.
    $scope.onSuccess = function(resp){
        $scope.consultationCounts = resp.data.DoctorConsultationCount;
        $ionicLoading.hide();
    }
    // Error Handler. Show an Alert message.
    $scope.onError = function(err){
        $ionicLoading.show({
            template: 'Could not load Doctor Consultations Data. ' + err.data,
            duration: 3000
        });
        $scope.consultationCounts = [];
    }
    // By Default, load today's data on first load
    $scope.dateChanged();

}])

.controller('dashboardCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 