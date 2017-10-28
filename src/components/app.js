angular.module('video-player')

.component('app', {
  controller: function(youTube, $scope, $http) {
    //console.log(youTube.httpCall);
    this.$onInit = function () {
      this.searchClick('Africa');
    };
    // this.videoData = window.exampleVideoData;
    // this.videoToPlay = this.videoData[0];
    this.videoData;
    this.videoToPlay;
    //console.log('VIDEODATA = ', this.videoData);
    this.currentSearch = '';
    this.titleClick = (dataToPlay) => {
      // console.log('clickargument = ', dataToPlay);
      this.videoToPlay = dataToPlay;
    };

    // //BANDAID USING CONTEXT TO GET VAL IN APP
    // context = this;
    // this.currentSearch = '';
    // this.searchClick = function() {
    //   console.log('THISCURRENTSEARCH = ', this.currentSearch);
    //   console.log('CONTEXTCURRENTSEARCH = ', context.currentSearch);
    //   console.log('THIS = ', this);
    //   console.log('CONTEXT = ', context);
    //   context.currentSearch = this.currentSearch;
    // };

    // //SOLUTION ES5
    // this.searchClick = function(findThisTerm) {
    //   this.currentSearch = findThisTerm;
    //   console.log('THISCURRENTSEARCH = ', this.currentSearch);
    //   console.log('THIS = ', this);
    // }.bind(this);

    //SOLUTION ES6
    this.searchClick = (findThisTerm, event = {which: 13}) => {
      // //FOR RETURN OR CLICK SEARCH
      //if (event.type === 'click' || event.which === 13) {
      //FOR REAL TIME SEARCH
      if (event) {
        //console.log('EVENT = ', event);
        this.currentSearch = findThisTerm;
        //console.log('THISCURRENTSEARCH = ', this.currentSearch);
        //console.log('YOU ARE HERE = ', this);
        //Fixed binding by using ES6 ++ made sure videoToPlay is updated as well.
        var cb = (info) => { this.videoData = info; this.videoToPlay = this.videoData[0]; };
        var options = {q: findThisTerm,
          part: 'snippet',
          maxResults: 5,
          key: window.YOUTUBE_API_KEY,
          videoEmbeddable: true,
          type: 'video' 
        };
        youTube.httpCall(options, cb);
        //console.log('THIS = ', this);
      }
    };
  },

  templateUrl: 'src/templates/app.html'
});
