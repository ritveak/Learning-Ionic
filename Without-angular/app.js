const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector("#btn-clear");
const confirmBtn = document.querySelector("#btn-add");
const list = document.querySelector('#list');

const total = document.querySelector('#total');
confirmBtn.addEventListener('click',()=>{
    list.innerHTML+=reasonInput.value+" <span float-right>"+amountInput.value+"</span><br>";
    console.log(parseInt(document.querySelector('#total').innerHTML));
    total.innerHTML=parseInt(total.innerHTML)+parseInt(amountInput.value);
}); 