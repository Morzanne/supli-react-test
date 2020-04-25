import React from 'react';

import SearchForm from '../SearchForm/index';

//MADE THIS CONTAINER TO IMPLEMENT LUNR JS AS A FEATURE IF I GOT TIME
const SearchFormContainer = () => {
   const handleSubmit = () => {
        return null
    };
    return <SearchForm onSubmit={handleSubmit()} />;
}

export default SearchFormContainer;