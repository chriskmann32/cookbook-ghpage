import { useEffect } from "react";
import {readRecipeCSV} from "../csv/readCSV"
import { Recipe } from "../csv/recipe";
import { GridColDef, DataGrid } from "@mui/x-data-grid";

const columns: GridColDef[] = [
    {field: 'recipe_name', headerName: 'Recipe Name', flex: 5},
    {field: 'category', headerName: 'Category', flex: 2},
    {field: 'rating', headerName: 'Rating', flex: 1},
    {field: 'cook_time', headerName: 'Cook Time', flex: 1},
    {field: 'servings', headerName: 'Servings', flex: 1},
    {field: 'category_sub', headerName: 'Sub Category', flex: 3},
    {field: 'tod', headerName: 'Time of Day', flex: 2}
]

function Homepage(props) {
    console.log('Rendering Homepage');

    function recipeSelection() {
        if (props.recipes) {
            return <DataGrid
                        rows={props.recipes}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: {pageSize: props.recipes.length},
                            },
                        }}
                        checkboxSelection
                        onRowSelectionModelChange={(ids) => {
                            const selectedIds = new Set(ids);
                            const selectedRowData: Recipe[] = props.recipes.filter((row) =>
                                selectedIds.has(row.id));
                            const idsArray: String[] = selectedRowData.map((selectedRecipe) => {
                                return selectedRecipe.id;
                            })
                            props.setIds(idsArray);
                            idsArray.forEach((currentId) => {
                                console.log(`Selected Recipes: ${currentId}`);
                            })
                        }}
                    />
        }
        return <div>NO RECIPES FOUND</div>
    }

    useEffect(() => {
        console.log('Starting Recipe Fetch...')
        const fetchRecipes = async () => {
            const recipeFetchReturn: Recipe[] =
            await readRecipeCSV(process.env.PUBLIC_URL +  '/recipes.csv')
                .then((recipes) => {
                console.log('Retrieving Recipes...');
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
            props.setRecipes(recipeFetchReturn)
        }
        fetchRecipes()
    },[])

    return(
        <div style={{textAlign: 'center'}}>
            {recipeSelection()}
        </div>
    )
}

export default Homepage