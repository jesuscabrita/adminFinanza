import { Box, Grid, useMediaQuery } from "@mui/material";
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

const Manage = ({detalleARS, monto, tipo}) => {
    const [light] = useContext(Context);
    const mobile = useMediaQuery("(max-width:600px)", { noSsr: true });
    const [admin, setAdmin] = useState({detalleARS, monto, tipo});

    useQuery(['admin'], adminGet, {
        refetchOnWindowFocus: false,
        onSuccess: data => {
            setAdmin(data)
        }
    })

    // const filterTipo =(array, tipo)=>{
    //     const newFilter = array.filter(info => info.tipo.includes(tipo));
    //     return newFilter;
    // }

    const { data: adminis, mutate } = useAdmin();

    const { loginWithRedirect, user, logout ,loginWithPopup,isLoading } = useAuth0();

    return (
    <Grid item sx={{height:'100vh', width:'100%', padding:'20px'}}>
        {user ? isLoading ? 
            (<Grid container item sx={{
                fontSize:'25px',
                alignItems:'center',
                justifyContent:'center',
                color:light ? "var(--zero)" : "var(--ceroN)",
                marginTop:'250px'
                }}>
                Cargando Datos...<Load size={60}/>
            </Grid>)
            : 
            (<>
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
                    {adminis ? <TarjetaUser admin={adminis}/> : 'hola'}
                    <Form/>
                </Grid>
                <Grid>
                {adminis?  <Tables /> : 'hola'}
                </Grid>
                </>
            
            // <Grid item container spacing={2} flexDirection={'row'} sx={{ paddingLeft: '16px', paddingTop: '10px' }}>
            //     {adminis && <TarjetaUser admin={adminis} />}
            //     <Box sx={{ height: "47vh", overflow: "auto", position: "relative",}}>
            //         <Grid item container mt={2} px={2} direction="column" alignItems="center" sx={{ position: "relative" }}>
            //             <Form />
            //         </Grid>
            //     </Box>
            // </Grid>
            // <Grid item container flexDirection={'row'}>
            //     {!adminis && (<Grid item mt={6} ml={1} container direction="column" alignItems="center"><CircularProgress size={45} style={{ color: light ? "var(--zero)" : "var(--cero)" }} /></Grid>)}
            //         <Box sx={{ height: "52vh", overflow: "auto", position: "relative",}}>
            //             <Grid item container mt={2} px={2} direction="column" alignItems="center" sx={{ position: "relative" }}>
            //                 {/* {filterTipo(admin,'+',).map((admi) => { */}
            //                 {adminis && filterTipo(adminis, '+').map((admi) => (
            //                     // return (
            //                     <Tables admin={admi} opera={adminis} />
            //                     // )
            //                 ))}
            //             </Grid>
            //         </Box>
            //         <Box sx={{ height: "52vh", overflow: "auto", position: "relative",}}>
            //             <Grid item container mt={2} px={2} direction="column" alignItems="center" sx={{ position: "relative" }}>
            //                 {/* {filterTipo(admin,'-').map((admi) => { */}
            //                 {adminis && filterTipo(adminis, '-').map((admi) => (
            //                     // return (
            //                     <Tables admin={admi} opera={adminis} />
            //                     // )
            //                 ))}
            //             </Grid>
            //         </Box>
            //     </Grid>
                ):
            (<Grid container item sx={{
                fontSize:'25px',
                alignItems:'center',
                justifyContent:'center',
                color:light ? "var(--zero)" : "var(--ceroN)",
                marginTop:'250px',
                flexDirection:'column',
                }}>
                    {'Para acceder a esta sección'}
                    <Grid item sx={{ fontSize:'18px'}}>Por favor inice sesion</Grid>
                    <Grid 
                        onClick={() => loginWithRedirect()} 
                        sx={{cursor:'pointer'}}>
                            <User size={60}/>
                    </Grid> 
            </Grid>) 
        }       
    </Grid>
    );
};
export default Manage;
