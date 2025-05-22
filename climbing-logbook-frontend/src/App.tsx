import { useState } from "react";
import Header from "./components/Header/Header.tsx";
import Main from "./components/Main/Main.tsx";
import Footer from "./components/Footer/Footer.tsx";

function App() {

  const [searchInput, setSearchInput] = useState<string>("");

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  }

  return (
    <>
      <Header handleInputChange={handleSearchInputChange}/>
      <Main searchInputResults={searchInput}/>
      <Footer/>
    </>
  )
}

export default App;
