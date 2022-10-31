import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

const CrossPageText = () => {
    return (
        <Grid container spacing={2}>
            <Grid item lg={4} xl={4} md={4} xs={12} sm={12}>
                <TextField  fullWidth
                            multiline
                            rows={8}
                            size={"small"}
                            color={"secondary"}
                            name={"text"}
                            label={"Treść opcji dla użytkownika"}
                            placeholder={"Treść opcji dla użytkownika"}/>
            </Grid>
            <Grid item lg={4} xl={4} md={4} xs={12} sm={12}>
                <TextField  fullWidth
                            multiline
                            rows={8}
                            size={"small"}
                            color={"secondary"}
                            name={"text"}
                            label={"Wariant pierwszy"}
                            placeholder={"Wariant pierwszy"}/>
            </Grid>
            <Grid item lg={4} xl={4} md={4} xs={12} sm={12}>
                <TextField  fullWidth
                            multiline
                            rows={8}
                            size={"small"}
                            color={"secondary"}
                            name={"text"}
                            label={"Wariant drugi"}
                            placeholder={"wariant drugi"}/>
            </Grid>
        </Grid>
    )
}

export default CrossPageText