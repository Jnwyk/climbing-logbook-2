import { useState } from "react";
import Header from "./components/Header/Header.tsx";
import Main from "./components/Main/Main.tsx";
import Footer from "./components/Footer/Footer.tsx";
import UserContextProvider from "./contexts/UserContext.tsx";

function App() {

  const [searchInput, setSearchInput] = useState<string>("");

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  }

  return (
    <UserContextProvider>
      <Header handleInputChange={handleSearchInputChange}/>
      <Main searchInputResults={searchInput}/>
      <Footer/>
    </UserContextProvider>
  )
}

export default App;
