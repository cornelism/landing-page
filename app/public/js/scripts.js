$(document).ready(function(e){
	$(".toggler").click(function(){
		$('.panel-collapse.in').each(function(){
			$(this).removeClass('in').addClass("collapse");
		});
		$('.toggler').each(function(){
			$(this).closest(".topic").removeClass('active');
		});
		$(this).closest(".topic").addClass("active");
	});
});