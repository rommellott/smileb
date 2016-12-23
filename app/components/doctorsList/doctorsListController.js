(function() {
	'use strict';

	function DoctorsListCtrl($scope, $state, $http) {
		var viewModel = this;
		viewModel.doctors = [
            {
                name : 'Dr. Rommel Lott',
                specialization : 'Periodontia',
                score : '4.3'
            },
            {
                name : 'Dr. Lucas Coelho',
                specialization : 'Ortodontia',
                score : '4.6'
            }
        ];
	}

	angular.module('app')
		.controller('DoctorsListCtrl', [
			'$scope', '$state', '$http',
			DoctorsListCtrl
		]);
})();
