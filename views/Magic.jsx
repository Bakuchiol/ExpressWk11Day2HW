import React from 'react'


function Magic() {
  return (
    <div className='magicBox'>
        <h1>What do you want to know?</h1>
      <a href={'/magic/:question'}>Click here for answers</a>
    </div>
  )
}

export default Magic
