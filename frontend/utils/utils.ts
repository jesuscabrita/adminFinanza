export const moneda = (valor) => {
    const valorDolar = valor ?? 0;
    return Number(valorDolar).toLocaleString("es-AR", {
        style: "currency",
        currency: "ARS",
        minimumFractionDigits: 2,
    })
}
export const filterPago =(array, pago)=>{
    try{
    const newFilter = array.filter(info => info.pago === pago);
    return newFilter;
    }catch (err) {
    throw new Error(err);
    }
}
export const filterTipo =(array, tipo)=>{
    try{
    const newFilter = array.filter(info => info.tipo === tipo);
    return newFilter;
    }catch (err) {
    throw new Error(err);
    }
}
export const filterArray = (posicion, title, array, cantidad)=>{
    const newFilter =array.filter(info => info.title.includes(title))
    return newFilter.slice( posicion, posicion % 2 ? posicion + 1 : posicion + cantidad)
}
