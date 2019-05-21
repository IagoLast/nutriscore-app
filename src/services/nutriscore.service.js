export function computeScore({ energy, saturatedFat, sugar, salt, fibre, protein, vegetableFruitNuts }) {
    const positivePoints = _computePositivepoints({ energy, saturatedFat, sugar, salt, fibre, protein, vegetableFruitNuts });
    const negativePoints = _computeNegativepoints({ energy, saturatedFat, sugar, salt, fibre, protein, vegetableFruitNuts });
    if (negativePoints < 11) {
        return negativePoints - positivePoints;
    }
    const fruitPctPoints = _computeFruitPctPoints(vegetableFruitNuts);
    if (fruitPctPoints === 5) {
        return negativePoints - positivePoints;
    }
    const fiberPoints = _computeFibrePoints(fibre);
    return negativePoints - (fiberPoints + fruitPctPoints);
}

function _computeNegativepoints({ energy, saturatedFat, sugar, salt }) {
    return _computeEnergyPoints(energy) + + _computeSugarScore(sugar) + _computeSaturatedFatPoints(saturatedFat) + _computeSodiumScore(salt);
}

function _computePositivepoints({ fibre, protein, vegetableFruitNuts }) {
    return _computeFruitPctPoints(vegetableFruitNuts) + _computeFibrePoints(fibre) + _computeProteinPoints(protein);
}

function _saltToSodium(salt) {
    return (salt / 2.5) * 1000;
}

function _computeEnergyPoints(energy) {
    if (energy > 3350) {
        return 10;
    }
    if (energy > 3015) {
        return 9;
    }
    if (energy > 2680) {
        return 8;
    }
    if (energy > 2345) {
        return 7;
    }
    if (energy > 2010) {
        return 6;
    }
    if (energy > 1675) {
        return 5;
    }
    if (energy > 1340) {
        return 4;
    }
    if (energy > 1005) {
        return 3;
    }
    if (energy > 670) {
        return 2;
    }
    if (energy > 335) {
        return 1;
    }
    return 0;
}

function _computeSaturatedFatPoints(value) {
    if (value > 10) {
        return 10;
    }
    if (value > 9) {
        return 9;
    }
    if (value > 8) {
        return 8;
    }
    if (value > 7) {
        return 7;
    }
    if (value > 6) {
        return 6;
    }
    if (value > 5) {
        return 5;
    }
    if (value > 4) {
        return 4;
    }
    if (value > 3) {
        return 3;
    }
    if (value > 2) {
        return 2;
    }
    if (value > 1) {
        return 1;
    }
    return 0;
}

function _computeSodiumScore(salt) {
    // console.log('salt:', salt);
    const value = _saltToSodium(salt);
    if (value > 900) {
        return 10;
    }
    if (value > 810) {
        return 9;
    }
    if (value > 720) {
        return 8;
    }
    if (value > 630) {
        return 7;
    }
    if (value > 540) {
        return 6;
    }
    if (value > 450) {
        return 5;
    }
    if (value > 360) {
        return 4;
    }
    if (value > 270) {
        return 3;
    }
    if (value > 180) {
        return 2;
    }
    if (value > 90) {
        return 1;
    }
    return 0;
}

function _computeSugarScore(value) {
    // console.log('Sugars:', value);
    if (value > 45) {
        return 10;
    }
    if (value > 40) {
        return 9;
    }
    if (value > 36) {
        return 8;
    }
    if (value > 31) {
        return 7;
    }
    if (value > 27) {
        return 6;
    }
    if (value > 22.5) {
        return 5;
    }
    if (value > 18) {
        return 4;
    }
    if (value > 13.5) {
        return 3;
    }
    if (value > 9) {
        return 2;
    }
    if (value > 4.5) {
        return 1;
    }
    return 0;
}

function _computeFruitPctPoints(value) {
    // console.log('vegetableFruitNuts:', value);
    if (value > 80) {
        return 5;
    }
    if (value > 60) {
        return 2;
    }
    if (value > 40) {
        return 1;
    }
    return 0;
}

function _computeFibrePoints(value) {
    // console.log('Fibre:', value)
    if (value > 4.7) {
        return 5;
    }
    if (value > 3.7) {
        return 4;
    }
    if (value > 2.8) {
        return 3;
    }
    if (value > 1.9) {
        return 2;
    }
    if (value > 0.9) {
        return 1;
    }
    return 0;
}

function _computeProteinPoints(value) {
    // console.log('protein: ', value);
    if (value > 8.0) {
        return 5;
    }
    if (value > 6.4) {
        return 4;
    }
    if (value > 4.8) {
        return 3;
    }
    if (value > 3.2) {
        return 2;
    }
    if (value > 1.6) {
        return 1;
    }
    return 0;
}

export default { computeScore };