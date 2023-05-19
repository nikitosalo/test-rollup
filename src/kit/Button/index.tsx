import React, { FC } from 'react';
// import { css, cx } from '@linaria/core';
import { IButton } from './types';
import { CONFIG } from './config';

{
  /*export const classNames = {*/
}
//   button: css`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     white-space: nowrap;
//     touch-action: manipulation;
//     position: relative;
//     user-select: none;
//     cursor: pointer;
//     outline: none;
//     border: none;
//     background: none;
//     transition: all 0.2s ease-in-out;
//
//     &[data-color='primary'] {
//       background: ${CONFIG.button.colors.primary.default.background};
//       border-color: ${CONFIG.button.colors.primary.default.borderColor};
//       box-shadow: ${CONFIG.button.colors.primary.default.boxShadow};
//
//       &:hover {
//         background: ${CONFIG.button.colors.primary.hover.background};
//         border-color: ${CONFIG.button.colors.primary.hover.borderColor};
//         box-shadow: ${CONFIG.button.colors.primary.hover.boxShadow};
//       }
//
//       &:disabled {
//         background: ${CONFIG.button.colors.primary.disabled.background};
//         border-color: ${CONFIG.button.colors.primary.disabled.borderColor};
//         box-shadow: ${CONFIG.button.colors.primary.disabled.boxShadow};
//       }
//     }
//
//     &[data-type='secondary'] {
//       background: ${CONFIG.button.colors.primary.default.background};
//       border-color: ${CONFIG.button.colors.primary.default.borderColor};
//       box-shadow: ${CONFIG.button.colors.primary.default.boxShadow};
//
//       &:hover {
//         background: ${CONFIG.button.colors.primary.hover.background};
//         border-color: ${CONFIG.button.colors.primary.hover.borderColor};
//         box-shadow: ${CONFIG.button.colors.primary.hover.boxShadow};
//       }
//
//       &:disabled {
//         background: ${CONFIG.button.colors.primary.disabled.background};
//         border-color: ${CONFIG.button.colors.primary.disabled.borderColor};
//         box-shadow: ${CONFIG.button.colors.primary.disabled.boxShadow};
//       }
//     }
//
//     &[data-size='small'] {
//       height: ${CONFIG.button.sizes.small.height};
//
//       border-radius: ${CONFIG.button.sizes.small.borderRadius};
//     }
//
//     &[data-size='medium'] {
//       height: ${CONFIG.button.sizes.medium.height};
//
//       border-radius: ${CONFIG.button.sizes.medium.borderRadius};
//     }
//
//     &[data-size='large'] {
//       height: ${CONFIG.button.sizes.large.height};
//
//       border-radius: ${CONFIG.button.sizes.large.borderRadius};
//     }
//   `,
// };

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
    className={className}>
    {children}
  </button>
);
