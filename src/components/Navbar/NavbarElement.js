import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? "#000" : "transparent")};
    height: 80px;
    display: flex;
    justify-content: center;
    margin-top: -80px;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        width: 1147px;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1250px;
    @media (min-width: 769px) and (max-width: 1024px) {
        width: 1147px;
    }
`;

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;

    @media (min-width: 320px) and (max-width: 480px) {
        margin-left: 16px;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        margin-left: 40px;
    }

    @media (min-width: 1024px) {
        margin-left: 2px;
    }
`;

export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    font-weight: 600;
    height: 100%;
    cursor: pointer;
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    -ms-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;

    &.active {
        background-color: #9e45c5;
        color: #fff;
        &:hover {
            color: #fff;
        }
    }

    &:hover {
        color: #9e45c5;
    }
`;

export const HeroGambar = styled.img`
    height: 50px;

    @media (min-width: 320px) and (max-width: 480px) {
        height: 32px;
    }
`;
