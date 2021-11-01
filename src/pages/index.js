import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import About from "../components/AboutSection";
import Sidebar from "../components/Sidebar";
import Skill from "../components/SkillSection";
import Value from "../components/ValueSection";
import Porto from "../components/PortoSection";
import Experience from "../components/ExpeSection";
import Footer from "../components/FooterSection";
import NavbarPages from "../components/PortoPages/Navbar";
import NotFoundPages from "../components/404/index";
import {
    expeObjOne,
    heroObjTwo,
    valueObjThree,
    skillObjFour,
    portoObjFive,
    aboutObjSix,
    contactObjSeven,
} from "../pages/Data";

import "aos/dist/aos.css";
import PortoPages from "../components/PortoPages";
import FooterPages from "../components/PortoPages/Footer";

export const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection {...heroObjTwo} />
            <Experience {...expeObjOne} />
            <Value {...valueObjThree} />
            <Skill {...skillObjFour} />
            <Porto {...portoObjFive} />
            <About {...aboutObjSix} />
            <Footer {...contactObjSeven} />
        </>
    );
};

export const Pages = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <NavbarPages toggle={toggle} />
            <PortoPages {...portoObjFive} />
            <FooterPages {...contactObjSeven} />
        </>
    );
};

export const NotFound = () => {
    return (
        <>
            <NotFoundPages {...heroObjTwo} />
        </>
    );
};
