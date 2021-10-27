import React from "react";
import AOS from "aos";

import {
    HeroContainer,
    HeroIsi,
    HeroImg,
    HeroText,
    TextH1,
    TextH2,
    TextP,
} from "./HeroElements";
import { useEffect } from "react";

const HeroSection = ({ id, nama, deskripsiJob, penjelasan, imgHero }) => {
    useEffect(() => {
        AOS.init();
    });
    return (
        <HeroContainer id={id}>
            <HeroIsi>
                <HeroImg
                    src={imgHero.default}
                    data-aos="fade-right"
                    data-aos-duration="700"
                    data-aos-offset="200"
                ></HeroImg>
                <HeroText>
                    <TextH1
                        data-aos="fade-up"
                        data-aos-duration="700"
                        data-aos-offset="100"
                    >
                        {nama}
                    </TextH1>
                    <TextH2
                        data-aos="fade-up"
                        data-aos-duration="700"
                        data-aos-offset="100"
                    >
                        {deskripsiJob}
                    </TextH2>
                    <TextP
                        data-aos="fade-right"
                        data-aos-duration="700"
                        data-aos-offset="100"
                    >
                        {penjelasan}
                    </TextP>
                </HeroText>
            </HeroIsi>
        </HeroContainer>
    );
};

export default HeroSection;
