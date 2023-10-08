import { useEffect } from "react"
import { Ingredient } from "../csv/ingredient"
import { readIngredientsCSV } from "../csv/readCSV";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
    {field: 'quantity', headerName: 'Quantity', flex: 1},
    {field: 'unit', headerName: 'Unit', flex: 1},
    {field: 'ingredient', headerName: 'Ingredient', flex: 3}
]

function Ingredients({ids, ingredients, setIngredients}) {
    console.log('Rendering Ingredients');

    function ingredientSelection() {
        if (ingredients) {
            return <DataGrid
                    rows={ingredients}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {pageSize: ingredients.length},
                        },
                    }}
                    />
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
                    const filteredIngredients: Ingredient[] = ingredients.filter((ingredient: Ingredient) => {
                        return ids.includes(ingredient.recipe_id)
                    })
                    return filteredIngredients.map(function(currentIngredient,_) {
                        return new Ingredient(
                            currentIngredient.quantity,
                            currentIngredient.unit,
                            currentIngredient.ingredient,
                            currentIngredient.recipe_id
                        )
                    });
                })
            setIngredients(fetchIngredientReturn)
        }
        if (ids) {
            fetchIngredients();
        }
    }, [ids, setIngredients])

    return(
        <div style={{textAlign: 'center'}}>
            {ingredientSelection()}
        </div>
    )
}

export default Ingredients