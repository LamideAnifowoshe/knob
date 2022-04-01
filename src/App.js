import Navbar from "./components/Navbar";
import { useMediaQuery } from "react-responsive";
import NavbarMobile from "./components/NavbarMobile";
import MySpace from "./components/MySpace";

function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <div>
      {isDesktopOrLaptop ? <Navbar /> : <NavbarMobile />}
      <MySpace />
    </div>
  );
}

export default App;
