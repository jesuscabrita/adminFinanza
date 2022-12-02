import { Grid, useMediaQuery } from "@mui/material";
import { TarjetaEstadis } from "../components/Shared/TarjetaEstadis";

const Evolucion = () => {
    const mobile = useMediaQuery("(max-width:600px)", { noSsr: true });
    return (
        <Grid sx={{ marginLeft: !mobile ? '50px' : '0px'}}>
            <TarjetaEstadis/> 
        </Grid>
    );
};
export default Evolucion;