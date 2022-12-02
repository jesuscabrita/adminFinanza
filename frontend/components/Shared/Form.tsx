import { Grid } from "@mui/material";
import { useContext, useState } from "react";
import Context from "../../context/contextPrincipal";
import { MdFormatAlignLeft as Formu } from "react-icons/md";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { MdOutlineBookmarkAdded as Add } from "react-icons/md";
import { MdPostAdd as Idd } from "react-icons/md";
import { useAuth0 } from "@auth0/auth0-react";
import { create_Admin } from "../../lib/admin";
import { create_Divisa } from "../../lib/divisa";

export const Form = () => {
    const [light] = useContext(Context);
    const [tipo, setTipo] = useState("");
    const [divisa, setDivisa] = useState("");
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [detalleARS, setDetalle] =useState('');
    const [detalleDIV, setDetalleDiv] = useState('');
    const [monto, setMonto] =useState(0);
    const [montoDivisa, setMontoDivisa]=useState(0);
    const { getAccessTokenSilently } = useAuth0();

    const handleChange = (event: SelectChangeEvent) => {
        setTipo(event.target.value);
    };
    const handleChange2 = (event: SelectChangeEvent) => {
        setDivisa(event.target.value);
    };
    
    const submit = async (e)=>{
        e.preventDefault();
        const token = await getAccessTokenSilently();
        await create_Admin({
            detalleARS,
            monto,
            tipo,
            pago: "no"
        }, token)
    }
    const submitDivisa = async (e) =>{
        e.preventDefault();
        const token = await getAccessTokenSilently();
        await create_Divisa({
            detalleDIV,
            divisa,
            montoDivisa,
            pago: 'no'
        }, token)
    }

    return (
        <Grid item>
            <Grid item sx={{ width: "100%", height: "100%", borderRadius: "16px", background: light ? "var(--ceroN)" : "var(--terciarioN)", paddingBottom: "16px",}}>
                <Grid container item sx={{ background: "var(--segundario)", borderRadius: "10px 10px 0px 0px", padding: "10px", color: "var(--cero)", alignItems: "center", gap: "16px",}}>
                    <Formu size={25} /> Ingresar Datos
                </Grid>
                <FormControl variant="filled" sx={{ m: 0, minWidth: 92 }}>
                    <InputLabel style={{ color: light ? "var(--terciario)" : "var(--cero3)" }}>
                        Ingreso
                    </InputLabel>
                    <Select value={tipo} onChange={handleChange}>
                        <MenuItem style={{ display: "flex" }} value={'+'}>+</MenuItem>
                        <MenuItem style={{ display: "flex" }} value={'-'}>-</MenuItem>
                    </Select>
                </FormControl>
                <Grid item container flexDirection={"row"}>
                    <TextField label="Detalle" value={detalleARS} variant="filled" autoComplete="false"
                        sx={{
                            "& .MuiFormLabel-root": {color: light ? "var(--terciario)" : "var(--cero3)",},
                            "& .MuiInputBase-root": {color: light ? "var(--terciario)" : "var(--cero3)",},
                            "& .MuiFormHelperText-root": {color: light ? "var(--terciario)" : "var(--cero3)",},
                        }}
                        onChange={(e)=>setDetalle(e.target.value)}
                        helperText="Es requerido el detalle"      
                    />
                    <TextField label="Monto" value={Number(monto)} type="number" variant="filled"
                        sx={{
                            "& .MuiFormLabel-root": {color: light ? "var(--terciario)" : "var(--cero3)",},
                            "& .MuiInputBase-root": {color: light ? "var(--terciario)" : "var(--cero3)",},
                        }} 
                        onChange={(e)=>setMonto(parseInt(e.target.value))}
                        InputLabelProps={{shrink: true,}}        
                    />
                </Grid>
                <Grid item container onClick={submit} sx={{ background: "var(--primario)", width: "70px", height: "30px", borderRadius: "8px", cursor: "pointer", marginLeft: "10px",}}>
                    <Idd style={{ cursor: "pointer", padding: "2px", marginLeft: "18px", color: "white",}} size={30}/>
                </Grid>
                {!show2 ? (
                    <Grid item container ml={4} mt={1} mb={1} gap={3} sx={{ color: light ? "var(--terciario)" : "var(--cero3)" }}>
                        tenes deudas en divisas?
                        <Grid item onClick={() => {setShow(!show);}} sx={{cursor: "pointer", color: "var(--activo)", fontWeight: "900",}}>
                            SI
                        </Grid>
                        <Grid item onClick={() => {setShow(false);}} sx={{cursor: "pointer", color: "var(--hazard)", fontWeight: "900",}}>
                            NO
                        </Grid>
                        <Grid item onClick={() => {setShow2(!show2);}} sx={{ cursor: "pointer", color: "var(--danger)", fontWeight: "900",}}>
                            Quitar aviso
                        </Grid>
                    </Grid>
                ) : null}
                {show ? (
                    <>
                        <FormControl variant="filled" sx={{ m: 0, minWidth: 82 }}>
                            <InputLabel style={{ color: light ? "var(--terciario)" : "var(--cero3)" }}>
                                Divisa
                            </InputLabel>
                            <Select value={divisa} onChange={handleChange2}>
                                <MenuItem style={{ display: "flex" }} value={'USD'}>USD</MenuItem>
                                <MenuItem style={{ display: "flex" }} value={'€'}>€</MenuItem>
                            </Select>
                        </FormControl>
                        <Grid item>
                            <TextField value={detalleDIV} label="Deuda en divisas" variant="filled" autoComplete="false"
                                sx={{
                                    "& .MuiFormLabel-root": {color: light ? "var(--terciario)" : "var(--cero3)",},
                                    "& .MuiInputBase-root": {color: light ? "var(--terciario)" : "var(--cero3)",},
                                    "& .MuiFormHelperText-root": {color: light ? "var(--terciario)" : "var(--cero3)",},
                                }}
                                onChange={(e)=>setDetalleDiv(e.target.value)}
                                helperText="Es requerido el detalle"
                            />
                            <TextField label="Monto" type="number" variant="filled" value={Number(montoDivisa)}
                                sx={{
                                    "& .MuiFormLabel-root": {color: light ? "var(--terciario)" : "var(--cero3)",},
                                    "& .MuiInputBase-root": {color: light ? "var(--terciario)" : "var(--cero3)",},
                                }}           
                                onChange={(e)=>setMontoDivisa(parseInt(e.target.value))}
                                InputLabelProps={{shrink: true,}}  
                            />
                            <Grid item container onClick={submitDivisa} sx={{ background: "var(--primario)", width: "70px", height: "30px", borderRadius: "8px", cursor: "pointer", marginLeft: "10px",}}>
                                <Add style={{cursor: "pointer", padding: "2px", marginLeft: "18px", color: "white",}} size={30}/>
                            </Grid>
                        </Grid>
                    </>
                ) : null}
            </Grid>
        </Grid>
    );
};
