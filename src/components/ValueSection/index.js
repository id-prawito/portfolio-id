import React from "react";
import heroImg from "../../images/img1.svg";
import {
    ValueContainer,
    ValueWrapper,
    ValueRow,
    ContentOne,
    ContentTwo,
    TextWrapper,
    TopLine,
    TextDescription,
    TextEnd,
    ImgWrap,
    Img,
} from "./ValueElements";

const Work = ({ id, judul, keterangan, link }) => {
    return (
        <>
            <ValueContainer id={id}>
                <ValueWrapper>
                    <ValueRow>
                        <ContentOne>
                            <TextWrapper>
                                <TopLine>{judul}</TopLine>
                                <TextDescription>{keterangan}</TextDescription>
                                <TextEnd>{link}</TextEnd>
                            </TextWrapper>
                        </ContentOne>
                        <ContentTwo>
                            <ImgWrap>
                                <Img src={heroImg}></Img>
                            </ImgWrap>
                        </ContentTwo>
                    </ValueRow>
                </ValueWrapper>
            </ValueContainer>
        </>
    );
};

export default Work;
