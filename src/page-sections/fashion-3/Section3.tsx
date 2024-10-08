"use client";
import { FC } from "react";
import Grid from "@component/grid/Grid";
import { H2 } from "@component/Typography";
import Container from "@component/Container";
import { ProductCard17 } from "@component/product-cards";
import Product from "@models/product.model";

// ======================================================================
type Section3Props = { products: Product[] };
// ======================================================================

const Section3: FC<Section3Props> = ({ products }) => {
  return (
    <Container mt="4rem">
      <H2 textAlign="center" mb={4}>
        Best Selling Product
      </H2>

      <Grid container spacing={5}>
        {products.map((product) => (
          <Grid item md={3} sm={6} xs={12} key={product.id}>
            <ProductCard17
              id={product.id}
              slug={product.slug}
              title={product.title}
              price={product.price}
              images={product.images as string[]}
              imgUrl={product.thumbnail}
              category={product.categories[0]}
              reviews={product.reviews?.length || 5}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Section3;
