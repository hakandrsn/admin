import React from 'react'
import screen from "../../core/screen"
const Footer = () => {
  const [width] = screen()
  return (
    <div className="container-footer" style={{height:width<600 && 60}}>Footer</div>
  )
}

export default Footer