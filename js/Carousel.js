(function() {

    /* --------------------

        Carousel

    -------------------- */
    var Carousel = function($){
        /* -----------------------
        *  使用する変数、関数を定義する
        ----------------------- */
      var _main = $('.Carousel__main'),
          _item = $('.Carousel__item'),
          _nextButton = $('.Carousel__arrow--next'), //次へボタン
          _prevButton = $('.Carousel__arrow--prev'), //前へボタン  _がつくとグローバル関数
          _itemWidth  = _item.width(),
          _move,
          _count,
          _clickEvent;

          _clickCount = 0;

          _main.css({
            'width': _itemWidth * _item.length
          });

        _move = function(){
        _main.animate({
             'left' : - (_itemWidth * _clickCount)
          }, 1000);
        };

        _count = function(){
          if(_clickCount == 0){
            _nextButton.show();
            _prevButton.hide();
        } else if(_clickCount >= _item.length -1){
            _prevButton.show();
            _nextButton.hide();
        } else {
            _nextButton.show();
            _prevButton.show();
        };
      };


       _clickEvent = function(){
         //次ヘボタンを押したら次に飛ばす
         _nextButton.click(function(){
           _clickCount = _clickCount + 1;
           _move();
           _count();
         });

         //前へボタンを押したら前に戻す。
         _prevButton.click(function(){
           _clickCount = _clickCount - 1;
           _move();
           _count();
         });
       };


       _count();
       _clickEvent();

     }
     (jQuery);

    Carousel();
})();
