import { Recipe } from "../csv/recipe";
import './recipeElement.css'

function RecipeElement(recipe: Recipe, setSelectedId: any, selectedId: number) {

    function toggleRecipe(event: React.MouseEvent<HTMLDivElement>) {
        console.log(`Current IDs: ${selectedId}`);
        if (selectedId ===  -99) {
            event.currentTarget.classList.toggle('recipe_main--selected');
            setSelectedId(recipe.recipe_id);
        } if (selectedId === recipe.recipe_id) {
            event.currentTarget.classList.toggle('recipe_main--selected');
            setSelectedId(-99);
        } else {
            const elements: HTMLCollectionOf<Element> = document.getElementsByClassName('recipe_main--selected');
            for (let element of elements) {
                element.classList.toggle('recipe_main--selected');
            }
            event.currentTarget.classList.toggle('recipe_main--selected');
            setSelectedId(recipe.recipe_id);
        }
    }

    return (
        <div
            className={(selectedId === recipe.recipe_id) ? 'recipe_main recipe_main--selected' : 'recipe_main'}
            onClick={toggleRecipe}
        >
            <div className='recipe_recipeName'>{recipe.recipe_name}</div>
            <div className='recipe_category'>{recipe.category}</div>
            <div className='recipe_rating'>
                <span className='recipe_rating'>{
                    parseInt(recipe.rating) !== 0
                    ? "⭐".repeat(parseInt(recipe.rating))
                    : "Unrated"
                    }
                </span>
            </div>
            <div className='recipe_cookTime'>{recipe.cook_time}</div>
            <div className='recipe_servings'>{recipe.servings}</div>
            <div className='recipe_categorySub'>{recipe.category_sub}</div>
            <div className='recipe_tod'>{recipe.tod}</div>
        </div>
    )
}

export default RecipeElement