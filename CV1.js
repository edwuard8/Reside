 var app = angular.module("CV1",["ngRoute"]);
app.config(function($routeProvider){
$routeProvider. when("/prueb",{
  templateUrl: "prueb.htm"
}).when("/requisitos",{
  templateUrl: "requisitos.html"
}).when("/prue",{
  templateUrl : "prue.htm"
})
});