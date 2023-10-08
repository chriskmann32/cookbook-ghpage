function Ingredients(props) {
    props.ids.forEach((currentId) => {
        console.log(`Recipe Ids Ingredients: ${currentId}`)
    })
    return(
        <div style={{textAlign: 'center'}}>
            <h1>Ingredients</h1>
        </div>
    )
}

export default Ingredients