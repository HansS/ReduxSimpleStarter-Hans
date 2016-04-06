import React from 'react';
import ReactDom from 'react-dom';

// my imports
import SearchBar from './components/search_bar';


const API_KEY = 'AIzaSyDO79tfgJDuPnZJHv_6LZ8uoiqAoyr9lhU';

const App = () => {
    return <div>
      <SearchBar />
    </div>
}

ReactDom.render(<App />, document.querySelector('.react-container'));
