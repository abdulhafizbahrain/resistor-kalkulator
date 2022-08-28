var bandActive;

var collorFigure = ['Black', 'Brown', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Gray', 'White'];
var collorFigureValue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var collorMultipier = ['Black', 'Brown', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Gray', 'White', 'Gold', 'Silver'];
var collorMultipierValue = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 0.1, 0.01];
var collorTolerance = ['Brown', 'Red', 'Orange', 'Blue', 'Purple', 'Gray', 'Gold', 'Silver', 'opacity-0'];
var collorToleranceValue = [1, 2, 0.5, 0.25, 0.10, 0.05, 5, 10, 20];
var collorTemperature = ['Brown', 'Red', 'Orange', 'Yellow', 'Blue', 'Purple'];
var collorTemperatureValue = [100, 50, 15, 25, 10, 5];


const modalBandTitle = document.getElementById('modalBandTitle');

// Nav type resistor
const resultTypeFourResistorBand = document.getElementById('resultTypeFourResistorBand');
const resultTypeFiveResistorBand = document.getElementById('resultTypeFiveResistorBand');
const resultTypeSixResistorBand = document.getElementById('resultTypeSixResistorBand');
const resultTypeSMDResistorBand = document.getElementById('resultTypeSMDResistorBand');

const navTypeFourResistorBand = document.getElementById('navTypeFourResistorBand');
const navTypeFiveResistorBand = document.getElementById('navTypeFiveResistorBand');
const navTypeSixResistorBand = document.getElementById('navTypeSixResistorBand');
const navTypeSMDResistor = document.getElementById('navTypeSMDResistor');

const typeSMDResistor = document.getElementById('typeSMDResistor');

function inactiveNav() {
    resultTypeFourResistorBand.classList.add('visually-hidden');
    resultTypeFiveResistorBand.classList.add('visually-hidden');
    resultTypeSixResistorBand.classList.add('visually-hidden');
    resultTypeSMDResistorBand.classList.add('visually-hidden');

    navTypeFourResistorBand.classList.remove('active');
    navTypeFiveResistorBand.classList.remove('active');
    navTypeSixResistorBand.classList.remove('active');
    navTypeSMDResistorBand.classList.remove('active');

    typeFourResistorBand.classList.add('visually-hidden');
    typeFiveResistorBand.classList.add('visually-hidden');
    typeSixResistorBand.classList.add('visually-hidden');
    typeSMDResistorBand.classList.add('visually-hidden');

}

navTypeFourResistorBand.addEventListener('click', function () {
    inactiveNav();
    formulaCount();
    resultTypeFourResistorBand.classList.remove('visually-hidden');
    navTypeFourResistorBand.classList.add('active');
    typeFourResistorBand.classList.remove('visually-hidden');
});

navTypeFiveResistorBand.addEventListener('click', function () {
    inactiveNav();
    resultTypeFiveResistorBand.classList.remove('visually-hidden');
    navTypeFiveResistorBand.classList.add('active');
    typeFiveResistorBand.classList.remove('visually-hidden');
});

navTypeSixResistorBand.addEventListener('click', function () {
    inactiveNav();
    resultTypeSixResistorBand.classList.remove('visually-hidden');
    navTypeSixResistorBand.classList.add('active');
    typeSixResistorBand.classList.remove('visually-hidden');
});

navTypeSMDResistorBand.addEventListener('click', function () {
    inactiveNav();
    resultTypeSMDResistorBand.classList.remove('visually-hidden');
    navTypeSMDResistorBand.classList.add('active');
    typeSMDResistorBand.classList.remove('visually-hidden');
});

// Nav type resistor end


// Show color and value

const btnColor = document.querySelectorAll('#btnColor')
function showColor(bandName) {
    var startIndex;
    if (bandName == "firstFigure") {
        startIndex = 1;
        data = collorFigure;
        dataValue = collorFigureValue;
    }else if (bandName == "firstFigure") {
        startIndex = 1;
        data = collorFigure;
        dataValue = collorFigureValue;
    }

}
// Show color and value end

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

// Band type six end

// Formula
var bandOneValue;
var bandTwoValue;
var bandThreeValue;
var bandFourlue;
function formulaCount() {
    if (bandOneTypeFourResistorBand.classList.contains('bg-brown')) {
        bandOneValue = 1;
    }
}


// Formula end

// Modal choose color
const btnColorBlack = document.getElementById('btnColorBlack');
const btnColorBrown = document.getElementById('btnColorBrown');
const btnColorRed = document.getElementById('btnColorRed');
const btnColorOrange = document.getElementById('btnColorOrange');
const btnColorYellow = document.getElementById('btnColorYellow');
const btnColorGreen = document.getElementById('btnColorGreen');
const btnColorBlue = document.getElementById('btnColorBlue');
const btnColorPurple = document.getElementById('btnColorPurple');
const btnColorGray = document.getElementById('btnColorGray');
const btnColorWhite = document.getElementById('btnColorWhite');
const btnColorGold = document.getElementById('btnColorGold');
const btnColorSilver = document.getElementById('btnColorSilver');
const btnNoColor = document.getElementById('btnNoColor');

function changeColorBandActive(colorName) {
    bandActive.classList.remove('bg-black', 'bg-brown', 'bg-red', 'bg-orange', 'bg-yellow', 'bg-green', 'bg-blue', 'bg-gray', 'bg-white', 'bg-gold', 'bg-silver', 'bg-no-color', 'bg-transparent');
    bandActive.classList.add(colorName);
}

// btnColorBlack.addEventListener('click', function () {
//     changeColorBandActive('bg-black');
// });

// btnColorBrown.addEventListener('click', function () {
//     changeColorBandActive('bg-brown');
// });

// btnColorRed.addEventListener('click', function () {
//     changeColorBandActive('bg-red');
// });

// btnColorOrange.addEventListener('click', function () {
//     changeColorBandActive('bg-orange');
// });

// btnColorYellow.addEventListener('click', function () {
//     changeColorBandActive('bg-yellow');
// });

// btnColorGreen.addEventListener('click', function () {
//     changeColorBandActive('bg-green');
// });

// btnColorBlue.addEventListener('click', function () {
//     changeColorBandActive('bg-blue');
// });

// btnColorPurple.addEventListener('click', function () {
//     changeColorBandActive('bg-purple');
// });

// btnColorGray.addEventListener('click', function () {
//     changeColorBandActive('bg-gray');
// });

// btnColorWhite.addEventListener('click', function () {
//     changeColorBandActive('bg-white');
// });

// btnColorGold.addEventListener('click', function () {
//     changeColorBandActive('bg-gold');
// });

// btnColorSilver.addEventListener('click', function () {
//     changeColorBandActive('bg-silver');
// });

// btnNoColor.addEventListener('click', function () {
//     changeColorBandActive('bg-transparent');
// });

// Modal choose color end

