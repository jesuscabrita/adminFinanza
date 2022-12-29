import { Grid } from "@mui/material"
import { useState } from "react"

const filterArray = (posicion, tipo, array, cantidad)=>{
    const newFilter =array.filter(info => info.tipo.includes(tipo))
    return newFilter.slice( posicion, posicion % 2 ? posicion + 1 : posicion + cantidad)
}

const goToPage =(setPage, setCurren, button, cantidad)=>{
    setPage(parseInt(button))
    if(!cantidad){
        setCurren(button == 1 ? 0 : parseInt(button))
    }else{
        setCurren(button == 1 ? 0 : parseInt(button) * cantidad - cantidad)
    }
}

export const NoticiaHome =({data})=>{
    const [page, setPage]= useState(1);
    const [current, setCurrent]= useState(0);
    return(
        <Grid item sx={{
            border:'solid 1px red',
            minWidth: '300px',
            width:'200px',
            }}>
            <Grid item sx={{wordBreak:'break-word'}}>
                {data?.title}
            </Grid>
            <img 
            src={data?.urlToImage} 
            alt={data?.description} 
            style={{height:'200px', width:'300px' }} 
            />           
        </Grid>
    )
}