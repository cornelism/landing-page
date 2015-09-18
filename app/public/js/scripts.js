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



/*var handler = function(e)
{
    e = e || window.event;
    var target = e.target || e.srcElement;
    if (target.tagName.toLowerCase() === 'a')
    {
        if (!e.preventDefault)
        {//IE quirks
            e.returnValue = false;
            e.cancelBubble = true;
        }
        e.preventDefault();
        e.stopPropagation();
    }
};
if (window.addEventListener)
    window.addEventListener('click', handler, false);
else
    window.attachEvent('onclick', handler);*/