
// event for click on card
let total = 0;
function handleClickCard(target) {
    // get items container 
    const cartItemList = document.getElementById('cart-items-list');
    // get the item name and create + append child
    const itemName = target.parentNode.childNodes[1].childNodes[5].childNodes[1].innerText;
    const li = document.createElement('li');
    li.innerText = itemName;
    cartItemList.appendChild(li);


    // cart price update 

    const itemPrice = target.parentNode.childNodes[1].childNodes[5].childNodes[3].childNodes[0].innerText;
    total = parseFloat(total) + parseFloat(itemPrice);
    document.getElementById('total-price').innerText = total;
    document.getElementById('total').innerText = total;

    // ENABLE APPLY BUTTON 
    const btnApply = document.getElementById('btn-apply');
    if (total >= 200) {
        btnApply.disabled = false;
    }
    // enable make purchase button 
    const btnPurchase = document.getElementById('purchase');
    if (total >= 0) {
        btnPurchase.disabled = false;
    }
}

function handleClickApply(target) {
    // getting coupon code 
    const couponCode = document.getElementById('coupon-code').value;
    // making discount
    if (couponCode === 'SELL200') {
        // setting discount value 
        const discountAmount = parseFloat(total) * .2
        document.getElementById('discount').innerText = discountAmount.toFixed(2);
        // counting total amount 
        const discount = document.getElementById('discount').innerText;
        document.getElementById('total').innerText = parseFloat(total).toFixed(2) - parseFloat(discount) ;
        
        document.getElementById('coupon-code').value = '';
    }
}

document.getElementById('go-home').addEventListener('click', function(){
    location.reload();
})

