import styled from "styled-components"

export const NotFoundWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;
`

export const Image = styled.img`
height: 22.5rem;
width: 29.75rem;
`

export const Title = styled.h1`
font-family: 'Baloo 2';
font-size: 3rem;
line-height: 3.9rem;
color: ${(props) => props.theme['base-title']};
`