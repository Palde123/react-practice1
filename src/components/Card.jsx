import React from 'react'

const Card = (props) => {
  return (
    <div >
        <div className='card'>
            <img src={props.img}/>
            <h1>{props.name}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, numquam.</p>
            <button className='btn'>veiw Profile</button>
        </div>
    </div>
  )
}

export default Card