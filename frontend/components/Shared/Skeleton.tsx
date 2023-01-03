import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { useMediaQuery } from "@mui/material";

export const Skeletones =()=>{
    const mobile = useMediaQuery("(max-width:600px)", { noSsr: true });
    return(
        <Box sx={{ width: !mobile ? '97%' : '330px' }}>
            <Skeleton animation='wave' sx={{height:'100px',marginBottom:'-35px'}} />
            <Skeleton animation="wave" sx={{height:'100px',marginBottom:'-35px'}} />
            <Skeleton animation="wave" sx={{height:'100px',marginBottom:'-35px'}} />
            <Skeleton animation="wave" sx={{height:'100px',marginBottom:'-35px'}} />
    </Box>
    )
}

export const SkeletonesOne =()=>{
    const mobile = useMediaQuery("(max-width:600px)", { noSsr: true });
    return(
        <Box sx={{ width: !mobile ? '420px' : '330px' }}>
            <Skeleton animation='wave' sx={{height:'70px',marginBottom:'-50px'}} />
            <Skeleton animation="wave" sx={{height:'220px',marginBottom:'-35px'}} />
    </Box>
    )
}
export const SkeletonesForm =()=>{
    const mobile = useMediaQuery("(max-width:600px)", { noSsr: true });
    return(
        <Box sx={{ width:!mobile ? '600px' : '330px' }}>
            <Skeleton animation='wave' sx={{height:'100px',marginBottom:'-35px'}} />
            <Skeleton animation="wave" sx={{height:'100px',marginBottom:'-35px'}} />
            <Skeleton animation="wave" sx={{height:'100px',marginBottom:'-35px'}} />
            <Skeleton animation="wave" sx={{height:'100px',marginBottom:'-35px'}} />
    </Box>
    )
}
export const SkeletonesCambio =()=>{
    const mobile = useMediaQuery("(max-width:600px)", { noSsr: true });
    return(
        <Box sx={{ width:!mobile ? '600px' : '330px' }}>
            <Skeleton animation='wave' sx={{height:'100px',marginBottom:'-35px'}} />
            <Skeleton animation="wave" sx={{height:'100px',marginBottom:'-35px'}} />
            <Skeleton animation="wave" sx={{height:'100px',marginBottom:'-35px'}} />
            <Skeleton animation="wave" sx={{height:'100px',marginBottom:'-35px'}} />
            <Skeleton animation="wave" sx={{height:'100px',marginBottom:'-35px'}} />
            <Skeleton animation="wave" sx={{height:'100px',marginBottom:'-35px'}} />
            <Skeleton animation="wave" sx={{height:'100px',marginBottom:'-35px'}} />
    </Box>
    )
}