import React from 'react'

const Card = (props) => {
  return (
    <div >
        <div className='card'>
            <img src='https://images.unsplash.com/photo-1761991062157-df67faab3a23?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074'/>
            <h1>{props.name}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, numquam.</p>
            <button className='btn'>veiw Profile</button>
        </div>
    </div>
  )
}

export default Card