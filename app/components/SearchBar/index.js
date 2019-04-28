/**
*
* SearchBar
*
*/

import React from 'react';
import {
  SearchContainer,
  Input,
  Search,
} from './styles';
const SearchIcon = require('images/search.svg');

class SearchBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <SearchContainer>
        <Input placeholder="Search or start new chat" />
        <Search src={SearchIcon} />
      </SearchContainer>
    );
  }
}

SearchBar.propTypes = {

};

export default SearchBar;
