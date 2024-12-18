import Header from "./components/Header/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Card  from "./components/HomeCard/Card";
import  CardItemsMan  from "./components/CardItems/CardItemsMan";
import  CardItemsWoman  from "./components/CardItems/CardItemsWoman";
import  NewCollection  from "./components/CardItems/NewCollection";




function App() {

  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/man" element={<CardItemsMan />} />
          <Route path="/woman" element={<CardItemsWoman />} />
          <Route path="/new-collection" element={<NewCollection />} />

        </Routes>
    </Router>
    </>
  )
}

export default App
