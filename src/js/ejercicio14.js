// ✅ FUNCIÓN PARA TEST
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


// ✅ FUNCIÓN PARA EL NAVEGADOR
export function reverseArray() {

    // evita error en npm test
    if (typeof document === "undefined") return;

    const input = document.getElementById("arrayInput14").value;

    const resultado = ejercicio14(input);

    document.getElementById("resultado").innerHTML = resultado;
}