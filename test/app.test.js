import {ejercicio13, ejercicio14, ejercicio15, ejercicio16} from "../src/js/EJERCICIOS.js";

function ejecutarPruebas () {
    let pasadas = 0;
    let fallidas = 0;

    const eje13 = ejercicio13("Resolver")
    if (eje13.includes("Resolver")) {
        console.log("🟩 test 1 pasado: función ejercicio 13 correcta");
        pasadas ++;
    } else {
        console.log("🟥 test 1 fallido:", eje13)
    }
}