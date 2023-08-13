$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })
    
    $('#btn-cancelar').click(function(){
        $('form').slideUp();
    })
    
    $('form').on('submit', function(e){
        
        e.preventDefault();
        const enderecoIMG = $('#img-nova').val()
        const novoitem = $('<li style = "display: none"></li>');
        $(`<img src="${enderecoIMG}" />`).appendTo(novoitem);

        $(`<div class= "overlay-img-link">
            <a href="${enderecoIMG}" target= "_blank" title = "ver img">Ver img</a>
        </div>`).appendTo(novoitem);

        $(novoitem).appendTo('ul');
        $(novoitem).fadeIn(1000);
        $('#img-nova').val('')
    })
})


