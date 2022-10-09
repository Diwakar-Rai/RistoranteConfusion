import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/MenuComponent";
import "./App.css";
import { DISHES } from "./shared/dish";

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante de confusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={DISHES} />
      
    </div>
  );
}

export default App;
