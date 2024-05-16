function Navigation({
  search,
  setSearch,
  getAll,
  refreshPage,
  setRefreshPage,
  hide,
  setHide,
}) {
  function onSearchSubmit(e) {
    e.preventDefault();
    if (search === "") {
      setRefreshPage(!refreshPage);
      setHide(!hide);
    } else {
      getAll();
    }
  }
  function handleChange(e) {
    setSearch(e.target.value);
  }

  return (
    <>
      <form onSubmit={onSearchSubmit}>
        <div className="formContainer">
          <input
            className="formContainer__input"
            type="search"
            name="valueSearch"
            id=""
            value={search}
            onChange={handleChange}
            placeholder="Buscar nombre de pokemon"
          />
          <button className="formContainer__btn">Buscar</button>
        </div>
      </form>
    </>
  );
}

export default Navigation;
