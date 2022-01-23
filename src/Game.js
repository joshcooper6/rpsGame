import React, { useContext } from 'react';
import { ScoreContext } from '.';
import { icons } from './data';
import styled from 'styled-components';
import triangle from './images/bg-triangle.svg';

const Btn = styled.button`
    height: 150px;
    width: 150px;
    border-radius: 100%;
    border: none;
    position: relative;
    background: transparent;

    &:hover {
        cursor: pointer;
    }


    &:after {
        content: '';
        position: absolute;
        box-shadow: 0em 0em 1em black;
        border-radius: 100%;
        transform: scale(1.1);
        top: -4px; 
        bottom: -4px;
        left: -4px; 
        right: -4px;
        background: ${props => props.gradient}; 
        z-index: -1;
    }
`
const ButtonWrap = styled.div`
    margin: 3em auto 3em auto;
    display: grid;
    width: 500px;
    height: 500px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
`

const ButtonImage = styled.img`

`

export default function Game() {
    const { outcome, compChoice, playerChoice, handleChange, playerImage, compImage } = useContext(ScoreContext);

    const buttons = icons.map((icon) => { 
        return <>
            <Btn 
                style={{
                    gridArea: icon.area, 
                    gridColumnStart: icon.colStart,
                    gridColumnEnd: icon.colEnd,
                    gridRowStart: icon.rowStart,
                    gridRowEnd: icon.rowEnd,
                    transform: icon.transform
                }} 
                key={icon.name} 
                gradient={icon.gradient} 
                onClick={() => handleChange(icon.name)}
            >
                <ButtonImage key={icon.name} src={icon.src} />
            </Btn>
        </> 
    })


    return(<>

            <ButtonWrap>
                {buttons}
                <img src={triangle} style={{
                    position: 'absolute',
                    width: 'inherit',
                    height: 'inherit',
                    zIndex: '-500'
                }}/>
            </ButtonWrap>    

    </>)
}