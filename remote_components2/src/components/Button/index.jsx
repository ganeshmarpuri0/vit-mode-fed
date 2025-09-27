import React from 'react'
import useStore from 'store/store'

function Button2() {
  const access_token = useStore((state) => state.access_token)
  const setAccessToken = useStore((state) => state.setAccessToken);
  const count = useStore((state) => state.count)
  const increment = useStore((state) => state.increment)
  const incrementBy = useStore((state) => state.incrementBy)

  const remove_keys = () => {
    setAccessToken("")
  }

  return (
    <>
      <div className="card">
        <span>Button2 from remote_components</span>

        <button onClick={() => increment()}>
          count is {count}
        </button>
        <button onClick={() => incrementBy(2)}>Increment by 2</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      {/* <button onClick={remove_keys}>remote Button</button>
      <div style={{
        // whiteSpace: 'nowrap',
        overflow: 'hidden', textOverflow: 'ellipsis', border: '2px solid red', borderRadius: '4px', height: "300px"
      }}>
        <span style={{ marginRight: '0.5em' }}>remote component access_token:</span>
        {access_token}
      </div> */}

    </>
  )
}

export default Button2