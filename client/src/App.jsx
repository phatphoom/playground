import Home from "./Home";
import Create from "./Create";
import Form from "./Form";

import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Home" element={<Create />}></Route>
        </Routes>
      </BrowserRouter> */}

      <Form />
      <Home />
    </>
  );
}

export default App;
