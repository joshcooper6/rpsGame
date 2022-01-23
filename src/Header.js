import React, { useContext } from 'react'
import { ScoreContext } from './index'

export default function Header() {
    const { playerScore } = useContext(ScoreContext); 

    return(<>
        <div id="hdr_cntnr" className='flex flex-btwn bord-rad'>

            <div className="flex-col gap-10" id="logo">
                <h1>Rock<br/>Paper<br/>Scissors</h1>
            </div>

            <div id="player_score_cntnr" className="bord-rad flex flex-col flex-center">
                <div style={{textAlign: 'center'}}>
                    <p style={{color: "hsl(229, 64%, 46%)", margin: "0", textTransform:"uppercase"}}>Score</p>
                    <p style={{color: "hsl(229, 25%, 31%)", fontSize: "3em", margin: "0"}}>{playerScore}</p>
                </div>
            </div>

        </div>
    </>)
}