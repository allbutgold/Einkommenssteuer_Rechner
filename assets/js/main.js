
let zVEinitial = document.querySelector('#income');


function checkState() {
    const zVESingle = document.querySelector('#zVESingle');
    console.log(zVESingle.value);
    if (zVESingle.checked === true) {
        zVEFinal = zVEinitial.value;
    } else {
        zVEFinal = (zVEinitial.value / 2);
    }
    console.log(zVEFinal);
}
checkState()



function calcTax() {
let output = '';
/* console.log(zVE.value); */
let zVE = Number(zVEinitial.value);
// console.log(zVE);
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

    case (zVE >= 58597 && zVE <= 277.825):
        output = (0.42 * input) - 9366.45;
    break

    case (zVE >= 277.826):
        output = (0.45 * zVE) - 17671.20;
    break
    default: 
    output = 0
}
document.getElementById("output").innerHTML = output
}

calcTax();
    