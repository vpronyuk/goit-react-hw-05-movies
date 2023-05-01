import { useState } from 'react';

const SearchForm = ({ onSubmit }) => {
  const [queryOnChange, setQueryOnChange] = useState('');

  const handleChange = evt => {
    setQueryOnChange(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (queryOnChange.trim() === '') {
      return;
    }
    onSubmit(queryOnChange.trim());
    setQueryOnChange('');
    console.log(onSubmit(queryOnChange));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        autoComplete="off"
        name="search"
        value={queryOnChange}
        autoFocus
        placeholder="Search movies"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
