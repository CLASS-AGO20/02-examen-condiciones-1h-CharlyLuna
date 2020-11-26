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
