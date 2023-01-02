import { Grid } from "@mui/material";
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { adminis, useAdmin } from "../../hooks/useAdmin";
import { MdOutlineDeleteOutline as Dele } from "react-icons/md";
import { AiTwotoneEdit as Editar } from 'react-icons/ai';
import { delete_Admin, edit_Admin } from "../../lib/admin";
import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { filterTipo, formatoPorcentaje, moneda } from '../../utils/utils';
import { GiWallet as Wallet } from 'react-icons/gi';
import Swal from "sweetalert2";

interface AdminProps {
    admin: adminis;
    opera;
}
export const TableColum: React.FC<AdminProps> =({admin,opera})=>{
    const { getAccessTokenSilently } = useAuth0();

    

    const deleteAdmin = async (e) => {
        e.preventDefault();
        const token = await getAccessTokenSilently();
        await delete_Admin(admin._id, token)
        console.log("DELETEAPPOINTMENT!!");
    }

    const alertaDelete =()=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                    )
                    const token = await getAccessTokenSilently();
                    await delete_Admin(admin._id, token) 
            }
          })
         
    }

    let egreso = filterTipo(opera, '-').reduce((acumulador, actual) => acumulador + actual.monto, 0)

    return(
        <>
                        <TableRow hover role="checkbox" tabIndex={-1} key={admin._id}>
                            <TableCell>{admin.detalleARS}</TableCell>
                            <TableCell sx={{display:'flex', alignItems:'center', gap:'10px'}}>
                                {moneda(admin.monto)} 
                                {admin.tipo === '-' 
                                ?   <Grid 
                                        item 
                                        sx={{ 
                                            marginLeft: "2px", 
                                            color: "var(--porcent)", 
                                            fontWeight: "500", 
                                            fontSize: "12px",
                                            }}>
                                                {formatoPorcentaje(admin.monto/egreso)}
                                    </Grid> 
                                : null}
                            </TableCell>
                            <TableCell align="right">ARS</TableCell>
                            <TableCell align="right" ><Grid container sx={{background:'var(--activo)', justifyContent:'end'}}>pagado<Wallet/></Grid></TableCell>
                            <TableCell 
                                align="right" 
                                sx={{
                                    display:'flex', 
                                    gap:'10px'
                                    }}>
                                        <Editar size={20} style={{cursor:'pointer'}}/>
                                        <Dele size={20} onClick={alertaDelete} style={{cursor:'pointer'}}/>
                            </TableCell>
                        </TableRow>
        </>
    )
}