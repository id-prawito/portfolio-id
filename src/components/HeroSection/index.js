import React from "react";
import heroImg from "../../images/hero-img.jfif";

import {
    HeroContainer,
    HeroIsi,
    HeroImg,
    HeroText,
    TextH1,
    TextP,
} from "./HeroElements";

const HeroSection = ({ id, nama, deskripsiJob, penjelasan }) => {
    return (
        <HeroContainer id={id}>
            <HeroIsi>
                <HeroImg src={heroImg}></HeroImg>
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
