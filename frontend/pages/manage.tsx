import { Grid, useMediaQuery } from "@mui/material";
import { useContext, useState } from "react";
import { useQuery } from "react-query";
import { Form } from "../components/Shared/Form";
import { Tables } from "../components/Shared/Table";
import { TarjetaUser } from "../components/Shared/TarjetaUser";
import Context from "../context/contextPrincipal";
import { useAdmin } from "../hooks/useAdmin";
import { adminGet } from "../service/adminService";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useAuth0 } from "@auth0/auth0-react";
import { BiLoader as Load} from 'react-icons/bi';
import { FaUserCircle as User } from 'react-icons/fa';
import { GiProgression as Progress } from "react-icons/gi";
import { Skeletones, SkeletonesForm, SkeletonesOne } from "../components/Shared/Skeleton";

const Manage = ({detalleARS, monto, tipo}) => {
    const [light] = useContext(Context);
    const mobile = useMediaQuery("(max-width:600px)", { noSsr: true });
    const { data: adminis, mutate } = useAdmin();
    const { loginWithRedirect, user,isLoading } = useAuth0();

    return (
    <>
    {!mobile ? 
    <>
    {user ? 
        <Grid item sx={{height:'100vh', width:'100%', padding:'20px'}}>
            <Grid container item sx={{
                fontSize:'25px',
                alignItems:'center',
                justifyContent:'center',
                color:light ? "var(--zero)" : "var(--ceroN)",
                gap:'10px',
                borderBottom:`1px solid ${light ? "var(--zero)" : "var(--ceroN)" } `,
                paddingBottom:'10px',
                width:'91%',
                marginLeft:'30px'
                }}>
                Administrar<Progress size={20} />
            </Grid>
                <Grid item sx={{
                    marginTop:'10px',
                    display:'flex', 
                    flexDirection:'row',
                    justifyContent:'center', 
                    gap:'30px',
                    }}>
                    {adminis ? <TarjetaUser admin={adminis}/> : <SkeletonesOne/>}
                    {adminis ? <Form/> : <SkeletonesForm/>}
                </Grid>
                    <Grid>
                    {adminis?  <Tables /> : <Skeletones/>}
                    </Grid>
        </Grid> 
    :   <Grid container item sx={{
            fontSize: '25px',
            alignItems: 'center',
            justifyContent: 'center',
            color: light ? "var(--zero)" : "var(--ceroN)",
            flexDirection: 'column',
            }}>
            {'Para acceder a esta sección'}
            <Grid item sx={{ fontSize: '18px' }}>Por favor inice sesion</Grid>
            <Grid
                onClick={() => loginWithRedirect()}
                sx={{ cursor: 'pointer' }}>
                <User size={60} />
            </Grid>
        </Grid>}
        </>
    :
    <>
    {user ? 
    <Grid container item sx={{
        height: '190vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '15px'
        }}>
        <Grid container item sx={{
            fontSize:'25px',
            alignItems:'center',
            justifyContent:'center',
            color:light ? "var(--zero)" : "var(--ceroN)",
            gap:'10px',
            borderBottom:`1px solid ${light ? "var(--zero)" : "var(--ceroN)" } `,
            paddingBottom:'10px',
            width:'91%',
            marginLeft:'30px'
            }}>
            Administrar<Progress size={20} />
        </Grid>
            <Grid item sx={{
                marginTop:'10px',
                display:'flex', 
                flexDirection:'column',
                alignItems:'center',
                gap:'30px',
                }}>
                {adminis ? <TarjetaUser admin={adminis}/> : <SkeletonesOne/>}
                {adminis ? <Form/> : <SkeletonesForm/>}
            </Grid>
                <Grid>
                    {adminis?  <Tables /> : <Skeletones/>}
                </Grid>
    </Grid>
        : <Grid container item sx={{
            fontSize: '25px',
            alignItems: 'center',
            justifyContent: 'center',
            color: light ? "var(--zero)" : "var(--ceroN)",
            marginTop: '250px',
            flexDirection: 'column',
            }}>
            {'Para acceder a esta sección'}
            <Grid item sx={{ fontSize: '18px' }}>Por favor inice sesion</Grid>
                <Grid
                    onClick={() => loginWithRedirect()}
                    sx={{ cursor: 'pointer' }}>
                    <User size={60} />
                </Grid>
        </Grid>} 
    </> 
        } 
        </>      
    );
};
export default Manage;
