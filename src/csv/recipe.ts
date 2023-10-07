export class Recipe {
    id: string;
    recipe_name: string;
    category: string;
    rating: string;
    cook_time: string;
    servings: string;
    category_sub: string;
    tod: string

    constructor(
        recipe_id: string,
        recipe_name: string,
        category: string,
        rating: string,
        cook_time: string,
        servings: string,
        category_sub: string,
        tod: string
    ) {
        this.id = recipe_id;
        this.recipe_name = recipe_name;
        this.category = category;
        this.rating = rating;
        this.cook_time = cook_time;
        this.servings = servings;
        this.category_sub = category_sub
        this.tod = tod;
    }
}