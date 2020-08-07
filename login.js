$(document).ready(function () {

    $('.login a').click(function () {
       
 
       $('.login div').hide();
       $('.login div').removeClass('login-username login-password').slideDown(1000);
       $('.form').animate({height: '600px'}, 1000);
 
    });
 
 });

 
 