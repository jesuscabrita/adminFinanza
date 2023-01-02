import { Grid } from "@mui/material";
import { useContext } from "react";
import Context from "../../context/contextPrincipal";
import { HiOutlineUser as User } from "react-icons/hi";
import {FiEdit3 as Edit} from 'react-icons/fi';
import {ImSad2 as Sad} from 'react-icons/im';
import { FaSadCry as Triste} from 'react-icons/fa';
import { BiHappyAlt as Feliz} from 'react-icons/bi';
import { TarjetaDivisa } from "./TarjetaDivisa";

export const TarjetaUser = ({admin}) => {
    const [light] = useContext(Context);

    const moneda = (valor) => {
        const valorDolar = valor ?? 0;
        return Number(valorDolar).toLocaleString("es-AR", {
            style: "currency",
            currency: "ARS",
            minimumFractionDigits: 2,
        });
    };
    
    const formatoPorcentaje = (valor) => {
        const valorDolar = valor ?? 0;
        return Number(valorDolar).toLocaleString("es-AR", {
            style: "percent",
            minimumFractionDigits: 2,
        });
    };

    const filterPago =(array, tipo)=>{
        const newFilter = array.filter(info => info.pago === tipo);
        return newFilter;
    }
    const filterTipo =(array, tipo)=>{
        const newFilter = array.filter(info => info.tipo === tipo);
        return newFilter;
    }


    let ingreso =filterTipo(admin, '+').reduce((acumulador, actual) => acumulador + actual.monto, 0)
    
    let egreso = filterPago(admin, 'si').reduce((acumulador, actual) => acumulador + actual.monto, 0)
    
    let numero = formatoPorcentaje(egreso / ingreso);
    
    let ahorro = ingreso - egreso;
    return (
        <Grid item>
            <Grid item sx={{ width: "420px", height: "100%", borderRadius: "16px", background: light ? "var(--ceroN)" : "var(--terciarioN)", paddingBottom: "16px",}}>
                <Grid container item sx={{ background: "var(--segundario)", borderRadius: "10px 10px 0px 0px", padding: "10px", color: "var(--cero)", alignItems: "center", gap: "16px",}}>
                    <User size={25} /> Informacion de Ingresos
                </Grid>
                <Grid item sx={{ padding: "18px" }}>
                    {/* <Grid item mb={1} sx={{ color: light ? "var(--terciario)" : "var(--cero3)", fontSize: "14.5px",}} container alignItems={"center"}>
                        Mes de administracion :
                        <Grid item sx={{ color: "var(--primario)", fontWeight: "700", fontSize: "16px", display:'flex', alignItems:'center',  gap:'4px'}}>
                            {"12/2022"} <Edit style={{color:'var(--hazard)'}}/>
                        </Grid>
                    </Grid> */}
                    <Grid item container sx={{ justifyContent: "space-between" }}>
                        <Grid item sx={{ color: light ? "var(--terciario)" : "var(--cero3)", fontSize: "14.5px",}}>
                            Ingreso: <Grid item sx={{ color: 'var(--activo)', fontWeight: "900", fontSize: "17px",}}>{moneda(ingreso)}</Grid>
                        </Grid>
                        <Grid item sx={{ color: light ? "var(--terciario)" : "var(--cero3)", fontSize: "14.5px",}}>
                            Egreso:
                            <Grid item container sx={{ color: 'var(--danger)', fontWeight: "900", fontSize: "17px",}}>
                                {moneda(egreso)} <Grid item mt={0.5} sx={{ marginLeft: '8px', color: 'var(--porcent)', fontWeight: "500", fontSize: "12px",}}>{numero}</Grid></Grid>
                        </Grid>
                    </Grid>
                    {/* <Grid item mt={1} mb={1} sx={{ color: light ? "var(--terciario)" : "var(--cero3)", fontSize: "14.5px",}}>Deudas en divisas</Grid> */}
                    {/* <Grid>
                        {divisa &&  divisa.map((divisas)=>(<TarjetaDivisa divisa={divisas}/>))}
                    </Grid> */}
                    <Grid item sx={{ color: light ? "var(--terciario)" : "var(--cero3)", fontSize: "14.5px",}}>
                        Ahorro
                    </Grid>
                    <Grid item  container alignItems={'center'} gap={1} sx={{ color: ahorro <= 10000 ? ahorro < 5000 ? 'var(--danger)' : "var(--hazard)" : 'var(--activo)', fontSize: "16px", fontWeight: "900"}}>
                        {moneda(ahorro)}{ahorro  <= 10000 ? ahorro < 5000 ? <Triste size={20}/> : <Sad size={20}/> : <Feliz size={20}/>}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};
