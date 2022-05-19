import React from "react"

function ResultList(){
    const results = ["Resultado 1", "Resultado 2", "Resultado 3", "Resultado 4", "Resultado 4"]
    return (
        <div>
            {results.map((result)=>(
                <div style = {{padding:'5pt'}}>
                    <span style = {{fontSize:'12pt', color:"darkgray"}}>url</span>
                    <h1 style = {{fontSize:'16pt', margin:'0', color:'darkblue'}}>{result}</h1>
                    <p style = {{fontSize:'13pt', margin:'0'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            ))}

        </div>

    )
}

export default ResultList;