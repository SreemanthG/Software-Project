var loginButton = $(".login-btn");
var signUpButton = $(".sign-up-btn");
var login = $(".login");
var signUP = $(".sign-up");
var loginBox = $(".login-box");

loginButton.click(function () {
  login.fadeOut();
  signUP.fadeOut();
  loginBox.removeClass("container");
  loginBox.fadeIn();
});
