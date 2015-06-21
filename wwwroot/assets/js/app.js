angular.module('churras', []);

angular.module('churras').controller('Home', function ($scope, $sce, $http) {
    $scope.carregando = false;
    $scope.resultado = 0.0;
    $scope.QtdHomens = 0;
    $scope.QtdMulheres = 0;
    $scope.QtdCriancas = 0;

    // 450 g de carne para cada homem
    var mediaHomens = 0.450;
    // 300 g de carne para cada mulher
    var mediaMulheres = 0.350;
    // 150 g de carne para cada criança
    var mediaCriancas = 0.150;

    $scope.CalcularChurrasco = function(){
        $scope.resultado = (mediaHomens * $scope.QtdHomens) +
        (mediaMulheres * $scope.QtdMulheres) +
        (mediaCriancas * $scope.QtdCriancas);
    };
});

angular.module('churras').directive('numericOnly', function(){
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, modelCtrl) {

            modelCtrl.$parsers.push(function (inputValue) {
                var transformedInput = inputValue ? inputValue.replace(/[^\d.-]/g,'') : null;

                if (transformedInput!=inputValue) {
                    modelCtrl.$setViewValue(transformedInput);
                    modelCtrl.$render();
                }

                return transformedInput;
            });
        }
    };
});

