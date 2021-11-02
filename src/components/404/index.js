import React from "react";
import AOS from "aos";
import Helmet from "react-helmet";

import {
    ButtonResume,
    HeroContainer,
    HeroIsi,
    HeroText,
    TextH1,
    TextH2,
} from "./404Elements";
import { useEffect } from "react";

const NotFound = ({ id }) => {
    useEffect(() => {
        AOS.init();
    });
    return (
        <HeroContainer id={id}>
            <Helmet>
                <title>404 Not Found</title>
            </Helmet>
            <HeroIsi>
                <HeroText>
                    <TextH1
                        data-aos="fade-up"
                        data-aos-duration="700"
                        data-aos-offset="50"
                    >
                        404
                    </TextH1>
                    <TextH2
                        data-aos="fade-up"
                        data-aos-duration="700"
                        data-aos-offset="5"
                    >
                        Page Not Found
                    </TextH2>
                    <ButtonResume
                        data-aos="fade-up"
                        data-aos-duration="700"
                        data-aos-offset="50"
                        href="/"
                    >
                        Go to Home
                    </ButtonResume>
                </HeroText>
            </HeroIsi>
        </HeroContainer>
    );
};

export default NotFound;
