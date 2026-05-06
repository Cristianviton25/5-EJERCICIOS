
// 🔹 LÓGICA (testeable)
export function procesarBusqueda(dataText, searchValue) {
    let array = dataText.split(",").map(Number);
    return searchInArray(array, searchValue);
}

export function searchInArray(data, value) {
    let i = 0;

    while (i < data.length) {
        if (data[i] === value) {
            return "Elemento encontrado en la posición: " + i;
        }
        i++;
    }

    return "El elemento no se encuentra en el vector.";
}


// 🔹 DOM (solo navegador)
export function procesarBusquedaDesdeHTML() {
    if (typeof document === "undefined") return;

    let dataText = document.getElementById("dataInput").value;
    let searchValue = parseInt(document.getElementById("searchInput").value);

    let resultado = procesarBusqueda(dataText, searchValue);

    document.getElementById("resultado").innerHTML = resultado;
}
