var bandActive;



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

const typeFourResistorBand = document.getElementById('typeFourResistorBand');
const typeFiveResistorBand = document.getElementById('typeFiveResistorBand');
const typeSixResistorBand = document.getElementById('typeSixResistorBand');
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
const valueColorBlack = document.getElementById('valueColorBlack');
const valueColorBrown = document.getElementById('valueColorBrown');
const valueColorRed = document.getElementById('valueColorRed');
const valueColorOrange = document.getElementById('valueColorOrange');
const valueColorYellow = document.getElementById('valueColorYellow');
const valueColorGreen = document.getElementById('valueColorGreen');
const valueColorBlue = document.getElementById('valueColorBlue');
const valueColorPurple = document.getElementById('valueColorPurple');
const valueColorGray = document.getElementById('valueColorGray');
const valueColorWhite = document.getElementById('valueColorWhite');
const valueColorGold = document.getElementById('valueColorGold');
const valueColorSilver = document.getElementById('valueColorSilver');
const valueNoColor = document.getElementById('valueNoColor');

function showColor(bandName) {
    var value = [];
    btnColorBlack.classList.remove('visually-hidden');
    btnColorBrown.classList.remove('visually-hidden');
    btnColorRed.classList.remove('visually-hidden');
    btnColorOrange.classList.remove('visually-hidden');
    btnColorYellow.classList.remove('visually-hidden');
    btnColorGreen.classList.remove('visually-hidden');
    btnColorBlue.classList.remove('visually-hidden');
    btnColorPurple.classList.remove('visually-hidden');
    btnColorGray.classList.remove('visually-hidden');
    btnColorWhite.classList.remove('visually-hidden');
    btnColorGold.classList.remove('visually-hidden');
    btnColorSilver.classList.remove('visually-hidden');
    btnNoColor.classList.remove('visually-hidden');

    if (bandName == "figure") {
        btnColorGold.classList.add('visually-hidden');
        btnColorSilver.classList.add('visually-hidden');
        btnNoColor.classList.add('visually-hidden');
        value = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0];
    }

    if (bandName == "multipier") {
        btnNoColor.classList.add('visually-hidden');
        value = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 0.1, 0.01, 0];
    }

    if (bandName == "tolerance") {
        btnColorBlack.classList.add('visually-hidden');
        btnColorOrange.classList.add('visually-hidden');
        btnColorYellow.classList.add('visually-hidden');
        btnColorWhite.classList.add('visually-hidden');
        value = [0, 1, 2, 0, 0, 0.5, 0.25, 0.1, 0.05, 0, 5, 10, 20];
    }

    if (bandName == "temperature") {
        btnColorBlack.classList.add('visually-hidden');
        btnColorGreen.classList.add('visually-hidden');
        btnColorGray.classList.add('visually-hidden');
        btnColorWhite.classList.add('visually-hidden');
        btnColorGold.classList.add('visually-hidden');
        btnColorSilver.classList.add('visually-hidden');
        btnNoColor.classList.add('visually-hidden');
        value = [0, 100, 50, 15, 25, 0, 10, 5, 0, 0, 0, 0, 0];
    }

    valueColorBlack.innerText = value[0];
    valueColorBrown.innerText = value[1];
    valueColorRed.innerText = value[2];
    valueColorOrange.innerText = value[3];
    valueColorYellow.innerText = value[4];
    valueColorGreen.innerText = value[5];
    valueColorBlue.innerText = value[6];
    valueColorPurple.innerText = value[7];
    valueColorGray.innerText = value[8];
    valueColorWhite.innerText = value[9];
    valueColorGold.innerText = value[10];
    valueColorSilver.innerText = value[11];
    valueNoColor.innerText = value[12];
}
// Show color and value end

// Band type four
const bandOneTypeFourResistorBand = document.getElementById('bandOneTypeFourResistorBand');
const bandTwoTypeFourResistorBand = document.getElementById('bandTwoTypeFourResistorBand');
const bandThreeTypeFourResistorBand = document.getElementById('bandThreeTypeFourResistorBand');
const bandFourTypeFourResistorBand = document.getElementById('bandFourTypeFourResistorBand');

bandOneTypeFourResistorBand.addEventListener('click', function () {
    showColor('figure');
    btnColorBlack.classList.add('visually-hidden');
    bandActive = bandOneTypeFourResistorBand;
});

bandTwoTypeFourResistorBand.addEventListener('click', function () {
    showColor('figure');
    bandActive = bandTwoTypeFourResistorBand;
});

bandThreeTypeFourResistorBand.addEventListener('click', function () {
    showColor('multipier');
    bandActive = bandThreeTypeFourResistorBand;
});

bandFourTypeFourResistorBand.addEventListener('click', function () {
    showColor('tolerance');
    bandActive = bandFourTypeFourResistorBand;
});
// Band type four end

// Band type six
const bandOneTypeFiveResistorBand = document.getElementById('bandOneTypeFiveResistorBand');
const bandTwoTypeFiveResistorBand = document.getElementById('bandTwoTypeFiveResistorBand');
const bandThreeTypeFiveResistorBand = document.getElementById('bandThreeTypeFiveResistorBand');
const bandFourTypeFiveResistorBand = document.getElementById('bandFourTypeFiveResistorBand');
const bandFiveTypeFiveResistorBand = document.getElementById('bandFiveTypeFiveResistorBand');

bandOneTypeFiveResistorBand.addEventListener('click', function () {
    showColor('figure');
    btnColorBlack.classList.add('visually-hidden');
    bandActive = bandOneTypeFiveResistorBand;
});

bandTwoTypeFiveResistorBand.addEventListener('click', function () {
    showColor('figure');
    bandActive = bandTwoTypeFiveResistorBand;
});

bandThreeTypeFiveResistorBand.addEventListener('click', function () {
    showColor('figure');
    bandActive = bandThreeTypeFiveResistorBand;
});

bandFourTypeFiveResistorBand.addEventListener('click', function () {
    showColor('multipier');
    bandActive = bandFourTypeFiveResistorBand;
});

bandFiveTypeFiveResistorBand.addEventListener('click', function () {
    showColor('tolerance');
    bandActive = bandFiveTypeFiveResistorBand;
});
// Band type six end


// Band type six
const bandOneTypeSixResistorBand = document.getElementById('bandOneTypeSixResistorBand');
const bandTwoTypeSixResistorBand = document.getElementById('bandTwoTypeSixResistorBand');
const bandThreeTypeSixResistorBand = document.getElementById('bandThreeTypeSixResistorBand');
const bandFourTypeSixResistorBand = document.getElementById('bandFourTypeSixResistorBand');
const bandFiveTypeSixResistorBand = document.getElementById('bandFiveTypeSixResistorBand');
const bandSixTypeSixResistorBand = document.getElementById('bandSixTypeSixResistorBand');

bandOneTypeSixResistorBand.addEventListener('click', function () {
    showColor('figure');
    btnColorBlack.classList.add('visually-hidden');
    bandActive = bandOneTypeSixResistorBand;
});

bandTwoTypeSixResistorBand.addEventListener('click', function () {
    showColor('figure');
    bandActive = bandTwoTypeSixResistorBand;
});

bandThreeTypeSixResistorBand.addEventListener('click', function () {
    showColor('figure');
    bandActive = bandThreeTypeSixResistorBand;
});

bandFourTypeSixResistorBand.addEventListener('click', function () {
    showColor('multipier');
    bandActive = bandFourTypeSixResistorBand;
});

bandFiveTypeSixResistorBand.addEventListener('click', function () {
    showColor('tolerance');
    bandActive = bandFiveTypeSixResistorBand;
});

bandSixTypeSixResistorBand.addEventListener('click', function () {
    showColor('temperature');
    bandActive = bandSixTypeSixResistorBand;
});
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

btnColorBlack.addEventListener('click', function () {
    changeColorBandActive('bg-black');
});

btnColorBrown.addEventListener('click', function () {
    changeColorBandActive('bg-brown');
});

btnColorRed.addEventListener('click', function () {
    changeColorBandActive('bg-red');
});

btnColorOrange.addEventListener('click', function () {
    changeColorBandActive('bg-orange');
});

btnColorYellow.addEventListener('click', function () {
    changeColorBandActive('bg-yellow');
});

btnColorGreen.addEventListener('click', function () {
    changeColorBandActive('bg-green');
});

btnColorBlue.addEventListener('click', function () {
    changeColorBandActive('bg-blue');
});

btnColorPurple.addEventListener('click', function () {
    changeColorBandActive('bg-purple');
});

btnColorGray.addEventListener('click', function () {
    changeColorBandActive('bg-gray');
});

btnColorWhite.addEventListener('click', function () {
    changeColorBandActive('bg-white');
});

btnColorGold.addEventListener('click', function () {
    changeColorBandActive('bg-gold');
});

btnColorSilver.addEventListener('click', function () {
    changeColorBandActive('bg-silver');
});

btnNoColor.addEventListener('click', function () {
    changeColorBandActive('bg-transparent');
});

// Modal choose color end

