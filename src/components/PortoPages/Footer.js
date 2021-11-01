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
    ButtonResume,
} from "../FooterSection/FooterElements";

const FooterPages = ({ id, textdes, content }) => {
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
                    </FooterRow>
                </FooterWrapper>
            </FooterContainer>
        </>
    );
};

export default FooterPages;
