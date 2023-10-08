import { useEffect, useState } from "react";
import readCSV from "../csv/readCSV"
import { Recipe } from "../csv/recipe";
 import { GridColDef, DataGrid } from "@mui/x-data-grid";

const columns: GridColDef[] = [
    {field: 'recipe_name', headerName: 'Recipe Name', resizable: true},
    {field: 'category', headerName: 'Category', resizable: true},
    {field: 'rating', headerName: 'Rating', resizable: true},
    {field: 'cook_time', headerName: 'Cook Time', resizable: true},
    {field: 'servings', headerName: 'Servings', resizable: true},
    {field: 'category_sub', headerName: 'Sub Category', resizable: true},
    {field: 'tod', headerName: 'Time of Day', resizable: true}
]

function Homepage() {
    console.log('Rendering Homepage');
    const [recipes, setRecipes] = useState<Recipe[]>();

    function recipeSelection() {
        if (recipes) {
            return <DataGrid
                        rows={recipes}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: {pageSize: recipes.length},
                            },
                        }}
                        checkboxSelection
                        onRowSelectionModelChange={(ids) => {
                            const selectedIds = new Set(ids);
                            const selectedRowData: Recipe[] = recipes.filter((row) =>
                                selectedIds.has(row.id));
                            const idsArray: String[] = selectedRowData.map((selectedRecipe) => {
                                return selectedRecipe.id;
                            })
                            idsArray.forEach((currentId) => {
                                console.log(`Selected Recipes: ${currentId}`);
                            })
                        }}
                    />
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
                console.log('Actually Updating?')
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