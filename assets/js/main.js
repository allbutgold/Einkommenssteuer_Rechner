const year = document.querySelector('#year');
let zVEFinal = '';



// console.log(Number(zVEFinal));

    
function checkState() {
    let zVEinitial = document.querySelector('#income');
    let zVESingle = document.querySelector('#zVESingle');
    // console.log(zVESingle.checked);

    if (zVESingle.checked == true) {
        zVEFinal = zVEinitial.value;
    } else {
        zVEFinal = (zVEinitial.value / 2);
    }
    console.log(Number(zVEFinal));
}
checkState()

function calcTax() {

let output = '';
/* console.log(zVE.value); */
let zVE = Number(zVEFinal);
console.log(zVE);

const year2020 = (output) => {
switch (true) {
    case (zVE <= 9408): 
        output = (zVE * 0);
    break

    case (zVE > 9408 && zVE <= 14532):
        y = ((zVE - 9408) / 10000);
        output = (972.87 * y + 1400) * y;
    break

    case (zVE >= 14533 && zVE <= 57051):
        z = ((zVE - 14532) / 10000)
        output = (212.02 * z + 2397) * z + 972.79;
    break

    case (zVE >= 57052 && zVE <= 270500):
        output = (0.42 * zVE) - 8963.74;
    break

    case (zVE >= 270501):
        output = (0.45 * zVE) - 17078.74;
    break
    default: 
    output = 0
}

output = Math.round(output);
console.log(output);
document.getElementById("output").innerHTML = output

}


const year2021 = (output) => {
switch (true) {
    case (zVE <= 9744): 
        output = (zVE * 0);
    break

    case (zVE > 9745 && zVE <= 14753):
        y = ((zVE - 9744) / 10000);
        output = (955.21 * y + 1400) * y;
    break

    case (zVE >= 14757 && zVE <= 57918):
        z = ((zVE - 14753) / 10000)
        output = (208,85 * z + 2397) * z + 950.96;
    break

    case (zVE >= 57919 && zVE <= 274612):
        output = (0.42 * zVE) - 9136.63;
    break

    case (zVE >= 274613):
        output = (0.45 * zVE) - 17374.99;
    break
    default: 
    output = 0
}

output = Math.round(output);
console.log(output);
document.getElementById("output").innerHTML = output

}


const year2022 = (output) => {
switch (true) {
    case (zVE <= 10347): 
        output = (zVE * 0);
    break

    case (zVE > 10347 && zVE <= 14926):
        y = ((zVE - 10347) / 10000);
        output = (1088.67 * y + 1400) * y;
    break

    case (zVE >= 14927 && zVE <= 58596):
        z = ((zVE - 14926) / 10000)
        output = (206,43 * z + 2397) * z + 869.32;
    break

    case (zVE >= 58597 && zVE <= 277825):
        output = (0.42 * zVE) - 9366.45;
    break

    case (zVE >= 277.826):
        output = (0.45 * zVE) - 17671.20;
    break
    default: 
    output = 0
}

output = Math.round(output);
// console.log(output);
document.getElementById("output").innerHTML = output

}
switch (year.value){
    case "0":
        year2020(zVE);
    break;
    case "1":
        year2021(zVE);
    break;
    case "2":
        year2022(zVE);
    break;
}
}

    