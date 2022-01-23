import React, { useState, createContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Game from './Game'
import { icons } from './data';

import { randomNumber } from './randomNumber';
import { winningRules, outcomes } from './winningRules';

export const ScoreContext = createContext(null);

import styled, { keyframes } from 'styled-components';

const Bounce = keyframes`
    0% {
        transform: scale(10) translateY(10em);
    }
    25% {
        transform: translateY(0); 
    } 
    50% {
        transform: translateY(10em);
    }
    100% {
        transform: translateY(0);
    }

`

const MotionHands = styled.img`
    height: 200px;
`

const HandWrapper = styled.div`
    animation: ${Bounce} 1000ms infinite alternate;
    animation-iteration-count: 2;
`

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 90%;
`
const RulesButton = styled.button`

    &:hover {
        cursor: pointer;
    }
`

function App() { 
    const [outcome, setOutcome] = useState();
    const [random, setRandom] = useState(randomNumber(outcomes));

    const [playerScore, setPlayerScore] = useState(0);
    const [compScore, setCompScore] = useState(0);

    const [playerChoice, setPlayerChoice] = useState();
    const [compChoice, setCompChoice] = useState();

    const [playerImage, setPlayerImage] = useState('');
    const [compImage, setCompImage] = useState('');

    const [bClick, setBClick] = useState(false);

    const [hidden, setHidden] = useState(true);

    const handleChange = (input) => {
        setHidden(false);
        setBClick(!bClick);
        setOutcome('Thinking...');
        setRandom(randomNumber(outcomes));
        setCompChoice(outcomes[random]);
        setPlayerChoice(input);

        let a = icons.filter((icon) => playerChoice == icon.name);
        let b = icons.filter((icon) => compChoice == icon.name);

        setCompImage(b[0].src);
        setPlayerImage(a[0].src);
    };


    useEffect(() => {
        let timeout = setTimeout(() => {
            setHidden(true);
            if (winningRules(playerChoice, compChoice) == 'win') {
                setOutcome('Player Wins!')
                setPlayerScore((prevScore) => prevScore + 1)
            } else if (winningRules(playerChoice, compChoice) == 'lose') {
                setOutcome('Computer Wins!')
                setCompScore((prevScore) => prevScore + 1)
            } else if (winningRules(playerChoice, compChoice) == 'draw') {
                setOutcome(`It's a draw...`)
            }
            

        }, 2000)
    }, [bClick]);
    

    return(<>
        <ScoreContext.Provider value={{playerScore, outcome, compChoice, playerChoice, handleChange, hidden, setHidden, playerImage, compImage}}>
            <ContentWrapper>
                <Header />
                
                { hidden ? <>
                    <Game />
                    {/* <RulesButton 
                        style={{
                            minWidth: '200px',
                            height: '50px',
                            borderRadius: '1em',
                            border: 'none',
                            background: 'transparent',
                            border: `1px solid white`,
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '1.1em',
                            textAlign: 'center',
                            justifySelf:'center',
                            alignSelf: 'center',
                            margin: '2em'
                        }}
                        onClick={() => {console.log('Working...')}}
                    
                    >Rules </RulesButton> */}
                </> : <HandWrapper>
                    <MotionHands src={icons[0].src} className='motion-hands' style={{margin: '1em', transform: 'rotate(95deg)'}}/>
                    <MotionHands src={icons[0].src} className='motion-hands' style={{margin: '1em', transform: 'rotate(95deg) scaleY(-1)'}}/> 
                </HandWrapper> }

        </ContentWrapper>
        </ScoreContext.Provider>
    </>)
}

ReactDOM.render(<App />, document.getElementById('root'))