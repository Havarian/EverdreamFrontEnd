import {BillboardPreviewContainer, CoverPreviewContainer} from "./styles/CoverPreview";
import Billboard from "../../Billboard/Billboard";
import {useSelector} from "react-redux";

const CoverPreview = (props) => {

    const book = useSelector(state => state.content.inEdition.book)

    return (
        <>
            <CoverPreviewContainer>
                <BillboardPreviewContainer>
                    <Billboard book={book} image={props.coverImage}/>
                </BillboardPreviewContainer>
            </CoverPreviewContainer>
        </>
    )
}

export default CoverPreview