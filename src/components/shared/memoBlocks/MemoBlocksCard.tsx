import React from 'react'
import { Matrix, MemoBlockCardMelody } from '@/types'
import MemoBlocksMatCell from './MemoBlocksCell';
import PlayIcon from '@/components/icons/playIcon'
type Props = {
    matrix: Matrix // matrix of the card (8x4), each cell is a contains a note and isActive & isTied flags
}
const MemoBlocksCard = ({ matrix }: Props) => {

    // const melody: MemoBlockCardMelody ; // TODO: get the melody by the matrix active notes

    const handlePlayMelody = () => {
        // play the melody
    }


    return (
        <div className='shadow-lg drop-shadow-lg rounded-lg p-1.5 bg-light-surface-primary dark:bg-dark-surface-primary '>
            {matrix.map((row, rowIndex) => (
                <div key={rowIndex} className="flex flex-row">
                    {row.map((cell, colIndex) => (
                        <MemoBlocksMatCell key={cell.note + rowIndex + colIndex} cell={cell} colIndex={colIndex} rowIndex={rowIndex} />
                    ))}
                </div>
            ))}
            <div className="flex flex-row justify-center">
                <PlayIcon onClick={handlePlayMelody} className='cursor-pointer' />
            </div>
        </div>
    )
}

export default MemoBlocksCard