var collorFigure = ['Black', 'Brown', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Gray', 'White'];
var collorFigureValue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var collorMultipier = ['Black', 'Brown', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Gray', 'White', 'Gold', 'Silver'];
var collorMultipierValue = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 0.1, 0.01];
var collorTolerance = ['Brown', 'Red', 'Green', 'Blue', 'Purple', 'Gray', 'Gold', 'Silver', 'No-Color'];
var collorToleranceValue = [1, 2, 0.5, 0.25, 0.10, 0.05, 5, 10, 20];
var collorTemperature = ['Brown', 'Red', 'Orange', 'Yellow', 'Blue', 'Purple'];
var collorTemperatureValue = [100, 50, 15, 25, 10, 5];
var bandTypeFour = ['Band 1', 'Band 2', 'Multipier', 'Tolerance'];
var bandTypeFive = ['Band 1', 'Band 2', 'Band 3', 'Multipier', 'Tolerance'];
var bandTypeSix = ['Band 1', 'Band 2', 'Band 3', 'Multipier', 'Tolerance', 'Temperature'];
var valueTypeFour = [];
var valueTypeFive = [];
var valueTypeSix = [];

const resistorBandColor = document.getElementById('resistorBandColor');
function showBandColor(showData) {
    document.getElementById('modalBandTitle').innerText = showData;
    output = '';
    startIndex = 0;
    if (showData == "Band 1") {
        data = collorFigure;
        dataValue = collorFigureValue;
        startIndex = 1;
    }else if (showData == "Band 2" || showData == "Band 3") {
        data = collorFigure;
        dataValue = collorFigureValue;
    }else if (showData == "Multipier") {
        data = collorMultipier;
        dataValue = collorMultipierValue;
    }else if (showData == "Tolerance") {
        data = collorTolerance;
        dataValue = collorToleranceValue;
    }else if (showData == "Temperature") {
        data = collorTemperature;
        dataValue = collorTemperatureValue;
    }
    
formula();
    

    for (startIndex; startIndex < data.length; startIndex++){
        output = output + '<div class="container rounded-0 m-0 py-1 ps-1 pe-3 border-0 alert alert-' + data[startIndex].toLowerCase() + '" role="alert"> <div class="row" id="bg-' + data[startIndex].toLowerCase() + '" ><div class="col-2">' + data[startIndex] + '</div><div class="col-4 text-end">' + convert(dataValue[startIndex]) + '</div><div class="col-6 rounded-1 border-0 btn btn-' + data[startIndex].toLowerCase() + '" id="btnColor"  aria-valuenow="' + dataValue[startIndex] + '" data-bs-dismiss="modal"></div></div></div>';
    } 
    return output;
}


var bandActive;
const typeFourResistorBand = document.querySelectorAll('#typeFourResistorBand > a');
for (let index = 0; index < typeFourResistorBand.length; index++){
    typeFourResistorBand[index].addEventListener('click', function () {
        resistorBandColor.innerHTML = showBandColor(bandTypeFour[index]);
        bandActive = typeFourResistorBand[index];
    });
}

const typeFiveResistorBand = document.querySelectorAll('#typeFiveResistorBand > a');
for (let index = 0; index < typeFiveResistorBand.length; index++){
    typeFiveResistorBand[index].addEventListener('click', function () {
        resistorBandColor.innerHTML = showBandColor(bandTypeFive[index]);
        bandActive = typeFiveResistorBand[index];
    });
}

const typeSixResistorBand = document.querySelectorAll('#typeSixResistorBand > a');
for (let index = 0; index < typeSixResistorBand.length; index++){
    typeSixResistorBand[index].addEventListener('click', function () {
        resistorBandColor.innerHTML = showBandColor(bandTypeSix[index]);
        bandActive = typeSixResistorBand[index];
    });
}


// Modal choose color
resistorBandColor.addEventListener('click', function (element) {
    if (element.target.id == 'btnColor') {
        bandActive.classList.remove('bg-black', 'bg-brown', 'bg-red', 'bg-orange', 'bg-yellow', 'bg-green', 'bg-blue', 'bg-purple', 'bg-gray', 'bg-white', 'bg-gold', 'bg-silver', 'bg-no-color', 'bg-transparent');
        bandActive.classList.add(element.target.parentElement.id);
        bandActive.ariaValueNow = element.target.ariaValueNow;
    }
formula();

});
// Modal choose color end


const navTypeResistor = document.querySelectorAll('#navTypeResistor');
const typeResistor = document.querySelectorAll('#typeResistor > div');
const resultValue = document.querySelectorAll('#resultValue');
function navToggle(navIndex) {
    for (let index = 0; index < navTypeResistor.length; index++){
        navTypeResistor[index].classList.remove('active');
        typeResistor[index].classList.add('visually-hidden');
        resultValue[index].classList.add('visually-hidden');
    }
    navTypeResistor[navIndex].classList.add('active');
    typeResistor[navIndex].classList.remove('visually-hidden');
    resultValue[navIndex].classList.remove('visually-hidden');
}

navTypeResistor[0].addEventListener('click', function () {
    navToggle(0);
});

navTypeResistor[1].addEventListener('click', function () {
    navToggle(1);
});

navTypeResistor[2].addEventListener('click', function () {
    navToggle(2);
});

navTypeResistor[3].addEventListener('click', function () {
    navToggle(3);
});
// Nav swirtch resistor end


// Formula
formula();

function convert(dataValue) {
    if (dataValue < 1000) {
        return dataValue + ' Ohm';
    }else if ((dataValue >= 1000) && (dataValue < 1000000)) {
        return (dataValue / 1000)+ ' K Ohm';
    }else if ((dataValue >= 1000000) && (dataValue < 1000000000)) {
        return (dataValue / 1000000)+ ' M Ohm';
    }else if ((dataValue >= 1000000000) && (dataValue < 1000000000000)) {
        return (dataValue / 1000000000)+ ' G Ohm';
    }
}

function formula() {
    valueTypeFour = [typeFourResistorBand[0].ariaValueNow, typeFourResistorBand[1].ariaValueNow, typeFourResistorBand[2].ariaValueNow, typeFourResistorBand[3].ariaValueNow, 0];
    valueTypeFour[4] = (valueTypeFour[0] + valueTypeFour[1]) * valueTypeFour[2] ;
    parseFloat(valueTypeFour[4]);

    valueTypeFive = [typeFiveResistorBand[0].ariaValueNow, typeFiveResistorBand[1].ariaValueNow, typeFiveResistorBand[2].ariaValueNow, typeFiveResistorBand[3].ariaValueNow, typeFiveResistorBand[4].ariaValueNow, 0];
    valueTypeFive[5] = (valueTypeFive[0] + valueTypeFive[1] + valueTypeFive[2]) * valueTypeFive[3] ;
    

    valueTypeSix = [typeSixResistorBand[0].ariaValueNow, typeSixResistorBand[1].ariaValueNow, typeSixResistorBand[2].ariaValueNow, typeSixResistorBand[3].ariaValueNow, typeSixResistorBand[4].ariaValueNow, typeSixResistorBand[5].ariaValueNow, 0];
    valueTypeSix[6] = (valueTypeSix[0] + valueTypeSix[1] + valueTypeSix[2]) * valueTypeSix[3] ;

    resultValue[0].innerText = convert(valueTypeFour[4]);
    resultValue[1].innerText = convert(valueTypeFive[5]);
    resultValue[2].innerText = convert(valueTypeSix[6]);

    
}


// Formula end