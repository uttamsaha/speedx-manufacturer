import React from 'react'
import {AiFillStar} from 'react-icons/ai';
const Stars = (props) => {
    console.log(props);
  return (
    <div className='star'>
    <AiFillStar/>
    <AiFillStar/>
    <AiFillStar/>
    <AiFillStar/>
    <AiFillStar/>
</div>
  )
}

export default Stars;