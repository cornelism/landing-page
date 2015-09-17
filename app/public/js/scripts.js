$(document).ready(function(){
	$("#panel-control a").click(function(){
		$('.panel-collapse.in').each(function(){
			$(this).removeClass('in').addClass("collapse");
		});
	});
});