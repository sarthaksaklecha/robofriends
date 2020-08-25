import React from 'react';

const SearchBox = ({ OnSearch }) => {
	return(
		    <input class="pa2 black-180"  
		    	type='search' 
		    	placeholder="search"
		    	onChange={OnSearch}
		    />
	);
}

export default SearchBox;