
import {BrowserRouter,Route,Routes} from "react-router-dom"
import { NavbarWeather } from './NewsComponet/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FetchNews } from "./NewsComponet/FetchNews";
import { AllNews } from "./NewsComponet/AllNews";
import { FetchWeather } from "./NewsComponet/FetchWeather";
import { ListFile } from "./ListFile";
import { FigureCaption } from "./NewsComponet/FigureCaption";
import { FetchTable } from "./NewsComponet/FetchTable";



function App() {

    return (
      <BrowserRouter>
      <NavbarWeather></NavbarWeather>
    <div>
      <Routes>
        <Route path="/topHeadline" element={<FetchNews/>}></Route>
        <Route path="/news" element={<FetchTable/>}></Route>
        <Route path="/weather" element={<FetchWeather/>}></Route>
        
      </Routes>
    </div>
    </BrowserRouter>

    // <ListFile></ListFile>
    // <FigureCaption></FigureCaption>
    // <FetchTable></FetchTable>
  );

}

export default App;
