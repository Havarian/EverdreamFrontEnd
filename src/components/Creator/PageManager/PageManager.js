import {PageCreatorContainer, PageEditorContainer} from "./styles";
import {StyledCloseOutlined} from "../styles";
import PageTree from "./PageTree/PageTree";
import Grid from "@mui/material/Grid";
import VideoEditor from "./VideoEditor/VideoEditor";
import TextEditor from "./TextEditor/TextEditor";

const PageManager = ({close}, ...restProps) => {

    return (
        <PageCreatorContainer>
            <Grid container spacing={2}>
                <Grid item xl={3} md={3} sm={12} xs={12}>
                    <PageTree/>
                </Grid>
                <Grid item xl={9} md={9} sm={12} xs={12}>
                    <PageEditorContainer>
                        <VideoEditor/>
                        <TextEditor/>
                    </PageEditorContainer>
                </Grid>
                <StyledCloseOutlined fontSize={"large"} onClick={close}/>
            </Grid>
            <StyledCloseOutlined fontSize={"large"} onClick={close}/>
        </PageCreatorContainer>
    )
}

export default PageManager