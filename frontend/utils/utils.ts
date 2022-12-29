

export const moneda = (valor) => {
    const valorDolar = valor ?? 0;
    return Number(valorDolar).toLocaleString("es-AR", {
        style: "currency",
        currency: "ARS",
        minimumFractionDigits: 2,
    })
}