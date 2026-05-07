// 🔹 FUNCIÓN PARA TEST
export function procesarBusquedaLogic(dataText, searchValue) {

    if (!dataText) {
        return "Ingresa datos válidos.";
    }

    let array = dataText.split(",").map(Number);

    return searchInArray(array, searchValue);
}


// 🔹 LÓGICA DE BÚSQUEDA
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


// 🔹 ESTA FUNCIÓN SIGUE FUNCIONANDO EN TU HTML
export function procesarBusqueda() {

    // evita errores en npm test
    if (typeof document === "undefined") return;

    let dataText = document.getElementById("dataInput").value;

    let searchValue = parseInt(
        document.getElementById("searchInput").value
    );

    let resultado = procesarBusquedaLogic(dataText, searchValue);

    document.getElementById("resultado").innerHTML = resultado;
}