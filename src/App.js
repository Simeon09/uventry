// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import './components/assests/lucida-bright/Lucida_Bright_Demibold_Italic.ttf';
import './components/assests/lucida-bright/Lucida_Bright_Italic.ttf';
import './components/assests/lucida-bright/Lucida_Bright_Regular.ttf';
import './components/assests/lucida-bright/Lucida_Bright.ttf';
import Login from './components/pages/Login/Login'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    
<BrowserRouter>
<Routes>
<Route path='/' element={ <App/>}/>
<Route index element={< Navbar/>} />
<Route path='/Login' element={< Login/>} />
</Routes>
</BrowserRouter>
      
      
    
  );
}

export default App;
