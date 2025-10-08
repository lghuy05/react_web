import React, { useState } from "react"
import heroImg from "./assets/hero.png"
import Search from "./components/Search.jsx"

const App = () => {
  const [searchTerm, setSearchTerm] = useState('I am batman');
  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src={heroImg} alt="Hero Banner" />
          <h1>Find <span className="text-gradient">movies</span> you'll enjoy without the hassle</h1>
        </header>

        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

    </main>
  )
}

export default App
