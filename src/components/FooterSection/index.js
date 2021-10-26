import React from "react";

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
    TextEnd,
    ContentTwo,
    NavLinks,
} from "./FooterElements";

const Footer = ({ id, textdes, content, copyright }) => {
    const dataContact = content;
    return (
        <>
            <FooterContainer id={id}>
                <FooterWrapper>
                    <FooterRow>
                        <ContentOne>
                            <TextWrapper>
                                <TopLine>{textdes}</TopLine>
                                <IconWrap>
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
                                <TextEnd>{copyright}</TextEnd>
                            </TextWrapper>
                        </ContentOne>
                        <ContentTwo>
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
