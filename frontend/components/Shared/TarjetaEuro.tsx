import { Grid, useMediaQuery } from "@mui/material"
import { useContext, useState } from "react";
import Context from "../../context/contextPrincipal";
import { AiOutlineEuroCircle as Euro } from 'react-icons/ai';
import { useQuery } from "react-query";
import { useEuro } from "../../service/euro";
import CircularProgress from "@material-ui/core/CircularProgress";

export const TarjetaEuro = ({ compraOficial, ventaOficial, ventaBlue, compraBlue  }) => {
    const [light] = useContext(Context);
    const [euro, setEuro] = useState([]);
    const mobile = useMediaQuery("(max-width:600px)", { noSsr: true });
    const tablet = useMediaQuery("(max-width:950px)", { noSsr: true });
    const { isLoading } = useQuery(["/v2/latest"], useEuro, {
        refetchOnWindowFocus: false,
        onSuccess: (data) => {
            setEuro(data);
        },
    });

    return (
        <Grid sx={{ width: !mobile ? "400px" : '100%' && !tablet ? '300px': '100%', height: "100%", borderRadius: "16px", background: light ? "var(--ceroN)" : "var(--terciarioN)", paddingBottom: '16px'}}>
            <Grid container item sx={{ background: "var(--segundario)", borderRadius: "10px 10px 0px 0px", padding: "10px", color: "var(--cero)", alignItems: "center", gap: "16px",}}>
                <Euro size={25} /> Euro
            </Grid>
            <Grid item container sx={{ justifyContent: "space-between", padding: "6px 16px 6px 16px", color: "var(--activo)", fontWeight: "1000",}}>
                <Grid sx={{ color: light ? "var(--zero)" : "var(--cero3)", fontWeight: "500",}}>
                    Euro Blue compra
                </Grid>
                {isLoading ? (<CircularProgress size={18} style={{ color: light ? "var(--zero)" : "var(--cero)" }}/>) : (compraBlue)}
            </Grid>
            <Grid item container sx={{ justifyContent: "space-between", padding: "6px 16px 6px 16px", color: "var(--activo)", fontWeight: "1000",}}>
                <Grid sx={{ color: light ? "var(--zero)" : "var(--cero3)", fontWeight: "500",}}>
                    Euro Blue venta
                </Grid>
                {isLoading ? (<CircularProgress size={18} style={{ color: light ? "var(--zero)" : "var(--cero)" }}/>) : (ventaBlue)}
            </Grid>
            <Grid item container sx={{ justifyContent: "space-between", padding: "6px 16px 6px 16px", color: "var(--activo)", fontWeight: "1000",}}>
                <Grid sx={{ color: light ? "var(--zero)" : "var(--cero3)", fontWeight: "500",}}>
                    Euro Oficial compra
                </Grid>
                {isLoading ? (<CircularProgress size={18} style={{ color: light ? "var(--zero)" : "var(--cero)" }}/>) : (compraOficial)}
            </Grid>
            <Grid item container sx={{ justifyContent: "space-between", padding: "6px 16px 6px 16px", color: "var(--activo)", fontWeight: "1000",}}>
                <Grid sx={{ color: light ? "var(--zero)" : "var(--cero3)", fontWeight: "500",}}>
                    Euro Oficial venta
                </Grid>
                {isLoading ? (<CircularProgress size={18} style={{ color: light ? "var(--zero)" : "var(--cero)" }}/>) : (ventaOficial)}
            </Grid>
        </Grid>
    )
}