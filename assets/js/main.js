$(document).ready(function(){

    var $clonlimin = $('.li-min-none').clone();
    var $clonlimax = $('.li-max-none').clone();

    $('btn').on('click',function(){
        alert( $clonlimax );
    })

    // $('.min-triger .li-container').prepend( $clonlimin );
    // $('.max-triger .li-container').prepend( $clonlimin );

    

});