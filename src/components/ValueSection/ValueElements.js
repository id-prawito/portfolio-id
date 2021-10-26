import styled from "styled-components";

export const ValueContainer = styled.div`
    color: #fff;
    background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#DCC9B9")};
    @media screen and (max-width: 768px) {
        padding: 50px 20px;
    }
`;

export const ValueWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 600px;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding: 20px;
        height: 100%;
    }
`;

export const ValueRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-gap: 30px;
    grid-template-areas: ${({ imgStart }) =>
        imgStart ? `"col2 col1"` : `"col1 col2"`};
    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) =>
            imgStart ? `"col1" "col2"` : `"col1" "col2"`};
    }
`;

export const ContentOne = styled.div`
    grid-area: col1;
`;

export const ContentTwo = styled.div`
    grid-area: col2;

    @media (min-width: 768px) and (max-width: 890px) {
        display: flex;
        justify-content: center;
    }
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;

    @media (min-width: 768px) and (max-width: 890px) {
        max-width: 100%;
    }
`;

export const TopLine = styled.div`
    color: #272429;
    font-size: 55px;
    font-weight: 700;
    margin-bottom: 16px;
    @media screen and (max-width: 768px) {
        font-size: 40px;
    }
`;

export const TextDescription = styled.p`
    font-size: 18px;
    color: #444047;
    line-height: 27px;
    margin-bottom: 220px;
    @media screen and (max-width: 768px) {
        font-size: 14px;
        margin-bottom: 20px;
    }
`;

export const TextEnd = styled.p`
    font-size: 15px;
    margin-bottom: -80px;
    color: #272429;
    @media screen and (max-width: 768px) {
        font-size: 12px;
        margin-bottom: 20px;
    }
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
    right: 0;
`;

export const Img = styled.img`
    width: 100%;
    padding-right: 0;
`;
