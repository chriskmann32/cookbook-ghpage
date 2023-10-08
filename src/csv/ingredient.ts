export class Ingredient {
    quantity: string;
    unit: string;
    ingredient: string;
    recipe_id: string;
    id: string;

    constructor(
        quantity: string,
        unit: string,
        ingredient: string,
        recipe_id: string
    ) {
        this.id = Math.random().toString().substring(2,9) + '_INGREDIENT';
        this.quantity = quantity;
        this.unit = unit;
        this.ingredient = ingredient;
        this.recipe_id = recipe_id;
    }
}