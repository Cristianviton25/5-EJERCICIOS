// 🔹 LÓGICA (testeable)
export function procesarBusqueda(dataText, searchValue) {

    let array = dataText.split(",").map(Number);

    return searchInArray(array, searchValue);
}

export function searchInArray(data, value) {

    let i = 0;

    while (i < data.length) {

        if (data[i] === value) {

            // ✅ devuelve la solución
            return "✅ Elemento encontrado en la posición: " + i;
        }

        i++;
    }

    // ✅ solución cuando no existe
    return "❌ El elemento no se encuentra en el vector.";
}


// 🔹 DOM (solo navegador)
export function procesarBusquedaDesdeHTML() {

    if (typeof document === "undefined") return;

    let dataText =
        document.getElementById("dataInput").value;

    let searchValue =
        parseInt(document.getElementById("searchInput").value);

    // ✅ obtiene el resultado
    let resultado =
        procesarBusqueda(dataText, searchValue);

    // ✅ muestra la solución en pantalla
    document.getElementById("resultado").innerHTML =
        resultado;
}