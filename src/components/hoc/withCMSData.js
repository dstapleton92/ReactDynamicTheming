import React from 'react'
import { CMSDataConsumer } from '../../contexts/CMSData'

export function withCMSData (Component) {
  return function (props) {
    return (
      <CMSDataConsumer>
        {cmsData => <Component {...props} team={cmsData.team} setTeam={cmsData.setTeam} />}
      </CMSDataConsumer>
    )
  }
}