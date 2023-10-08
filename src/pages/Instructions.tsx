import { DataGrid, GridColDef } from "@mui/x-data-grid"
import { useEffect } from "react";
import { Instruction } from "../csv/instruction";
import { readInstructionsCSV } from "../csv/readCSV";

const columns: GridColDef[] = [
    {field: 'step_number', headerName: 'Step Number'},
    {field: 'step', headerName: 'Step', flex: 1}
]

function Instructions({ids, instructions, setInstructions}) {
    console.log('Rendering Instructions');

    function instructionSelection() {
        if (instructions) {
            return <DataGrid
                    rows={instructions}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {pageSize: instructions.length},
                        },
                    }}
                    />
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
                    const filteredInstructions: Instruction[] = instructions.filter((instruction: Instruction) => {
                        return ids.includes(instruction.recipe_id)
                    })
                    return filteredInstructions.map(function(currentInstruction,_) {
                        return new Instruction(
                            currentInstruction.recipe_id,
                            currentInstruction.step_number,
                            currentInstruction.step
                        )
                    });
                })
            setInstructions(fetchInstructions)
        }
        if (ids) {
            fetchInstructions();
        }
    }, [ids, setInstructions])

    return(
        <div style={{textAlign: 'center'}}>
            {instructionSelection()}
        </div>
    )
}

export default Instructions