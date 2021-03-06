$(document).ready(function() {

    $(window).scroll(function() {
        if ($(window).scrollTop() > 0) {
            $('.header').addClass('header--scroll');
        }
        else {
            $('.header').removeClass('header--scroll');
        }
    });

    $('.header-main__menu-button').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('header-main__menu-button--active');
        $('.header-top').toggleClass('header-top--active');
    });

    // header catalog
    $('.header-catalog__category').mouseover(function(e) {
        $('.header-catalog__item--active').removeClass('header-catalog__item--active');
        $(this).parent().addClass('header-catalog__item--active');
    });
    $('.header-catalog__category').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('.header-catalog__item--active').removeClass('header-catalog__item--active');
        $(this).parent().addClass('header-catalog__item--active');
    });

    $('.header-bottom__catalog-button').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('.header-catalog').slideToggle();
    });

    $('body').click(function(e) {
        $('.header-catalog__item--active').removeClass('header-catalog__item--active');
        $('.header-catalog').slideUp();
    });

    // category

    $('.category-filter__title').click(function(e) {
        $(this).toggleClass('category-filter__title--active');
    });

    $('.category-filter-block__more').click(function(e) {
        $(this).hide();
        $(this).parents('.category-filter-block__content').find('.category-checkbox--hidden').removeClass('category-checkbox--hidden');
    });

    $('.category-filter-block__name').click(function(e) {
        $(this).parents('.category-filter-block').toggleClass('category-filter-block--opened');
        $(this).parents('.category-filter-block').find('.category-filter-block__content').slideToggle();
    });

    $('.category-filter-block__clear').click(function(e) {
        $(this).parents('.category-filter-block').find('.category-checkbox input').prop('checked', false);

        var priceRange = $(this).parents('.category-filter-block').find('#priceRange');
        if (priceRange) {
            priceRange.slider('values', [ parseInt($('#priceRange').attr('data-min')), parseInt($('#priceRange').attr('data-max')) ] );
        }

        var displayRange = $(this).parents('.category-filter-block').find('#displayRange');
        if (displayRange) {
            displayRange.slider('values', [ parseInt($('#displayRange').attr('data-min')), parseInt($('#displayRange').attr('data-max')) ] );
        }

        $(this).parents('.category-filter-block').find('.category-filter-block__color--selected').removeClass('category-filter-block__color--selected');
    });

    $('.category-filter-block__color').click(function(e) {
        $(this).toggleClass('category-filter-block__color--selected');
    });

    $('#clearLeftFilter').click(function(e) {
        e.preventDefault();
        $('.category-checkbox input').prop('checked', false);

        $('#priceRange').slider('values', [ parseInt($('#priceRange').attr('data-min')), parseInt($('#priceRange').attr('data-max')) ] );

        $('#displayRange').slider('values', [ parseInt($('#displayRange').attr('data-min')), parseInt($('#displayRange').attr('data-max')) ] );

        $('.category-filter-block__color--selected').removeClass('category-filter-block__color--selected');
    });

    $('.category-top-sorting__item').click(function(e) {
        if ($(this).hasClass('category-top-sorting__item--active')) {
            if ($(this).hasClass('category-top-sorting__item--down')) {
                $(this).removeClass('category-top-sorting__item--down').addClass('category-top-sorting__item--up');
            }
            else {
                $(this).removeClass('category-top-sorting__item--active category-top-sorting__item--down category-top-sorting__item--up');
            }
        }
        else {
            $('.category-top-sorting__item--active').removeClass('category-top-sorting__item--active category-top-sorting__item--down category-top-sorting__item--up');
            $(this).addClass('category-top-sorting__item--active category-top-sorting__item--down');
        }
    });

    $('.category-top__clear').click(function(e) {
        e.preventDefault();
        $('.category-top-sorting__item').removeClass('category-top-sorting__item--active').removeClass('category-top-sorting__item--up').removeClass('category-top-sorting__item--down');
        $('.category-top__search input').val('');
    });

    // item

    $('.item-block__characters-more').click(function(e) {
        e.preventDefault();
        $(this).hide();
        $('.item-block__characters-item--hidden').removeClass('item-block__characters-item--hidden');
    });

    $('.modal__close').click(function(e) {
        e.preventDefault();
        $(this).parents('.modal').removeClass('modal--opened');
    });

    $('.modal').click(function(e) {
        e.preventDefault();
        $(this).removeClass('modal--opened');
    });

    $('.modal__content').click(function(e) {
        e.stopPropagation();
    });

    $('.open-modal').click(function(e) {
        e.preventDefault();
        var modal = $(this).attr('data-modal');
        $('.modal--opened').removeClass('modal--opened');
        $(modal).addClass('modal--opened');
    });

    $('.item-block__buy').click(function(e) {
        e.preventDefault();
        $(this).find('span').text('Товар в корзине');
    });

    // login

    $('.login__password-show').click(function(e) {
        e.preventDefault();
        if ($(this).hasClass('login__password-show--active')) {
            $(this).removeClass('login__password-show--active');
            $(this).parent().find('input').attr('type', 'password');
        }
        else {
            $(this).addClass('login__password-show--active');
            $(this).parent().find('input').attr('type', 'text');
        }
    });

    $('.tel-input').inputmask({
        "mask": "+7 (999) 999-99-99"
        , "placeholder": "_"
        , showMaskOnHover: false
        , showMaskOnFocus: true
    });

    // map

    if ($('div').is('#map')) {
        ymaps.ready(init);
    }

    // lk

    $('.lk-menu__item--profile').click(function(e) {
        if ($(window).width() < 768) {
            $('.lk-menu__links').slideToggle();
        }
    });

    $('.fancybox').fancybox();

    $('.item-similar__flex').slick({
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    // price range

    $('#priceRange').slider({
        animate: "fast",
        range: true,
        min: parseInt($('#priceRange').attr('data-min')),
        max: parseInt($('#priceRange').attr('data-max')),
        step: 100,
        values: [$('#priceFrom').val(), $('#priceTo').val()],
        slide: function( event, ui ) {
            $('#priceFrom').val(ui.values[0]);
            $('#priceTo').val(ui.values[1]);
        },
        change: function( event, ui ) {
            $('#priceFrom').val(ui.values[0]);
            $('#priceTo').val(ui.values[1]);
        }
    });

    $('#priceFrom').change(function(e) {
        $('#priceRange').slider('values', [ $('#priceFrom').val(), $('#priceTo').val() ] );
    });

    $('#priceTo').change(function(e) {
        $('#priceRange').slider('values', [ $('#priceFrom').val(), $('#priceTo').val() ] );
    });

    // display range

    $('#displayRange').slider({
        animate: "fast",
        range: true,
        min: parseInt($('#displayRange').attr('data-min')),
        max: parseInt($('#displayRange').attr('data-max')),
        step: 1,
        values: [$('#displayFrom').val(), $('#displayTo').val()],
        slide: function( event, ui ) {
            $('#displayFrom').val(ui.values[0]);
            $('#displayTo').val(ui.values[1]);
        },
        change: function( event, ui ) {
            $('#displayFrom').val(ui.values[0]);
            $('#displayTo').val(ui.values[1]);
        }
    });

    $('#displayFrom').change(function(e) {
        $('#displayRange').slider('values', [ $('#displayFrom').val(), $('#displayTo').val() ] );
    });

    $('#displayTo').change(function(e) {
        $('#displayRange').slider('values', [ $('#displayFrom').val(), $('#displayTo').val() ] );
    });
});

function init() {


    var myMap = new ymaps.Map("map", {
        center: [55.755814, 37.617635]
        , zoom: 10
        , controls: ['zoomControl']
    });


    myMap.behaviors.disable('multiTouch');
    myMap.behaviors.disable('scrollZoom');
    var myGeoObjects = [];
    var flag_for_center = false;



    $(".shops-item").each(function (e) {
        var latt = $(this).attr("data-lat");
        var longg = $(this).attr("data-lon");
        if (flag_for_center) {
            myMap.setCenter([latt, longg], 16, {
                checkZoomRange: false
            });
            flag_for_center = false;
        }
        myGeoObjects[e] = new ymaps.Placemark([latt, longg], {
            clusterCaption: 'Заголовок'
        }, /*{
            iconLayout: 'default#image'
            , iconImageHref: '/img/mark-map.png'
            , iconImageSize: [113, 122]
            , iconImageOffset: [-53.5, -85]
        }*/);
    });


    var clusterIcons = [{
        href: 'img/marker-1.png'
        , size: [76, 70]
        , offset: [0, 0]
    }];


    var clusterer = new ymaps.Clusterer({
        clusterDisableClickZoom: false
        , clusterOpenBalloonOnClick: false
        , clusterBalloonPanelMaxMapArea: 0
        , clusterBalloonContentLayoutWidth: 300
        , clusterBalloonContentLayoutHeight: 200
        , clusterBalloonPagerSize: 2
        , clusterBalloonPagerVisible: false
    });


    clusterer.add(myGeoObjects);
    myMap.geoObjects.add(clusterer);


    $('.shops-item').click(function(){
        $('.shops-item--active').removeClass('shops-item--active');
        $(this).addClass('shops-item--active');
        myMap.setCenter(
            [parseFloat($(this).attr("data-lat"))
                , parseFloat($(this).attr("data-lon"))], 16, {
                checkZoomRange: false
            });

        if ($(window).width() < 992) {
            $("html, body").animate({scrollTop: "200px"});
        }
    });



}

