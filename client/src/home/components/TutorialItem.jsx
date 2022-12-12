import React from 'react'
import ReactPlayer from 'react-player'

export const TutorialItem = () => {
  return (
    <div className="container d-flex align-content-center justify-content-center mt-5">
        <ReactPlayer controls={true} url='https://www.youtube.com/watch?v=FSmudBTXSl8' />
    </div>
  )
}
