import starsvg from "../assets/star.svg"
import movienotavai from "../assets/no-movie.png"

const MovieCard = ({ movie: { Title, Released, Poster, Language, imdbRating } }) => {
  return (
    <div className="movie-card">
      <img src={Poster ? Poster : movienotavai} alt={Title || "Movie poster"} />
      <div className="mt-4">
        <h3>{Title}</h3>
        <div className="content">
          <div className="rating">
            <img src={starsvg} alt="Star Icon" />
            <p>{imdbRating ? imdbRating.toFixed(1) : 'N/A'}</p>
          </div>
          <span>•</span>
          <p className="lang">{Language ? Language : "En"}</p>
          <span>•</span>
          <p className="year">{Released ? Released.split('-')[0] : "N/A"}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
