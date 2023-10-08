import { useEffect, useState } from "react"
import { Ingredient } from "../csv/ingredient"
import { readIngredientsCSV } from "../csv/readCSV";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
    {field: 'quantity', headerName: 'Quantity'},
    {field: 'unit', headerName: 'Unit'},
    {field: 'ingredient', headerName: 'Ingredient'}
]

function Ingredients(props) {
    console.log('Rendering Ingredients');

    function ingredientSelection() {
        if (props.ingredients) {
            return <DataGrid
                    rows={props.ingredients}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {pageSize: props.ingredients.length},
                        },
                    }}
                    />
        }
        return <div>No RECIPES SELECTED</div>
    }
    
    useEffect(() => {
        console.log('Staring Ingredient Fetch...')
        const fetchIngredients = async () => {
            const fetchIngredientReturn: Ingredient[] =
            await readIngredientsCSV(process.env.PUBLIC_URL + './ingredients.csv')
                .then((ingredients) => {
                    console.log('Retrieveing Ingredients...');
                    const filteredIngredients: Ingredient[] = ingredients.filter((ingredient: Ingredient) => {
                        return props.ids.contains(ingredient.recipe_id)
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
            props.setIngredients(fetchIngredientReturn)
        }
        if (props.ids) {
            fetchIngredients();
        }
    }, [props.ids])

    return(
        <div style={{textAlign: 'center'}}>
            {ingredientSelection()}
        </div>
    )
}

export default Ingredients