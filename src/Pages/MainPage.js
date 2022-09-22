import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import AuthService from "../services/authentication/AuthService";
import {useDispatch, useSelector} from "react-redux";
import {fetchPublishedBooks, setPublishedDownloaded} from "../redux/slices/content/BooksPublishedSlice";
import Billboard from "../components/Billboard/Billboard";
import image from "../files/img/1.jpg"
import Slider from "../components/Slider";
import {SliderWrapper} from "./styles/Pages";

export default function MainPage() {

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
        description: "Wyrusz w niesamowitą przygodę, w baśniowym lesie. Rozwiąż zagadkę i pokieruj losem bohaterów."
    }

    return (
        <>
            <SliderWrapper>
                <Billboard image={image} book={book}/>
                <Slider image={image}/>
                <Slider image={image}/>
                <Slider image={image}/>
            </SliderWrapper>

        </>
    )
}