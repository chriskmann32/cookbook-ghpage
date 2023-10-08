export class Instruction {
    recipe_id: string;
    step_number: string;
    step: string;

    constructor(
        recipe_id: string,
        step_number: string,
        step: string
    ) {
        this.recipe_id = recipe_id;
        this.step_number = step_number;
        this.step = step;
    }
}