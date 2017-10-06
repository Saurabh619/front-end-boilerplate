(function() {
  'use strict';

  angular
    .module('ngStarters')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout) {
    var vm = this;

    vm.awesomeThings = [];
  }
})();
