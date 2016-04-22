$(document).ready(function () {
	$(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
	});
	$('a[href*=#]').on('click', function(event){
    if (event.target.className == "left carousel-control" || event.target.className == "right carousel-control") {
    } else {
      event.preventDefault();
      $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    }
  });
  $(".proj-pic").hover(
    function() { $(this).addClass("Hover"); },
    function() { $(this).removeClass("Hover"); }
  );
});