angular.module('Mean-Commerce').config(function ($urlRouterProvider, $stateProvider, $httpProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider

		.state('trade', {
		url: '/',
		templateUrl: '/views/trade.html'
	})

	.state('snapshot', {
		url: '/snapshot',
		templateUrl: '/views/snapshot.html'
	})

	.state('holdings', {
		url: '/holdings',
		templateUrl: '/views/holdings.html'
	})

	.state('research', {
		url: '/research',
		templateUrl: '/views/portfolio.html'

	})

	.state('portfolio', {
		url: '/portfolio',
		templateUrl: '/views/portfolio.html'
	})

	.state('account', {
		url: '/account',
		templateUrl: '/views/account.html'
	});


})
