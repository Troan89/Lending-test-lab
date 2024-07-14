import {Icon} from "./icon/Icon";
import {ArrowProps} from "./PrevArrow";
import styled from "styled-components";


export const NextArrow = ({ className, onClick, currentSlide, slideCount }: ArrowProps) => (
    <div
        className={className}
        onClick={currentSlide === slideCount - 3 ? undefined : onClick}
    >
        {currentSlide === slideCount - 3
            ? <StyledIconTransform><Icon iconId={'fi-sr-angle-left'} width={'32px'} height={'32px'} viewBox={'0 0 32 32'}/></StyledIconTransform>
            : <Icon iconId={'fi-sr-angle-right'} width={'32px'} height={'32px'} viewBox={'0 0 32 32'}/>}
    </div>
);

const StyledIconTransform = styled.div`
    transform: rotate(180deg);
    margin-left: 32px;
`