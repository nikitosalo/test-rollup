interface IStylesButtonType {
  background: string;
  borderColor: string;
  boxShadow: string;
}

interface ISizeStyles {
  height: string;
  borderRadius: string;
}

type TVariantsColors = 'primary' | 'secondary';
type TVariantsSizes = 'small' | 'medium' | 'large';
type TVariantButtonState = 'default' | 'hover' | 'disabled';

export type TButtonConfig = {
  colors: {
    [key in TVariantsColors]: {
      [key in TVariantButtonState]: IStylesButtonType;
    };
  };
  sizes: {
    [key in TVariantsSizes]: ISizeStyles;
  };
};

export interface IButton {
  size?: TVariantsSizes;
  color?: TVariantsColors;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  tabIndex?: number;
  id?: string;
  className?: string;
}
