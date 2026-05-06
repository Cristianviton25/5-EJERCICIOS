// 🔹 FUNCIÓN PURA (TESTEABLE)
export function reverseArrayLogic(input) {
    if (!input) {
        return "Ingresa números válidos.";
    }

    const array = input.split(",").map(num => num.trim());
    const invertido = [];

    for (let i = array.length - 1; i >= 0; i--) {
        invertido.push(array[i]);
    }

    return `Vector invertido: [ ${invertido.join(", ")} ]`;
}


// 🔹 FUNCIÓN ORIGINAL (SIGUE FUNCIONANDO EN TU HTML)
export function reverseArray() {
    if (typeof document === "undefined") return;

    const input = document.getElementById("arrayInput14").value;

    const resultado = reverseArrayLogic(input);

    document.getElementById("resultado").innerHTML = resultado;
}