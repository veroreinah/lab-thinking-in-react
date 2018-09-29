import React, { Component } from 'react';
import ProductTable from './ProductTable';
import data from '../data';

class FilterableProductTable extends Component {
  render() {
    const categories = [];
    const products = [];
    data.forEach(element => {
      if (!categories.includes(element.category)) {
        categories.push(element.category);
      }
    });

    categories.forEach((category, index) => {
      products[index] = data.filter(e => e.category === category);
    });

    const productsTable = products.map((e, i) => <ProductTable key={i} products={e}/>)

    return (
      <div>
        <div>
          <input placeholder="Search..."/>
        </div>
        <div>
          <input type="checkbox"/>
          <label>Only show products in stock</label>
        </div>
        <hr/>

        {productsTable}
      </div>
    );
  }
}

export default FilterableProductTable;