"use client";
import { FC } from "react";
import Link from "next/link";
import styled from "styled-components";
import Box from "@component/Box";
import Card from "@component/Card";
import Container from "@component/Container";
import { H2, SemiSpan, Small } from "@component/Typography";
import { deviceSize } from "utils/constants";

// styled component
type CardProps = { imgUrl?: string };
const StyledCard = styled(Card)<CardProps>`
  padding: 62px 78px;
  background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0)
    ),
    url(${(props) => props.imgUrl});
  background-size: cover;

  @media only screen and (max-width: ${deviceSize.sm}px) {
    padding: 2rem;
  }
`;

const Section6: FC = () => {
  return (
    <Container>
      <StyledCard
        imgUrl="/assets/images/products/bg-gradient.png"
        mb="3.75rem"
        hoverEffect
      >
        <Box maxWidth="390px">
          <H2 mb="0.5rem">Build Your Own Youtube Studio Save Upto 70%</H2>
          <SemiSpan color="text.muted" display="block" mb="1.5rem">
            Everything you need to create your youtube studio
          </SemiSpan>

          <Link href="/">
            <Small
              fontWeight="700"
              borderBottom="2px solid"
              borderColor="primary.main"
            >
              DISCOVER EQUIPMENTS
            </Small>
          </Link>
        </Box>
      </StyledCard>
    </Container>
  );
};

export default Section6;
