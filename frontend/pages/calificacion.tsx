import { Grid, useMediaQuery } from "@mui/material";
import { useContext } from "react";
import Context from "../context/contextPrincipal";
import { BsFillBookmarkHeartFill as Calif } from "react-icons/bs";
import { Estrellas } from "../components/Shared/Start";
import { TextareaAutosize } from "@material-ui/core";
import { MdPostAdd as Idd } from "react-icons/md";
import { Comentario } from "../components/Shared/TarjetaComentario";
import { useAuth0 } from "@auth0/auth0-react";
import { FaUserCircle as User } from 'react-icons/fa';

const Calificacion = () => {
    const [light] = useContext(Context);
    const mobile = useMediaQuery("(max-width:600px)", { noSsr: true });
    const { loginWithRedirect, user,isLoading } = useAuth0();

    return (
    <>
    {!mobile ?  
        <Grid item sx={{height:'100vh', width:'100%',padding:'20px'}}>
            <Grid container item sx={{
                fontSize:'25px',
                alignItems:'center',
                justifyContent:'center',
                color:light ? "var(--zero)" : "var(--ceroN)",
                gap:'10px',
                borderBottom:`1px solid ${light ? "var(--zero)" : "var(--ceroN)" } `,
                paddingBottom:'10px',
                width:'91%',
                marginLeft:'30px'
                }}>
                Calificacion<Calif size={20} />
            </Grid>
            <Grid item sx={{
                    marginTop:'10px',
                    display:'flex', 
                    flexDirection:'column',
                    alignItems:'center',
                    justifyContent:'center', 
                    gap:'30px',
                    }}>
                    {user ? <>
                            <Estrellas />
                            <TextareaAutosize
                                style={{
                                    width: '50%',
                                    height: '100px',
                                    background: light ? 'var(--ceroN)' : 'var(--dark)',
                                    border: `1px solid ${light ? "var(--zero)" : "var(--ceroN)"} `,
                                    color: light ? "var(--zero)" : "var(--ceroN)",
                                }} />
                    <Grid item container mt={-3}
                    // onClick={submit} 
                    sx={{ 
                        background: "var(--primario)", 
                        width: "70px", 
                        height: "30px", 
                        borderRadius: "8px", 
                        cursor: "pointer",
                        }}>
                    <Idd style={{ 
                        cursor: "pointer", 
                        padding: "2px", 
                        marginLeft: "18px", 
                        color: "white",
                        }} size={30}/>
                </Grid> 
                </>
                :   <Grid container item sx={{
                        fontSize: '25px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: light ? "var(--zero)" : "var(--ceroN)",
                        flexDirection: 'column',
                        }}>
                        {'Para calificarnos'}
                        <Grid item sx={{ fontSize: '18px' }}>debe iniciar sesion</Grid>
                        <Grid
                            onClick={() => loginWithRedirect()}
                            sx={{ cursor: 'pointer' }}>
                            <User size={60} />
                        </Grid>
                    </Grid>}               
                    <Comentario/>
                </Grid>
        </Grid>
    : 
        <Grid container item sx={{
            height: '190vh',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '15px'
            }}>
                <Grid container item sx={{
                fontSize:'25px',
                alignItems:'center',
                justifyContent:'center',
                color:light ? "var(--zero)" : "var(--ceroN)",
                gap:'10px',
                borderBottom:`1px solid ${light ? "var(--zero)" : "var(--ceroN)" } `,
                paddingBottom:'10px',
                width:'91%',
                marginLeft:'30px'
                }}>
                Calificacion<Calif size={20} />
            </Grid>

            <Grid item sx={{
                    marginTop:'10px',
                    display:'flex', 
                    flexDirection:'column',
                    alignItems:'center',
                    justifyContent:'center', 
                    gap:'30px',
                    }}>
                {user ? <>        
                    <Estrellas/>
                    <TextareaAutosize 
                        style={{
                            width: !mobile ? '50%' : '330px',
                            height:!mobile ? '100px' : '200px',
                            background: light ? 'var(--ceroN)':'var(--dark)',
                            border:`1px solid ${light ? "var(--zero)" : "var(--ceroN)" } `,
                            color:light ? "var(--zero)" : "var(--ceroN)",
                        }}
                    />
                    <Grid item container mt={-3}
                    // onClick={submit} 
                    sx={{ 
                        background: "var(--primario)", 
                        width: "70px", 
                        height: "30px", 
                        borderRadius: "8px", 
                        cursor: "pointer",
                        }}>
                    <Idd style={{ 
                        cursor: "pointer", 
                        padding: "2px", 
                        marginLeft: "18px", 
                        color: "white",
                        }} size={30}/>
                </Grid>
                </>
                :   <Grid container item sx={{
                        fontSize: '25px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: light ? "var(--zero)" : "var(--ceroN)",
                        flexDirection: 'column',
                        }}>
                        {'Para calificarnos'}
                        <Grid item sx={{ fontSize: '18px' }}>debe iniciar sesion</Grid>
                        <Grid
                            onClick={() => loginWithRedirect()}
                            sx={{ cursor: 'pointer' }}>
                            <User size={60} />
                        </Grid>
                    </Grid>} 
                    <Comentario/>
                </Grid>

        </Grid>
    }
        </>
    );
};
export default Calificacion;