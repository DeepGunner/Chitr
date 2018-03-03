$(function () {
    $(".miupload").click(function(){
        $(".modal").fadeIn()
    })

    $(".close").click(function(){
        $(".modal").fadeOut();
    })
    
    $('.modal').click(function(){
        $('.modal, .inside').fadeOut();
       
   })                                            
   $('.modal-content').click(function(e){
      e.stopPropagation();
   })                                            
   

});

