import {TreeButtonText, TreeButtonWrapper} from "./styles";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import AltRouteOutlinedIcon from '@mui/icons-material/AltRouteOutlined';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Button from "@mui/material/Button";
import {useDispatch, useSelector} from "react-redux";
import {
    newPage,
} from "../../../../redux/slices/content/PageEditionSlice";


export const PageTreeRoot = ({title}, ...restProps) => {

    return (
        <TreeButtonWrapper>
            <MenuBookIcon sx={{color: "#575757", margin:"auto 10px"}}/>
            <TreeButtonText>{title}</TreeButtonText>
        </TreeButtonWrapper>
    )
}

export const PageTreeItem = ({paddingLeft, page}, ...restProps) => {

    const dispatch = useDispatch()
    const {book, currentPage} = useSelector(state => state.content.inEdition)

    const handleAddPageButton = () => {
        dispatch(newPage())
        dispatch(setParentPageNo(page.pageNo))
    }

    const handleAddCrossPageButton = () => {

    }

    return (
            <TreeButtonWrapper paddingLeft={paddingLeft}>
                {page.isCrossPage ? <AltRouteOutlinedIcon sx={{color: "#575757", transform: "rotate(180deg)"}}/> :
                    <LibraryBooksIcon sx={{color: "#575757", margin: "auto 10px"}}/>}
                <TreeButtonText>Strona {page.pageNo}</TreeButtonText>
                <Button color={"secondary"}
                        size={"small"}
                        onClick={handleAddPageButton}>
                    <AddBoxOutlinedIcon sx={{color: "#575757"}}/>
                </Button>
                {!page.isCrossPage && <Button color={"secondary"}
                                              size={"small"}
                onClick={handleAddCrossPageButton}>
                    <AltRouteOutlinedIcon sx={{color: "#575757", transform: "rotate(180deg)"}}/>
                </Button>}
            </TreeButtonWrapper>
    )
}