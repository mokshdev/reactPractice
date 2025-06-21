function Food() {
    
    const food1 = "chole"
    const food2 = "bhature"

    return(
        <ul>
            <li>apple</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    )

}

export default Food