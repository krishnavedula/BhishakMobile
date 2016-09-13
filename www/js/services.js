angular.module('BhishakReports.services', [])
.constant("NETWORK", 
	{
		//"BASE_URL", "http://10.10.90.52/HIMSReportServices")
		// Work-around for CORS Proxy
		"BASE_URL":"http://localhost:1337/10.10.90.52/HIMSReportServices"
	}
)
.factory('BlankFactory', [function(){

}])

.service('DailyActivitySvc', ['$http', 'NETWORK', function($http, NETWORK){
    this.getData = function(actDate,onSuccess,onError) {
    	//var dailyActivityUrl =  NETWORK.BASE_URL + '/DailyActivityDetails.asmx/DailyActivityDetailsReport?date=' + actDate;
    	var dailyActivityUrl = '/js/activity-data.json'
    	$http.get(dailyActivityUrl).then(
        onSuccess,onError);
    }
}])

.service('LabTestsDataSvc', ['$http', 'NETWORK', function($http, NETWORK){
    this.getData = function(actDate,onSuccess,onError) {
    	var labCountsUrl =  NETWORK.BASE_URL + '/DailyActivityDetails.asmx/LabTestCountReport?date=' + actDate;
    	//var labCountsUrl = '/js/lab-counts.json'
    	$http.get(labCountsUrl).then(
        onSuccess,onError);
    }
    this.getDetails = function(actDate,labId, onSuccess, onError) {
    	var labDetailsUrl =  NETWORK.BASE_URL + '/DailyActivityDetails.asmx/LabTestdetailsReport?date=' + actDate;
    	var labDetailsUrl = labDetailsUrl + "&testId=" + labId;
    	//var labCountsUrl = '/js/lab-details.json'
    	//http://10.10.90.52/HIMSReportServices/DailyActivityDetails.asmx/LabTestdetailsReport?date=09-10-2016&testId=1086
    	$http.get(labDetailsUrl).then(
        onSuccess,onError);
    }
}])

.service('DoctorConsultationsSvc', ['$http', 'NETWORK', function($http, NETWORK){
    this.getData = function(actDate,onSuccess,onError) {
    	var doctorConsultationUrl =  NETWORK.BASE_URL + '/DailyActivityDetails.asmx/DoctorConsultaionCountReport?date=' + actDate;
    	//var doctorConsultationUrl = '/js/lab-counts.json'
    	$http.get(doctorConsultationUrl).then(
        onSuccess,onError);
    }
}])

.service('LoginSvc', ['$http', 'NETWORK', function($http, NETWORK){
    this.authenticate = function(userId, password,onSuccess,onError) {
    	var authenticateURL =  NETWORK.BASE_URL + '/DailyActivityDetails.asmx/LoginAuthentication';
    	var authenticateURL = authenticateURL + "?Username=" + userId + "&Password=" + password;
    	$http.get(authenticateURL).then(onSuccess,onError);
    	// $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    
    	// $http({
    	// 	url: authenticateURL,
    	// 	data: {"Username":userId, "Password":password},
    	// 	method:'POST'
    	// }).then(onSuccess,onError);
    }
}])

.service('BlankService', [function(){

}]);