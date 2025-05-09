const SearchBar = ({ handleSearchBar }) => {
  const handleSearch = (event) => {
    event.preventDefault();
    const query = event.target.elements.query.value.trim();
    console.log(query);
    handleSearchBar(query);
    event.target.reset();
  };
  return (
    <header>
      <form onSubmit={handleSearch}>
        <input
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
