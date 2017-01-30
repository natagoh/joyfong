// Disable Google Maps scrolling thanks to 
// http://stackoverflow.com/questions/24768772/prevent-a-google-maps-iframe-from-capturing-the-mouses-scrolling-wheel-behavior
$(document).ready(function () {
    
    // you want to enable the pointer events only on click;
    $('.map-iframe').addClass('scrolloff'); // set the pointer events to none on doc ready
    $('#map').on('click', function () {
        $('.map-iframe').removeClass('scrolloff'); // set the pointer events true on click
    });

    // you want to disable pointer events when the mouse leave the canvas area;
    $(".map-iframe").mouseleave(function () {
        $('.map-iframe').addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
    });
});
