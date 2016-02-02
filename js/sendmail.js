$(document).ready(function(){
	$(".send-btn").on('click', function(){
		var name = $("#name").val();
		var org = $("#org").val();
		var email = $("#email").val();
		var content = $("#comments").val();

		if(name == ""){
			window.alert("Please provide a name before proceeding");
		}else if( isEmail(email) == false){
			window.alert("Please provide a valid email before proceeding");
		} else{
			var subject = "Greetings from " + name;
			if(org != ""){
				subject = subject + " at " + org;
			}
			var contentString = content + "\nFrom: " + name + "\nEmail: " + email;
			contentString = contentString.replace(/\r?\n/g, "%0D%0A");
			window.location.href = "mailto:motorassistiveglove@gmail.com?subject=" + subject + "&body=" + contentString;
		}		
	});
});

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}