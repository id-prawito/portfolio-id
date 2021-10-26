import React from "react";
import {
    ValueContainer,
    ValueWrapper,
    ValueRow,
    ContentOne,
    ContentTwo,
    TextWrapper,
    TopLine,
    TextDescription,
    ImgWrap,
    Img,
} from "./ValueElements";

const Work = ({ id, judul, keterangan, valueImg }) => {
    return (
        <>
            <ValueContainer id={id}>
                <ValueWrapper>
                    <ValueRow>
                        <ContentOne>
                            <TextWrapper>
                                <TopLine>{judul}</TopLine>
                                <TextDescription>{keterangan}</TextDescription>
                            </TextWrapper>
                        </ContentOne>
                        <ContentTwo>
                            <ImgWrap>
                                <Img src={valueImg.default}></Img>
                            </ImgWrap>
                        </ContentTwo>
                    </ValueRow>
                </ValueWrapper>
            </ValueContainer>
        </>
    );
};

export default Work;
