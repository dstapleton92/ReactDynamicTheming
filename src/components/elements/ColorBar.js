import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { withCMSData } from '../hoc/withCMSData'

const modifierConfig = {
  primary: props => `
    background-color: ${props.team.colors.primary};
  `,

  secondary: props => `
    background-color: ${props.team.colors.secondary};
  `
}

const ColorBar = styled.div`
  height: 1rem;
  background-color: ${props => props.team.colors.primary};
  
  ${applyStyleModifiers(modifierConfig)}
`

export default withCMSData(ColorBar)
