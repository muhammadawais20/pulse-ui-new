"use client";
import Box from "@component/Box";
import { debounce } from "lodash";
import Image from "@component/Image";
import styled from "styled-components";
import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";
import Container from "@component/Container";
import { Link as Scroll } from "react-scroll";
import Typography from "@component/Typography";
import Sidenav from "@component/sidenav/Sidenav";
import { IconButton, Button } from "@component/buttons";
import { FC, useCallback, useEffect, useState } from "react";
import { getTheme } from "@utils/utils";

const headerHeight = 72;

const HeaderWrapper = styled.div<{ fixed: boolean }>`
  box-shadow: ${(props) => props.fixed && getTheme("shadows.regular")};

  .link {
    transition: color 250ms ease-in-out;
    cursor: pointer;
    :hover {
      color: ${getTheme("colors.primary.main")};
    }
  }

  ${(props) =>
    props.fixed
      ? `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: white;
    height: ${headerHeight}px;
    z-index: 99;

    .link {
      color: inherit;
    }

    @keyframes slide-from-top {
      from {
        top: -${headerHeight}px;
      }
      to {
        top: 0;
      }
    }
    
    animation: slide-from-top 250ms ease-in-out;
    
    & + div {
      padding-top: ${headerHeight}px;
    }
  `
      : ""}

  .menu {
    display: none;
  }

  @media only screen and (max-width: 700px) {
    .right-links {
      display: none;
    }

    .menu {
      display: unset;
    }
  }
`;

const Header: FC = () => {
  const [open, setOpen] = useState(false);
  const [isFixed, setFixed] = useState(false);

  const toggleSidenav = () => setOpen((open) => !open);

  const scrollListener = useCallback(
    debounce(() => {
      if (window?.scrollY >= headerHeight) setFixed(true);
      else setFixed(false);
    }, 50),
    []
  );

  useEffect(() => {
    if (!window) return;

    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  return (
    <HeaderWrapper fixed={isFixed}>
      <Container>
        <FlexBox
          justifyContent="space-between"
          alignItems="center"
          height={headerHeight}
        >
          <FlexBox alignItems="center">
            <Image
              width="96px"
              height="44px"
              src="/assets/images/logo.svg"
              alt="logo"
            />

            <Typography className="right-links"
              as="h1"
              color="secondary.main"
              p="0.25rem"
              alignItems="start"
            >
              Pulse
            </Typography>
          </FlexBox>

          <FlexBox className="right-links" alignItems="center">

            <a href="https://1.envato.market/oeNbNe">
              <Button variant="outlined" color="secondary">
                Log In
              </Button>
            </a>
          </FlexBox>

          {/* mobile menu */}
          <Sidenav
            handle={
              <IconButton className="menu">
                <Icon>menu</Icon>
              </IconButton>
            }
            open={open}
            position="right"
            width={260}
            toggleSidenav={toggleSidenav}
          >
            <Box p="1rem">

              <Scroll
                to="price"
                duration={400}
                offset={-headerHeight}
                smooth={true}
              >
                <Typography
                  className="link"
                  py="0.5rem"
                  onClick={toggleSidenav}
                  mb="1rem"
                >
                  Pricing
                </Typography>
              </Scroll>

              <Button variant="outlined" color="primary">
                Purchase Now
              </Button>
            </Box>
          </Sidenav>
        </FlexBox>
      </Container>
    </HeaderWrapper >
  );
};

export default Header;
