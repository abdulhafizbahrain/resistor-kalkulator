var collorFigure = ['Black', 'Brown', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Gray', 'White'];
var collorFigureValue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var collorMultipier = ['Black', 'Brown', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Gray', 'White', 'Gold', 'Silver'];
var collorMultipierValue = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 0.1, 0.01];
var collorTolerance = ['Brown', 'Red', 'Orange', 'Blue', 'Purple', 'Gray', 'Gold', 'Silver', 'opacity-0'];
var collorToleranceValue = [1, 2, 0.5, 0.25, 0.10, 0.05, 5, 10, 20];
var collorTemperature = ['Brown', 'Red', 'Orange', 'Yellow', 'Blue', 'Purple'];
var collorTemperatureValue = [100, 50, 15, 25, 10, 5];
var bandTypeFour = ['firstFigure', 'secondFigure', 'multipier', 'tolerance'];
var bandTypeFive = ['firstFigure', 'secondFigure', 'thridFigure', 'multipier', 'tolerance'];
var bandTypeSix = ['firstFigure', 'secondFigure', 'thridFigure', 'multipier', 'tolerance', 'temperature'];


const resistorBandColor = document.getElementById('resistorBandColor');
function showBandColor(showData) {
    output = '';
    startIndex = 0;
    if (showData == "firstFigure") {
        data = collorFigure;
        dataValue = collorFigureValue;
        startIndex = 1;
    }else if (showData == "secondFigure" || showData == "thridFigure") {
        data = collorFigure;
        dataValue = collorFigureValue;
    }else if (showData == "multipier") {
        data = collorMultipier;
        dataValue = collorMultipierValue;
    }else if (showData == "tolerance") {
        data = collorTolerance;
        dataValue = collorToleranceValue;
    }else if (showData == "temperature") {
        data = collorTemperature;
        dataValue = collorTemperatureValue;
    }


    for (startIndex; startIndex < data.length; startIndex++){
        output = output + '<div class="container rounded-0 m-0 py-1 ps-1 pe-3 border-0 alert alert-' + data[startIndex].toLowerCase() + '" role="alert"> <div class="row"><div class="col-3">' + data[startIndex] + '</div><div class="col-3 text-center" id="valueColor' + data[startIndex] + '">' + dataValue[startIndex] + '</div><div class="col-6 rounded-1 btn btn-' + data[startIndex].toLowerCase() + '" id="btnColor' + data[startIndex]+ '" data-bs-dismiss="modal"></div></div></div>';
    } 
    return output;
}

showBandColor('firstFigure');

var bandActive;
const typeFourResistorBand = document.querySelectorAll('#typeFourResistorBand > a');
for (let index = 0; index < typeFourResistorBand.length; index++){
    typeFourResistorBand[index].addEventListener('click', function () {
        resistorBandColor.innerHTML = showBandColor(bandTypeFour[index]);
        bandActive = typeFourResistorBand[index];
    });
}

const typeFiveResistorBand = document.querySelectorAll('#typeFourResistorBand > a');
for (let index = 0; index < typeFiveResistorBand.length; index++){
    typeFiveResistorBand[index].addEventListener('click', function () {
        resistorBandColor.innerHTML = showBandColor(bandTypeFive[index]);
        bandActive = typeFiveResistorBand[index];
    });
}

const typeSixResistorBand = document.querySelectorAll('#typeFourResistorBand > a');
for (let index = 0; index < typeSixResistorBand.length; index++){
    typeSixResistorBand[index].addEventListener('click', function () {
        resistorBandColor.innerHTML = showBandColor(bandTypeSix[index]);
        bandActive = typeSixResistorBand[index];
    });
}


// Modal choose color

function changeColorBandActive(colorName) {
    bandActive.classList.remove('bg-black', 'bg-brown', 'bg-red', 'bg-orange', 'bg-yellow', 'bg-green', 'bg-blue', 'bg-gray', 'bg-white', 'bg-gold', 'bg-silver', 'bg-no-color', 'bg-transparent');
    bandActive.classList.add(colorName);
}

const btnColor = document.querySelectorAll('#btnColor');
for (let index = 0; index < btnColor.length; index++){
        btnColor[index].addEventListener('click', function () {
        changeColorBandActive('bg-gold');
    });
}

// Modal choose color end
