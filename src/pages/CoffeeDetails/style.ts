import styled from 'styled-components'
import media from 'styled-media-query'
import SlickSlider from 'react-slick'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  ${media.lessThan('small')`
    flex-direction: column;
  `}
`

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${media.lessThan('small')`
    display: none;
  `}
`

export const Image = styled.img`
  ${media.lessThan('small')`
    display: none;
  `}
`

export const MobileImage = styled.img`
  ${media.greaterThan('small')`
    display:none;
  `}
  width: 100%;
`

export const Description = styled.span`
  text-align: center;
`
export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const MobileHeading = styled.h1`
  ${media.greaterThan('small')`
    display: none;
    `}
  text-align: center;
`

export const Heading = styled.h1`
  ${media.lessThan('small')`
    display: none;
  `}
`

export const Price = styled.h2`
  ${media.lessThan('small')`
    text-align: left;
  `}
  text-align: end;
`
export const BuyButton = styled.button`
  margin-top: 1.5rem;
  color: white;
  font-weight: 700;
  font-size: 0.85rem;
  line-height: 1.4rem;
  text-transform: uppercase;
  background: ${(props) => props.theme['yellow']};
  text-align: center;
  padding: 0.75rem 0.5rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;

  width: 100%;
  height: 2.875rem;

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`

export const AddToCart = styled.button`
  margin-top: 1.5rem;
  color: white;
  font-weight: 700;
  font-size: 0.85rem;
  line-height: 1.4rem;
  text-transform: uppercase;
  background: ${(props) => props.theme['purple']};
  text-align: center;
  padding: 0.75rem 0.5rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;

  width: 100%;
  height: 2.875rem;

  &:hover {
    background: ${(props) => props.theme['purple-dark']};
  }
`

export const Wrapper = styled.section`
  box-shadow: none;

  .slick-slider {
    position: relative;
    display: block;
    box-sizing: border-box;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
    box-shadow: 0 0 0 2px transparent;
  }
  .slick-list {
    position: relative;
    display: block;
    overflow: hidden;
    margin: 0;
    padding: 20px 20px;
  }
  .slick-list:focus {
    outline: none;
  }
  .slick-list.dragging {
    cursor: pointer;
    cursor: hand;
  }
  .slick-slider .slick-track,
  .slick-slider .slick-list {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    box-shadow: 0 0 0 2px transparent;
  }
  .slick-track {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    box-shadow: 0 0 0 2px transparent;
  }
  .slick-track:before,
  .slick-track:after {
    display: table;
    content: '';
  }
  .slick-track:after {
    clear: both;
  }
  .slick-loading .slick-track {
    visibility: hidden;
  }
  .slick-slide {
    display: none;
    float: left;
    height: 100%;
    min-height: 1px;
    box-shadow: 0 0 0 2px transparent;
  }
  [dir='rtl'] .slick-slide {
    float: right;
  }
  .slick-slide img {
    display: block;
  }
  .slick-slide.slick-loading img {
    display: none;
  }
  .slick-slide.dragging img {
    pointer-events: none;
  }
  .slick-initialized .slick-slide {
    display: block;
  }
  .slick-loading .slick-slide {
    visibility: hidden;
  }
  .slick-vertical .slick-slide {
    display: block;
    height: auto;
    border: 1px solid transparent;
  }
  .slick-arrow.slick-hidden {
    display: none;
  }
`

export const Slider = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const SliderWrapper = styled.section`
  margin-top: 2rem;
  box-shadow: none;

  .slick-dots {
    list-style: none;
    display: flex !important;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    li {
      background: #ffff;
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 0.5rem;
      cursor: pointer;
      &.slick-active {
        background: ${(props) => props.theme['purple-dark']};
        box-shadow: none;
      }
    }
    button {
      opacity: 0;
      width: 1.2rem;
      height: 1.2rem;
      cursor: pointer;
    }
  }
`
export const SlickSliderWrapper = styled(SlickSlider)`
  box-shadow: none;
`
