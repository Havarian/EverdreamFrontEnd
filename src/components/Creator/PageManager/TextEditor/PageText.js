import TextField from "@mui/material/TextField";
import {setPageText} from "../../../../redux/slices/content/PageEditionSlice";
import {useDispatch} from "react-redux";

const PageText = () => {

    const dispatch = useDispatch()

    const onTextChange = (event) => {
        dispatch(setPageText(event.target.value))
    }

    return (
            <TextField  fullWidth
                        multiline
                        rows={8}
                        size={"small"}
                        color={"secondary"}
                        name={"text"}
                        label={"Treść Strony"}
                        placeholder={"Treść strony"}
                        onChange={onTextChange}/>
    )
}

export default PageText