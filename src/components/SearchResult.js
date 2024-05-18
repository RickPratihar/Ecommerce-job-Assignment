import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";

const SearchResult = ({ searchResultRef }) => {
  const { filteredProducts, searchTerm } = useContext(ProductContext);

  if (!searchTerm) {
    return null;
  }

  return (
    <div ref={searchResultRef} className="product-list absolute right-0 mt-2 pt-2 pl-2 shadow-md bg-white rounded-xl max-w-md max-h-96 overflow-y-auto">
      {filteredProducts.length ? (
        filteredProducts.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} className="product-item mb-4">
            <div className="flex gap-5 pb-4 border-b border-gray-200 hover:bg-gray-100 p-2 rounded-lg">
              <img className="h-10" src={product.image} alt={product.title} />
              <div>
                <h2 className="text-sm font-semibold">{product.title}</h2>
                <p className="text-sm text-gray-600">${product.price}</p>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p className="text-sm text-gray-600">No products found</p>
      )}
    </div>
  );
};

export default SearchResult;
