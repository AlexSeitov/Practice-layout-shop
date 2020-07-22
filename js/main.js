$(function () {
    // slider banner
    
    $(".banner-section__slider").slick({
        dots: true,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/arrow-left.svg" alt="arrow left"></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/arrow-right.svg" alt="arrow right"></button>',
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
});
