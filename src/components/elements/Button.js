import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { withCMSData } from '../hoc/withCMSData'

const modifierConfig = {
  primary: props => `
    background-color: ${props.team.colors.primary};
    &:hover {
      background-color: ${props.team.colors.secondary};
    }
  `,

  secondary: props => `
    background-color: ${props.team.colors.secondary};
    &:hover {
      background-color: ${props.team.colors.primary};
    }
  `
}

const Button = styled.button`
  cursor: pointer;
  height: 2.5rem;
  min-width: 10rem;
  color: white;
  transition: background-color 0.25s;
  background-color: ${props => props.team.colors.primary};
  &:hover {
    background-color: ${props => props.team.colors.secondary};
  }
  &:focus {
    outline: 1px dashed black;
  }

  ${applyStyleModifiers(modifierConfig)}
`

export default withCMSData(Button)
