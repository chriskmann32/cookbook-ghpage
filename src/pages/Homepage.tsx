import { useState } from "react";
import useReadCSV from "../csv/useReadCSV"
import { Recipe } from "../csv/recipe";

function Homepage() {
    const [recipes, setRecipes] = useState<Recipe[]>([])
    useReadCSV(process.env.PUBLIC_URL +  '/recipes.csv')
        .then((recipes) => {
            return setRecipes(recipes);
        })

    return(
        <div style={{textAlign: 'center'}}>
            <ol>
                {
                    recipes.map((recipe:Recipe) => (
                        <li>{recipe.recipe_name}</li>
                    ))
                }
            </ol>
        </div>
    )
}

export default Homepage