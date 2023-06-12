import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import AddEdit from "./pages/AddEdit";
import View from "./pages/View";
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
        <Route  path="/view/:id" Component={View} />
        <Route  path="/about" Component={About} />
      </Routes>
    </>
  );
}

export default App;
