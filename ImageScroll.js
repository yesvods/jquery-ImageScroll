// Author: Jogis
// Website: http://stephenkorecky.com
// Plugin Website: http://github.com/skorecky/Add-Clear
(function($){
  $.fn.imageScroll = function(opts){
    var defaults = {
      orientation:"left",
      speed:600,
      interval:1500,
      hoverPause:true,
      callback:function(){ return false;}
    }
    var options = $.extend(defaults, opts);
    var _this = this;
    function scroll() {
      var $firstLi = $(_this).children().first();
      var $lastLi = $(_this).children().last();
      switch(options.orientation){
        case "left":
        case "top":
          $firstLi.animate({       
            "margin-left":"-"+$firstLi.outerWidth()+"px"
          },options.speed,function(){
            $firstLi.css("margin-left","0px");
            $lastLi.after($firstLi);              
          });
          break;
        case "right":
        case "bottom":
          $firstLi.animate({       
            "margin-left":$firstLi.outerWidth()+"px"
          },options.speed,function(){
            $firstLi.css("margin-left","0px");
            $firstLi.before($lastLi);
          });
          break;
      }
      //binding this to callback action scope link which make coding native
      options.callback.call(_this);
    }
    var scrollInterval = setInterval(scroll,options.interval);
    //setting the hover motion
    if(options.hoverPause){
      $(this).hover(function(){
        clearInterval(scrollInterval);
      },function(){
        scrollInterval = setInterval(scroll,options.interval);
      });
    }
    return this;
  }
})(jQuery);