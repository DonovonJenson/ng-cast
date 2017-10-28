angular.module('video-player')



.component('search', {
  bindings: {
    searchbuttonclick: '<'
  },
  controller: function () {
    //this.currentSearch = 'DONO!!!';
    this.clear = function() {
      this.currentSearch = '';
      console.log('clicked');
    };
  },
  templateUrl: 'src/templates/search.html'
});
