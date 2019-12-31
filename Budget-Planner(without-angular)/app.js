const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector("#btn-clear");
const confirmBtn = document.querySelector("#btn-add");
const list = document.querySelector('#list');

const alertcntrlr=document.querySelector('ion-alert-controller');

const clear = () =>{
    reasonInput.value='';
    amountInput.value='';
}

cancelBtn.addEventListener('click',clear);

const total = document.querySelector('#total');
confirmBtn.addEventListener('click',()=>{
    if(amountInput.value<=0 || amountInput.value.trim().length<=0 || reasonInput.value.trim().length<=0 )
    {
        alertcntrlr.create({
            message:'Please enter all fields.',
            header:'Invalid Inputs',
            buttons: ['Okay' ]
        }).then(alertElement=>{
            alertElement.present();
        })
        return;
    }

    list.innerHTML+=reasonInput.value+" <span float-right>"+amountInput.value+"</span><br>";
    console.log(parseInt(document.querySelector('#total').innerHTML));
    total.innerHTML=parseInt(total.innerHTML)+parseInt(amountInput.value);
    clear();
});