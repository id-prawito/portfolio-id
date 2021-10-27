import styled from "styled-components";

export const ExpeContainer = styled.div`
    color: #fff;
    background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#030303")};

    @media screen and (max-width: 768px) {
        padding: 50px 20px;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        width: 1147px;
    }
`;

export const ExpeWrapper = styled.div`
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
        height: 100%;
    }

    @media (min-width: 1024px) and (max-width: 1400px) {
        height: 700px;
    }
`;

export const ExpeRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) =>
            imgStart ? `"col1" "col2"` : `"col1 col1" "col2 col2"`};

        display: flex;
        flex-direction: column;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        width: 1147px;
        padding: 70px;
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

    @media (min-width: 769px) and (max-width: 1024px) {
        width: 70%;
    }
`;

export const ContentTwo = styled.div`
    display: grid;
    margin: 0 auto;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    flex-direction: row;
    grid-gap: 20px;
    max-width: 1150px;

    @media screen and (max-width: 768px) {
        max-width: 600px;
        grid-template-columns: 1fr;
    }

    @media (min-width: 320px) and (max-width: 480px) {
        width: 100%;
    }

    @media (max-width: 768px) and (max-width: 890px) {
        max-width: 100%;
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
    @media screen and (max-width: 768px) {
        font-size: 40px;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 30px;
    }
`;

export const Isi = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 390px;
    border-radius: 10px;
    @media screen and (max-width: 768px) {
        justify-content: center;
        align-items: center;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        min-width: 100%;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        min-width: 270px;
    }
`;

export const TextBungkus = styled.div`
    padding: 20px 32px 20px 0px;
    @media screen and (max-width: 768px) {
        gap: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (min-width: 320px) and (max-width: 480px) {
        padding: 20px;
    }
`;

export const Angka = styled.div`
    font-size: 117px;
    font-weight: 500;
    line-height: 175.5px;
    @media screen and (max-width: 768px) {
        font-size: 100px;
        line-height: 100px;
    }

    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 60px;
    }
`;

export const BungkusDes = styled.div`
    @media screen and (max-width: 768px) {
    }
`;

export const Judul = styled.div`
    font-size: 24px;
    margin-bottom: 10px;
    font-weight: 700;
    display: inline;
    color: ${(props) => props.color};

    @media screen and (max-width: 768px) {
        font-size: 18px;
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
    margin-top: 5px;
    -webkit-line-clamp: 3; /* number of lines to show */
    -webkit-box-orient: vertical;
    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        line-height: 18px;
        font-size: 14px;
        margin-top: 5px;
    }
`;
