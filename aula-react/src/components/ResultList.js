import React from "react"
import Result from "./Result";

function ResultList(){
    const results = ["Resultado 1", "Resultado 2", "Resultado 3", "Resultado 4", "Resultado 5", null]
    return (
        <div>
            {results.map((result)=>(
                <Result title = {result}/>
            ))}

        </div>

    )
}

export default ResultList;