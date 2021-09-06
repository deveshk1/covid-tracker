const URL = "https://covid19.mathdro.id/api";


let app = angular.module("MyApp", []);

app.controller("MyController", ($scope, $http) => {
  //this is controller

  $scope.title = "COVID TRACKER APP  -stay home stay safe";

  console.log("App Loaded");

  //calling API
  //keyword  then(success callback,failure callback)  -parameters
  $http.get(URL).then(
    (response) => {
      //success

      console.log(response.data);
      $scope.all_data = response.data;
    },
    (error) => {
      //error
      console.log(error);
    }
  );

  //get country data
  $scope.get_country_data = () => {
    let country = $scope.country;

    if (country == "") {
      $scope.country_data = undefined;
      return;
    }

    $http.get(`${URL}/countries/${country}`).then(
      (response) => {
        //success
   
        $scope.getFlag();
        $scope.country_data = response.data;
      },
      (error) => {
        //error
        console.log(error);
      }
    );
  };

  $scope.getFlag =()=>{

       $http.get(`https://restcountries.eu/rest/v2/name/${$scope.country}`)
      .then((response)=>{
     
          $scope.code = response.data[0];
          console.log($scope.code );
      },(error)=>{})

      
    
      
  };


});
