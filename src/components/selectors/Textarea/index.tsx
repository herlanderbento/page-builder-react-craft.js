import { UserComponent, useNode } from '@craftjs/core';
import cx from 'classnames';
import React from 'react';
import styled from 'styled-components';

import { TextareaSettings } from './TextareaSettings';

type TextareaProps = {
  background?: Record<'r' | 'g' | 'b' | 'a', number>;
  color?: Record<'r' | 'g' | 'b' | 'a', number>;
  placeholder?: string;
  textareaStyle?: string;
  margin?: any[];
};

const StyledTextarea = styled.textarea<TextareaProps>`
  background: ${(props) =>
    props.textareaStyle === 'full'
      ? `rgba(${Object.values(props.background)})`
      : 'transparent'};
  border: 1px solid transparent;
  border-color: ${(props) =>
    props.textareaStyle === 'outline'
      ? `rgba(${Object.values(props.background)})`
      : 'rgba(169,169,169,0.5)'};
  margin: ${({ margin }) =>
    `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`};

  &::placeholder {
    font-size: 14px;
  }
`;

export const Textarea: UserComponent<TextareaProps> = (props: any) => {
  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const { placeholder, ...otherProps } = props;

  return (
    <StyledTextarea
      ref={connect}
      className={cx([
        'rounded w-full px-4 py-2',
        {
          'shadow-lg': props.textareaStyle === 'full',
        },
      ])}
      placeholder={placeholder || 'Write a text'}
      {...otherProps}
    />
  );
};

Textarea.craft = {
  displayName: 'Textarea',
  props: {
    background: { r: 255, g: 255, b: 255, a: 0.5 },
    color: { r: 92, g: 90, b: 90, a: 1 },
    textareaStyle: 'full',
    margin: ['5', '0', '5', '0'],
  },
  related: {
    toolbar: TextareaSettings,
  },
};
