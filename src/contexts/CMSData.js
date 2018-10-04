import React from 'react'
import { getCMSData } from '../services/cms'

const {
  Provider: CMSDataProvider,
  Consumer: CMSDataConsumer
} = React.createContext({
  team: getCMSData('georgia'),
  setTeam: () => {}
})

export {
  CMSDataProvider,
  CMSDataConsumer
}
