function toDaily() {
   	$("#dailyOverview").show();
	$("#monthlyOverview").hide();
	$("#periodOverview").hide();
	$("#daily").addClass('activeOverview');   
	$("#monthly").removeClass('activeOverview');
	$("#periodly").removeClass('activeOverview');
	$("#budget-tabs").find('li').css("border-bottom", "none");
	$("a.activeOverview").parents('li').css("border-bottom", "4px solid #344E5B");
 };

 function toMonthly() {
   	$("#dailyOverview").hide();
   	$("#monthlyOverview").show();
   	$("#periodOverview").hide();
   	$("#daily").removeClass('activeOverview');   
	$("#monthly").addClass('activeOverview');
	$("#periodly").removeClass('activeOverview');
	$("#budget-tabs").find('li').css("border-bottom", "none");
	$("a.activeOverview").parents('li').css("border-bottom", "4px solid #344E5B");
 };

 function toPeriod() {
   	$("#dailyOverview").hide();
   	$("#monthlyOverview").hide();
   	$("#periodOverview").show();
   	$("#daily").removeClass('activeOverview');   
	$("#monthly").removeClass('activeOverview');
	$("#periodly").addClass('activeOverview');
	$("#budget-tabs").find('li').css("border-bottom", "none");
	$("a.activeOverview").parents('li').css("border-bottom", "4px solid #344E5B");
 };

$(function() {
	$("#dailyOverview").on("swipeleft",toMonthly);
	$("#monthlyOverview").on("swipeleft",toPeriod);
	$("#periodOverview").on("swiperight",toMonthly);
	$("#monthlyOverview").on("swiperight",toDaily);
	$("a.activeOverview").parents('li').css("border-bottom", "4px solid #344E5B");
});

// change color of the navbar elements on click

$(function() {  
$('.navlink').click(function(){
	$('.navlink').removeClass('activeSite');
	$('.page').removeClass('activePage');
    $(this).addClass('activeSite');
    $(this.hash).addClass('activePage');
  });
});

// functions executed on loading of the Site

$( document ).on( "mobileinit", function() {
	// hides the loading message
	// $.mobile.loadingMessage = false;
});