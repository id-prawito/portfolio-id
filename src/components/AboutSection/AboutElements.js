import styled from "styled-components";

export const AboutContainer = styled.div`
    color: #fff;
    background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#272429")};
    @media screen and (max-width: 768px) {
        padding: 50px 20px;
        height: 744px;
    }

    @media (min-width: 320px) and (max-width: 480px) {
        padding: 20px 20px;
        height: 100%;
    }
`;

export const AboutWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 744px;
    width: 100%;
    max-width: 1150px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
    @media screen and (max-width: 768px) {
        padding: 20px;
    }
`;

export const AboutRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-gap: 30px;
    grid-template-areas: ${({ imgStart }) =>
        imgStart ? `"col2 col1"` : `"col1 col2"`};
    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) =>
            imgStart ? `"col1" "col2"` : `"col1 col1" "col2 col2"`};
    }
    @media (min-width: 320px) and (max-width: 480px) {
        display: initial;
        height: 100%;
    }
`;

export const ContentOne = styled.div`
    grid-area: col1;
`;

export const ContentTwo = styled.div`
    grid-area: col2;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 60px;
    @media (min-width: 320px) and (max-width: 480px) {
        grid-gap: 20px;
    }
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    width: 500px;
    padding-bottom: 60px;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        padding-bottom: 20px;
    }

    @media (min-width: 768px) and (max-width: 890px) {
        min-width: 100%;
    }
`;

export const TopLine = styled.div`
    color: #ffffff;
    font-size: 55px;
    font-weight: 700;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 30px;
        font-weight: 600;
    }
`;

export const TextDescription = styled.p`
    font-size: 18px;
    color: #7b7b7b;
    line-height: 27px;
    margin-bottom: 260px;
    @media screen and (max-width: 768px) {
        font-size: 14px;
        margin-bottom: 20px;
    }

    @media (min-width: 320px) and (max-width: 480px) {
        line-height: 18px;
    }
`;

export const TextEnd = styled.p`
    font-size: 15px;
    color: #00a4ef;
    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 12px;
    }
`;

export const Isi = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #383837;
    border-radius: 0px 30px 30px 30px;
    padding: 40px 32px;
    margin-left: 60px;
    margin-right: -60px;
    transition: all 0.2s ease-in-out;
    &:hover {
        transform: scale(1.02);
        transition: all 0.2 ease-in-out;
    }
    @media screen and (max-width: 768px) {
        margin-left: 0;
        margin-right: 0;
    }
`;

export const Isi2 = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #383837;
    border-radius: 30px 0px 30px 30px;
    padding: 40px 32px;
    text-align: right;
    transition: all 0.2s ease-in-out;
    &:hover {
        transform: scale(1.02);
        transition: all 0.2 ease-in-out;
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

export const TitleJob = styled.p`
    font-size: 16px;
    color: #ffffff;
    line-height: 24px;
    margin-bottom: 20px;
    font-weight: 400;
    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 12px;
    }
`;

export const TextPenjelasan = styled.p`
    font-size: 18px;
    color: #7b7b7b;
    line-height: 27px;
    margin-bottom: 20px;
    @media screen and (max-width: 768px) {
        font-size: 14px;
        margin-bottom: 10px;
    }

    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 12px;
        line-height: 18px;
    }
`;
