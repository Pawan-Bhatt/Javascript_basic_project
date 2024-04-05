const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button) {
  console.log(button);
  button.addEventListener('click', function (eve) {
    console.log(eve);
    console.log(eve.target);
    if (eve.target.id === "grey"){
      body.style.backgroundColor = eve.target.id;
    }
    if (eve.target.id === "white"){
      body.style.backgroundColor = eve.target.id;
    }
    if (eve.target.id === "blue"){
      body.style.backgroundColor = eve.target.id;
    }
    if (eve.target.id === "yellow"){
      body.style.backgroundColor = eve.target.id;
    }
  });
});
