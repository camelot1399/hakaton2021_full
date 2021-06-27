export const getActivePanel = () => {
  return (state) => {
    return state.activePanelReducer
  }
}