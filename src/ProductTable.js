import React from 'react';
import { ProductCategoryRow } from './ProductCategoryRow';
import { ProductRow } from './ProductRow';

export const ProductTable = ({ products }) => {
  const p = products.map((e, i) => <ProductRow key={i} {...e}/>)

  return (
    <div>
      <ProductCategoryRow>{products[0].category}</ProductCategoryRow>
      {p}
    </div>
  );
}
