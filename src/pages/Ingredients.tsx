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
    const [ingredientList, setIngredientList] = useState<Ingredient[]>();

    function ingredientSelection() {
        if (ingredientList) {
            return <DataGrid
                    rows={ingredientList}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {pageSize: ingredientList.length},
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
                        props.ids.contains(ingredient.recipe_id)
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
            setIngredientList(fetchIngredientReturn)
        }
        if (props.ids) {
            fetchIngredients();
        }
    })

    return(
        <div style={{textAlign: 'center'}}>
            {ingredientSelection()}
        </div>
    )
}

export default Ingredients