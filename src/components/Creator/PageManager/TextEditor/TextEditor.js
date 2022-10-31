import Grid from "@mui/material/Grid";
import PageText from "./PageText";
import Box from "@mui/material/Box";
import {Checkbox, FormControlLabel, FormGroup} from "@mui/material";
import Button from "@mui/material/Button";
import {PageDataContainer} from "./styles";
import {useDispatch, useSelector} from "react-redux";
import {setCrossPage, setPageNo} from "../../../../redux/slices/content/PageEditionSlice";
import {addPageToBook,
    incrementPagesNo,
    setBookInEdition} from "../../../../redux/slices/content/BookEditionSlice"
import CrossPageText from "./CrossPageText";
import {useEffect} from "react";

const TextEditor = () => {

    const dispatch = useDispatch()
    const isCrossPage = useSelector(state => state.content.inEdition.page.isCrossPage)
    const pages = useSelector(state => state.content.inEdition.book.firstPage)
    const thisPage = useSelector(state => state.content.inEdition.page)
    const book = useSelector(state => state.content.inEdition.book)

    useEffect(() => {
    }, )


    const savePage = () => {
        dispatch(incrementPagesNo())
    }

    const handleCheckBoxChange = (event) => {
        dispatch(setCrossPage(event.target.checked))
    }

    return (
        <PageDataContainer>
            <Grid container spacing={2}>
                <Grid item xl={10} lg={10} sm={12} xs={12}>
                    { isCrossPage ?
                        <CrossPageText/>
                        :
                        <PageText/>
                    }
                </Grid>
                <Grid item xl={2} lg={2} sm={12} xs={12}>
                    { (pages !== null) &&
                        <Box>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox color={"secondary"}/>}
                                    onChange={handleCheckBoxChange}
                                    label="Strona Wyboru"/>
                            </FormGroup>
                        </Box>
                    }
                    <Box style={{position: "absolute", bottom: "30px"}}>
                        <Button variant={"outlined"}
                                color={"secondary"}
                                fullWidth
                                style={{margin: "0px 0px 10px 0px"}}
                                onClick={savePage}
                        >Zapisz Stronę</Button>
                        <Button variant={"outlined"}
                                color={"secondary"}
                                fullWidth
                                style={{margin: "0px 0px 10px 0px"}}
                        >Anuluj</Button>
                    </Box>
                </Grid>
            </Grid>
        </PageDataContainer>
    )
}

export default TextEditor