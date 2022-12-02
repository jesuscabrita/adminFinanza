import mongoose from "mongoose";
import { MONGODB_URL } from "./config";
import { AdminModel } from "./model/admin.model";

(async () => {
    await mongoose.connect(MONGODB_URL);

    // Elimina todos los product en la colección de mongodb
    try {
        await AdminModel.collection.drop();
    } catch (error) {
        console.log("No se puede eliminar la colección que no existe");
    }

    // Create some product
    await AdminModel.create([
        {
            detalleARS: 'Alquiler',
            monto: 28000,
            tipo: '-',
            pago: 'no',
            user_id: 'jesuscabrita',
        },
        {
            detalleARS: 'Expesas',
            monto: 13600,
            tipo: '-',
            pago: 'no',
            user_id: 'google-oauth2|103458595165102849980',
        },
        {
            detalleARS: 'Comida',
            monto: 3600,
            tipo: '+',
            pago: 'no',
            user_id: 'google-oauth2|103458595165102849980',
        },
        {
            detalleARS: 'Salidas',
            monto: 43600,
            tipo: '-',
            pago: 'no',
            user_id: 'google-oauth2|103458595165102849980',
        },
        {
            detalleARS: 'Futbol',
            monto: 2600,
            tipo: '-',
            pago: 'no',
            user_id: 'google-oauth2|103458595165102849980',
        },
        {
            detalleARS: 'Sueldo',
            monto: 172600,
            tipo: '+',
            pago: 'no',
            user_id: 'google-oauth2|103458595165102849980',
        },
        {
            detalleARS: 'Viajes',
            monto: 2172600,
            tipo: '-',
            pago: 'no',
            user_id: 'eleanaguillen',
        },
    ]);

    console.log("LISTO..!");
    await mongoose.disconnect();
})();
