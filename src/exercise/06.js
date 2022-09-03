// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'




function UsernameForm({onSubmitUsername}) {
  // const [error, setError] = React.useState(null);
  const [username, setUsername] = React.useState();
  const firstnameInput = React.useRef()

  function handleSubmit(e) {
    e.preventDefault()
    // const value = e.target[0].value
    // const value1 = firstnameInput.current.value
    // const value2 = e.target.elements.secondnameInput.value
    // console.dir(e.target);
    // onSubmitUsername(value1, value2)
    onSubmitUsername(username)
  }

  function handleChange(e) {
    const { value } = e.target
    // const isLowerCase = value === value.toLowerCase()

    // setError(isLowerCase ? null : 'Username must be lower case')
    setUsername(`${ value[0].toUpperCase() }${ value.slice(1) }`);
  }


  return (

    <form onSubmit={handleSubmit}>
      <div>
        <label>Firtsname:</label>
        <input ref={firstnameInput}
          id="firstnameInput"
          type="text"
          onChange={handleChange}
          value={username}
        />
      </div>
      {/* <div style={{ color: 'red' }}>{error}</div> */}
      {/* <div>
        <label>Secondname:</label>
        <input id="secondnameInput"
          type="text"
          onChange={handleChange}
          value={username} />
      </div> */}
      {/* <div style={{ color: 'red' }}>{error}</div> */}
      {/* disabled={Boolean(error)} */}
      <button type="submit" >Submit</button>
    </form>
  )
}

function App() {
  // const onSubmitUsername = (firstname, secondname) => alert(`You entered: ${ firstname } ${ secondname }`)
  const onSubmitUsername = (username) => alert(`Welcom${ username }`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
