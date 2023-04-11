import React from 'react'
import { ProgressBarContainer } from './styled'

const ProgressBar = ({ progress }) => {
  return (
    <ProgressBarContainer>
      <div className='progressbar-border'>
        <div style={{ width: `${progress}%`}} className='progressbar-thumb'></div>
      </div>
      {/* <span className='progressbar-percent'>{progress}% concluída</span> */}
    </ProgressBarContainer>
  )
}

export default ProgressBar