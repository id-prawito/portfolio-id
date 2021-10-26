import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const FooterContainer = styled.div`
    color: #fff;
    background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#030303")};
    @media screen and (max-width: 768px) {
        padding: 50px 20px;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        padding: 20px 20px;
        height: 100%;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        width: 1147px;
    }
`;

export const FooterWrapper = styled.div`
    display: grid;
    height: 440px;
    width: 100%;
    max-width: 1150px;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
    @media screen and (max-width: 768px) {
        padding: 20px;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        height: 240px;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        width: 100%;
        padding: 70px;
    }
`;

export const FooterRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: normal;
    min-width: 1150px;
    height: 100px;
    grid-gap: 30px;
    grid-template-areas: ${({ imgStart }) =>
        imgStart ? `"col2 col1"` : `"col1 col2"`};
    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) =>
            imgStart ? `"col1" "col2"` : `"col1 col1" "col2 col2"`};
        display: flex;
        flex-direction: column;
        min-width: 400px;
        justify-content: center;
        position: absolute;
        margin-top: 280px;
    }

    @media (min-width: 320px) and (max-width: 480px) {
        margin-top: 0;
        min-width: 0;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        min-width: 1000px;
    }
`;

export const ContentOne = styled.div`
    grid-area: col1;
    @media screen and (max-width: 768px) {
        justify-content: center;
    }
`;

export const ContentTwo = styled.div`
    grid-area: col2;
    display: flex;
    justify-content: flex-end;
    gap: 60px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const TextWrapper = styled.li`
    max-width: 540px;
    list-style: none;
    padding-top: 0;
`;

export const TopLine = styled.div`
    color: #ffffff;
    font-size: 24px;
    line-height: 36px;
    font-weight: 700;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
`;

export const IconWrap = styled.div`
    font-size: 18px;
    color: #7b7b7b;
    line-height: 27px;
    margin-bottom: 100px;
    gap: 20px;
    display: flex;
    flex-direction: row;
`;

export const Icon = styled.a`
    cursor: pointer;
    display: flex;
    justify-content: center;
`;

export const IconImg = styled.img`
    cursor: pointer;
    opacity: 0.5;
    filter: grayscale(100%);
    &:hover {
        opacity: 1;
        filter: grayscale(0%);
    }
`;

export const TextEnd = styled.p`
    font-size: 15px;
    color: #7b7b7b;
    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 12px;
    }
`;

export const NavLinks = styled(LinkS)`
    color: #7b7b7b;
    font-size: 16px;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: 500;
    line-height: 30px;
    margin-bottom: 16px;
    cursor: pointer;

    &:hover {
        color: #cdcdcd;
    }
`;
