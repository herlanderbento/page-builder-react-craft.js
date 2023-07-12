import { UserComponent, useEditor, useNode } from "@craftjs/core";
import cx from "classnames";
import React from "react";
import styled from "styled-components";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";

import { CardSettings } from "./CardSettings";
import { Image } from "../Image";

type CardProps = {
  background?: Record<"r" | "g" | "b" | "a", number>;
  color?: Record<"r" | "g" | "b" | "a", number>;
  imageUrl?: string;
  fontSize?: string;
  textAlign?: string;
  fontWeight?: string;
  shadow?: number;
  title?: string;
  description?: string;
  margin?: any[];
};

const StyledCard = styled.div<CardProps>`
  background: ${(props) => `rgba(${Object.values(props.background)})`};
  color: ${(props) => `rgba(${Object.values(props.color)})`};
  margin: ${({ margin }) =>
    `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`};
`;

const StyledTitle = styled.h2<CardProps>`
  font-size: ${(props) => `${props.fontSize}px`};
  text-align: ${(props) => props.textAlign};
  font-weight: ${(props) => props.fontWeight};
  text-shadow: ${(props) => `0px 0px 2px rgba(0, 0, 0, ${props.shadow / 100})`};
`;

const StyledDescription = styled.p<CardProps>`
  font-size: ${(props) => `${parseInt(props.fontSize) - 2}px`};
  text-align: ${(props) => props.textAlign};
  font-weight: ${(props) => props.fontWeight};
`;

export const Card: UserComponent<CardProps> = (props: any) => {
  const {
    connectors: { connect },
    setProp,
  } = useNode();
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const { background, color, imageUrl, margin } = props;

  const handleTitleChange = (e: ContentEditableEvent) => {
    setProp((prop) => (prop.title = e.target.value), 500);
  };

  const handleDescriptionChange = (e: ContentEditableEvent) => {
    setProp((prop) => (prop.description = e.target.value), 500);
  };

  return (
    <StyledCard ref={connect} className={cx("w-full")} {...props}>
      <Image imageUrl={imageUrl} />
      <StyledTitle
        fontSize={props.fontSize}
        textAlign={props.textAlign}
        fontWeight={props.fontWeight}
        shadow={props.shadow}
      >
        <ContentEditable
          html={props.title}
          disabled={!enabled}
          onChange={handleTitleChange}
          tagName="span"
        />
      </StyledTitle>
      <StyledDescription
        fontSize={props.fontSize}
        textAlign={props.textAlign}
        fontWeight={props.fontWeight}
      >
        <ContentEditable
          html={props.description}
          disabled={!enabled}
          onChange={handleDescriptionChange}
          tagName="span"
        />
      </StyledDescription>
    </StyledCard>
  );
};

Card.craft = {
  displayName: "Card",
  props: {
    background: { r: 255, g: 255, b: 255, a: 1 },
    color: { r: 0, g: 0, b: 0, a: 1 },
    fontSize: "15",
    textAlign: "left",
    fontWeight: "500",
    shadow: 0,
    title: "Title",
    description: "Description",
    margin: ["5", "0", "5", "0"],
    imageUrl:
      "https://images.unsplash.com/photo-1686903431112-9b426ee61dad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  related: {
    toolbar: CardSettings,
  },
};
