import { UserComponent, useNode } from '@craftjs/core';
import cx from 'classnames';
import React from 'react';
import styled from 'styled-components';

import { FormSettings } from './FormSettings';

type FormProps = {
  background?: Record<'r' | 'g' | 'b' | 'a', number>;
  color?: Record<'r' | 'g' | 'b' | 'a', number>;
  margin?: any[];
};

const StyledForm = styled.form<FormProps>`
  background: ${(props) => `rgba(${Object.values(props.background)})`};
  color: ${(props) => `rgba(${Object.values(props.color)})`};
  margin: ${({ margin }) =>
    `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`};
`;

export const Form: UserComponent<FormProps> = (props: any) => {
  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const { children, ...otherProps } = props;

  return (
    <StyledForm ref={connect} className={cx('w-full')} {...otherProps}>
      {children}
    </StyledForm>
  );
};

Form.craft = {
  displayName: 'Form',
  props: {
    background: { r: 255, g: 255, b: 255, a: 1 },
    color: { r: 0, g: 0, b: 0, a: 1 },
    margin: ['5', '0', '5', '0'],
  },
  related: {
    toolbar: FormSettings,
  },
};
