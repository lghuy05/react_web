import starsvg from "../assets/star.svg"
const MovieCard = ({ movie: { Title, Released, Poster, Language, imdbRating } }) => {
  return (
    <div className="movie-card">
      <img src={Poster ? Poster : 'https://www.google.com/search?sca_esv=e211aab3cf833b15&sxsrf=AE3TifPTNVM80dUUeHaH3F08McNKQcuLKQ:1760103066763&udm=2&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIeiAkWG4OlBE2zyCTMjPbGmMU8EWskMk2JSE__efdUJ3x-dd8PyEzi5Y9BtPQcYyUv1rcIdliRpjBW--GfiUeIKaUBCYbKUsIOAVyNqAKtb89gtQDweEJAKMUrx9gwksUz7VA_wpOZzvECeoUSWIWKD_TFNXxsVemhgKqbejFsWMJvhWG6g&q=marceline&sa=X&ved=2ahUKEwjt3r_w3pmQAxW3mbAFHcotMYwQtKgLegQIFBAB&biw=637&bih=693&dpr=2.2#vhid=zqwXk3xXnVM5OM&vssid=mosaic'} alt={Title || "Movie poster"} />
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
