const selectScale = document.getElementById("scale-title");
console.log(selectScale);

const convertFrom1 = document.getElementById("convert-from1");
console.log(convertFrom1);

const convertFrom2 = document.getElementById("convert-from2");

const convertFrom3 = document.getElementById("convert-from3");

convertFrom1.classList.add("hide");
convertFrom2.classList.add("hide");
convertFrom3.classList.add("hide");


const convertIn1 = document.getElementById("convert-in1");

const convertIn2 = document.getElementById("convert-in2");

const convertIn3 = document.getElementById("convert-in3")

convertIn1.classList.add("hide");
convertIn2.classList.add("hide");
convertIn3.classList.add("hide");


const numberInput = document.getElementById("choose-scale");
console.log(numberInput);


const showResult = document.querySelector(".final-result");

const resultButton = document.getElementById("result");



// functions of temperature converter
const toFahrenheit = ()=>{
    if(convertIn1.value === "fahrenheit" ){

        if(convertFrom1.value === "celsius"){

            let celsiusValue = ((Number(numberInput.value) * 9 /5) + 32 ).toFixed(2) + " °F";
            showResult.innerHTML = celsiusValue;

        }else if(convertFrom1.value === "kelvin"){

            let kelvinValue = ((Number(numberInput.value) - 273.15) * 9/5 + 32).toFixed(2) + " °F";
            showResult.innerHTML = kelvinValue;
        }else{
            showResult.innerHTML = "Please select different units";
        }    
           
    }
}

const toCelsius = ()=>{
    if(convertIn1.value === "celsius"){
        if(convertFrom1.value === "fahrenheit"){

            let fahrenheitValue = ((Number(numberInput.value) - 32) * 5/9).toFixed(2) + " °C";
            showResult.innerHTML = fahrenheitValue;

        }else if(convertFrom1.value === "kelvin"){

            let kelvinValue = ((Number(numberInput.value) - 273.15)).toFixed(2) + " °C";
            showResult.innerHTML = kelvinValue;

        }else{
            showResult.innerHTML = "Please select different units";
        }
        
    }
}

const toKelvin = ()=>{
    if(convertIn1.value === "kelvin"){

        if(convertFrom1.value === "celsius"){

            let celsiusValue = (Number(numberInput.value) + 273.15).toFixed(2) + " K";
            showResult.innerHTML = celsiusValue;

        }else if(convertFrom1.value === "fahrenheit"){

            let fahrenheitValue = ((Number(numberInput.value) - 32) * 5/9 + 273.15).toFixed(2) + " K";
            showResult.innerHTML = fahrenheitValue;

        }else{
            showResult.innerHTML = "Please select different units";
        }
    }
}
// functions of distance converter

const toKilometer = ()=>{
    if(convertIn2.value === "kilometer"){

        if(convertFrom2.value === "meter"){
            let meterValue = (Number(numberInput.value)/1000).toFixed(2) + " km";
            showResult.innerHTML = meterValue;
        }else if(convertFrom2.value === "mile"){
            let mileValue = (Number(numberInput.value)* 1.609).toFixed(2) + " km";
            showResult.innerHTML = mileValue;
        }else{
            showResult.innerHTML = "Please select different units";
        }
    }
}

const toMile = ()=>{
    if(convertIn2.value === "mile"){
        if(convertFrom2.value === "kilometer"){
            let kilometerValue = (Number(numberInput.value) / 1.609).toFixed(2) + " mi";
            showResult.innerHTML = kilometerValue;
        }else if(convertFrom2.value === "meter"){
            let meterValue = Math.floor(Number(numberInput.value) / 1609).toFixed(2) + " mi";
            showResult.innerHTML = meterValue;
        }else{
            showResult.innerHTML = "Please select different units";
        }
    }
}

const toMeter = ()=>{
    if(convertIn2.value === "meter"){
        if(convertFrom2.value === "kilometer"){
            let kilometerValue = (Number(numberInput.value) * 1000).toFixed(2) + " m";
            showResult.innerHTML = kilometerValue;
        }else if(convertFrom2.value === "mile"){
            let mileValue = (Number(numberInput.value) * 1609).toFixed(2) + " m";
            showResult.innerHTML = mileValue;
        }else{
            showResult.innerHTML = "Please select different units";
        }
    }
}

// functions of weight converter

const toKilogram = ()=>{
    if(convertIn3.value === "kilogram"){
        if(convertFrom3.value === "pound"){
            let poundValue = (Number(numberInput.value) / 2.205).toFixed(2) + " kg";
            showResult.innerHTML = poundValue;
        }else if(convertFrom3.value === "gram"){
            let gramValue = (Number(numberInput.value) / 1000).toFixed(2) + " kg";
            showResult.innerHTML = gramValue;
        }else{
            showResult.innerHTML = "Please select different units";
        }
    }
}

const toPound = ()=>{
    if(convertIn3.value === "pound"){
        if(convertFrom3.value === "kilogram"){
            let kilogramValue = (Number(numberInput.value) * 2.205).toFixed(2) + " lb";
            showResult.innerHTML = kilogramValue;
        }else if(convertFrom3.value === "gram"){
            let gramValue = (Number(numberInput.value) / 453.6).toFixed(2) + " lb";
            showResult.innerHTML = gramValue;
        }else{
            showResult.innerHTML = "Please select different units";
        }
    }
}

const toGram = ()=>{
    if(convertIn3.value === "gram"){
        if(convertFrom3.value === "kilogram"){
            let kilogramValue = (Number(numberInput.value) * 1000).toFixed(2) + " g";
            showResult.innerHTML = kilogramValue;
        }else if(convertFrom3.value === "pound"){
            let poundValue = (Number(numberInput.value) * 453.6).toFixed(2) + " g";
            showResult.innerHTML = poundValue;
        }else{
            showResult.innerHTML = "Please select different units";
        }
    }
}


const emptyScale = ()=>{
    convertFrom1.classList.add("hide");
    convertFrom2.classList.add("hide");
    convertFrom3.classList.add("hide");

    convertIn1.classList.add("hide");
    convertIn2.classList.add("hide");
    convertIn3.classList.add("hide");
}

const temperatureScale = ()=>{
    convertFrom1.classList.remove("hide");
    convertFrom2.classList.add("hide");
    convertFrom3.classList.add("hide");

    convertIn1.classList.remove("hide");
    convertIn2.classList.add("hide");
    convertIn3.classList.add("hide");
}

const distanceScale = ()=>{
    convertFrom1.classList.add("hide");
    convertFrom2.classList.remove("hide");
    convertFrom3.classList.add("hide");

    convertIn1.classList.add("hide");
    convertIn2.classList.remove("hide");
    convertIn3.classList.add("hide");

}

const weightScale = ()=>{
    convertFrom1.classList.add("hide");
    convertFrom2.classList.add("hide");
    convertFrom3.classList.remove("hide");

    convertIn1.classList.add("hide");
    convertIn2.classList.add("hide");
    convertIn3.classList.remove("hide");
}

selectScale.addEventListener("change",function(){
    let selectedValue = this.value;

    if(selectedValue === ""){
        emptyScale();

    }else if(selectedValue === "temperature"){
        temperatureScale();

    }else if(selectedValue === "distance"){
        distanceScale();

    }else{
        weightScale();

    }
})




resultButton.addEventListener("click", function() {
    let selectedValue = selectScale.value;

    if (selectedValue === "temperature") {
        toFahrenheit();
        toCelsius();
        toKelvin();
    } else if (selectedValue === "distance") {
        toKilometer();
        toMeter();
        toMile();
    } else if (selectedValue === "weight") {
        toKilogram();
        toPound();
        toGram();
    } else {
        showResult.innerHTML = "Please select a converter scale first!";
    }
})




































// let inputNumber = document.querySelector("input")

// let result = document.querySelector(".result");

// let mainScale = document.querySelector("#scale");

// let btn = document.querySelector("#btn");

// function toCelsius(){
//     let c = inputNumber.value;
//     if(mainScale.value === "celsius"){
//         let fahrenheitValue = Math.floor((c * 9/5) + 32) + " °F";

//         result.innerHTML = fahrenheitValue
//     }
// }

// function toFahrenheit(){
//     let f = inputNumber.value;
//     if(mainScale.value === "fahrenheit"){
//         let celsiusValue = Math.floor(5/9 * (f - 32)) + " °C";

//         result.innerHTML = celsiusValue;
//     }
// }

// btn.addEventListener("click",function showResult(){
//     toCelsius();
//     toFahrenheit();
// })


