import {
  SEND_ACTIVE_PANEL
} from "./type"

export const sendActivePanel = (activePanel) => ({
  type: SEND_ACTIVE_PANEL,
  payload: activePanel,
})
