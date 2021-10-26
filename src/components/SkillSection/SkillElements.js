import styled from "styled-components";

export const SkillContainer = styled.div`
    color: #fff;
    background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#030303")};
    @media screen and (max-width: 768px) {
        padding: 20px 20px;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        width: 1147px;
    }
`;

export const SkillWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 940px;
    width: 100%;
    max-width: 1150px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
    @media screen and (max-width: 768px) {
        padding: 20px;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        height: 950px;
    }

    @media (min-width: 425px) and (max-width: 767px) {
        height: 860px;
    }

    @media (min-width: 768px) and (max-width: 890px) {
        height: 800px;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        width: 100%;
        padding: 70px;
    }
`;

export const SkillRow = styled.div`
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

    @media (min-width: 320px) and (max-width: 480px) {
        display: initial;
    }
`;

export const ContentOne = styled.div`
    grid-area: col1;

    @media (min-width: 1140px) {
        margin-bottom: 300px;
    }
`;

export const ContentTwo = styled.div`
    grid-area: col2;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 50px;
    @media (min-width: 320px) and (max-width: 480px) {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 10px;
    }
`;

export const TextWrapper = styled.div`
    padding-top: 0;
    width: 500px;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        padding-bottom: 30px;
    }
`;

export const TopLine = styled.div`
    color: #ffffff;
    font-size: 55px;
    font-weight: 700;
    margin-bottom: 16px;
    @media screen and (max-width: 768px) {
        font-size: 40px;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 30px;
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
        line-height: 20px;
    }

    @media (min-width: 1140px) {
        margin-bottom: 50px;
    }
`;

export const Isi = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Icon = styled.div`
    font-size: 1.8rem;
    margin-bottom: 20px;
    color: ${(props) => props.color};
`;

export const Judul = styled.div`
    font-size: 24px;
    margin-bottom: 20px;
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
    margin-bottom: 20px;
    @media screen and (max-width: 768px) {
        font-size: 14px;
    }

    @media (min-width: 320px) and (max-width: 480px) {
        line-height: 18px;
    }
`;
