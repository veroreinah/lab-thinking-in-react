import React from 'react';
import ReactDOM from 'react-dom';
import FilterableProductTable from './src/FilterableProductTable';

ReactDOM.render(
    <FilterableProductTable/>,
    document.getElementById('root')
);

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}