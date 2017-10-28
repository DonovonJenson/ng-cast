angular.module('video-player')



.component('search', {
  bindings: {
    searchButtonClick: '<'
  },
  controller: function () {
    //this.currentSearch = 'DONO!!!';
    this.clear = function() {
      this.currentSearch = '';
    };
  },
  templateUrl: 'src/templates/search.html'
});
