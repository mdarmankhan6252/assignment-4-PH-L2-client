import { Outlet } from "react-router";
import Nav from "./shared/Nav";
import Footer from "./shared/Footer";

const App = () => {
  return (
    <div>
      <Nav />
      <div className="min-h-[calc(100vh-412px)]">
        <Outlet />
      </div>
      <Footer />

    </div>
  );
};

export default App;