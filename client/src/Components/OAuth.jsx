import { Button } from 'flowbite-react'
import React from 'react'
import { AiFillGoogleCircle } from 'react-icons/ai';

function OAuth() {
  return (
   <Button type='button' color='yellow' className='text-black' outline >
        <AiFillGoogleCircle className='w-6 h-6 mr-2'/>
        Continue with Google
    </Button>
  )
}

export default OAuth
