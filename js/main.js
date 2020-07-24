$(function () {
    // slider banner
    
    $(".banner-section__slider").slick({
        dots: true,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/arrow-left.svg" alt="arrow left"></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/arrow-right.svg" alt="arrow right"></button>',
        responsive: [
            {
              breakpoint: 969,
              settings: {
                arrows: false
              }
            }
          ]
    });

    // tabs

    $('.tab').on('click', function(e) {
        e.preventDefault();

        $($(this).siblings()).removeClass('tab--active');
        $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');

    });

    // favorite item

    $('.product-item__favorite').on('click', function() {
        $(this).toggleClass('product-item__favorite--active');
    });

    // slider products

    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="images/arrow-black-left.svg" alt="arrow left"></button>',
        nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="images/arrow-black-right.svg" alt="arrow right"></button>',
        responsive: [
            {
              breakpoint: 1301,
              settings: {
                arrows: false,
                dots: true

              }
            },
            {
                breakpoint: 1200,
                settings: {
                  arrows: false,
                  dots: true,
                  slidesToShow: 3
  
                }
              },
              {
                breakpoint: 870,
                settings: {
                  arrows: false,
                  dots: true,
                  slidesToShow: 2
                }
              },
              {
                breakpoint: 590,
                settings: {
                  arrows: false,
                  dots: true,
                  slidesToShow: 1
                }
              }
          ]
    });

    // formstyler

    $('.filter-style').styler();

    // drop down list

    $('.filter__item-drop, .filter-extra').on('click', function() {
        $(this).toggleClass('filter__item-drop--active');
        $(this).next().slideToggle('200');
    });

    // ionRangeSlide

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        grid: false,
        min: 100000,
        max: 500000,
    });

    $('.catalog__filter-btn-grid').on('click', function() {
        $(this).addClass('catalog__filter-buttons--active');
        $('.catalog__filter-btn-line').removeClass('catalog__filter-buttons--active');
        $('.product-item__wrapper').removeClass('product-item__wrapper--list');
    });

    $('.catalog__filter-btn-line').on('click', function() {
        $(this).addClass('catalog__filter-buttons--active');
        $('.catalog__filter-btn-grid').removeClass('catalog__filter-buttons--active');
        $('.product-item__wrapper').addClass('product-item__wrapper--list');
    });

    $(".rate-Yo").rateYo({
        starWidth: "23px",
        ratedFill: "#1c62cd",
        spacing   : "10px",
        normalFill: "#c4c4c4"
      });

    $('.menu__btn').on('click', function() {
        $('.menu-mobile').toggleClass('menu-mobile--active');
    });

    $('.footer__title-drop').on('click', function() {
        $(this).next().slideToggle();
        $(this).toggleClass('footer__title-drop--active');
    });
});
