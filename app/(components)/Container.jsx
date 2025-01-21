import React from 'react'

const Container = ({ className, children }) => {
  return (
    <div className={`max-w-mainContainer m-auto ${className}`}>
      {children}
    </div>
  )
}

export default Container