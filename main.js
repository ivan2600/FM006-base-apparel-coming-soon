const form = document.querySelector('form');
const input = document.querySelector('input');
const alertImg = document.querySelector('span img');
const alertMsg = document.querySelector('.alert');

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const pattern =  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  if (input.value=="") {
    alerts();
    return (alertMsg.innerHTML = "Please fill in your mail");   
  }

  if (!input.value.match(pattern)) {
    alerts();
    return (alertMsg.innerHTML = "Please provide a valid mail");
  }

  return alert('Thank you filling in your email')
})

function alerts() {
  input.style.borderColor = "hsl(0, 93%, 68%)";
  alertImg.style.display = "block";    
  alertMsg.style.display = "block"; 
}

function clearAlerts() {
  input.style.borderColor = "hsla(0, 36%, 70%, 50%)";
  alertImg.style.display = "none";    
  alertMsg.style.display = "none"; 
}

input.addEventListener('keypress', ()=>{
  clearAlerts();
})