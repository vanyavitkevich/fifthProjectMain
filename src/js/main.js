$(window).load(function() {
  // Header Slider

  jQuery(function() {
    var options = {
      speed: 1000,
      is_anime: false
    };

    var isIE = /*@cc_on!@*/ false || !!document.documentMode,
      isEdge = !isIE && !!window.StyleMedia,
      isMS = !(isIE || isEdge);

    if (jQuery('.header__slider-wrapper').length !== 0) {
      var headerSlider = jQuery('.header__slider-wrapper');

      headerSlider.slick({
        arrows: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 700,
        autoplay: false,
        autoplaySpeed: 5000,
        cssEase: 'linear',
        useTransform: isMS,
        useCSS: isMS,
        pauseOnHover: false,
        focusOnSelect: true,
        pauseOnDotsHover: false,
        pauseOnFocus: false,
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              arrows: false,
            }
          }
        ],
        responsive: [
          {
            breakpoint: 600,
            settings: {
              dots: false,
            }
          }
        ]
      });

      // headerSlider
      //   .find('.slick-arrow')
      //   .html('<div class="round-btn-bg"></div>');
    }
  });

  jQuery(function() {
    var options = {
      speed: 1000,
      is_anime: false
    };

    var isIE = /*@cc_on!@*/ false || !!document.documentMode,
      isEdge = !isIE && !!window.StyleMedia,
      isMS = !(isIE || isEdge);

    if (jQuery('.post__slider-wrapper').length !== 0) {
      var headerSlider = jQuery('.post__slider-wrapper');

      headerSlider.slick({
        arrows: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 700,
        autoplay: false,
        autoplaySpeed: 5000,
        cssEase: 'linear',
        useTransform: isMS,
        useCSS: isMS,
        pauseOnHover: false,
        focusOnSelect: true,
        pauseOnDotsHover: false,
        pauseOnFocus: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              pauseOnHover: false,
              pauseOnFocus: false,
              arrows: false
            }
          }
        ]
      });

      // headerSlider
      //   .find('.slick-arrow')
      //   .html('<div class="round-btn-bg"></div>');
    }
  });

  function deleteBtnClass(elem, className){
    for(var k = 0;k <= elem.length - 1;k++){
      elem[k].classList.remove(className)
    }
  }

  const btns = document.getElementById('project__btns')
  const btn = btns.getElementsByClassName('project-btn')

  for(var i = 0;i <= btn.length - 1;i++){
    btn[i].onclick = function(event){
      deleteBtnClass(btn, 'project-btn-active')
      event.target.classList.add('project-btn-active')
    }
  }
  
  
  const search = document.getElementById('menu-search')
  const label = document.createElement('LABEL')
  const input = document.createElement('INPUT')
  const body = document.getElementById('body')

  search.onclick = function(elem){
    elem.stopPropagation()
    search.appendChild(label)
    label.appendChild(input)
  }

  body.onclick = function(){
    label.removeChild(input)
    search.removeChild(label)
  }
});