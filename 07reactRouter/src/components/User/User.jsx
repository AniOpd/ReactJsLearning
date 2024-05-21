import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
const {userid} = useParams()
  return (
    <div className='text-center text-orange-500'>
      User : {userid}
    </div>
  )
}

export default User
