import React from "react";

import {
    ExpeContainer,
    ExpeWrapper,
    ExpeRow,
    ContentOne,
    TextWrapper,
    TextDescription,
    TopLine,
    ContentTwo,
    Isi,
    TextBungkus,
    Angka,
    BungkusDes,
    Judul,
    TextPenjelasan,
} from "./ExpeElements";

const Experience = ({ id, textdes, topLine, content }) => {
    const dataMaping = content;
    return (
        <>
            <ExpeContainer id={id}>
                <ExpeWrapper>
                    <ExpeRow>
                        <ContentOne
                            data-aos="fade-right"
                            data-aos-duration="700"
                            data-aos-offset="200"
                        >
                            <TextWrapper>
                                <TextDescription>{textdes}</TextDescription>
                                <TopLine>{topLine}</TopLine>
                            </TextWrapper>
                        </ContentOne>
                        <ContentTwo>
                            {dataMaping.map((expe) => (
                                <Isi
                                    data-aos="fade-right"
                                    data-aos-duration="700"
                                    data-aos-offset="200"
                                    key={expe.nomor}
                                >
                                    <TextBungkus>
                                        <Angka>{expe.nomor}</Angka>
                                        <BungkusDes>
                                            <Judul color={expe.color}>
                                                {expe.judul}
                                            </Judul>
                                            <Judul> {expe.keterangan}</Judul>
                                            <TextPenjelasan>
                                                {expe.deskripsi}
                                            </TextPenjelasan>
                                        </BungkusDes>
                                    </TextBungkus>
                                </Isi>
                            ))}
                        </ContentTwo>
                    </ExpeRow>
                </ExpeWrapper>
            </ExpeContainer>
        </>
    );
};

export default Experience;
