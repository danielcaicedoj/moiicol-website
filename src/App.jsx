import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="bg-gray-100 text-gray-900">
            <Navbar />
            <Home />
            <Footer />
        </div>
    );
}

export default App;

