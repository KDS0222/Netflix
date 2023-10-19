import Nav from "./components/Nav";
import Main from "./components/Main";
import { Route, Routes } from "react-router-dom";
import Modal from "./components/Modal/Modal";

function App() {
  return (
    <div className="App" style={{position: 'relative'}}>
      
      <Nav />
      <Main />

      <Routes>
        <Route path="/Modal" element={<Modal />}></Route>
      </Routes>

    </div>
  );
}

export default App;
