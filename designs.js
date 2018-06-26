'use strict'

// Select color input
// Select size input

let height, width, color;

// When size is submitted by the user, call makeGrid()

$('#sizePicker').submit(function (evt) {

    evt.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWidth').val();
    makeGrid(height, width);
    
})

function makeGrid(a, b) {
    
    $('tr').remove();

// Your code goes here!

   for (var i = 1; i <= a; i++) {
       $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
       for (var j = 1; j <= b; j++) {
            $('#table' + i).append('<td></td>');
       }
   }

   // Add colour to cell

   $('td').click(function addColor() {
        color = $('#colorPicker').val();

        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + color);
        }
   })

}