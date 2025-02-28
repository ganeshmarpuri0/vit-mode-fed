import React from 'react'
import useStore from 'store/store'

function Button() {
  const access_token = useStore((state) => state.access_token)

  return (
    <>
      <button>remote Button</button>
      <div style={{ 
        // whiteSpace: 'nowrap',
         overflow: 'hidden', textOverflow: 'ellipsis', border: '2px solid red', borderRadius: '4px', height: "300px" }}>
        <span style={{ marginRight: '0.5em' }}>remote component access_token:</span>
        {access_token}
      </div>

    </>
  )
}

export default Button