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

});

