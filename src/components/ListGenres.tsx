import useGenres from "../hooks/useGenres";

function ListGenres() {
  const { data: genres } = useGenres();

  return (
    <div>
      {genres.map((genre) => (
        <ul>
          <li key={genre.id}>{genre.name}</li>
        </ul>
      ))}
    </div>
  );
}

export default ListGenres;
