import React from 'react'
import { withCMSData } from './hoc/withCMSData'
import Button from './elements/Button'

const Content = props => (
  <main className="tc">
    <h3>Primary Buttons</h3>
    <Button onClick={() => props.setTeam('alabama')}>Alabama</Button>
    <Button onClick={() => props.setTeam('auburn')}>Auburn</Button>
    <Button onClick={() => props.setTeam('georgia')}>Georgia</Button>
    <h3>Secondary Buttons</h3>
    <Button onClick={() => props.setTeam('alabama')} modifiers={['secondary']}>Alabama</Button>
    <Button onClick={() => props.setTeam('auburn')} modifiers={['secondary']}>Auburn</Button>
    <Button onClick={() => props.setTeam('georgia')} modifiers={['secondary']}>Georgia</Button>
  </main>
)

export default withCMSData(Content)
