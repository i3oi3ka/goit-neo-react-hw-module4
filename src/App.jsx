import { useEffect, useState } from "react";
import { getPhotos } from "./api/api";
import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (!searchQuery) return;
    const fetchPhotos = async () => {
      try {
        const { data } = await getPhotos(searchQuery, 1);
        setPhotos((prev) =>
          page === 1 ? [...data.results] : [...prev, ...data.results]
        );
      } catch (error) {
        console.log(error);
      }
    };
    fetchPhotos();
  }, [searchQuery, page]);

  const handleSearchBar = (query) => {
    setSearchQuery(query);
    setPage(1);
  };
  return (
    <>
      <SearchBar handleSearchBar={handleSearchBar} />
      {photos.length ? <ImageGallery photos={photos} /> : <p>Enter Search </p>}
    </>
  );
}

export default App;
