import { createTheme, responsiveFontSizes } from "@mui/material";

let defaultTheme=createTheme({

})
defaultTheme=responsiveFontSizes(defaultTheme)
export {defaultTheme}