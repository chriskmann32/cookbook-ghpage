import { Instruction } from "../csv/instruction";
import './instructionElement.css'


function InstructionElement(instruction: Instruction, instructionNumber: number, setInstructionNumber: any, maxInstruction: number) {
    console.log(instruction);

    return (
        <div className='instruction_main'>
            <div className='instruction_step'>{instruction.step}</div>
            <div className='instruction_selection'>
                <div className='instruction_stepNumber'>{instruction.step_number}</div>
            </div>
        </div>
    )
}

export default InstructionElement