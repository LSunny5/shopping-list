$(function(){
    

    //removing the list item
    $('.shopping-list').on('click', '.shopping-item-delete', function(e){
        $(this).closest('li').remove();
    });

});



