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
    HoverContent,
} from "./PortoElements";

const Porto = ({ id, textdes, topLine, content }) => {
    const portoContent = content;
    return (
        <>
            <PortoContainer id={id}>
                <PortoWrapper>
                    <PortoRow>
                        <ContentOne
                            data-aos="fade-down"
                            data-aos-duration="700"
                            data-aos-offset="200"
                        >
                            <TextWrapper>
                                <TextDescription>{textdes}</TextDescription>
                                <TopLine>{topLine}</TopLine>
                            </TextWrapper>
                        </ContentOne>
                        <ContentTwo>
                            {portoContent.map((porto) => (
                                <HoverContent
                                    data-aos="fade-left"
                                    data-aos-duration="700"
                                    data-aos-offset="200"
                                    key={porto.id}
                                >
                                    <Isi>
                                        <ImgBungkus>
                                            <Img
                                                src={porto.imgWork.default}
                                            ></Img>
                                        </ImgBungkus>
                                        <TextBungkus>
                                            <Judul>{porto.judulContent}</Judul>
                                            <TextPenjelasan maxLength="11">
                                                {porto.keteranganContent}
                                            </TextPenjelasan>
                                        </TextBungkus>
                                    </Isi>
                                </HoverContent>
                            ))}
                        </ContentTwo>
                    </PortoRow>
                </PortoWrapper>
            </PortoContainer>
        </>
    );
};

export default Porto;
