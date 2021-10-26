import React from "react";
import {
    PortoContainer,
    PortoWrapper,
    PortoRow,
    ContentOne,
    TextWrapper,
    TextDescription,
    TopLine,
    ContentTwo,
    Isi,
    ImgBungkus,
    Img,
    TextBungkus,
    Judul,
    TextPenjelasan,
} from "./PortoElements";

const Porto = ({ id, textdes, topLine, content }) => {
    const portoContent = content;
    return (
        <>
            <PortoContainer id={id}>
                <PortoWrapper>
                    <PortoRow>
                        <ContentOne>
                            <TextWrapper>
                                <TextDescription>{textdes}</TextDescription>
                                <TopLine>{topLine}</TopLine>
                            </TextWrapper>
                        </ContentOne>
                        <ContentTwo>
                            {portoContent.map((porto) => (
                                <Isi key={porto.id}>
                                    <ImgBungkus>
                                        <Img src={porto.imgWork.default}></Img>
                                    </ImgBungkus>
                                    <TextBungkus>
                                        <Judul>{porto.judulContent}</Judul>
                                        <TextPenjelasan maxLength="11">
                                            {porto.keteranganContent}
                                        </TextPenjelasan>
                                    </TextBungkus>
                                </Isi>
                            ))}
                        </ContentTwo>
                    </PortoRow>
                </PortoWrapper>
            </PortoContainer>
        </>
    );
};

export default Porto;
