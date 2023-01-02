import { Grid, useMediaQuery } from "@mui/material";
import { useContext, useState } from "react";
import Context from "../../context/contextPrincipal";
import { IoIosAddCircleOutline as Plus } from "react-icons/io";
import { MdOutlineDeleteOutline as Dele } from "react-icons/md";
import { AiTwotoneEdit as Editar } from 'react-icons/ai'
import { RiSubtractFill as Subs } from "react-icons/ri";
import { MdAddTask as Pago } from "react-icons/md";
import { adminis, useAdmin } from "../../hooks/useAdmin";
import { useAuth0 } from "@auth0/auth0-react";
import { delete_Admin, edit_Admin } from "../../lib/admin";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Paginacion } from "./Paginacion";
import { goToPage, next, previous } from "../../utils/utils";
import { TableColum } from "./TableColumn";

// interface AdminProps {
//     admin: adminis;
    
// }
export const Tables = () => {
    const [light] = useContext(Context);
    const mobile = useMediaQuery("(max-width:600px)", { noSsr: true });
    const tablet = useMediaQuery("(max-width:950px)", { noSsr: true });
    const { data: adminis, mutate } = useAdmin();

    const formatoPorcentaje = (valor) => {
        return Number(valor).toLocaleString("es-AR", {
            style: "percent",
            minimumFractionDigits: 2,
        });
    };

    // const filterTipo =(array, tipo)=>{
    //     const newFilter = array.filter(info => info.tipo.includes(tipo));
    //     return newFilter;
    // }

    // let ingreso =filterTipo(opera, '+').reduce((acumulador, actual) => acumulador + actual.monto, 0)
    
    // let egreso = filterTipo(opera, '-').reduce((acumulador, actual) => acumulador + actual.monto, 0)
    

    const moneda = (valor) => {
        const valorDolar = valor ?? 0;
        return Number(valorDolar).toLocaleString("es-AR", {
            style: "currency",
            currency: "ARS",
            minimumFractionDigits: 2,
        });
    };
    const { getAccessTokenSilently } = useAuth0();

    // const deleteAdmin = async (e) => {
    //     e.preventDefault();
    //     const token = await getAccessTokenSilently();
    //     await delete_Admin(admin._id, token)
    //     console.log('ADMIN ELIMINADO')
    // }

    // const editAdmin = async (e) => {
    //     e.preventDefault();
    //     const token = await getAccessTokenSilently();
    //     await edit_Admin({
    //         detalleARS: admin.detalleARS,
    //         monto: admin.monto,
    //         pago:'no',
    //         tipo: admin.tipo,
    //     }, token)
    //     console.log('ADMIN EDITADO')
    // }
    interface Column {
        id: 'Ingreso / Egreso' | 'Monto' | 'Moneda' | 'Estatus' | 'Accion';
        label: string;
        minWidth?: number;
        align?: 'right';
        }

    const columns: readonly Column[] = [
        { id: 'Ingreso / Egreso', label: 'Ingreso / Egreso', minWidth: 300 },
        { id: 'Monto', label: 'Monto', minWidth: 100 },
        { id: 'Moneda', label: 'Moneda', minWidth: 170, align: 'right',},
        { id: 'Estatus', label: 'Estatus', minWidth: 170, align: 'right',},
        { id: 'Accion', label: 'Accion', minWidth:170, align: 'right',},
        ];
console.log('admin', adminis);

    return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 300 }}>
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                        <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                        >
                        {column.label}
                        </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {adminis ? adminis.map((e) => (
                        <TableColum admin={e} opera={adminis} />
                        )): 'hola'}
                </TableBody>
            </Table>
        </TableContainer>
    </Paper>

        // <Grid item >
        //     <Grid item sx={{ width: !mobile ? "420px" : "100%", height: "100%", borderRadius: "16px", background: light ? admin.pago === 'si' ? 'var(--check)' : "var(--ceroN)" : admin.pago === 'si' ? 'var(--zero)' : "var(--terciarioN)", padding: "16px",}}>
        //         <Grid item container mb={2} justifyContent={"space-between"} sx={{ color: light ? "var(--terciario)" : "var(--cero3)", fontSize: "14.5px",}}>
        //             <Grid item sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
        //                 {admin.tipo === "+" ? (<Plus size={23} style={{ color: "var(--activo)" }} />):(<Subs size={23} style={{ color: "var(--danger)" }} />)} {admin.detalleARS}
        //             </Grid>
        //             <Grid item sx={{ display: "flex", alignItems: "center", gap: "4px", color: admin.tipo === '+' ? "var(--activo)" : "var(--danger)", fontWeight: "900",}}>
        //                 {moneda(admin.monto)} {admin.tipo === '-' ? (<Grid item sx={{ marginLeft: "2px", color: "var(--porcent)", fontWeight: "500", fontSize: "12px",}}>
        //                         { formatoPorcentaje(admin.monto/egreso)}
        //                 </Grid>) : (null)}
        //                 <Dele size={20} onClick={deleteAdmin} style={{ color: "var(--primario)", cursor: admin.pago === 'si' ? '' : 'pointer' }} />
        //                 {admin.tipo === '-' ? (<Pago onClick={editAdmin} size={20} style={{ color: admin.pago === 'no' ? "var(--hazard)" : 'var(--activo)', cursor: admin.pago === 'si' ? '' : 'pointer' }} />) : (null)}
        //             </Grid>
        //         </Grid>
        //     </Grid>
        // </Grid>
    );
};
