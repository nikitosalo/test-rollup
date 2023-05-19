interface IStylesButtonType {
    background: string;
    borderColor: string;
    boxShadow: string;
}
interface ISizeStyles {
    height: string;
    borderRadius: string;
}
declare type TVariantsColors = 'primary' | 'secondary';
declare type TVariantsSizes = 'small' | 'medium' | 'large';
declare type TVariantButtonState = 'default' | 'hover' | 'disabled';
export declare type TButtonConfig = {
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
export {};
