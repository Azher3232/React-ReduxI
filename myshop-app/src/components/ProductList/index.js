import React from "react";
import "./styles";
import { useSelector } from "react-redux";
import { StyledArticle } from "./styles";
import Product from "./Product";

const ProductList = () => {
  const products = useSelector((state) => state.products.productsItems);
  console.log("PRODUCT LIST ------>", products);
  console.log("LENGHT", products.length);

  return (
    <main>
      <StyledArticle>
        {products.length > 0
          ? products.map((product) => {
              const { id, title, description, price, rating, image } = product;
              return (
                <Product
                  image={image}
                  title={title}
                  description={description}
                  price={price}
                  rating={rating}
                  key={id}
                />
              );
            })
          : null}
      </StyledArticle>
    </main>
  );
};

export default ProductList;
