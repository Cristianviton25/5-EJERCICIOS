import {ejercicio13, ejercicio14, ejercicio15, ejercicio16} from "../src/js/EJERCICIOS.js";

function ejecutarPruebas () {
    let pasadas = 0;
    let fallidas = 0;

    const eje13 = ejercicio13("Resolver")
    if (eje13.includes("Resolver")) {
        console.log("🟩 test 1 pasado: función ejercicio 13 correcta");
        pasadas ++;
    } else {
        console.log("🟥 test 1 fallido:", eje13);
        fallidas++;
    }

    const eje14 = ejercicio14("Resuelve")
    if (eje14.includes("Resuelve")){
        console.log("🟩 test 2 pasado: función ejercicio 14 correcta");
        pasadas ++;
    } else {
        console.log("🟥 test 2 fallido:", eje14);
        fallidas ++;
    }

    const eje15 = ejercicio15("Resuel")
    if (eje15.includes("Resuel")){
        console.log("🟩 test 3 pasado: función ejercicio 15 correcta");
        pasadas ++;
    } else {
        console.log("🟥 test 3 fallido:", eje15);
        fallidas ++;
    }

    const eje16 = ejercicio14("Resu")
    if (eje16.includes("Resu")){
        console.log("🟩 test 4 pasado: función ejercicio 16 correcta");
        pasadas ++;
    } else {
        console.log("🟥 test 4 fallido:", eje16);
        fallidas ++;
    }

    console.log("\nResultados: " + pasadas + " pasadas, ", + fallidas + "fallidas");
    if (fallidas > 0) process.exit(1);
}

ejecutarPruebas();