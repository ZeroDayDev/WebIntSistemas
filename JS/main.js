$(document).ready(function(){

    $('#header').load('/header.html')

    $('#footer').load('/footer.html')

});

$(function(){

    $("Body").hide().fadeIn(600)

    //Funciones dinamicas del aspecto web

    $(".Content").mouseenter(function () { 
        $(".Title").slideUp(300 , function(){

        })
    })

    $(".Content").mouseleave(function () { 
        $(".Title").slideDown(300, function(){
            
        })
    })



})
