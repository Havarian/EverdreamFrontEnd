import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import AuthService from "../services/authentication/AuthService";
import {useDispatch, useSelector} from "react-redux";
import {fetchPublishedBooks, setPublishedDownloaded} from "../redux/slices/content/BooksPublishedSlice";
import Billboard from "../components/Billboard/Billboard";
import Slider from "../components/Slider/Slider";
import {SliderWrapper} from "./styles/Pages";
import ExpandedCard from "../components/BookCards/ExpandedCard/ExpandedCard";
import Typography from "@mui/material/Typography";
import image from "../files/img/1.jpg"
import image2 from "../files/img/2.jpg"
import image3 from "../files/img/4.jpg"

export default function MainPage() {

    const images = [image, image2, image3]

    const currentUser = AuthService.getCurrentUser()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isDownloaded = useSelector(state => state.content.published.publishedDownloaded);

    useEffect(() => {
        if (!currentUser) {
            navigate("/login")}
        if (isDownloaded === false) {
            try {
                dispatch(fetchPublishedBooks())
                // dispatch(setPublishedDownloaded(true))
            } catch (error) {
                console.log(error)
            }
        }
    },[navigate, currentUser, dispatch, isDownloaded])

    const book = {
        title: "My Colorfull Story",
        description: "Wyrusz w niezapomnianą przygodę, do magicznego lasu. Poznaj jego tajemniczych mieszkańców, i odkryj w raz z nimi tajemnice, które skrywa to magiczne miejsce"
    }

    return (
        <>
            <Billboard image={image} book={book}/>
            <ExpandedCard/>
            <br/>
            <Typography variant={"button"}
                        fontSize={"18px"} style={{margin: "10px 0 10px 50px"}}>Moje Książki</Typography>
            <Slider image={images}/>
            <Typography variant={"button"}
                        fontSize={"18px"} style={{margin: "10px 0 10px 50px"}}>Katalog</Typography>
            <Slider image={image}/>
        </>
    )
}