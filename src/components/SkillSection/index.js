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
    TextEnd,
    ContentTwo,
    Isi,
    Icon,
    Judul,
    TextPenjelasan,
} from "./SkillElements";

const Skill = ({ id, judul, keterangan, link, content }) => {
    const contentSkill = content;
    return (
        <>
            <SkillContainer id={id}>
                <SkillWrapper>
                    <SkillRow>
                        <ContentOne>
                            <TextWrapper>
                                <TopLine>{judul}</TopLine>
                                <TextDescription>{keterangan}</TextDescription>
                                <TextEnd>{link}</TextEnd>
                            </TextWrapper>
                        </ContentOne>
                        <ContentTwo>
                            {contentSkill.map((skill, index) => (
                                <Isi key={index}>
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
