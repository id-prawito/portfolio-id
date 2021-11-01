import React from "react";
import AOS from "aos";
import imgPages from "../../images/landing.jpg";
// import imgAdmin from "../../images/admin.jpg";
import imgOne from "../../images/1.1.jpg";
import imgTwo from "../../images/1.2.jpg";
import imgThree from "../../images/1.3.jpg";
import imgFour from "../../images/1.4.jpg";
// import one from "../../images/1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
    HeroContainer,
    HeroIsi,
    HeroImg,
    HeroText,
    TextH1,
    TextP,
    TextContainer,
    TextContent,
    Header,
    TextIsi,
    Bungkusan,
    // ContentContainer,
    // Tulisan,
    // GambarScroll,
    // ImgScroll,
    // BungkusTulisan,
    // TulisanJudul,
    Coba,
    TextUl,
    TextLi,
} from "./PortoPagesElements";
import { useEffect } from "react";

const PortoPages = ({ content }) => {
    // const objectPages = content[0];

    useEffect(() => {
        AOS.init();
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <HeroContainer id="pages">
            <HeroIsi>
                <HeroText>
                    <TextH1
                        data-aos="fade-up"
                        data-aos-duration="700"
                        data-aos-offset="-300"
                    >
                        SPK - Promethee
                    </TextH1>
                    <TextP
                        data-aos="fade-up"
                        data-aos-duration="700"
                        data-aos-offset="-250"
                    >
                        Decision Support System for Priority Determination of
                        Small Dam Construction Development with The Promethee
                        Method (Preference Ranking Organization Method for
                        Enrichment Evaluation). Designed dan build with Laravel
                        Framework, CSS (Bootstrap), HTML5 and MYSQL Database.
                    </TextP>
                    <TextContainer
                        data-aos="fade-up"
                        data-aos-duration="700"
                        data-aos-offset="-250"
                    >
                        <TextContent>
                            <Header>Expertise</Header>
                            <TextIsi color="#888888" width="400px">
                                Research, Decision Support System, Web Design
                            </TextIsi>
                        </TextContent>
                        <TextContent>
                            <Header>For</Header>
                            <TextIsi color="#FFCD40">Final Project</TextIsi>
                        </TextContent>
                        <TextContent>
                            <Header>Project date</Header>
                            <TextIsi color="#FFCD40">Maret 2021</TextIsi>
                        </TextContent>
                    </TextContainer>
                </HeroText>
                <HeroImg
                    // src={objectPages.imgWork.default}
                    src={imgPages}
                    data-aos="fade-right"
                    data-aos-duration="700"
                    data-aos-offset="-200"
                ></HeroImg>
                <Bungkusan>
                    <HeroText>
                        <TextP
                            data-aos="fade-right"
                            data-aos-duration="700"
                            data-aos-offset="100"
                        >
                            Peference Ranking Organization Method For Enrichment
                            Evaluation (PROMETHEE) is a method of determining
                            the order or priority in multi-criteria analysis.
                            PROMETHEE is a methodology for evaluating
                            alternatives with given criteria and ranking the
                            alternatives for the final decision. The stages of
                            the procedure for the implementation of PROMETHEE
                            are as follows (Ignatius J, et al, 2012):
                        </TextP>
                        <TextContainer
                            data-aos="fade-down"
                            data-aos-duration="700"
                            data-aos-offset="100"
                        >
                            {/* <TextContent>
                                <Header>Expertise</Header>
                                <TextIsi color="#888888" width="400px">
                                    Research, Strategy, iOS design, prototyping,
                                    testing
                                </TextIsi>
                            </TextContent>
                            <TextContent>
                                <Header>Working At</Header>
                                <TextIsi color="#FFCD40">WeTransfer</TextIsi>
                            </TextContent>
                            <TextContent>
                                <Header>Interested</Header>
                                <TextIsi color="#FFCD40">Try Paste</TextIsi>
                            </TextContent> */}
                            <TextUl>
                                <TextLi>
                                    Determination of deviation based on pairwise
                                    comparisons.
                                </TextLi>
                                <TextLi>
                                    Net ranking flow calculation and complete
                                    rating or netflow value calculation.
                                </TextLi>

                                <TextLi>
                                    Calculation of ranking flow and partial
                                    ranking or calculation of the values ​​of
                                    leaving flow and entering flow for each
                                    alternative.
                                </TextLi>

                                <TextLi>
                                    Application of preference function.
                                </TextLi>
                                <TextLi>
                                    Global preference index calculation.
                                </TextLi>
                            </TextUl>
                        </TextContainer>
                        <TextP
                            data-aos="fade-right"
                            data-aos-duration="700"
                            data-aos-offset="100"
                        >
                            These are some views from the SPK web - Promethee:
                        </TextP>
                    </HeroText>
                </Bungkusan>
                {/* <HeroText>
                    <TextP
                        data-aos="fade-right"
                        data-aos-duration="700"
                        data-aos-offset="100"
                    >
                        {objectPages.keteranganContent} On this occasion, I
                        created a user-friendly interface for the clear cache
                        application, so that users are comfortable when using
                        it. On this occasion, I created a user-friendly
                        interface for the clear cache application, so that users
                        are comfortable when using it. On this occasion, I
                        created a user-friendly interface for the clear cache
                        application, so that users are comfortable when using
                        it.
                    </TextP>
                    <TextContainer
                        data-aos="fade-down"
                        data-aos-duration="700"
                        data-aos-offset="100"
                    >
                        <TextContent>
                            <Header>Expertise</Header>
                            <TextIsi color="#888888" width="400px">
                                Research, Strategy, iOS design, prototyping,
                                testing
                            </TextIsi>
                        </TextContent>
                        <TextContent>
                            <Header>Working At</Header>
                            <TextIsi color="#FFCD40">WeTransfer</TextIsi>
                        </TextContent>
                        <TextContent>
                            <Header>Interested</Header>
                            <TextIsi color="#FFCD40">Try Paste</TextIsi>
                        </TextContent>
                    </TextContainer>
                </HeroText> */}

                {/* <ContentContainer>
                    <BungkusTulisan>
                        <TulisanJudul>1: A lack of focus</TulisanJudul>
                        <Tulisan>
                            However, there’s a creative tension that limits the
                            craved flexibility of these creatives. Working with
                            presentations, an important part of their job for
                            communication, and aligning their team on goals
                            feels impossible to do on mobile devices with tools
                            like Microsoft PowerPoint, Google Slides, and Apple
                            Keynote.
                        </Tulisan>
                        <TulisanJudul>1: A lack of focus</TulisanJudul>
                        <Tulisan>
                            However, there’s a creative tension that limits the
                            craved flexibility of these creatives. Working with
                            presentations, an important part of their job for
                            communication, and aligning their team on goals
                            feels impossible to do on mobile devices with tools
                            like Microsoft PowerPoint, Google Slides, and Apple
                            Keynote.
                        </Tulisan>
                        <TulisanJudul>1: A lack of focus</TulisanJudul>
                        <Tulisan>
                            However, there’s a creative tension that limits the
                            craved flexibility of these creatives. Working with
                            presentations, an important part of their job for
                            communication, and aligning their team on goals
                            feels impossible to do on mobile devices with tools
                            like Microsoft PowerPoint, Google Slides, and Apple
                            Keynote.
                        </Tulisan>
                    </BungkusTulisan>
                    <GambarScroll>
                        <ImgScroll src={one}></ImgScroll>
                        <ImgScroll src={one}></ImgScroll>
                        <ImgScroll src={one}></ImgScroll>
                    </GambarScroll>
                </ContentContainer> */}

                <Coba>
                    <Slider {...settings}>
                        <HeroImg
                            src={imgOne}
                            data-aos="fade-right"
                            data-aos-duration="700"
                            data-aos-offset="50"
                        ></HeroImg>
                        <HeroImg
                            src={imgTwo}
                            data-aos="fade-right"
                            data-aos-duration="700"
                            data-aos-offset="50"
                        ></HeroImg>
                        <HeroImg
                            src={imgThree}
                            data-aos="fade-right"
                            data-aos-duration="700"
                            data-aos-offset="50"
                        ></HeroImg>
                        <HeroImg
                            src={imgFour}
                            data-aos="fade-right"
                            data-aos-duration="700"
                            data-aos-offset="50"
                        ></HeroImg>
                    </Slider>
                </Coba>
            </HeroIsi>
        </HeroContainer>
    );
};

export default PortoPages;
