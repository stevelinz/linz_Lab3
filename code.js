

    var mediaFeeLateCost;
    var numberOfItems;
    var totalFee;
    $(document).ready(function(){
        $("#submit").on("click", function() {
            var mediaType = $('input[name=media]:checked').val();
            mediaType = parseInt(mediaType);
            if (mediaType === 1) mediaFeeLateCost = .25;
            else mediaFeeLateCost = .50;
            numberOfItems = parseInt($('#numberLateItems').val());
            totalFee = 0;
            $("#submit").fadeOut(3000);
            totalFee = numberOfItems * mediaFeeLateCost;
            $("#fee").empty().append("$ " +(totalFee).toFixed(2));
            $("#submit").fadeIn(3000);
                })
        });


    $(document).ready(function(){
        $("#submitPizza").on("click", function() {

            var numberToppings = parseInt($('#numberToppings').val());
            var pizzaCost = parseFloat(numberToppings)*1.25+15.00;
            var numberCoworkers = parseInt($('#numberCoworkers').val());
            $("#share").empty().append("$ "+ (pizzaCost/numberCoworkers).toFixed(2));
            $("#submitPizza").fadeOut(3000);
            $("#submitPizza").fadeIn(3000);
        })
    });






