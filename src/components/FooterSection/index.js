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
    Sosial,
} from "./FooterElements";

const Footer = ({ id, content, copyright }) => {
    const dataContact = content;
    return (
        <>
            <FooterContainer id={id}>
                <FooterWrapper>
                    <FooterRow>
                        <ContentOne>
                            <TextWrapper>
                                <TopLine>Let’s Talk ?</TopLine>
                                <IconWrap>
                                    {dataContact.map((contact) => (
                                        <Icon key={contact.id}>
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
                                <Sosial>Home</Sosial>
                                <Sosial>Experience</Sosial>
                                <Sosial>Skillset</Sosial>
                                <Sosial>Work</Sosial>
                            </TextWrapper>
                            <TextWrapper>
                                <Sosial>About</Sosial>
                                <Sosial>Book</Sosial>
                                <Sosial>Feedback</Sosial>
                            </TextWrapper>
                        </ContentTwo>
                    </FooterRow>
                </FooterWrapper>
            </FooterContainer>
        </>
    );
};

export default Footer;
