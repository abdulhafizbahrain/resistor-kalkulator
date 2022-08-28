var collorFigure = ['Black', 'Brown', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Gray', 'White'];
var collorFigureValue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var collorMultipier = ['Black', 'Brown', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Gray', 'White', 'Gold', 'Silver'];
var collorMultipierValue = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 0.1, 0.01];
var collorTolerance = ['Brown', 'Red', 'Orange', 'Blue', 'Purple', 'Gray', 'Gold', 'Silver', 'opacity-0'];
var collorToleranceValue = [1, 2, 0.5, 0.25, 0.10, 0.05, 5, 10, 20];
var collorTemperature = ['Brown', 'Red', 'Orange', 'Yellow', 'Blue', 'Purple'];
var collorTemperatureValue = [100, 50, 15, 25, 10, 5];


const resistorBandColor = document.getElementById('resistorBandColor');

function showBandColor(showData) {
    var output = '';
    var startIndex = 0;
    var endIndex = 0;
    if (showData == "firstFigure") {
        data = collorFigure;
        dataValue = collorFigureValue;
        startIndex = 1;
        endIndex = 10;
    }else if (showData == "secondFigure" || showData == "thridFigure") {
        data = collorFigure;
        dataValue = collorFigureValue;
        startIndex = 0;
        endIndex = 10;
    }else if (showData == "multipier") {
        data = collorMultipier;
        dataValue = collorMultipierValue;
        startIndex = 0;
        endIndex = 12;
    }else if (showData == "tolerance") {
        data = collorTolerance;
        dataValue = collorToleranceValue;
        startIndex = 0;
        endIndex = 9;
    }else if (showData == "temperature") {
        data = collorTemperature;
        dataValue = collorTemperatureValue;
        startIndex = 0;
        endIndex = 6;
    }

    for (startIndex; startIndex < endIndex; startIndex++){
        output = output + '<div class="container rounded-0 m-0 py-1 ps-1 pe-3 border-0 alert alert-' + data[startIndex].toLowerCase() + '" role="alert"> <div class="row"><div class="col-3">' + data[startIndex] + '</div><div class="col-3 text-center" id="valueColor' + data[startIndex] + '">' + dataValue[startIndex] + '</div><div class="col-6 rounded-1 btn btn-' + data[startIndex].toLowerCase() + '" id="btnColor' + data[startIndex]+ '" data-bs-dismiss="modal"></div></div></div>';
    } 
    return output;
}

var bandActive;
const TypeFourResistorBand = document.querySelectorAll('#typeFourResistorBand > #band');

console.log(TypeFourResistorBand[1]);



const bandOneTypeFiveResistorBand = document.getElementById('bandOneTypeFiveResistorBand');
const bandTwoTypeFiveResistorBand = document.getElementById('bandTwoTypeFiveResistorBand');
const bandThreeTypeFiveResistorBand = document.getElementById('bandThreeTypeFiveResistorBand');
const bandFourTypeFiveResistorBand = document.getElementById('bandFourTypeFiveResistorBand');
const bandFiveTypeFiveResistorBand = document.getElementById('bandFiveTypeFiveResistorBand');
bandOneTypeFiveResistorBand.addEventListener('click', function () {
    resistorBandColor.innerHTML = showBandColor("firstFigure");
});

bandTwoTypeFiveResistorBand.addEventListener('click', function () {
    resistorBandColor.innerHTML = showBandColor("secondFigure");
});

bandThreeTypeFiveResistorBand.addEventListener('click', function () {
    resistorBandColor.innerHTML = showBandColor("thridFigure");
});

bandFourTypeFiveResistorBand.addEventListener('click', function () {
    resistorBandColor.innerHTML = showBandColor("multipier");
});

bandFiveTypeFiveResistorBand.addEventListener('click', function () {
    resistorBandColor.innerHTML = showBandColor("tolerance");
});


const bandOneTypeSixResistorBand = document.getElementById('bandOneTypeSixResistorBand');
const bandTwoTypeSixResistorBand = document.getElementById('bandTwoTypeSixResistorBand');
const bandThreeTypeSixResistorBand = document.getElementById('bandThreeTypeSixResistorBand');
const bandFourTypeSixResistorBand = document.getElementById('bandFourTypeSixResistorBand');
const bandFiveTypeSixResistorBand = document.getElementById('bandFiveTypeSixResistorBand');
const bandSixTypeSixResistorBand = document.getElementById('bandSixTypeSixResistorBand');
bandOneTypeSixResistorBand.addEventListener('click', function () {
    resistorBandColor.innerHTML = showBandColor("firstFigure");
});

bandTwoTypeSixResistorBand.addEventListener('click', function () {
    resistorBandColor.innerHTML = showBandColor("secondFigure");
});

bandThreeTypeSixResistorBand.addEventListener('click', function () {
    resistorBandColor.innerHTML = showBandColor("thridFigure");
});

bandFourTypeSixResistorBand.addEventListener('click', function () {
    resistorBandColor.innerHTML = showBandColor("multipier");
});

bandFiveTypeSixResistorBand.addEventListener('click', function () {
    resistorBandColor.innerHTML = showBandColor("tolerance");
});

bandSixTypeSixResistorBand.addEventListener('click', function () {
    resistorBandColor.innerHTML = showBandColor("temperature");
});



// Modal choose color

function changeColorBandActive(colorName) {
    bandActive.classList.remove('bg-black', 'bg-brown', 'bg-red', 'bg-orange', 'bg-yellow', 'bg-green', 'bg-blue', 'bg-gray', 'bg-white', 'bg-gold', 'bg-silver', 'bg-no-color', 'bg-transparent');
    bandActive.classList.add(colorName);
}

// Modal choose color end
