import { Grid, useMediaQuery } from "@mui/material";
import { CambioDivisa } from "../components/Shared/CambioDivisa";

const Cambio = () => {
    const mobile = useMediaQuery("(max-width:600px)", { noSsr: true });
    return (
        <Grid item container sx={{ padding: "20px", flexDirection: 'row', alignItems: 'center', width:mobile ? '100%' : '80%', height: '100vh',}}>
            <CambioDivisa venta value_sell />
        </Grid>
    );
};
export default Cambio;