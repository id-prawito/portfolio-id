import React from "react";

import {
    AboutContainer,
    AboutWrapper,
    AboutRow,
    ContentOne,
    TextWrapper,
    TopLine,
    TextDescription,
    TextEnd,
    ContentTwo,
    Isi,
    Isi2,
    Judul,
    TitleJob,
    TextPenjelasan,
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
                        <ContentOne>
                            <TextWrapper>
                                <TopLine>{judul}</TopLine>
                                <TextDescription>{keterangan}</TextDescription>
                                <TextEnd>{link}</TextEnd>
                            </TextWrapper>
                        </ContentOne>
                        <ContentTwo>
                            <Isi>
                                <Judul>{judulAboutFirst}</Judul>
                                <TitleJob>{titleAboutFirst}</TitleJob>
                                <TextPenjelasan>
                                    {descAboutFirst}
                                </TextPenjelasan>
                            </Isi>
                            <Isi2>
                                <Judul>{judulAboutSecond}</Judul>
                                <TitleJob>{titleAboutSecond}</TitleJob>
                                <TextPenjelasan>
                                    {descAboutSecond}
                                </TextPenjelasan>
                            </Isi2>
                        </ContentTwo>
                    </AboutRow>
                </AboutWrapper>
            </AboutContainer>
        </>
    );
};

export default About;
