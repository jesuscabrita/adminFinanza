import { useMediaQuery } from "@mui/material";
import { useContext } from "react";
import Context from "../../context/contextPrincipal";
import { useAdmin } from "../../hooks/useAdmin";
import { useAuth0 } from "@auth0/auth0-react";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TableColum } from "./TableColumn";

export const Tables = () => {
    const [light] = useContext(Context);
    const mobile = useMediaQuery("(max-width:600px)", { noSsr: true });
    const { data: adminis, mutate } = useAdmin();
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
        { id: 'Estatus', label: 'Estatus', minWidth: 270, align: 'right',},
        { id: 'Accion', label: 'Accion', minWidth:170, align: 'right',},
        ];

    return (
    <Paper sx={{ width: '100%', overflow: 'hidden', marginTop:'10px' }}>
        <TableContainer sx={{ maxHeight: 300 }}>
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                        <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ 
                            minWidth: column.minWidth, 
                            background: "var(--segundario)",
                            color: "var(--cero)",  
                        }}
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
    );
};
