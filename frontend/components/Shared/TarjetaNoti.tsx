import { Grid, useMediaQuery } from "@mui/material";
import { useContext } from "react";
import Context from "../../context/contextPrincipal";
import { GiNewspaper as Noti } from "react-icons/gi";
import { GiSandsOfTime as Reloj } from "react-icons/gi";

export const TarjetaNoti = () => {
    const [light] = useContext(Context);
    const mobile = useMediaQuery("(max-width:600px)", { noSsr: true });
    const tablet = useMediaQuery("(max-width:950px)", { noSsr: true });
    return (
        <Grid sx={{ width: !mobile ? "400px" : "100%" && !tablet ? "300px" : "100%", height: "100%", borderRadius: "16px", background: light ? "var(--ceroN)" : "var(--terciarioN)", paddingBottom: "16px",}}>
            <Grid container item sx={{ background: "var(--segundario)", borderRadius: "10px 10px 0px 0px", padding: "10px", color: "var(--cero)", alignItems: "center", gap: "16px",}}>
                <Noti size={25} /> Noticias
            </Grid>
            <Grid item container mt={!mobile ? 12 : 0} sx={{ justifyContent: "center", alignItems: "center", color: light ? "var(--zero)" : "var(--cero3)",}}>
                <Reloj size={35} />
                <Grid>Proximamente</Grid>
            </Grid>
        </Grid>
    );
};
