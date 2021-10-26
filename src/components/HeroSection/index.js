import React from "react";

import {
    HeroContainer,
    HeroIsi,
    HeroImg,
    HeroText,
    TextH1,
    TextP,
} from "./HeroElements";

const HeroSection = ({ id, nama, deskripsiJob, penjelasan, imgHero }) => {
    return (
        <HeroContainer id={id}>
            <HeroIsi>
                <HeroImg src={imgHero.default}></HeroImg>
                <HeroText>
                    <TextH1>{nama}</TextH1>
                    <TextH1>{deskripsiJob}</TextH1>
                    <TextP>{penjelasan}</TextP>
                </HeroText>
            </HeroIsi>
        </HeroContainer>
    );
};

export default HeroSection;
