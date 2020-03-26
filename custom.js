$(document).ready(function(){

    update_amounts();
    $('.qty').change(function() {
        update_amounts();
    });
});


function update_amounts()
{
    var sum = 0;
    var per = 0;
    $('#myTable > tbody  > tr').each(function() {
        var qty = $(this).find('option:selected').val();
        var price = $(this).find('.price').val();
        var amount = (qty*price);
        sum+=amount;
        per= (sum - (sum * .1));
        $(this).find('.amount').text(''+amount);
    });
    $('.total').text(sum);
    $('.discount').text(per);
}