export class Instruction {
    recipe_id: number;
    step_number: number;
    step: string;
    id: string;

    constructor(
        recipe_id: string,
        step_number: string,
        step: string
    ) {
        this.id = Math.random().toString().substring(2,9) + '_INSTRUCTION';
        this.recipe_id = +recipe_id;
        this.step_number = +step_number;
        this.step = step;
    }
}