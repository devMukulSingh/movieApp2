import {  BrowserRouter, Route, Routes} from "react-router-dom"
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage"
import SearchResults from "./pages/SearchResults";
import { getBaseUrl } from "./redux/homeSlice";
import { useDispatch } from "react-redux";
import useFetch from "./hooks/useFetch.js";

function App() {

  const dispatch = useDispatch();
  const { data  } = useFetch('/configuration');
  dispatch(getBaseUrl(data?.images?.base_url));

  return (
    <>  
        <BrowserRouter>
          <Header/>
            <Routes>
              <Route exact path = "/" element = { <HomePage/> }/>
              <Route exact path = "/details/:mediaType/:id" element = { <DetailsPage/> } />
              <Route exact path = "/search" element = {<SearchResults/>} />
            </Routes>
        </BrowserRouter>
          {/* <Footer/> */}

    </>
  )
}

export default App
