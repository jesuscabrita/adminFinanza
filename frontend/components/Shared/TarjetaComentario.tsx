import { Grid, useMediaQuery } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { BiCommentDetail as Comen } from 'react-icons/bi';
import { EstrellaDisable } from "./Start";
import { useContext } from "react";
import Context from "../../context/contextPrincipal";

export const Comentario =()=>{
    const [light] = useContext(Context);
    const mobile = useMediaQuery("(max-width:600px)", { noSsr: true });

    return(
        <Grid sx={{
            minWidth: '300px',
            width: !mobile ? '600px': '330px',
            height: "100%", 
            borderRadius: "16px", 
            background: light ? "var(--ceroN)" : "var(--terciarioN)", 
            paddingBottom:'16px',
            }}>
            <Grid item sx={{
                display:'flex',
                flexDirection:!mobile ?'row' : 'column',
                background: "var(--segundario)", 
                borderRadius: "10px 10px 0px 0px", 
                padding: "10px", 
                color: "var(--cero)", 
                alignItems: "center", 
                gap: "16px",
                }}>
                <Grid container alignItems={'center'} gap={1} fontSize={'12px'}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{width:'30px', height:'30px'}} />
                    {'Jesus Cabrita'}
                    <Comen size={15} />
                </Grid>
                <Grid container alignItems={'center'} gap={2} mt={-2}>
                <EstrellaDisable/>
                </Grid>
            </Grid>
            <Grid sx={{padding:'10px',color: light ? "var(--terciario)" : "var(--cero3)"}}>
            {'pruebaaaa pruebaaa pruebaaaa pruebaaa'}
            </Grid>
            

        </Grid>
    )
}