import React from 'react';
import RestartButton from '../components/RestartButton';
import EndGameButton from '../components/EndGameButton';
import WeaponsPick from '../components/WeaponsPick';

const Page = () => {
  return (
    <>
      <div className='flex justify-between'>
        <RestartButton/>
        <EndGameButton/>
      </div>
      <WeaponsPick/>
    </>
  )
}

export default Page