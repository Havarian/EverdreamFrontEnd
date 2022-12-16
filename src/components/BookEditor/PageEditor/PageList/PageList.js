import {ListButton, ListWrapper, StyledListHeader, StyledListItem} from "./styles";
import {useSelector} from "react-redux";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AppButton from "../../../Buttons/AppButton";

const PageList = () => {

    const book = useSelector(state => state.content.inEdition.book)

    return (
        <ListWrapper>
            <ListHeader book={book}/>
            <ListItem/>
            <List pages={book.pages} parentPageId={null}/>
            <ListButton>
                <AppButton type={"addPage"} variant={"filled"}/>
            </ListButton>
        </ListWrapper>
    )
}

const ListHeader = ({book, ...restProps}) => {
    return (
        <StyledListHeader>
            <MenuBookIcon/>
            <span>{book.title}</span>
        </StyledListHeader>
    )
}

const ListItem = ({page, ...restProps}) => {
    return (
        <StyledListItem>
            <LibraryBooksIcon/>
            <span>Strona</span>
            <AppButton type={"remove"}
                       iconOnly
                       iconSize={"15px"}
                       variant={"filled"}
                       color={"secondary"}
                       style={{position: "absolute", right: "10px"}}/>
        </StyledListItem>
    )
}

const List = ({pages, parentPageId, ...restProps}) => {
    return (
        <>
            {pages?.filter(page => page.parentPageId === parentPageId)
                ?.map(page => (
                    <>
                        <ListItem key={page.id}
                                  page={page}/>
                        <List pages={pages} parentPageId={page.id}/>
                    </>
                ))

            }
        </>
    )
}

export default PageList