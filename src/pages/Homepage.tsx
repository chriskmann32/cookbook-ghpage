import { useEffect } from "react";
import {readRecipeCSV} from "../csv/readCSV"
import { Recipe } from "../csv/recipe";
import RecipeElement from "../components/recipeElement";

function Homepage({setIds, recipes, setRecipes, selectedId}) {
    console.log('Rendering Homepage');
    console.log(`ID: ${selectedId}`)

    function recipeSelection() {
        if (recipes) {
            return recipes.map((recipe: Recipe) => {
                return RecipeElement(recipe, setIds, selectedId);
            })
        }
        return <div>NO RECIPES FOUND</div>
    }

    useEffect(() => {
        console.log('Starting Recipe Fetch...')
        const fetchRecipes = async () => {
            const recipeFetchReturn: Recipe[] =
            await readRecipeCSV(process.env.PUBLIC_URL +  '/recipes.csv')
                .then((recipes) => {
                    return recipes;
                })
            setRecipes(recipeFetchReturn)
        }
        fetchRecipes()
    },[setRecipes])

    return(
        <div style={{textAlign: 'center'}}>
            {recipeSelection()}
        </div>
    )
}

export default Homepage