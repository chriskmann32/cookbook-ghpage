import { useEffect } from "react";
import { Instruction } from "../csv/instruction";
import { readInstructionsCSV } from "../csv/readCSV";
import InstructionElement from "../components/instructionElement";
import {useState} from 'react'

function Instructions({selectedId, instructions, setInstructions}) {
    console.log('Rendering Instructions');
    const [instructionNumber, setInstructionNumber] = useState(1);

    function instructionSelection() {
        console.log('Starting Selection');
        if (instructions) {
            return instructions.map((instruction) => {
                return InstructionElement(
                    instruction,
                    instructionNumber,
                    setInstructionNumber,
                    instructions.length
                )
            })
        }
        return <div>No RECIPES SELECTED</div>
    }

    useEffect(() => {
        console.log('Starting Instruction Fetch...');
        const fetchInstructions = async () => {
            const fetchInstructionReturn: Instruction[] = 
            await readInstructionsCSV(process.env.PUBLIC_URL + '/instructions.csv')
                .then((instructions) => {
                    console.log('Retrieving Instructions...');
                    return instructions.filter((instruction: Instruction) => {
                        return (selectedId === instruction.recipe_id);
                    })
                });
            setInstructions(fetchInstructionReturn);
        }
        if (selectedId !== -99) {
            fetchInstructions();
        }
    }, [selectedId, setInstructions])

    return(
        <div style={{textAlign: 'center'}}>
            {instructionSelection()}
        </div>
    )
}

export default Instructions