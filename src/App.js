import Navbar from "./components/Navbar";
import { useMediaQuery } from "react-responsive";
import NavbarMobile from "./components/NavbarMobile";
import MySpace from "./components/MySpace";
import SpaceDetailView from "./components/SpaceDetailView";
import "./App.css";

function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <div className="app">
      {isDesktopOrLaptop ? <Navbar /> : <NavbarMobile />}
      <MySpace />
      <SpaceDetailView />
    </div>
  );
}

export default App;
