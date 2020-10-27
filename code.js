
function library() {

    //ask if for books or dvds set to upper case to avoid wrong input
    var type = prompt("Do you have late BOOKS or DVDS? ").toLocaleUpperCase();

    //ask how many items are there and convert to int
    var number = prompt("How many are there? ");
    var numResponse = parseInt(number);

    // display that this is your library fee
    document.write("Your library fee is: $");

    // test for books or book again avoid user error else they meant DVDs and do math
    if (type === 'BOOKS' || type === 'BOOK')
        document.writeln(.25 * numResponse.toFixed(2));
    else
        document.writeln(.50 * numResponse.toFixed(2));
}

function pizza() {
    // ask topping and parseInt and coWorkers and parseInt
    var tops = prompt("Have many toppings would you like? ");
    var toppings = parseInt(tops);
    var coWorkers = prompt("How many coworkers eating today?  ");
    var shareNumber = parseInt(coWorkers);
    // display with the math
    document.writeln("<br>" + "For their share of pizza each co-worker is to pay $" +
        (toppings * 1.25 + 15.00 / shareNumber.toFixed(2)));

}
