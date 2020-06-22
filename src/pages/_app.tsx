import { UiContextProvider } from "../context/uiContext"
import { DataContextProvider } from "../context/dataContext"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }) {

    return (
        <UiContextProvider>
            <DataContextProvider>
                <Component {...pageProps} />
            </DataContextProvider>
        </UiContextProvider>

    )
}