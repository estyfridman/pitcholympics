import { IconProps } from '@/types';
import { ICON_COLORS, ICON_SIZES } from '@/constants';

export const MoonIcon = ({ color = 'primary', size = 'medium' }: IconProps) => {
    const iconSize = ICON_SIZES[size];
    const iconColor = ICON_COLORS[color];
    const iconClasses = `${iconSize} ${iconColor}`;

    return (
        <svg
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={iconClasses}>
            <path
                d='M10.6834 10.6829C13.4171 7.94926 13.4171 3.51707 10.6834 0.783419C10.4027 0.502702 10.5805 -0.0138667 10.9755 0.0255724C13.1923 0.24689 15.3492 1.20659 17.0474 2.90474C20.9526 6.80997 20.9526 13.1416 17.0474 17.0469C13.1421 20.9521 6.81046 20.9521 2.90523 17.0469C1.20708 15.3487 0.247378 13.1918 0.0260606 10.975C-0.0133784 10.58 0.50319 10.4022 0.783907 10.6829C3.51756 13.4166 7.94975 13.4166 10.6834 10.6829Z'
                fill='inherit'
            />
        </svg>
    );
};
