import { Grid, useMediaQuery } from "@mui/material";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useContext, useState } from "react";
import Context from "../../context/contextPrincipal";
import { useQuery } from "react-query";
import { useDolar } from "../../service/dolar";
import { AiOutlineDollarCircle as Dolar } from "react-icons/ai";

export const Tarjeta = ({ compra, venta, fecha, ofiCompra, ofiVenta }) => {
    const [light] = useContext(Context);
    const [money, setMoney] = useState([]);
    const [oficial, setOficial] = useState([]);
    const mobile = useMediaQuery("(max-width:600px)", { noSsr: true });
    const tablet = useMediaQuery("(max-width:950px)", { noSsr: true });
    const { isLoading } = useQuery(["/v2/latest"], useDolar, {
        refetchOnWindowFocus: false,
        onSuccess: (data) => {
            setMoney(data);
        },
    });

    const { isLoading: oficialLoad } = useQuery(
        ["/v2/latest"],
        useDolar,
        {
            refetchOnWindowFocus: false,
            onSuccess: (data) => {
                setOficial(data);
            },
        }
    );

    return (
        <Grid sx={{ width: !mobile ? "400px" : '100%' && !tablet ? '300px': '100%', height: "100%", borderRadius: "16px", background: light ? "var(--ceroN)" : "var(--terciarioN)", paddingBottom:'16px'}}>
            <Grid container item sx={{ background: "var(--segundario)", borderRadius: "10px 10px 0px 0px", padding: "10px", color: "var(--cero)", alignItems: "center", gap: "16px",}}>
                <Dolar size={25} /> Dolar
            </Grid>
            <Grid item container sx={{ justifyContent: "space-between", padding: "16px 16px 6px 16px", color: "var(--primario)",}}>
                <Grid sx={{ color: light ? "var(--zero)" : "var(--cero3)" }}>
                    Fecha mercado
                </Grid>
                {isLoading ? (<CircularProgress size={18} style={{ color: light ? "var(--zero)" : "var(--cero)" }}/>) : (fecha)}
            </Grid>
            <Grid item container sx={{ justifyContent: "space-between", padding: "6px 16px 6px 16px", color: "var(--activo)", fontWeight: "1000",}}>
                <Grid sx={{ color: light ? "var(--zero)" : "var(--cero3)", fontWeight: "500",}}>
                    Dolar Blue Compra
                </Grid>
                {isLoading ? (<CircularProgress size={18} style={{ color: light ? "var(--zero)" : "var(--cero)" }}/>) : (compra)}
            </Grid>
            <Grid item container sx={{ justifyContent: "space-between", padding: "6px 16px 6px 16px", color: "var(--activo)", fontWeight: "1000",}}>
                <Grid sx={{ color: light ? "var(--zero)" : "var(--cero3)", fontWeight: "500",}}>
                    Dolar Blue Venta
                </Grid>
                {isLoading ? (<CircularProgress size={18} style={{ color: light ? "var(--zero)" : "var(--cero)" }}/>) : (venta)}
            </Grid>
            <Grid item container sx={{ justifyContent: "space-between", padding: "6px 16px 6px 16px", color: "var(--activo)", fontWeight: "1000",}}>
                <Grid sx={{ color: light ? "var(--zero)" : "var(--cero3)", fontWeight: "500",}}>
                    Dolar oficial compra
                </Grid>
                {oficialLoad ? (<CircularProgress size={18} style={{ color: light ? "var(--zero)" : "var(--cero)" }}/>) : (ofiCompra)}
            </Grid>
            <Grid item container sx={{ justifyContent: "space-between", padding: "6px 16px 6px 16px", color: "var(--activo)", fontWeight: "1000",}}>
                <Grid sx={{ color: light ? "var(--zero)" : "var(--cero3)", fontWeight: "500",}}>
                    Dolar oficial venta
                </Grid>
                {oficialLoad ? (<CircularProgress size={18} style={{ color: light ? "var(--zero)" : "var(--cero)" }}/>) : (ofiVenta)}
            </Grid>
        </Grid>
    );
};
