const btn = document.querySelector('.btn');
const result = document.querySelector('#result');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;

    if (weight === "" || isNaN(weight)) {
        return result.innerHTML = "Please enter a valid weight";
    }else if (height === "" || isNaN(height)) {
        return result.innerHTML = "Please enter a valid height";
    }else{
        height = height / 100;
        let bmi = (weight / (height * height)).toFixed(2);
        if (bmi < 18.5) {
                return result.innerHTML = `Your BMI is ${bmi} and you are underweight`;
            }else if (bmi >= 18.5 && bmi < 24.9) {
                return result.innerHTML = `Your BMI is ${bmi} and you are normal weight`; 
            }else if (bmi >= 25 && bmi < 29.9) {
                return result.innerHTML = `Your BMI is ${bmi} and you are overweight`;
            }else{
                return result.innerHTML = `Your BMI is ${bmi} and you are obese`;
            }  
    }

    

})

