import React, {useState} from "react";
function TopNavBar(){
  const [barraPesquisa, setBarra] = useState ("amem");
  const [input, setInput] = useState("");

  const handleClick = () =>{
    console.log("clicado")
    setBarra(input);
  }
  return(
    <div>
      <div style={{display:'flex'}}>
        <div>
          <input value={input} onInput={e => setInput(e.target.value)}/>
        </div>
        <button onClick={handleClick}>pesquisar</button>
        <span>{barraPesquisa}</span>
      </div>
      <div style = {{display:'flex', margin :'5pt'}}>
        <div style = {{margin :'5pt', color:'darkgray'}}>Todas</div>
        <div style = {{margin :'5pt', color:'darkgray'}}>Noticias</div>
        <div style = {{margin :'5pt', color:'darkgray'}}>Imagens</div>
        <div style = {{margin :'5pt', color:'darkgray'}}>Videos</div>
        <div style = {{margin :'5pt', color:'darkgray'}}>Maps</div>
      </div> 
    </div>

  )
}

export default TopNavBar;