import { Outlet } from "react-router-dom";
import Footer from "./shared/Footer";
import Header from "./shared/Header";

function App() {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-100px)]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
