import React from "react";
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarLink,
    SidebarMenu,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="experience" onClick={toggle}>
                        Experience
                    </SidebarLink>
                    <SidebarLink to="skillset" onClick={toggle}>
                        Skillset
                    </SidebarLink>
                    <SidebarLink to="work" onClick={toggle}>
                        Work
                    </SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>
                        Contact
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
