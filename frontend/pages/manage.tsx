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

    const filterTipo =(array, tipo)=>{
        const newFilter = array.filter(info => info.tipo.includes(tipo));
        return newFilter;
    }

    const { data: adminis, mutate } = useAdmin();

    const { loginWithRedirect, user, logout ,loginWithPopup,isLoading } = useAuth0();

    return (
        <Grid item>
        {user ? isLoading ? (<Grid>loading......!!</Grid>): (
        <>
        <Grid item container spacing={2} flexDirection={'row'} sx={{ paddingLeft: '16px', paddingTop: '10px' }}>
                {adminis && <TarjetaUser admin={adminis} />}
                <Box sx={{ height: "47vh", overflow: "auto", position: "relative",}}>
                    <Grid item container mt={2} px={2} direction="column" alignItems="center" sx={{ position: "relative" }}>
                        <Form />
                    </Grid>
                </Box>
            </Grid>
            <Grid item container flexDirection={'row'}>
                {!adminis && (<Grid item mt={6} ml={1} container direction="column" alignItems="center"><CircularProgress size={45} style={{ color: light ? "var(--zero)" : "var(--cero)" }} /></Grid>)}
                    <Box sx={{ height: "52vh", overflow: "auto", position: "relative",}}>
                        <Grid item container mt={2} px={2} direction="column" alignItems="center" sx={{ position: "relative" }}>
                            {/* {filterTipo(admin,'+',).map((admi) => { */}
                            {adminis && filterTipo(adminis, '+').map((admi) => (
                                // return (
                                <Tables admin={admi} opera={adminis} />
                                // )
                            ))}
                        </Grid>
                    </Box>
                    <Box sx={{ height: "52vh", overflow: "auto", position: "relative",}}>
                        <Grid item container mt={2} px={2} direction="column" alignItems="center" sx={{ position: "relative" }}>
                            {/* {filterTipo(admin,'-').map((admi) => { */}
                            {adminis && filterTipo(adminis, '-').map((admi) => (
                                // return (
                                <Tables admin={admi} opera={adminis} />
                                // )
                            ))}
                        </Grid>
                    </Box>
                </Grid></>):(<Grid>Por favor iniciar sesion </Grid>) }       
        </Grid>
    );
};
export default Manage;
