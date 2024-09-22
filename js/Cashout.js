
document.getElementById('btn-cashout')
.addEventListener('click',function(event){
    event.preventDefault();
   
    console.log("Cash Out Money click")

   const cashOut =document.getElementById('cash-out').value;
   console.log(cashOut);

   const cashPin =document.getElementById('out-pin').value;
   console.log(cashPin);
   //get current balance
   if(cashPin === '4562'){
    const balance =document.getElementById('Money').innerText
    console.log(balance)

    const CashOutMoneyNumber =parseFloat(cashOut);
    const balanceNumber =parseFloat(balance);

    const totalBalance = balanceNumber-CashOutMoneyNumber;
    console.log(totalBalance)

    document.getElementById('Money').innerText=totalBalance;

     //add monry with balanc
    /* const addMoneyNumber =parseFloat(addmoney);

     const balanceNumber =parseFloat(balance);

     const newBlance = addMoneyNumber+ balanceNumber;
     console.log(newBlance)
 */
   }
   else{
    alert('Wrong Pin')
   }
  })
