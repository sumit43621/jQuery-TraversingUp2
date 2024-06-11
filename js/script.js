// Parents Until

// $('span').parentsUntil('div').css({'border-color':'purple'})

$(document).ready(function($){
    $('span').closest('div').css("border", "20px solid black")
})