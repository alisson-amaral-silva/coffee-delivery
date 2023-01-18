import styled from 'styled-components'
import media from 'styled-media-query'

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

  .keen-slider__slide {
    min-width: 355px !important;
    padding-top: 1rem;
    ${media.lessThan('small')`
      margin-left: 4rem;
    `}
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
`
