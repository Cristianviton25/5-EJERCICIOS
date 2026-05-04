import * as ejercicios from "./src/js/EJERCICIOS.js";

const selectEjercicio = document.getElementById("selectEjercicio");
const botonEjecutar = document.getElementById("botonEjecutar");
const resultadoDiv = document.getElementById("resultado");

// Limpiar inputs previos
function limpiarInputs() {
    const inputs = document.querySelectorAll(".input-dinamico");
    inputs.forEach(input => input.remove());
}

// Crear input dinámico
function crearInput(id, placeholder) {
    const input = document.createElement("input");
    input.id = id;
    input.placeholder = placeholder;
    input.type = "text";
    input.classList.add("input-dinamico");
    input.style.marginRight = "5px";
    return input;
}

// Generar inputs según ejercicio seleccionado
function generarInputs(valor) {
    limpiarInputs();

    switch (valor) {


        case "13":
            document.body.insertBefore(crearInput("dataInput", "Datos separados por coma"), botonEjecutar);
            document.body.insertBefore(crearInput("searchInput", "Elemento a buscar"), botonEjecutar);
            break;
        case "14":
            document.body.insertBefore(crearInput("arrayInput14", "Números separados por coma"), botonEjecutar);
            break;
        case "15":
            document.body.insertBefore(crearInput("numbersInput", "Números separados por coma"), botonEjecutar);
            break;
        case "16":
            document.body.insertBefore(crearInput("valuesInput", "Números separados por coma"), botonEjecutar);
            break;
    }
}

// Detectar cambio de ejercicio para generar inputs
selectEjercicio.addEventListener("change", () => generarInputs(selectEjercicio.value));

// Ejecutar ejercicio seleccionado
function ejecutarEjercicio() {
    const valor = selectEjercicio.value;
    resultadoDiv.innerHTML = "";
    if (ejercicios[`ejercicio${valor}`]) {
        ejercicios[`ejercicio${valor}`]();
    } else {
        resultadoDiv.innerHTML = "Selecciona un ejercicio válido.";
    }
}

botonEjecutar.addEventListener("click", ejecutarEjercicio);