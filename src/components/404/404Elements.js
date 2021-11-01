import styled from "styled-components";

export const HeroContainer = styled.div`
    background: #111111;
    display: flex;
    grid-template-columns: repeat(2, auto);
    align-items: center;
    max-height: 100vh;
    overflow-y: hidden;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
        height: 100vh;
    }

    @media (max-width: 1024px) {
        height: 100vh;
    }

    @media (min-width: 1025px) {
        height: 100vh;
    }

    &:before {
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        right: 70%;
        bottom: 0;
        left: 0;
        background: #030303;
    }
`;

export const HeroIsi = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    max-width: 1200px;
    margin-right: auto;
    margin-left: auto;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding: 20px;
    }

    @media (max-width: 768px) {
        max-width: 700px;
        margin-top: 20px;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        padding: 70px;
    }
`;

export const HeroImg = styled.img`
    left: 0;
    padding: 20px 0;
    -o-object-fit: cover;
    object-fit: cover;
    display: block;
    // width: 100%;
    max-width: 50%;
    z-index: -1;

    @media screen and (max-width: 768px) {
        max-width: 100%;
        margin-top: 20px;
    }
`;

export const HeroText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: -55px;

    @media screen and (max-width: 768px) {
        margin-left: 0;
        align-items: center;
    }
`;

export const TextH1 = styled.h1`
    font-size: 200px;
    color: #888;

    @media screen and (max-width: 768px) {
        font-size: 100px;
        text-align: center;
    }

    @media screen and (max-width: 1024px) {
        font-size: 120px;
        text-align: center;
    }
`;

export const TextH2 = styled.h1`
    font-size: 50px;
    color: #fff;

    @media screen and (max-width: 768px) {
        font-size: 25px;
        text-align: center;
    }
`;

export const ButtonResume = styled.a`
    font-size: 12px;
    color: #9e45c5;
    background-color: transparent;
    cursor: pointer;
    font-weight: 600;
    border-radius: 2px;
    border: 1px solid #9e45c5;
    padding: 10px;
    margin-top: 50px;
    transition: all 0.5s ease-in-out;
    text-decoration: none;

    &:hover {
        color: #fff;
        background-color: #9e45c5;
        transition: all 0.5s ease-in-out;
    }
`;
