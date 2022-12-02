import { injectGlobal } from "@emotion/css";
import { useMediaQuery } from "@mui/material";
import { useContext } from "react";
import Context from "../../context/contextPrincipal";
import { Navbar } from "../Home/Navbar";
import { Grid } from '@mui/material';

injectGlobal`
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap');
body{
  padding: 0;
margin: 0;
font-family: 'Nanum Gothic', sans-serif;
}
`;
export const Layout = ({ children }) => {
  const [light] = useContext(Context);
  const mobile = useMediaQuery("(max-width:600px)", { noSsr: true });
  return (
    <>
      {!mobile ? (
        <Grid container item sx={{width: '100%', background: light ? "var(--cero)" : "var(--dark)",}}>
          <Grid item container xs={16}>
            <Navbar />
          {children}
          </Grid>
        </Grid>
      ) : (
        <Grid container item sx={{height: "150vh", background: light ? "var(--cero)" : "var(--dark)",}}>
          <Navbar />
          <Grid sx={{width: '100%',}}>{children}</Grid>
        </Grid>
      )}
    </>
  );
};
