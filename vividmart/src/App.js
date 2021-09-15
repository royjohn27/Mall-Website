
import { BrowserRouter, Switch , Route} from "react-router-dom";


// components
import  Header from "./components/header/Header";
import Home from "./home/Home";
import Cart from "./components/cart/Cart";
import BoatMain from "./company/BoatMain";
import McdMain from "./company/McdMain";
import NikeMain from "./company/NikeMain";
import WoodlandMain from "./company/WoodlandMain";
import ShoppersstopMain from "./company/ShoppersstopMain";
import ContextProvider from "./context/ContextProvider";
function App() {
  return (
    <ContextProvider>

   <BrowserRouter>
   <Header/>
   <Switch>

   <Route exact path="/" component={Home}/>
   <Route path="/cart" component={Cart}/>
    <Route path="/boat" component={BoatMain}/>
    
    <Route path="/mcd" component={McdMain}/>
    <Route path="/nike" component={NikeMain}/>
    <Route path="/woodland" component={WoodlandMain}/>
    <Route path="/shoppersstop" component={ShoppersstopMain}/>
    
   </Switch>
  </BrowserRouter>
  </ContextProvider>
  
  );
}

export default App;
