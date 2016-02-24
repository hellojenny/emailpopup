$(window).load(function() {

	var delay = 500; // milliseconds
	var cookie_expire = 0; // days (when to show visitor the popup again)

	//only show popup if the user doesn't have a "hide" cookie set
	if($.cookie('hide_popup') != "1")
	{
		$("#popup").delay(delay).fadeIn("fast", function(){

			$("#popup-signup").load("popup-content.php", function(){
				$("#popup-signup").fadeIn("fast", function(){

				});
			});
		});

		//close popup function
		$("#closepopup").click(function() {

			//hide popup
			$("#popup, #popup-signup").fadeOut("fast");

			//set the popup to not show again for the set period
			$.cookie('hide_popup', '1', { expires: cookie_expire, path: '/' });
		});

		//close popup function
		$("#popup").click(function() {

			//hide popup
			$("#popup, #popup-signup").fadeOut("fast");
		});
	}
});