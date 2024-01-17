import { Ingredient } from "../csv/ingredient";
import './ingredientElement.css'


function IngredientElement(ingredient: Ingredient) {
    return (
        <div
            className='ingredient_main'
        >
            <div className='ingredient_quantity'>{ingredient.quantity}</div>
            <div className='ingredient_unit'>{ingredient.unit}</div>
            <div className='ingredient_ingredient'>{ingredient.ingredient}</div>
        </div>
    )
}

export default IngredientElement