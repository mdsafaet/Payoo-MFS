
document.getElementById('btn-add')
.addEventListener('click',function(event){
    event.preventDefault();
   
    console.log("add Money click")

   const addmoney =document.getElementById('add-money').value;
   console.log(addmoney);

   const addPin =document.getElementById('pin').value;
   console.log(addPin);
   //get current balance
   if(addPin === '4562'){
    const balance =document.getElementById('Money').innerText
    console.log(balance)

    const addMoneyNumber =parseFloat(addmoney);
    const balanceNumber =parseFloat(balance);

    const totalBalance = balanceNumber+addMoneyNumber;
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
