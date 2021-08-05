alert ("Hola")
var etiquetas = document.createElement("h1");
var contenido = document.createTextNode("Caulher");
var contenido2 = document.createTextNode("Servicios Integrales");
etiquetas.appendChild.contenido;

// Intro carousel
var introCarousel = $(".carousel");
var introCarouselIndicators = $(".carousel-indicators");
introCarousel.find(".carousel-inner").children(".carousel-item").each(function(index) {
  (index === 0) ?
  introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "' class='active'></li>") :
  introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "'></li>");

  $(this).css("background-image", "url('" + $(this).children('.carousel-background').children('img').attr('src') +"')");
  $(this).children('.carousel-background').remove();
});

$(".carousel").swipe({
  swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
    if (direction == 'left') $(this).carousel('next');
    if (direction == 'right') $(this).carousel('prev');
  },
  allowPageScroll:"vertical"
});

// Skills section
$('#skills').waypoint(function() {
  $('.progress .progress-bar').each(function() {
    $(this).css("width", $(this).attr("aria-valuenow") + '%');
  });
}, { offset: '80%'} );

// jQuery counterUp (used in Facts section)
$('[data-toggle="counter-up"]').counterUp({
  delay: 10,
  time: 1000
});

// Porfolio isotope and filter
var portfolioIsotope = $('.portfolio-container').isotope({
  itemSelector: '.portfolio-item',
  layoutMode: 'fitRows'
});

$('#portfolio-flters li').on( 'click', function() {
  $("#portfolio-flters li").removeClass('filter-active');
  $(this).addClass('filter-active');

  portfolioIsotope.isotope({ filter: $(this).data('filter') });
});

// Clients carousel (uses the Owl Carousel library)
$(".clients-carousel").owlCarousel({
  autoplay: true,
  dots: true,
  loop: true,
  responsive: { 0: { items: 2 }, 768: { items: 4 }, 900: { items: 6 }
  }
});

// SLIDER 
$(".testimonials-carousel").owlCarousel({
  autoplay: true,
  dots: true,
  loop: true,
  items: 1
});







        






//window.status


//(function detectSO(){}
//var osName = "Desconocido";
//if(navigator.userAgent.indexOf("Win") !=1){
  //  osName = "Windows";
//}
//if(navigator.userAgent.indexOf("Android") !=1){
  //  osName = "Android";
//}
  //  if (osName == "Windows"){
    //    window.location
    //}
    //else{  
      //   alert("No tenemos una web");
    //} 