// ✅ LÓGICA
export function ejercicio14(input) {
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


// ✅ DOM (para tu página)
export function ejercicio14HTML() {
    if (typeof document === "undefined") return;

    const input = document.getElementById("arrayInput14").value;
    const resultado = ejercicio14(input);

    document.getElementById("resultado").innerHTML = resultado;
}