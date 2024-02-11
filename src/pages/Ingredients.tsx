import { useEffect } from "react"
import { Ingredient } from "../csv/ingredient"
import { readIngredientsCSV } from "../csv/readCSV";
import IngredientElement from "../components/ingredientElement";

function Ingredients({selectedId, ingredients, setIngredients}) {
    console.log('Rendering Ingredients');
    console.log(`IDs: ${selectedId}`)

    function ingredientSelection() {
        if (ingredients) {
            return ingredients.map((ingredient: Ingredient) => {
                return IngredientElement(ingredient);
            })
        }
        return <div>No RECIPES SELECTED</div>
    }
    
    useEffect(() => {
        console.log('Staring Ingredient Fetch...');
        const fetchIngredients = async () => {
            const fetchIngredientReturn: Ingredient[] =
            await readIngredientsCSV(process.env.PUBLIC_URL + '/ingredients.csv')
                .then((ingredients) => {
                    console.log('Retrieveing Ingredients...');
                    return ingredients.filter((ingredient: Ingredient) => {
                        return selectedId === ingredient.recipe_id
                    })
                })
            setIngredients(fetchIngredientReturn)
        }
        if (selectedId !== -99) {
            fetchIngredients();
        }
    }, [selectedId, setIngredients])

    return(
        <div style={{textAlign: 'center'}}>
            {ingredientSelection()}
        </div>
    )
}

export default Ingredients