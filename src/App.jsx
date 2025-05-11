import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { getPhotos } from "./api/api";
import style from "./App.module.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "blue",
  color: "yellow",
};

function App() {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPhoto, setselectedPhoto] = useState(null);

  const openModal = (photo) => {
    setselectedPhoto(photo);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setselectedPhoto(null);
  };

  useEffect(() => {
    if (!searchQuery) return;
    const fetchPhotos = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const { data } = await getPhotos(searchQuery, page);
        setPhotos((prev) =>
          page === 1 ? [...data.results] : [...prev, ...data.results]
        );
        setMaxPage(data.total_pages);
      } catch (error) {
        setError(true);
        setPhotos([]);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPhotos();
  }, [searchQuery, page]);

  const handleSearchBar = (query) => {
    setSearchQuery(query);
    setPage(1);
    setMaxPage(1);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <SearchBar handleSearchBar={handleSearchBar} isDisabled={isLoading} />
      <div className={style.container}>
        {error ? (
          <ErrorMessage />
        ) : photos.length > 0 ? (
          <ImageGallery photos={photos} openModal={openModal} />
        ) : (
          <p>No results, pls enter new search request</p>
        )}
        <ClipLoader
          loading={isLoading}
          cssOverride={override}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        {page < maxPage && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
        <ImageModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          selectedPhoto={selectedPhoto}
        />
      </div>
    </>
  );
}

export default App;
