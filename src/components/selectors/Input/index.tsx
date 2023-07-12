import { UserComponent, useNode } from '@craftjs/core';
import cx from 'classnames';
import React from 'react';
import styled from 'styled-components';

import { InputSettings } from './InputSettings';

type InputProps = {
  background?: Record<'r' | 'g' | 'b' | 'a', number>;
  color?: Record<'r' | 'g' | 'b' | 'a', number>;
  placeholder?: string;
  inputStyle?: string;
  margin?: any[];
};

const StyledInput = styled.input<InputProps>`
  background: ${(props) =>
    props.inputStyle === 'full'
      ? `rgba(${Object.values(props.background)})`
      : 'transparent'};
  border: 1px solid transparent;
  border-color: ${(props) =>
    props.inputStyle === 'outline'
      ? `rgba(${Object.values(props.background)})`
      : 'rgba(169,169,169,0.5)'};
  margin: ${({ margin }) =>
    `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`};

  &::placeholder{
    font-size: 14px;
  }
`;

export const Input: UserComponent<InputProps> = (props: any) => {
  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const { placeholder, ...otherProps } = props;


  return (
    <StyledInput
      ref={connect}
      className={cx([
        'rounded w-full px-4 py-2',
        {
          'shadow-lg': props.inputStyle === 'full',
        },
      ])}
      placeholder="write a text"
      {...otherProps}
    />
  );
};

Input.craft = {
  displayName: 'input',
  props: {
    background: { r: 255, g: 255, b: 255, a: 0.5 },
    color: { r: 92, g: 90, b: 90, a: 1 },
    inputStyle: 'full',
    margin: ['5', '0', '5', '0'],
  },
  related: {
    toolbar: InputSettings,
  },
};
