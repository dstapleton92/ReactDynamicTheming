import React from 'react'
import { withCMSData } from '../hoc/withCMSData'

const Logo = props => (
  <img
    alt={props.team.name}
    className={props.className}
    src={props.team.logo}
  />
)

export default withCMSData(Logo)
