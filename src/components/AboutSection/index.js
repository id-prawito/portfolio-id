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
} from "./AboutElements";

const About = ({
    id,
    judul,
    keterangan,
    link,
    judulAboutFirst,
    judulAboutSecond,
    titleAboutFirst,
    titleAboutSecond,
    descAboutFirst,
    descAboutSecond,
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
