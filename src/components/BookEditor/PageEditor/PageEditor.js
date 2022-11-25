import {PageEditorWrapper} from "./styles";
import Grid from "@mui/material/Grid";
import PageEditionBoard from "./PageEditionBoard/PageEditionBoard";
import PageList from "./PageList/PageList";

const PageEditor = () => {
    return (
        <Grid container>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                <PageList/>
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
                <PageEditionBoard/>
            </Grid>
        </Grid>
    )
}

export default PageEditor