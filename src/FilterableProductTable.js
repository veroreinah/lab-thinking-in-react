import React, { Component } from 'react';
import { ProductTable } from './ProductTable';
import data from '../data';

export class FilterableProductTable extends Component {
  render() {
    // Otra opción: utilizar groupBy de Lodash
    // https://lodash.com/docs/4.17.10#groupBy
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

        { products.map((e, i) => <ProductTable key={i} products={e}/>) }
      </div>
    );
  }
}
