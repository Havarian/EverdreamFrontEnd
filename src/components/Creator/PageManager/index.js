import {PageCreatorContainer, PageEditContainer, PageListContainer} from "./styles/PageManager";
import {StyledCloseOutlined} from "../styles/Creator";
import PageEditor from "./PageEditor";

const PageManager = ({close}, ...restProps) => {


    return (
        <PageCreatorContainer>
            <PageListContainer>
            </PageListContainer>
            <PageEditContainer>
                <PageEditor/>
            </PageEditContainer>
            <StyledCloseOutlined fontSize={"large"} onClick={close}/>
        </PageCreatorContainer>
    )
}

export default PageManager