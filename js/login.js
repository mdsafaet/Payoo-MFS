
//
document.getElementById('Btn-login')
.addEventListener('click',function(event){
 ///
    event.preventDefault();
    console.log('Log in Button clicked');
    //
  const phoneNumber = document.getElementById('phone-number').value;
  const pinNumber = document.getElementById('pin-number').value;

  console.log(phoneNumber,pinNumber);

  if (phoneNumber=== '5' && pinNumber ==='4562'){
    console.log("You are Logged in");
    window.location.href='/home.html'
  }
  else{
    alert("Wrong Pin, Get The Fuck Out of here")

  }


});