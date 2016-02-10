(function(){
  "use strict";

  var Moosipurk = function(){
    //SINGLETON PATTERN
    if(Moosipurk.instance){
      return Moosipurk.instance;
    }
    Moosipurk.instance = this;

      console.log(this);

      this.click_count = 0;
      this.init();
  };
  //K6ik funktsioonid tulevad siia sisse
  Moosipurk.prototype = {
    init: function(){
      console.log('rakendus käivitus');
      //siia tuleb esialgne loogika
      //hakka kuulama hiireklõpse
      this.bindMouseEvents();
    },
    bindMouseEvents: function(){
      document.querySelector('.add-new-jar').addEventListener('click', this.addNewClick.bind(this));

    },
    addNewClick: function(event){
      //console.log(event);
      this.click_count++;
      console.log(this.click_count);
    }
  };

  window.onload = function(){
    var app = new Moosipurk();
  };

})();
