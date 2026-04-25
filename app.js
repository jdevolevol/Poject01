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
        // Calculate BMI
        height = height / 100;
        let bmi = (weight / (height * height)).toFixed(2);

        //Show the result BMI
        if (bmi < 18.5) {
            showResult(bmi, "underweight", "#676700");
            }else if (bmi >= 18.5 && bmi < 24.99) {
                showResult(bmi, "normal weight", "green"); 
            }else if (bmi >= 25 && bmi < 29.99) {
                showResult(bmi, "overweight", "orange");
            }else{
                showResult(bmi, "obese", "red");
            }  
    }
})

function showResult(bmi,message,color) {
    result.style.backgroundColor = color;
    return result.innerHTML = `Your BMI is ${bmi} and you are ${message}`;
}

