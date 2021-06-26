import React from "react"

export const Layout = (props) => {
  const {tournaments } = props

  return (
      <>
        <div >
          {tournaments}
        </div>
      </>
  )
}