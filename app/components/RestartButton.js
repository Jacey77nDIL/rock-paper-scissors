import React from 'react'
import Link from 'next/link'

const RestartButton = () => {
  return (
    <div>
      <a href="../gamePage">
        <button className='border border-gray-500 bg-blue-500 text-white rounded h-10 w-20 m-2'>Restart</button>
      </a>
    </div>
  )
}

export default RestartButton