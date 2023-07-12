import React from "react";
import { UserComponent, useNode } from "@craftjs/core";
import styled from "styled-components";
import { Text } from "../Text";
import { NavbarSettings } from "./NavbarSettings";
import { TextSettings } from "../Text/TextSettings";

type Link = {
  label: string;
  url: string;
  textComponent?: any;
};

type NavbarProps = {
  backgroundColor?: string;
  logo?: string;
  links?: Link[];
};

const StyledNavbar = styled.nav<NavbarProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "transparent"};
  padding: 10px;
`;

const StyledLogo = styled.img`
  height: 40px;
  width: auto;
`;

const StyledLinks = styled.div`
  display: flex;
  gap: 20px;

  a {
    color: #000;
    text-decoration: none;
    font-weight: 500;
  }
`;

export const Navbar: UserComponent<NavbarProps> = (props: any) => {
  const {
    connectors: { connect },
  } = useNode();

  const { backgroundColor, logo, links } = props;

  return (
    <StyledNavbar ref={connect} {...props}>
      {logo && <StyledLogo src={logo} alt="Logo" />}
      {links && (
        <StyledLinks>
          {links.slice(0, 5).map((link: Link) => (
            <a key={link.url} href={link.url}>
              {link.textComponent ? (
                <Text {...link.textComponent} text={link.label} />
              ) : (
                link.label
              )}
            </a>
          ))}
        </StyledLinks>
      )}
    </StyledNavbar>
  );
};

Navbar.craft = {
  displayName: "Navbar",
  props: {
    backgroundColor: "#ffffff",
    logo: "https://example.com/logo.png",
    links: [
      {
        label: "Home",
        url: "#",
        textComponent: {
          ...Text.craft.props,
          textAlign: "center",
          fontSize: "16",
        },
      },
      {
        label: "About",
        url: "#",
        textComponent: {
          ...Text.craft.props,
          textAlign: "center",
          fontSize: "16",
        },
      },
      {
        label: "Contact",
        url: "#",
        textComponent: {
          ...Text.craft.props,
          textAlign: "center",
          fontSize: "16",
        },
      },
    ],
  },
  related: {
    toolbar: NavbarSettings,
    textComponent: TextSettings,
  },
};

