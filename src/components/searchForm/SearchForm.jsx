import { useSearchParams } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import PropTypes from 'prop-types';

import css from './SearchForm.module.css';

const SearchForm = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('name') || '';

  const handleChange = evt => {
    const name = evt.target.value;
    if (!name) {
      alert('Name cannot be empty');
      return;
    }
    const nextParams = { name };
    setSearchParams(nextParams);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(query);
  };

  return (
    <form onSubmit={handleSubmit} className={css.searchBox}>
      <input
        type="text"
        onChange={handleChange}
        autoComplete="off"
        name=""
        value={query}
        autoFocus
        placeholder="Search movies"
        className={css.searchInput}
      />
      <button type="submit" className={css.searchButton}>
        <b className={css.materialIcons}>
          <FiSearch />
        </b>
      </button>
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
