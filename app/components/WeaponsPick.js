'use client';
import React from 'react';
import Image from 'next/image';
import { useRef, useState } from 'react';

const WeaponsPick = () => {
    // Query selectors
    const rockBtnRef = useRef(null);
    const paperBtnRef = useRef(null);
    const scissorsBtnRef = useRef(null);
    const computerPickTextRef = useRef(null);
    const resultRef = useRef(null);

    const weaponArray = ['rock', 'paper', 'scissors'];
    const resultStates = ['You Win', 'You Lose', "It's A Tie"];

    const gameFunctionality = (weapon) => {
        // Disable Buttons
        rockBtnRef.current.disabled = true;
        paperBtnRef.current.disabled = true;
        scissorsBtnRef.current.disabled = true;

        let value = Math.floor(Math.random() * 3);
        let computerWeapon = weaponArray[value];
        computerPickTextRef.current.classList.remove('loading');
        computerPickTextRef.current.textContent = `Computer's Pick is ${computerWeapon.toUpperCase()}`;

        if (computerWeapon === weapon) {
            resultRef.current.textContent = resultStates[2];
        }

        switch(weapon) {
            case 'rock':
                if (computerWeapon === 'scissors') {
                    resultRef.current.textContent = resultStates[0];
                } else if (computerWeapon === 'paper') {
                    resultRef.current.textContent = resultStates[1];
                }
                break;
            case 'paper':
                if (computerWeapon === 'rock') {
                    resultRef.current.textContent = resultStates[0];
                } else if (computerWeapon === 'scissors') {
                    resultRef.current.textContent = resultStates[1];
                }
                break;
            case 'scissors':
                if (computerWeapon === 'paper') {
                    resultRef.current.textContent = resultStates[0];
                } else if (computerWeapon === 'rock') {
                    resultRef.current.textContent = resultStates[1];
                }
                break;
        }
    }
    const handleRockPick = () => {
        let weapon = weaponArray[0];
        gameFunctionality(weapon);
    }
    const handlePaperPick = () => {
        let weapon = weaponArray[1];
        gameFunctionality(weapon);
    }
    const handleScissorsPick = () => {
        let weapon = weaponArray[2];
        gameFunctionality(weapon);
    }
  return (
    <>
        <h1 className='items-center justify-center text-center text-3xl'>Pick your Weapon</h1>
        <div className='my-5 flex items-center justify-center'>
            <div className='grid grid-cols-3 gap-4'>
                <div>
                    <button ref={rockBtnRef} onClick={handleRockPick}>
                        <span>
                            <Image
                                src={"/assets/rock.jpg"}
                                alt='Rock Image'
                                width={250}
                                height={250}
                            />
                        </span>
                        Rock
                    </button>
                </div>
                <div>
                    <button ref={paperBtnRef} onClick={handlePaperPick}>
                        <span>
                            <Image
                                src={"/assets/paper.png"}
                                alt='Paper Image'
                                width={250}
                                height={250}
                            />
                        </span>
                        Paper
                    </button>
                </div>
                <div>
                    <button ref={scissorsBtnRef} onClick={handleScissorsPick}>
                        <span>
                            <Image
                                src={"/assets/scissors.png"}
                                alt='Scissors Image'
                                width={250}
                                height={250}
                            />
                        </span>
                        Scissors
                    </button>
                </div>
            </div>
        </div>
        <div>
            <h1 className='loading text-center text-3xl my-6' ref={computerPickTextRef}>Computer's Pick</h1>
            <h1 className='winOrLoseText text-center text-3xl my-10' ref={resultRef}></h1>
        </div>

        <style>
            {`
                .loading:after {
                    overflow: hidden;
                    display: inline-block;
                    vertical-align: bottom;
                    -webkit-animation: ellipsis steps(4, end) 900ms infinite;
                    animation: ellipsis steps(4, end) 900ms infinite;
                    content: "\u2026";
                    /* ascii code for the ellipsis character */
                    width: 0px;
                }

                    @keyframes ellipsis {
                        to {
                            width: 40px;
                        }
                    }

                    @-webkit-keyframes ellipsis {
                        to {
                            width: 40px;
                        }
                    }
            `}
        </style>
    </>
  )
}

export default WeaponsPick