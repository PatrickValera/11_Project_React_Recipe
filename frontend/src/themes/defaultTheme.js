import { createTheme, responsiveFontSizes } from "@mui/material";

let defaultTheme=createTheme({
    palette:{
        background:{
            main:'#F9F9F9'
        },
        primary:{
            light:'#00FF6F',
            main:'#26AE60'
        }
    }
})
defaultTheme=responsiveFontSizes(defaultTheme)
export {defaultTheme}