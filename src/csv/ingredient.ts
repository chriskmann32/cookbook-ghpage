export class Ingredient {
    quantity: string;
    unit: string;
    ingredient: string;
    recipe_id: string;

    constructor(
        quantity: string,
        unit: string,
        ingredient: string,
        recipe_id: string
    ) {
        this.quantity = quantity;
        this.unit = unit;
        this.ingredient = ingredient;
        this.recipe_id = recipe_id;
    }
}