import "./App.css";
import Navbar from "./Header";
import BlogsList from "./BlogsList";
import { useState } from "react";

function App() {
  const [isModalOpen, setModalState] = useState(false);
  const [showDetailsPage, setDetailsPage] = useState(false);

  return (
    <div class="flex flex-col" >
      <Navbar setModalState={setModalState} setDetailsPage={setDetailsPage}/>
      <BlogsList isModalOpen={isModalOpen} setModalState={setModalState} setDetailsPage={setDetailsPage } showDetailsPage={showDetailsPage}/>
    </div>
  );
}

export default App;
