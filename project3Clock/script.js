document.getElementById('clock');

setInterval(function (){
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
  month.innerHTML = date.toLocaleDateString();
},1000);