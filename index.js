$(function(){
    //shopping list scripts after return is hit
    $('#js-shopping-list-form').submit(function(e) {
 
        
      
    });

    //removing the list item
    $('.shopping-list').on('click', '.shopping-item-delete', function(e){
        $(this).closest('li').remove();
    });

    //checking and unchecking items in list
    $('.shopping-list').on('click', '.shopping-item-toggle', function(e) {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });
});



