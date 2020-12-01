export default class App {

    convertir(pesos) {
        if(pesos < 2000) {
            return pesos * 20.5;
        } else {
            return pesos * 22.7;
        }
    }

    costoRenta(kilometros) {
        if(kilometros < 50) {
            return kilometros * 3;
        } else if(kilometros >= 50 && kilometros < 100) {
            return kilometros * 5;
        } else if(kilometros >= 100 && kilometros < 200) {
            return kilometros * 6;
        } else {
            return kilometros * 6.5;
        }
    }

    puedeCircular(dia,terminacion) {
        if(terminacion == 0 && dia == 1) {
            return true;
        } else if(terminacion == 1 && dia == 2) {
            return true
        } else if(terminacion == 2 && (dia == 3 || dia == 4)) {
            return true;
        } else if(dia <1 || dia > 7) {
            return false;
        } else if(terminacion > 2 && (dia > 0 || dia < 8) ) {
            return true;
        } else {
            return false;
        }
    }
}

let app = new App();

// Comprobacion convertir
console.log(app.convertir(1000));
console.log(app.convertir(2000));
console.log(app.convertir(2500));

// Comprobacion costoRenta
console.log(app.costoRenta(49));
console.log(app.costoRenta(50));
console.log(app.costoRenta(199));
console.log(app.costoRenta(500));

// Comprobacion puedeCircular
console.log(app.puedeCircular(2,0));
console.log(app.puedeCircular(2,1));
console.log(app.puedeCircular(4,2));
console.log(app.puedeCircular(8,0));
console.log(app.puedeCircular(6,4));