import {createTheme} from "@mui/material";

const appTheme = createTheme({

    palette:{
        primary:{
            main: '#ffffff'
        },
        secondary: {
            main:'#262626'
        }
    },
    shape: {
      borderRadius: 5,
    },
})

export default appTheme;