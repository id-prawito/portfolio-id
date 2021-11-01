import React from "react";

import downloadFile from "../../images/CV_PRAWITO.pdf";

import {
    FooterContainer,
    FooterWrapper,
    FooterRow,
    ContentOne,
    TextWrapper,
    TopLine,
    IconWrap,
    Icon,
    IconImg,
    ContentTwo,
    NavLinks,
    ButtonResume,
} from "./FooterElements";

const Footer = ({ id, textdes, content }) => {
    const dataContact = content;
    return (
        <>
            <FooterContainer id={id}>
                <FooterWrapper>
                    <FooterRow>
                        <ContentOne>
                            <TextWrapper>
                                <TopLine
                                    data-aos="fade-right"
                                    data-aos-duration="700"
                                    data-aos-offset="200"
                                >
                                    {textdes}
                                </TopLine>
                                <IconWrap
                                    data-aos="fade-right"
                                    data-aos-duration="700"
                                    data-aos-offset="-100"
                                >
                                    {dataContact.map((contact) => (
                                        <Icon
                                            href={contact.linkTo}
                                            key={contact.id}
                                            target="_blank"
                                        >
                                            <IconImg
                                                src={contact.imgContact.default}
                                            ></IconImg>
                                        </Icon>
                                    ))}
                                </IconWrap>

                                <ButtonResume
                                    data-aos="fade-up"
                                    data-aos-duration="700"
                                    data-aos-offset="-200"
                                    href={downloadFile}
                                    download
                                >
                                    Download My CV
                                </ButtonResume>
                            </TextWrapper>
                        </ContentOne>
                        <ContentTwo
                            data-aos="fade-right"
                            data-aos-duration="700"
                            data-aos-offset="200"
                        >
                            <TextWrapper>
                                <NavLinks
                                    to="experience"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                >
                                    Experience
                                </NavLinks>
                                <NavLinks
                                    to="skillset"
                                    smooth={true}
                                    duration={700}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                >
                                    Skillset
                                </NavLinks>
                                <NavLinks
                                    to="porto"
                                    smooth={true}
                                    duration={700}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                >
                                    Porto
                                </NavLinks>
                            </TextWrapper>
                            <TextWrapper>
                                <NavLinks
                                    to="hero"
                                    smooth={true}
                                    duration={700}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                >
                                    About
                                </NavLinks>
                                <NavLinks to="">Book</NavLinks>
                                <NavLinks to="">Feedback</NavLinks>
                            </TextWrapper>
                        </ContentTwo>
                    </FooterRow>
                </FooterWrapper>
            </FooterContainer>
        </>
    );
};

export default Footer;
