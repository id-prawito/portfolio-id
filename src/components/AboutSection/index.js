import React from "react";

import {
    AboutContainer,
    AboutWrapper,
    AboutRow,
    ContentOne,
    TextWrapper,
    TopLine,
    TextDescription,
    ContentTwo,
    Isi,
    Isi2,
    Judul,
    TitleJob,
    TextPenjelasan,
    HoverContent,
    TextUl,
    TextLi,
} from "./AboutElements";

const About = ({
    id,
    judul,
    keterangan,
    keteranganTwo,
    judulAboutFirst,
    judulAboutSecond,
    titleAboutFirst,
    titleAboutSecond,
    descAboutFirst,
    descAboutSecond,
    keteranganThree,
}) => {
    return (
        <>
            <AboutContainer id={id}>
                <AboutWrapper>
                    <AboutRow>
                        <ContentOne
                            data-aos="fade-right"
                            data-aos-duration="700"
                            data-aos-offset="200"
                        >
                            <TextWrapper>
                                <TopLine>{judul}</TopLine>
                                <TextDescription>{keterangan}</TextDescription>
                                <TextDescription>
                                    {keteranganTwo}
                                </TextDescription>
                                <TextDescription>
                                    {keteranganThree}
                                </TextDescription>

                                <TextUl>
                                    <TextLi>JavaScript (ES6+)</TextLi>
                                    <TextLi>React Js</TextLi>
                                    <TextLi>Vue Js</TextLi>
                                    <TextLi>Laravel</TextLi>
                                    <TextLi>HTML</TextLi>
                                    <TextLi>CSS</TextLi>
                                    <TextLi>Node Js</TextLi>
                                    <TextLi>PHP</TextLi>
                                    <TextLi>MySQL</TextLi>
                                </TextUl>
                            </TextWrapper>
                        </ContentOne>
                        <ContentTwo>
                            <HoverContent
                                data-aos="fade-down"
                                data-aos-duration="700"
                                data-aos-offset="200"
                            >
                                <Isi>
                                    <Judul>{judulAboutFirst}</Judul>
                                    <TitleJob>{titleAboutFirst}</TitleJob>
                                    <TextPenjelasan>
                                        {descAboutFirst}
                                    </TextPenjelasan>
                                </Isi>
                            </HoverContent>

                            <HoverContent
                                data-aos="fade-up"
                                data-aos-duration="700"
                                data-aos-offset="200"
                            >
                                <Isi2>
                                    <Judul>{judulAboutSecond}</Judul>
                                    <TitleJob>{titleAboutSecond}</TitleJob>
                                    <TextPenjelasan>
                                        {descAboutSecond}
                                    </TextPenjelasan>
                                </Isi2>
                            </HoverContent>
                        </ContentTwo>
                    </AboutRow>
                </AboutWrapper>
            </AboutContainer>
        </>
    );
};

export default About;
