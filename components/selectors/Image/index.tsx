import { UserComponent, useNode } from "@craftjs/core";
import cx from "classnames";
import React from "react";
import styled from "styled-components";

import { ImageSettings } from "./ImageSettings";

type ImageProps = {
  imageUrl?: string;
  imageStyle?: string;
  margin?: any[];
};

const StyledImage = styled.img<ImageProps>`
  max-width: 100%;
  height: auto;
  object-fit: cover;
  margin: ${({ margin }) =>
    margin
      ? `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`
      : "0"};
`;

export const Image: UserComponent<ImageProps> = (props: any) => {
  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const { imageUrl, ...otherProps } = props;

  return (
    <StyledImage
      ref={connect}
      className={cx([
        "rounded",
        {
          "shadow-lg": props.imageStyle === "full",
        },
      ])}
      src={imageUrl}
      alt="Imagem"
      {...otherProps}
    />
  );
};

Image.craft = {
  displayName: "Image",
  props: {
    imageUrl:
      "https://images.unsplash.com/photo-1686903431112-9b426ee61dad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    imageStyle: "full",
    margin: ["5", "0", "5", "0"],
  },
  related: {
    toolbar: ImageSettings,
  },
};
