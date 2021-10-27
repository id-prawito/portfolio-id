import styled from "styled-components";

export const HeroContainer = styled.div`
    background: #272429;
    display: flex;
    grid-template-columns: repeat(2, auto);
    // justify-content: center;
    align-items: center;
    height: 800px;
    position: relative;
    z-index: 1;

    @media (min-width: 769px) and (max-width: 1024px) {
        width: 1147px;
        height: 700px;
    }

    @media (min-width: 426px) and (max-width: 768px) {
        height: 1000px;
    }

    @media (min-width: 1400px) {
        height: 1000px;
    }

    @media (min-width: 1024px) and (max-width: 1400px) {
        height: 750px;
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
    align-items: flex-start;
    margin-left: -55px;

    @media screen and (max-width: 768px) {
        margin-left: 0;
        align-items: center;
    }
`;

export const TextH1 = styled.h1`
    font-size: 60px;
    color: #888;
    margin-bottom: 20px;

    @media screen and (max-width: 768px) {
        font-size: 30px;
        text-align: center;
    }
`;

export const TextH2 = styled.h1`
    font-size: 50px;
    color: #fff;
    margin-bottom: 20px;

    @media screen and (max-width: 768px) {
        font-size: 25px;
        text-align: center;
    }
`;

export const TextP = styled.p`
    font-size: 18px;
    color: #888;
    line-height: 35px;

    @media screen and (max-width: 768px) {
        text-align: center;
    }
`;
