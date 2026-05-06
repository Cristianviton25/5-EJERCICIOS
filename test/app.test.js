import { ejercicio13, ejercicio14, ejercicio15, ejercicio16 } from "../src/js/EJERCICIOS.js";

function ejecutarPruebas () {
    let pasadas = 0;
    let fallidas = 0;

    function probar(nombre, fn, input) {
        try {
            const resultado = fn(input);

            if (typeof resultado === "string") {
                console.log(`🟩 ${nombre} pasado`);
                pasadas++;
            } else {
                console.log(`🟥 ${nombre} fallido: no retorna string`);
                fallidas++;
            }

        } catch (error) {
            console.log(`🟥 ${nombre} error:`, error.message);
            fallidas++;
        }
    }

    probar("ejercicio 13", ejercicio13, "1,2,3");
    probar("ejercicio 14", ejercicio14, "1,2,3");
    probar("ejercicio 15", ejercicio15, "1,2,3");
    probar("ejercicio 16", ejercicio16, "1,2,3");

    console.log(`\nResultados: ${pasadas} pasadas, ${fallidas} fallidas`);

    if (fallidas > 0) process.exit(1);
}

ejecutarPruebas();