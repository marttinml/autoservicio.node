/*global angular*/
(function () {

    var router = function ($routeProvider, $locationProvider) {

        var baseUrl = 'app/modules/';

         // passcode
         $routeProvider.when('/passcode', {
            templateUrl: baseUrl + 'passcode/views/passcode.view.html',
            controller: 'PasscodeController'
        });
        // passcode
        $routeProvider.when('/recuperar-passcode', {
            templateUrl: baseUrl + 'recuperar-passcode/views/recuperar-passcode.view.html',
            controller: 'RecuperarPasscodeController'
        });


        // beneficios token
        $routeProvider.when('/beneficios/', {
            templateUrl: baseUrl + 'beneficios/views/beneficios.view.html',
            controller: 'BeneficiosController'
        });
        // beneficios token + sesion
        $routeProvider.when('/beneficios/:sesion', {
            templateUrl: baseUrl + 'beneficios/views/beneficios.view.html',
            controller: 'BeneficiosController'
        });
        $routeProvider.when('/beneficios/:sesion/:color', {
            templateUrl: baseUrl + 'beneficios/views/beneficios.view.html',
            controller: 'BeneficiosController'
        });

        // $locationProvider.html5Mode(true);
    };

    router.$inject = ['$routeProvider', '$locationProvider'];
    angular.module('app').config(router);

})();