import { useEffect, useState } from "react";
import readCSV from "../csv/readCSV"
import { Recipe } from "../csv/recipe";
// import { GridColDef, DataGrid } from "@mui/x-data-grid";


/*
const columns: GridColDef[] = [
    {field: 'recipe_id', headerName: 'Recipe ID'},
    {field: 'recipe_name', headerName: 'Recipe Name'},
    {field: 'category', headerName: 'Category'},
    {field: 'rating', headerName: 'Rating'},
    {field: 'cook_time', headerName: 'Cook Time'},
    {field: 'servings', headerName: 'Servings'},
    {field: 'category_sub', headerName: 'Sub Category'},
    {field: 'tod', headerName: 'Time of Day'}
]
*/

function Homepage() {
    console.log('Rendering Homepage');
    const [recipes, setRecipes] = useState<Recipe[]>();

    function recipeSelection() {
        if (recipes) {
            return <div>FOUND RECIPES</div>
        }
        return <div>NO RECIPES FOUND</div>
    }

    useEffect(() => {
        console.log('Starting Fetch...')
        const fetchRecipes = async () => {
            const recipeFetchReturn: Recipe[] =
            await readCSV(process.env.PUBLIC_URL +  '/recipes.csv')
                .then((recipes) => {
                console.log('Retrieving Recipe...');
                return recipes.map(function(currentRecipe,_) {
                        return new Recipe(
                            currentRecipe.recipe_id,
                            currentRecipe.recipe_name,
                            currentRecipe.category,
                            currentRecipe.rating,
                            currentRecipe.cook_time,
                            currentRecipe.servings,
                            currentRecipe.category_sub,
                            currentRecipe.tod
                        )
                    });
                })
            setRecipes(recipeFetchReturn)
        }
        fetchRecipes()
    }, [])

    return(
        <div style={{textAlign: 'center'}}>
            {recipeSelection()}
        </div>
    )
}

export default Homepage