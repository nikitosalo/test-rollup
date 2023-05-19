import { css } from '@linaria/core';
import { CONFIG } from './config';

export const classNames = {
  button: css`
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    touch-action: manipulation;
    position: relative;
    user-select: none;
    cursor: pointer;
    outline: none;
    border: none;
    background: none;
    transition: all 0.2s ease-in-out;

    &[data-color='primary'] {
      background: ${CONFIG.button.colors.primary.default.background};
      border-color: ${CONFIG.button.colors.primary.default.borderColor};
      box-shadow: ${CONFIG.button.colors.primary.default.boxShadow};

      &:hover {
        background: ${CONFIG.button.colors.primary.hover.background};
        border-color: ${CONFIG.button.colors.primary.hover.borderColor};
        box-shadow: ${CONFIG.button.colors.primary.hover.boxShadow};
      }

      &:disabled {
        background: ${CONFIG.button.colors.primary.disabled.background};
        border-color: ${CONFIG.button.colors.primary.disabled.borderColor};
        box-shadow: ${CONFIG.button.colors.primary.disabled.boxShadow};
      }
    }

    &[data-type='secondary'] {
      background: ${CONFIG.button.colors.primary.default.background};
      border-color: ${CONFIG.button.colors.primary.default.borderColor};
      box-shadow: ${CONFIG.button.colors.primary.default.boxShadow};

      &:hover {
        background: ${CONFIG.button.colors.primary.hover.background};
        border-color: ${CONFIG.button.colors.primary.hover.borderColor};
        box-shadow: ${CONFIG.button.colors.primary.hover.boxShadow};
      }

      &:disabled {
        background: ${CONFIG.button.colors.primary.disabled.background};
        border-color: ${CONFIG.button.colors.primary.disabled.borderColor};
        box-shadow: ${CONFIG.button.colors.primary.disabled.boxShadow};
      }
    }

    &[data-size='small'] {
      height: ${CONFIG.button.sizes.small.height};

      border-radius: ${CONFIG.button.sizes.small.borderRadius};
    }

    &[data-size='medium'] {
      height: ${CONFIG.button.sizes.medium.height};

      border-radius: ${CONFIG.button.sizes.medium.borderRadius};
    }

    &[data-size='large'] {
      height: ${CONFIG.button.sizes.large.height};

      border-radius: ${CONFIG.button.sizes.large.borderRadius};
    }
  `,
};
