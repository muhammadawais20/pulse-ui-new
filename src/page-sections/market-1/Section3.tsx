"use client";
import { FC, useEffect, useState } from "react";
import Link from "next/link";
import Card from "@component/Card";
import { Carousel } from "@component/carousel";
import { ProductCard6 } from "@component/product-cards";
import CategorySectionCreator from "@component/CategorySectionCreator";
import useWindowSize from "@hook/useWindowSize";
import Category from "@models/category.model";

// =====================================================
type Props = { categoryList: Category[] };
// =====================================================

const Section3: FC<Props> = ({ categoryList }) => {
  const width: any = useWindowSize();
  const [visibleSlides, setVisibleSlides] = useState(3);

  useEffect(() => {
    if (width < 650) setVisibleSlides(1);
    else if (width < 950) setVisibleSlides(2);
    else setVisibleSlides(3);
  }, [width]);

  return (
    <CategorySectionCreator
      iconName="categories"
      title="Top Categories"
      seeMoreLink="#"
    >
      <Carousel totalSlides={categoryList.length} visibleSlides={visibleSlides}>
        {categoryList.map((item, ind) => (
          <Link href={`/product/search/${item.slug}`} key={ind}>
            <Card p="1rem" borderRadius={8}>
              <ProductCard6
                title={item.name}
                subtitle={item.description as string}
                imgUrl={item.image as string}
              />
            </Card>
          </Link>
        ))}
      </Carousel>
    </CategorySectionCreator>
  );
};

export default Section3;
