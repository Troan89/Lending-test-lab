import {Icon} from "./icon/Icon";
import styled from "styled-components";

export interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
    currentSlide: number;
    slideCount: number;
}

export const PrevArrow = ({className, onClick, currentSlide}: ArrowProps) => (
    <div
        className={className}
        onClick={currentSlide === 0 ? undefined : onClick}
    >
        {currentSlide === 0
            ? <Icon iconId={'fi-sr-angle-left'} width={'32px'} height={'32px'} viewBox={'0 0 32 32'}/>
            : <StyledIconTransform><Icon iconId={'fi-sr-angle-right'} width={'32px'} height={'32px'} viewBox={'0 0 32 32'}/></StyledIconTransform>}
    </div>
);

const StyledIconTransform = styled.div`
    transform: rotate(180deg);
    margin-right: -12px;
`