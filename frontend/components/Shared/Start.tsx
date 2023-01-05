import { Grid, useMediaQuery } from "@mui/material";
import { useState } from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import Context from "../../context/contextPrincipal";
import { useContext } from "react";

export const Estrellas =()=>{
    const [value, setValue] = useState<number | null>(2.5);
    const [hover, setHover] = useState(-1);
    const [light] = useContext(Context);

    const labels: { [index: string]: string } = {
        0.5: 'Malo',
        1: 'Malo+',
        1.5: 'Escaso',
        2: 'Escaso+',
        2.5: 'Normal',
        3: 'Normal+',
        3.5: 'Bueno',
        4: 'Bueno+',
        4.5: 'Excelente',
        5: 'Excelente+',
        };

        function getLabelText(value: number) {
        return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
        }

    return(
    <Box sx={{width: 200,display: 'flex',alignItems: 'center',}}>
        <Rating
            name="hover-feedback"
            value={value}
            precision={0.5}
            getLabelText={getLabelText}
            onChange={(event, newValue) => {setValue(newValue)}}
            onChangeActive={(event, newHover) => {setHover(newHover)}}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        {value !== null && (<Box sx={{ ml: 2, color: light ? "var(--zero)" : "var(--ceroN)" }}>{labels[hover !== -1 ? hover : value]}</Box>)}
    </Box>
    )
}
export const EstrellaDisable =()=>{
    const labels: { [index: string]: string } = {
        0.5: 'Malo',
        1: 'Malo+',
        1.5: 'Escaso',
        2: 'Escaso+',
        2.5: 'Normal',
        3: 'Normal+',
        3.5: 'Bueno',
        4: 'Bueno+',
        4.5: 'Excelente',
        5: 'Excelente+',
        };

        const value = 3.5;

    return(
        <Box sx={{width: 200 ,display: 'flex',alignItems: 'center',}}>
            <Rating
                name="text-feedback"
                value={value}
                readOnly
                precision={0.5}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
    </Box>
    )
}