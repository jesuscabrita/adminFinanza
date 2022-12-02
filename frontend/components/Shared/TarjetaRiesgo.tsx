import { CircularProgress, Grid, useMediaQuery } from "@mui/material";
import { useContext, useState } from "react";
import { useQuery } from "react-query";
import Context from "../../context/contextPrincipal";
import { useRiesgoPais } from "../../service/riesgo";
import { GiHazardSign as Riesgo } from "react-icons/gi";

export const TarjetaRiesgo = ({ valor }) => {
    const [light] = useContext(Context);
    const [riesgo, setRiesgo] = useState([]);
    const mobile = useMediaQuery("(max-width:600px)", { noSsr: true });
    const tablet = useMediaQuery("(max-width:950px)", { noSsr: true });
    const { isLoading } = useQuery(["/apiriesgopais"], useRiesgoPais, {
        refetchOnWindowFocus: false,
        onSuccess: (data) => {
            setRiesgo(data);
        },
    });

    return (
        <Grid sx={{ width: !mobile ? "400px" : '100%' && !tablet ? '300px': '100%', height: "130px", borderRadius: "16px", background: light ? "var(--ceroN)" : "var(--terciarioN)", paddingBottom: "16px",}}>
            <Grid container item sx={{ background: "var(--segundario)", borderRadius: "10px 10px 0px 0px", padding: "10px", color: "var(--cero)", alignItems: "center", gap: "16px",}}>
                <Riesgo size={25} /> Riesgo Pais
            </Grid>
            <Grid item container sx={{ justifyContent: "space-between", padding: "6px 16px 6px 16px", color: "var(--hazard)", fontWeight: "1000",}}>
                <Grid sx={{ color: light ? "var(--zero)" : "var(--cero3)", fontWeight: "500",}}>
                    Valor
                </Grid>
                {isLoading ? (<CircularProgress size={18} style={{ color: light ? "var(--zero)" : "var(--cero)" }}/>) : (valor)}
            </Grid>
        </Grid>
    );
};
