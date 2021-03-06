'use strict';
var form = $('#form');
var button = $('#button');

button.on('click', function(passwordValidator) {
	passwordValidator.preventDefault();
	var input = $('#input');
	var error1 = $('#error1');
	var error2 = $('#error2');
	var error3 = $('#error3');
	var error4 = $('#error4');
	var error5 = $('#error5');
	var char = input.val();

	error1.hide();
	error2.hide();
	error3.hide();
	error4.hide();
	error5.hide();

	if(char === 'password' || char === 'PASSWORD') {
		window.location = 'http://theironyard.com';
	}

	if(char === '') {
		error5.html('Please enter a valid password.');
	}

	if(/^[a-z0-9!-/:-@[-`{-~]+$/i.test(char) && char.length >= 8) {
		error4.html('The password ' + char + ' is a very strong password').show();
	}

	if(/^[a-z0-9]+$/i.test(char) && char.length >= 8) {
		error3.html('The password ' + char + ' is a strong password.').show();
		error4.hide();
	}

	if(/^[a-z]+$/i.test(char) && char.length > 8) {
		error1.hide();
		error2.hide();
		error3.hide();
		error4.hide();
	}

	if(/^[!-/:-@[-`{-~0-9]+$/.test(char) && char.length > 0) {
		error1.hide();
		error2.hide();
		error3.hide();
		error4.hide();
	}

	if(char.length < 8 && $.isNumeric(char)) {
		error1.html('The password ' + char + ' is a very weak password.').show();
	}

	if(/^[!-/:-@[-`{-~a-z]+$/i.test(char) && char.length > 0) {
		error1.hide();
		error2.hide();
		error3.hide();
		error4.hide();
	}

	if(/^[a-z]+$/i.test(char) && char.length < 8) {
		error2.html('The password ' +  char + ' is a weak password.').show();
	}

	if(char.length > 8 && $.isNumeric(char)) {
		error1.hide();
		error2.hide();
		error3.hide();
		error4.hide();
	}

});