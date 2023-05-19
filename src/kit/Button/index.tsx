import React, { FC } from 'react';
import { cx } from '@linaria/core';
import { classNames } from './styles';
import { IButton } from './types';

export const Button: FC<IButton> = ({
  id,
  onClick,
  color = 'primary',
  size = 'medium',
  type = 'button',
  disabled = false,
  tabIndex = 1,
  className,
  children,
}) => (
  <button
    id={id}
    tabIndex={tabIndex}
    type={type}
    onClick={onClick}
    disabled={disabled}
    data-color={color}
    data-size={size}
    className={cx(classNames.button, className)}>
    {children}
  </button>
);
