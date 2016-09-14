angular.module('BhishakReports.services', [])
.constant("NETWORK", 
	{
		//"BASE_URL", "http://10.10.90.52/HIMSReportServices")
		// Work-around for CORS Proxy
        //"CORS_PROXY": "http://",
        "CORS_PROXY":"http://localhost:1337/",
		"BASE_URL":"10.10.90.52/HIMSReportServices/DailyActivityDetails.asmx"
	}
)
.factory('BlankFactory', [function(){

}])

.service('DailyActivitySvc', ['$http', 'NETWORK', function($http, NETWORK){
    this.getData = function(actDate,onSuccess,onError) {
    	var dailyActivityUrl =  NETWORK.CORS_PROXY + NETWORK.BASE_URL + '/DailyActivityDetailsReport?date=' + actDate;
    	//var dailyActivityUrl = '/js/activity-data.json'
    	$http.get(dailyActivityUrl).then(onSuccess,onError);
    }
}])

.service('LabTestsDataSvc', ['$http', 'NETWORK', function($http, NETWORK){
    this.getData = function(actDate,onSuccess,onError) {
    	var labCountsUrl =  NETWORK.CORS_PROXY + NETWORK.BASE_URL + '/LabTestCountReport?date=' + actDate;
    	//var labCountsUrl = '/js/lab-counts.json'
    	$http.get(labCountsUrl).then(onSuccess,onError);
    }
    this.getDetails = function(actDate,labId, onSuccess, onError) {
    	var labDetailsUrl =  NETWORK.CORS_PROXY + NETWORK.BASE_URL + '/LabTestdetailsReport?date=' + actDate;
    	labDetailsUrl = labDetailsUrl + "&testId=" + labId;
    	//var labDetailsUrl = '/js/lab-details.json'
        
    	$http.get(labDetailsUrl).then(onSuccess,onError);
    }
}])

.service('DoctorConsultationsSvc', ['$http', 'NETWORK', function($http, NETWORK){
    this.getData = function(actDate,onSuccess,onError) {
    	var doctorConsultationUrl =  NETWORK.CORS_PROXY + NETWORK.BASE_URL + '/DoctorConsultaionCountReport?date=' + actDate;
    	//var doctorConsultationUrl = '/js/lab-counts.json'
    	$http.get(doctorConsultationUrl).then(onSuccess,onError);
    }
}])

.service('LoginSvc', ['$http', 'NETWORK', function($http, NETWORK){
    this.authenticate = function(userId, password,onSuccess,onError) {
    	var authenticateURL =  NETWORK.CORS_PROXY + NETWORK.BASE_URL + '/LoginAuthentication';
    	authenticateURL = authenticateURL + "?Username=" + userId + "&Password=" + password;
        //var authenticateURL = "js/authenticate.json";
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