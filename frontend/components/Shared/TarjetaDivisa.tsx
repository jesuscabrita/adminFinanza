import { Grid } from "@mui/material";
import Context from "../../context/contextPrincipal";
import { useContext, useState } from "react";
import { AiOutlinePaperClip as Cli } from 'react-icons/ai';
import { MdOutlineDeleteOutline as Dele } from "react-icons/md";
import {FiEdit3 as Edit} from 'react-icons/fi';
import { useAuth0 } from "@auth0/auth0-react";
import { delete_Divisa } from "../../lib/divisa";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    };

export const TarjetaDivisa =({divisa})=>{
    const [light] = useContext(Context);
    const [open, setOpen] = useState(false);
    const { getAccessTokenSilently } = useAuth0();
    
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const deleteDivisa = async (e)=>{
        e.preventDefault();
        const token = await getAccessTokenSilently();
        await delete_Divisa(divisa._id, token)
    }

    return(
        <Grid item container justifyContent={"space-between"} sx={{color: light ? "var(--terciario)" : "var(--cero3)", fontSize: "14.5px",}}>
                <Grid item sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <Cli/> {divisa.detalleDIV}
                </Grid>
                <Grid item sx={{ display: "flex", alignItems: "center", gap: "4px", color: "var(--primario)", fontWeight: "900"}}>
                    {divisa.divisa} {divisa.montoDivisa} - <Dele size={20} onClick={deleteDivisa} style={{cursor:'pointer'}}/> <Edit size={20} onClick={handleOpen} style={{cursor:'pointer',color:'var(--hazard)'}}/>   
                </Grid>                  
                <Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                <Typography variant="h6" component="h2">Proximamente</Typography>
                <Typography sx={{ mt: 2 }}>podras editar las deudas en divisas</Typography>
                </Box>
                </Modal>
        </Grid>
    )
}