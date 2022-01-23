import rock_icon from './images/icon-rock.svg';
import paper_icon from './images/icon-paper.svg';
import scissors_icon from './images/icon-scissors.svg';

export const icons = [
    { 
        name: 'rock', src: `${rock_icon}`, 
        gradient: 'linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))', 
        area: 'left', 
        colStart: `2`,
        colEnd: '1',
        rowStart: '1',
        rowEnd: '2',
        transform: ''
    },
    { 
        name: 'paper', 
        src: `${paper_icon}`, 
        gradient: 'linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))', 
        area: 'bottom',
        colStart: `4`,
        colEnd: '5',
        rowStart: '1',
        rowEnd: '2',
        transform: ''
    },
    { 
        name: 'scissors', 
        src: `${scissors_icon}`, 
        gradient: 'linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))', 
        area: 'right',
        colStart: `2`,
        colEnd: '4',
        rowStart: '3',
        rowEnd: '4',
        transform: 'translateX(3em)'
    }
]

