import { Grid, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { useQuery } from "react-query";
import { Tarjeta } from "../components/Shared/Tarjeta";
import { TarjetaEuro } from "../components/Shared/TarjetaEuro";
import { TarjetaNoti } from "../components/Shared/TarjetaNoti";
import { TarjetaRiesgo } from "../components/Shared/TarjetaRiesgo";
import { useDolar } from "../service/dolar";
import { useEuro } from "../service/euro";
import { useRiesgoPais } from "../service/riesgo";

const Index = ({ last_update , value_buy, value_sell, valor }) => {
    const [money, setMoney] = useState({last_update, value_sell, value_buy });
    const [fecha, setFecha] = useState({last_update });
    const [oficial, setOficial] = useState({ value_sell, value_buy });
    const [euroOficial, setEuroOficial] = useState({ value_sell, value_buy });
    const [euroBlue, setEuroBlue] = useState({ value_sell, value_buy });
    const [riesgo, setRiesgo] = useState({ valor });
    const mobile = useMediaQuery("(max-width:600px)", { noSsr: true });
    useQuery(["/v2/latest"], useDolar, {
        refetchOnWindowFocus: false,
        onSuccess: (data) => {
            setMoney(data.blue);
        },
    });
    useQuery(["/v2/latest"], useDolar, {
        refetchOnWindowFocus: false,
        onSuccess: (data) => {
            setOficial(data.oficial);
        },
    });
    useQuery(["/v2/latest"], useDolar, {
        refetchOnWindowFocus: false,
        onSuccess: (data) => {
            setFecha(data);
        },
    });
    useQuery(["/v2/latest"], useEuro, {
        refetchOnWindowFocus: false,
        onSuccess: (data) => {
            setEuroOficial(data.oficial_euro);
        },
    });
    useQuery(["/v2/latest"], useEuro, {
        refetchOnWindowFocus: false,
        onSuccess: (data) => {
            setEuroBlue(data.blue_euro);
        },
    });
    useQuery(["/apiriesgopais"], useRiesgoPais, {
        refetchOnWindowFocus: false,
        onSuccess: (data) => {
            setRiesgo(data);
        },
    });

    const moneda = (valor) => {
        const valorDolar = valor ?? 0;
        return Number(valorDolar).toLocaleString("es-AR", {
            style: "currency",
            currency: "ARS",
            minimumFractionDigits: 2,
        })
    }

    return (
        <>
            {!mobile ? (
                <Grid container item sx={{ padding: "20px", flexDirection: 'row', alignItems: 'center', gap: '12px', width: '80%', height: '100vh',}}>
                    <Grid item container sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 0fr)', gridGap: '10px', gridAutoRows: 'minmax(100px, auto)', gap: '12px',}}>
                        <Tarjeta
                            compra={moneda(money.value_buy)}
                            venta={moneda(money.value_sell)}
                            fecha={fecha.last_update}
                            ofiCompra={moneda(oficial.value_buy)}
                            ofiVenta={moneda(oficial.value_sell)}
                        />
                        <TarjetaRiesgo valor={riesgo.valor}/>
                        <TarjetaEuro
                            compraBlue={moneda(euroBlue.value_buy)}
                            ventaBlue={moneda(euroBlue.value_sell)}
                            compraOficial={moneda(euroOficial.value_buy)}
                            ventaOficial={moneda(euroOficial.value_sell)}
                        />
                        <Grid item container sx={{ marginTop: '-120px',}}>
                        <TarjetaNoti/>
                        </Grid>
                    </Grid>
                </Grid>
            ) : (
                <Grid container item sx={{ padding: "20px", flexDirection: 'column', alignItems: 'center', gap: '12px'}}>
                    <Tarjeta
                        compra={moneda(money.value_buy)}
                        venta={moneda(money.value_sell)}
                        fecha={fecha.last_update}
                        ofiCompra={moneda(oficial.value_buy)}
                        ofiVenta={moneda(oficial.value_sell)}
                    />
                    <TarjetaEuro
                        compraBlue={moneda(euroBlue.value_buy)}
                        ventaBlue={moneda(euroBlue.value_sell)}
                        compraOficial={moneda(euroOficial.value_buy)}
                        ventaOficial={moneda(euroOficial.value_sell)}
                    />
                    <TarjetaRiesgo valor={riesgo.valor}/>
                    <TarjetaNoti/>
                </Grid>
            )
            }
        </>
    );
};
export default Index;
