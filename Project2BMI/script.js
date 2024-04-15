const form = document.querySelector('form')
// this valuse give u an empty value
//const = height = parseInt = parseInt

form.addEventListener('submit', function(e){
  e.preventDefault()
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if (height === "" || height <0 || isNaN(height)){
    results.innerHTML()
  }
  else if (weight === "" || weight <0 || isNaN(weight)){
    results.innerHTML()
  }
  else{
    const bmi = (weight/((height*height)/10000)).toFixed(2);
    results.innerHTML=`<span>Your Bmi is ${bmi}
    </span>`;
    if (weight < 18.6){
      result.innerHTML=`<span>You are Underweight
      </span>`
    }
    if (weight<= 18.6 && weight<=24.9){
      result.innerHTML=`<span>You are in Normal Range
      </span>`
    }
    if (weight > 24.9){
      result.innerHTML=`<span>You are Overweight
      </span>`
    }
    
  }


});