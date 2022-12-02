import { Grid, useMediaQuery } from "@mui/material";
import React, { useContext } from "react";
import Context from "../../context/contextPrincipal";
import { IoIosAddCircleOutline as Plus } from "react-icons/io";
import { MdOutlineDeleteOutline as Dele } from "react-icons/md";
import { RiSubtractFill as Subs } from "react-icons/ri";
import { MdAddTask as Pago } from "react-icons/md";
import { adminis } from "../../hooks/useAdmin";
import { useAuth0 } from "@auth0/auth0-react";
import { delete_Admin, edit_Admin } from "../../lib/admin";

interface AdminProps {
    admin: adminis;
    opera
}
export const Tables: React.FC<AdminProps> = ({ admin, opera }) => {
    const [light] = useContext(Context);
    const mobile = useMediaQuery("(max-width:600px)", { noSsr: true });
    const tablet = useMediaQuery("(max-width:950px)", { noSsr: true });

    const formatoPorcentaje = (valor) => {
        return Number(valor).toLocaleString("es-AR", {
            style: "percent",
            minimumFractionDigits: 2,
        });
    };

    const filterTipo =(array, tipo)=>{
        const newFilter = array.filter(info => info.tipo.includes(tipo));
        return newFilter;
    }

    let ingreso =filterTipo(opera, '+').reduce((acumulador, actual) => acumulador + actual.monto, 0)
    
    let egreso = filterTipo(opera, '-').reduce((acumulador, actual) => acumulador + actual.monto, 0)
    

    const moneda = (valor) => {
        const valorDolar = valor ?? 0;
        return Number(valorDolar).toLocaleString("es-AR", {
            style: "currency",
            currency: "ARS",
            minimumFractionDigits: 2,
        });
    };
    const { getAccessTokenSilently } = useAuth0();

    const deleteAdmin = async (e) => {
        e.preventDefault();
        const token = await getAccessTokenSilently();
        await delete_Admin(admin._id, token)
        console.log('ADMIN ELIMINADO')
    }

    const editAdmin = async (e) => {
        e.preventDefault();
        const token = await getAccessTokenSilently();
        await edit_Admin({
            detalleARS: admin.detalleARS,
            monto: admin.monto,
            pago:'no',
            tipo: admin.tipo,
        }, token)
        console.log('ADMIN EDITADO')
    }

    return (
        <Grid item >
            <Grid item sx={{ width: !mobile ? "420px" : "100%", height: "100%", borderRadius: "16px", background: light ? admin.pago === 'si' ? 'var(--check)' : "var(--ceroN)" : admin.pago === 'si' ? 'var(--zero)' : "var(--terciarioN)", padding: "16px",}}>
                <Grid item container mb={2} justifyContent={"space-between"} sx={{ color: light ? "var(--terciario)" : "var(--cero3)", fontSize: "14.5px",}}>
                    <Grid item sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
                        {admin.tipo === "+" ? (<Plus size={23} style={{ color: "var(--activo)" }} />):(<Subs size={23} style={{ color: "var(--danger)" }} />)} {admin.detalleARS}
                    </Grid>
                    <Grid item sx={{ display: "flex", alignItems: "center", gap: "4px", color: admin.tipo === '+' ? "var(--activo)" : "var(--danger)", fontWeight: "900",}}>
                        {moneda(admin.monto)} {admin.tipo === '-' ? (<Grid item sx={{ marginLeft: "2px", color: "var(--porcent)", fontWeight: "500", fontSize: "12px",}}>
                                { formatoPorcentaje(admin.monto/egreso)}
                        </Grid>) : (null)}
                        <Dele size={20} onClick={deleteAdmin} style={{ color: "var(--primario)", cursor: admin.pago === 'si' ? '' : 'pointer' }} />
                        {admin.tipo === '-' ? (<Pago onClick={editAdmin} size={20} style={{ color: admin.pago === 'no' ? "var(--hazard)" : 'var(--activo)', cursor: admin.pago === 'si' ? '' : 'pointer' }} />) : (null)}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};
