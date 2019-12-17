$(function(){
    //shopping list scripts after return is hit
    $('#js-shopping-list-form').submit(function(event) {
        //prevent Default actions
        event.preventDefault();

        //list entry object created
        const entry = $('#shopping-list-entry').val();

        //add item
        $('.shopping-list').append(
            `<li>
              <span class="shopping-item">${entry}</span>
              <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                  <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                  <span class="button-label">delete</span>
                </button>
              </div>
            </li>`);
      
            //clear the value for next time
            $('#shopping-list-entry').val('');
    });

    //removing the list item
    $('.shopping-list').on('click', '.shopping-item-delete', function(event){
        $(this).closest('li').remove();
    });

    //checking and unchecking items in list
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });
});



