var customerName='bob'
const leastFavoriteCustomer='definetly bob'
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
    return customerName;
}


function setBestCustomer(){
    bestCustomer="not bob"
    return bestCustomer
}
function overwriteBestCustomer(){
    bestCustomer='maybe bob'
    console.log(bestCustomer)
}
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer='maybe Sam'
    console.log(leastFavoriteCustomer)
}

