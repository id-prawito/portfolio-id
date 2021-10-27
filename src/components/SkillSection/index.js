import React from "react";
import { FaTh } from "react-icons/fa";

import {
    SkillContainer,
    SkillWrapper,
    SkillRow,
    ContentOne,
    TextWrapper,
    TopLine,
    TextDescription,
    ContentTwo,
    Isi,
    Icon,
    Judul,
    TextPenjelasan,
} from "./SkillElements";

const Skill = ({ id, judul, keterangan, content }) => {
    const contentSkill = content;
    return (
        <>
            <SkillContainer id={id}>
                <SkillWrapper>
                    <SkillRow>
                        <ContentOne
                            data-aos="fade-down"
                            data-aos-duration="700"
                            data-aos-offset="200"
                        >
                            <TextWrapper>
                                <TopLine>{judul}</TopLine>
                                <TextDescription>{keterangan}</TextDescription>
                            </TextWrapper>
                        </ContentOne>
                        <ContentTwo>
                            {contentSkill.map((skill, index) => (
                                <Isi
                                    data-aos="fade-right"
                                    data-aos-duration="700"
                                    data-aos-offset="200"
                                    key={index}
                                >
                                    <Icon color={skill.color}>
                                        <FaTh />
                                    </Icon>
                                    <Judul>{skill.judulContent}</Judul>
                                    <TextPenjelasan>
                                        {skill.keteranganContent}
                                    </TextPenjelasan>
                                </Isi>
                            ))}
                        </ContentTwo>
                    </SkillRow>
                </SkillWrapper>
            </SkillContainer>
        </>
    );
};

export default Skill;
