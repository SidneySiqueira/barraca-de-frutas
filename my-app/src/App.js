import Home from "./pages/Home";
import ListProducts from "./pages/carrinho";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useEffect, useState } from "react";

function App() {
  const [validate, setValidate] = useState();

  useEffect(() => {
    if (sessionStorage.getItem('validate') === "true") {
      setValidate(true)
    } if (sessionStorage.getItem('validate') === "false") {
      setValidate(false)
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home validate={validate} setValidate={setValidate}/>}/>
        <Route exact path="/carrinho" element={<ListProducts/>}/>
      </Routes>
    </Router>
  );
}

export default App;
