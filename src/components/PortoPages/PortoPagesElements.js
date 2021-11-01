import styled from "styled-components";

export const HeroContainer = styled.div`
    background: #111111;
    display: flex;
    grid-template-columns: repeat(2, auto);
    // justify-content: center;
    align-items: center;
    height: 800px;
    position: relative;
    z-index: 1;

    @media (max-width: 320px) {
        height: 1900px;
        padding: 30px;
    }

    @media (min-width: 321px) and (max-width: 425px) {
        height: 1600px;
        padding: 30px;
    }

    @media (min-width: 426px) and (max-width: 768px) {
        height: 2000px;
        padding: 30px;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        height: 2400px;
        padding: 30px;
        width: 1147px;
    }

    @media (min-width: 1025px) and (max-width: 1390px) {
        height: 2600px;
        padding: 30px;
        max-width: 1350px;
        width: 100%;
    }

    @media (min-width: 1400px) {
        height: 2600px;
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 1000px;
    margin-right: auto;
    margin-left: auto;

    @media (max-width: 320px) {
        width: 100%;
    }

    @media (min-width: 321px) and (max-width: 425px) {
        width: 100%;
    }

    @media (min-width: 426px) and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding: 20px;
        width: 100%;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        width: 100%;
    }
`;

export const HeroImg = styled.img`
    left: 0;
    padding: 20px;
    -o-object-fit: cover;
    object-fit: cover;
    display: block;
    // width: 100%;
    max-width: 120%;
    border-radius: 40px;
    z-index: -1;

    @media (max-width: 320px) {
        max-width: 100%;
        margin-top: 20px;
        padding: 5px;
        border-radius: 10px;
    }

    @media (min-width: 321px) and (max-width: 425px) {
        width: 100%;
        border-radius: 10px;
    }

    @media (min-width: 426px) and (max-width: 768px) {
        width: 100%;
        border-radius: 30px;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        width: 100%;
    }
`;

export const HeroText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;

    @media (max-width: 320px) {
        width: 100%;
    }

    @media (min-width: 321px) and (max-width: 425px) {
        width: 100%;
    }

    @media (min-width: 426px) and (max-width: 768px) {
        width: 100%;
    }
`;

export const TextH1 = styled.h1`
    font-size: 60px;
    color: #888;
    margin-bottom: 20px;

    @media (max-width: 320px) {
        font-size: 30px;
        text-align: center;
    }

    @media (min-width: 321px) and (max-width: 425px) {
        font-size: 30px;
        text-align: center;
    }

    @media (min-width: 426px) and (max-width: 768px) {
        font-size: 50px;
        text-align: center;
    }
`;

export const TextH2 = styled.h1`
    font-size: 50px;
    color: #fff;
    margin-bottom: 20px;

    @media (max-width: 320px) {
        font-size: 14px;
        text-align: center;
    }

    @media (min-width: 321px) and (max-width: 425px) {
        font-size: 14px;
        text-align: center;
    }

    @media (min-width: 426px) and (max-width: 768px) {
        font-size: 24px;
        text-align: center;
    }
`;

export const TextP = styled.p`
    font-size: 18px;
    color: #888;
    line-height: 35px;

    @media (max-width: 320px) {
        font-size: 12px;
        text-align: justify;
        line-height: 22px;
    }

    @media (min-width: 321px) and (max-width: 425px) {
        font-size: 12px;
        text-align: justify;
        line-height: 22px;
    }

    @media (min-width: 426px) and (max-width: 768px) {
        font-size: 16px;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    @media (max-width: 320px) {
        flex-direction: column;
        font-size: 12px;
        width: 100%;
        justify-content: center;
    }

    @media (min-width: 321px) and (max-width: 425px) {
        flex-direction: column;
        font-size: 12px;
        width: 100%;
        justify-content: center;
    }

    @media (min-width: 426px) and (max-width: 768px) {
        width: 100%;
        justify-content: center;
    }
`;

export const TextContent = styled.div`
    margin-right: 20px;
    margin: 40px 0;

    @media (max-width: 320px) {
        margin: 10px 0;
    }

    @media (min-width: 321px) and (max-width: 425px) {
        margin: 10px 0;
    }

    @media (min-width: 426px) and (max-width: 768px) {
        margin: 10px 0;
        width: 100%;
    }
`;

export const Header = styled.p`
    font-size: 14px;
    margin-top: 20px;
    font-weight: 600;
    color: #888888;
    @media (max-width: 320px) {
        margin-top: 0;
    }

    @media (min-width: 321px) and (max-width: 425px) {
        margin-top: 0;
    }
`;

export const TextIsi = styled.p`
    font-size: 16px;
    line-height: 33px;
    font-weight: 600;
    color: ${(props) => props.color};
    width: ${(props) => props.width};
    @media (max-width: 320px) {
        display: inline;
        font-size: 12px;
        line-height: 20px;
    }

    @media (min-width: 321px) and (max-width: 425px) {
        display: inline;
        font-size: 12px;
        line-height: 20px;
    }
    @media (min-width: 426px) and (max-width: 768px) {
        font-size: 14px;
    }
`;

export const Bungkusan = styled.div`
    background-color: #111111;
    margin-top: 50px;
    padding: 60px;
    border-radius: 20px;
    margin-bottom: 50px;
    @media (max-width: 320px) {
        padding: 20px;
    }

    @media (min-width: 321px) and (max-width: 425px) {
        padding: 20px;
    }

    @media (min-width: 426px) and (max-width: 768px) {
        padding: 30px;
    }
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 50px;
    margin-bottom: 50px;
`;

export const BungkusTulisan = styled.div`
    display: block;
    position: sticky;
    color: #888888;
    top: 150px;
    width: 80%;
    height: 100%;
`;

export const Tulisan = styled.p`
    font-size: 18px;
    line-height: 33px;
    margin-bottom: 40px;
`;

export const TulisanJudul = styled.h4`
    margin-bottom: 50px;
    font-size: 26px;
`;

export const GambarScroll = styled.div`
    display: block;
    width: 100%;
`;

export const ImgScroll = styled.img`
    width: 100%;
    border-radius: 10px;
`;

export const Coba = styled.div`
    display: block;
    width: 100%;
    height: 100%;
    cursor: pointer;
`;

export const TextUl = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, minmax(auto, 400px));
    gap: 0px 10px;
    padding: 0px;
    margin: 20px 0px 0px;
    overflow: hidden;
    list-style: none;
`;

export const TextLi = styled.li`
    position: relative;
    margin-bottom: 10px;
    padding-left: 20px;
    font-size: 13px;
    color: #888;
    &::before {
        content: "▹";
        position: absolute;
        left: 0px;
        color: rgb(158, 69, 197);
        font-size: 20px;
        line-height: 15px;
    }
`;
