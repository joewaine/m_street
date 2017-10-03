// <script type="text/javascript">


$('.page-menu-item img').click(function(){

$('.cart-drawer').removeClass('drawer-out');

$('.variant-modal').remove();
$('body').prepend('<div class="variant-modal"><button class="close-variant-modal">close</button><div class="modal-background"><div class="module-container"><img src="'+ $(this).parent().find('.prodImage').attr('src') + '">' + '<br><div class="modal-form-region">' + $(this).parent().find('.prod-title').text() + '<br>' + $(this).parent().find('.item-description').text() + '<form method="POST" id="addToCartForm">' + $(this).parent().find("form").html() + '</form></div></div></div></div>').fadeIn();

});

$('body').on('click', '.close-variant-modal', function(){
$('.variant-modal').remove();
});

$('.close-variant-modal').click(function(){


$(this).parent().fadeOut();

});

$('.cart-expand').click(function(){
$('.cart-drawer').toggleClass('drawer-out');
});


$(function() {
    // handle submits via ajax
    $('body').on('submit', '#addToCartForm', function(e) {
    $('.cart-partition').empty();
        //Prevent the default submission
        e.preventDefault();
       //Get the form data
        var form_data = $("#addToCartForm").serializeArray();
        // ajax it over to the server
        $.ajax({
            type: 'post',
            url: '/',
            data: form_data,
            success: function(response) {
                if (response.success) {

                    $('#cart-table').remove();

                    $('.cart-drawer').addClass('drawer-out');

                    console.log(response.cart);
                    $cartChamber = $('.cart-drawer.drawer-out .row .twelve.columns .cart-area');
                    $cartChamber.empty();

                    var lineItemsCt = response.cart.lineItems;
                    var sp = '&nbsp;';

                    $cartChamber.append('<thead><tr><th>Product</th><th>Qty</th><th class="text-right">Price</th><th class="text-right">Total Item Cost</th></tr></thead>');

                        for(i=0;i<response.cart.totalLineItems;i++){

$cartChamber.append('<tr><td><strong>' + lineItemsCt[Object.keys(lineItemsCt)[i]]['snapshot']['product']['title'] + '</strong><br>(' + lineItemsCt[Object.keys(lineItemsCt)[i]]['snapshot'].sku + ')' + '</td><td>' + lineItemsCt[Object.keys(lineItemsCt)[i]]['qty'] + '</td><td class="align-r">$' + lineItemsCt[Object.keys(lineItemsCt)[i]]['price'].slice(0, -2) + '<button class="onemore">+</button><button class="oneless">-</button></td><td class="align-r">$'+ lineItemsCt[Object.keys(lineItemsCt)[i]]['total'] +'</td></tr>');

                    }

                $cartChamber.append('<tr><td class="align-r" colspan="4">Total Price: '+ response.cart.itemTotal +'</td></tr>');

                }else{
                    alert("Failure!");
                }
            }
        });

    $('.variant-modal').fadeOut();

    });

});




$('.addons-list').val('more text');


$('input[type="checkbox"]').change(function() {


    if (this.checked) {

            if($('.addons-list').val() == ''){
                $('.addons-list').val($(this).attr('value'));
            }else{
                $('.addons-list').val($('.addons-list').val() + ', ' + $(this).attr('value'));
            }

$(this).parent().parent().find('.purchasableId option[value="33"]').attr("selected", "selected");

    } else {

$('.addons-list').val('');

    }
});

// </script>