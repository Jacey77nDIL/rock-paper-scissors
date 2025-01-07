import React from 'react'
import Link from 'next/link'

const EndGameButton = () => {
  return (
    <div>
        <Link href="/">
            <button className='border border-gray-500 bg-red-500 text-white rounded h-10 w-24 m-2'>End Game</button>
        </Link>
        
    </div>
  )
}

export default EndGameButton