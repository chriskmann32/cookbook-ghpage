import { Instruction } from "../csv/instruction";
import './instructionElement.css'
import {IconButton} from '@mui/material'
import {ArrowCircleLeft, ArrowCircleRight} from '@mui/icons-material'


function InstructionElement(instruction: Instruction, instructionNumber: number, setInstructionNumber: any, maxInstruction: number) {
    console.log(instruction);

    function incrementInstruction() {
        if (instructionNumber === maxInstruction) {
            setInstructionNumber(1);
        } else {
            setInstructionNumber(instructionNumber + 1);
        }
    }

    function decrementInstruction() {
        if (instructionNumber === 1) {
            setInstructionNumber(maxInstruction);
        } else {
            setInstructionNumber(instructionNumber - 1);
        }
    }

    return (
        <div className='instruction_main'>
            <div className='instruction_step'>{instruction.step}</div>
            <div className='instruction_selection'>
                <IconButton className='instruction_buttonLeft' onClick={decrementInstruction}>
                    <ArrowCircleLeft/>
                </IconButton>
                <div className='instruction_stepNumber'>{instruction.step_number}</div>
                <IconButton className='instruction_buttonRight' onClick={incrementInstruction}>
                    <ArrowCircleRight/>
                </IconButton>
            </div>
        </div>
    )
}

export default InstructionElement