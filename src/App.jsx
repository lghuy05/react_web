import { useState } from "react"

const Card = ({ title }) => {

  const [hasLiked, setHasLiked] = useState(false);

  return (
    <div className="card">
      <h2>{title}</h2>
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? 'Liked' : 'Like'}
      </button>

    </div>
  )
}

const App = () => {

  return (
    <div className="card-container">
      <Card title="Star Wars" />
      <Card title="Avengers" />
      <Card title="Titanic" />
    </div>
  )
}

export default App
