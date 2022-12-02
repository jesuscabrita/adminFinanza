import { Grid, useMediaQuery } from "@mui/material"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';
import { useQuery } from "react-query";
import { useContext, useState } from "react";
import { useEvolucionDolarBlue, useEvolucionDolarOficial } from "../../service/evolucion";
import Context from "../../context/contextPrincipal";

export const TarjetaEstadis = () => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );
    const mobile = useMediaQuery("(max-width:600px)", { noSsr: true });
    const tablet = useMediaQuery("(max-width:950px)", { noSsr: true });
    const [evoBlue, setEvoBlue] = useState([]);
    const [evoOficial, setEvoOficial] = useState([]);
    const [light] = useContext(Context);
    useQuery(["/apievoluciondolarblue"], useEvolucionDolarBlue, {
        refetchOnWindowFocus: false,
        onSuccess: (data) => {
            setEvoBlue(data.meses);
        },
    });
    useQuery(["/apievoluciondolaroficial"], useEvolucionDolarOficial, {
        refetchOnWindowFocus: false,
        onSuccess: (data) => {
            setEvoOficial(data.meses);
        },
    });

    const options = {
        responsive: true,
        plugins: {
            legend: { position: 'top' as const,},
            title: { display: true, text: 'Evolucion del Dolar Oficial y Blue',},
        },
    };

    const labels = evoBlue.map((data) => 'Mes:' + ' ' + data.mes + ' ' + 'Año:' + ' ' + data.anio)
    const blue = evoBlue.map((data) => data.valor)
    const oficial = evoOficial.map((data) => data.valor)

    const date = {
        labels,
        datasets: [
            {
                label: 'Dolar Blue',
                data: blue.map(() => faker.datatype.number({ min: 180, max: 300 })),
                backgroundColor: 'rgba(40, 67, 153, 0.321)',
            },
            {
                label: 'Dolar Oficial',
                data: oficial.map(() => faker.datatype.number({ min: 100, max: 150 })),
                backgroundColor: 'rgba(207, 161, 77, 0.5)',
            },
        ],
    };
    return (
        <Grid item container>
            <Bar style={{ height: !mobile ? '500px' : '100%' , width: !mobile ? '830px' : '100%' }} options={options} data={date} />
        </Grid>
    )
}
