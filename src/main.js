export default class App {

    convertir(pesos) {
        if(pesos < 2000) {
            return pesos * 20.5;
        } else {
            return pesos * 22.7;
        }
    }
}

let app = new App();

// Comprobacion convertir
console.log(app.convertir(1000));
console.log(app.convertir(2000));
console.log(app.convertir(2500));