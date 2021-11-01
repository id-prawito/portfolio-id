import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const PortoContainer = styled.div`
    color: #fff;
    background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#030303")};
    @media screen and (max-width: 768px) {
        padding: 20px 20px;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        width: 1147px;
    }

    @media (max-width: 320px) {
        height: 500px;
    }
`;

export const PortoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 940px;
    width: 100%;
    max-width: 1150px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding: 20px;
        height: 700px;
    }

    @media (min-width: 320px) and (max-width: 480px) {
        height: 500px;
    }

    @media (min-width: 768px) and (max-width: 890px) {
        height: 600px;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        width: 100%;
        padding: 70px;
        height: 1000px;
    }
`;

export const PortoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) =>
            imgStart ? `"col1" "col2"` : `"col1 col1" "col2 col2"`};
        display: flex;
        flex-direction: column;
    }
`;

export const ContentOne = styled.div`
    width: 650px;
    @media screen and (max-width: 768px) {
        max-width: 100%;
        margin-bottom: 30px;
    }

    @media (min-width: 768px) and (max-width: 890px) {
        width: 100%;
    }
`;

export const ContentTwo = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 20px;
    flex-wrap: nowrap;
    overflow: auto;
    padding: 20px;
    &::-webkit-scrollbar {
        display: none;
    }
    @media screen and (max-width: 768px) {
        overflow: auto;
        width: 400px;
        padding: 10px;
        &::-webkit-scrollbar {
            display: flex;
        }
    }

    @media (min-width: 375px) and (max-width: 480px) {
        width: 300px;
    }

    @media (min-width: 425px) and (max-width: 767px) {
        width: 360px;
    }

    @media (min-width: 768px) and (max-width: 890px) {
        width: 100%;
    }

    @media (max-width: 320px) {
        width: 260px;
    }
`;

export const TextWrapper = styled.div`
    padding-top: 0;
`;

export const TextDescription = styled.p`
    font-size: 16px;
    color: #7b7b7b;
    line-height: 27px;
    font-weight: 700;
`;

export const TopLine = styled.div`
    color: #ffffff;
    font-size: 55px;
    font-weight: 700;
    letter-spacing: 1.4px;
    @media screen and (max-width: 768px) {
        font-size: 40px;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 30px;
    }
`;

export const Isi = styled.div`
    display: flex;
    width: 30%;
    flex-direction: column;
    background-color: #111111;
    min-width: 400px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        transform: scale(1.02);
        transition: all 0.2 ease-in-out;
        cursor: pointer;
    }
    @media screen and (max-width: 768px) {
        min-width: 300px;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        min-width: 200px;
    }

    @media (min-width: 768px) and (max-width: 890px) {
        min-width: 330px;
    }
`;

export const ImgBungkus = styled.div`
    max-width: 400px;
    max-height: 330px;
    overflow: hidden;
    display: block;
    @media screen and (max-width: 768px) {
        max-height: 200px;
    }

    @media (min-width: 320px) and (max-width: 480px) {
        max-height: 170px;
    }

    @media (min-width: 768px) and (max-width: 890px) {
        max-height: 290px;
    }
`;

export const Img = styled.img`
    width: 100%;
    padding-right: 0;
`;

export const TextBungkus = styled.div`
    padding: 20px 32px;
    @media (min-width: 320px) and (max-width: 480px) {
        padding: 16px;
    }
`;

export const Judul = styled.div`
    font-size: 24px;
    margin-bottom: 10px;
    font-weight: 700;
    @media screen and (max-width: 768px) {
        font-size: 20px;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 16px;
        font-weight: 600;
    }
`;

export const TextPenjelasan = styled.p`
    font-size: 18px;
    color: #7b7b7b;
    line-height: 27px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* number of lines to show */
    -webkit-box-orient: vertical;
    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        line-height: 18px;
    }
`;

export const HoverContent = styled.div``;

export const LinkPorto = styled(LinkR)`
    text-decoration: none;
`;
