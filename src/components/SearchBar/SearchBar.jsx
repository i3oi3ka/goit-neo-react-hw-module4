import toast, { Toaster } from "react-hot-toast";
import { FaSearch } from "react-icons/fa";
import style from "./SearchBar.module.css";

const SearchBar = ({ handleSearchBar, isDisabled }) => {
  const handleSearch = (event) => {
    event.preventDefault();
    const query = event.target.elements.query.value.trim();
    if (!query) {
      toast.error("Please enter a search term", {
        position: "top-right",
      });
      return;
    }
    handleSearchBar(query);
    event.target.reset();
  };
  return (
    <header className={style.header}>
      <form className={style.form} onSubmit={handleSearch}>
        <input
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={style.input}
        />
        <button
          type="submit"
          disabled={isDisabled}
          className={style.searchButton}
        >
          <FaSearch />
        </button>
      </form>
      <Toaster />
    </header>
  );
};

export default SearchBar;
