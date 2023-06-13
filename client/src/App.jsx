import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import AddEdit from "./pages/AddEdit";
import InfoUser from "./pages/InfoUser";
import About from "./pages/About";
import Header from './components/Header'

function App() {
  return (
    <>
       
      <ToastContainer />

      <Header/>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route  path="/add" Component={AddEdit} />
        <Route  path="/update/:id" Component={AddEdit} />
        <Route  path="/view/:id" Component={InfoUser} />
        <Route  path="/about" Component={About} />
      </Routes>
    </>
  );
}

export default App;
