import  Pagination  from "@mui/material/Pagination";
import Context from "../../context/contextPrincipal";
import { useContext } from "react";

export const Paginacion =({count, page, hidden = false,buttonPrevious,buttonNext, onChange })=>{
    const [light] = useContext(Context);
    return(
        <>
            <button
                style={{
                        borderRadius: '3px 3px 7px 3px',
                        border: 'none',
                        minWidth: '15px',
                        minHeight: '16px',
                        background: light
                            ? 'var(--secondaryNinetyFive)'
                            : 'var(--primarioSixty)',
                        cursor: 'pointer',
                    }}
                onClick={buttonPrevious}>
                {/* <IconoPaginacion/> */}
            </button>
            <Pagination
                count={ count }
                onChange={onChange}
                hidePrevButton = { hidden }
                hideNextButton = { hidden }
                page={ page }
                sx={{
                    padding:'0 8px',
                    '& div':{
                        color: light ? 'var(--primarioTen)' : 'var(--primarioHundred)',
                    },
                    '& button':{
                        color: light ? 'var(--primarioTen)' : 'var(--primarioHundred)',
                        minWidth: '20px',
                        height:'20px'
                    },
                    '& button.Mui-selected':{
                        color: 'var(--primarioHundred)',
                        backgroundColor: light ?'var(--primarioTen)' : 'var(--primarioSixty)'
                    },
                    '& button.Mui-selected:hover':{
                        color: 'var(--primarioHundred)',
                        backgroundColor: light ?'var(--primarioTen)' : 'var(--primarioSixty)'
                    }
                }}
            />
            <button
                style={{
                    borderRadius: '3px 3px 7px 3px',
                    border: 'none',
                    minWidth: '15px',
                    minHeight: '16px',
                    background: light
                        ? 'var(--secondaryNinetyFive)'
                        : 'var(--primarioSixty)',
                    cursor: 'pointer',
                }}
                onClick={buttonNext}>
                {/* <IconoPaginacion derecha/> */}
            </button>      
        </>
    )
}
