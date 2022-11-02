import {ItemButtonContainer, StyledSliderItem} from "./styles";
import {useEffect, useState} from "react";
import fileService from "../../services/content/FileService";
import {EditButton, PlayButton} from "../Buttons/AppButtons";
import {Skeleton} from "@mui/material";

const SliderItem = ({type, book}, ...restProps) => {

    const [coverImage, setCoverImage] = useState(null);

    useEffect(() => {
        if (sessionStorage.getItem(book.coverImageName)) {
            setCoverImage(sessionStorage.getItem(book.coverImageName))
        } else {
            fileService.fetchFile(book.coverImageName).then(res => {
                sessionStorage.setItem(book.coverImageName, res)
                setCoverImage(res)
            })
        }
    }, [coverImage])

    return (
        <>
            { coverImage ?
                <StyledSliderItem image={coverImage}>
                    <ItemButtonContainer>
                        {type === "inCreation" ?
                            <EditButton size={"small"} book={book}/> : null}
                        {type === "published" ?
                            <PlayButton size={"small"} book={book}/> : null}
                    </ItemButtonContainer>
                </StyledSliderItem>
                :
                <Skeleton variant={"rectangular"} animation={"wave"} width={"20vw"} height={"11.25vw"}/>
            }
        </>
    )
}

export default SliderItem