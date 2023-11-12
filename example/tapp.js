// ! 출처 !
// https://codesandbox.io/s/framer-motion-animatesharedlayout-app-store-demo-i1kct

import React from "react";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { useNavigate, useParams } from "react-router";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import List from "./components/List";
import Article from "./components/Article";
import "./style.scss";

export function Main() {
  const { id } = useParams();
  // /grape하면 id는 grape
  return (
    <>
      <AnimatePresence>
        {/* id가 있으면 article 컴포넌트 뿌림 prop담아서 */}
        {id && <Article id={id} />}
      </AnimatePresence>

      {/* selectedId="grape" */}
      <List selectedId={id !== undefined ? id : ""} />
    </>
  );
}

export default function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:id" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
