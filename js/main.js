$(document).ready(function(){
    $('.src-about').click(function(){
       $('html, body').animate({scrollTop:$('#about').position().top}, 2000);
    });
    $('.src-services').click(function(){
       $('html, body').animate({scrollTop:$('#services').position().top}, 2000);
    });
    $('.src-portfolio').click(function(){
       $('html, body').animate({scrollTop:$('#portfolio').position().top}, 2000);
    });
    $('.src-contact').click(function(){
       $('html, body').animate({scrollTop:$('#contact').position().top}, 2000);
    });
    $('.arrow-down').click(function(){
       $('html, body').animate({scrollTop:$('#about').position().top}, 2000);
    });
});