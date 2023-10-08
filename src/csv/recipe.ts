export class Recipe {
    id: string;
    recipe_id: string;
    recipe_name: string;
    category: string;
    rating: string;
    cook_time: string;
    servings: string;
    category_sub: string;
    tod: string

    convertCookTime(cookTime: string): string {
        const cookTimeInt = parseInt(cookTime);
        const hours = Math.floor(cookTimeInt / 60);
        const minutes = cookTimeInt % 60;
        return (hours !== 0) ? `${hours}:${minutes}`  : `${minutes}`;
    }

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
        this.id = Math.random().toString().substring(2,9) + '_RECIPE';
        this.recipe_id = recipe_id;
        this.recipe_name = recipe_name;
        this.category = category;
        this.rating = rating;
        this.cook_time = this.convertCookTime(cook_time);
        this.servings = servings;
        this.category_sub = category_sub
        this.tod = tod;
    }
}