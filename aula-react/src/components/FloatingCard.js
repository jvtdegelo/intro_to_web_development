import React from "react"

const FloatingCard = () => {
  return (
    <div style={{width:'100%', height: '50%', border-radius: '25pt', border:'1px solid black'}}>
      <div style = {{margin:'5pt'}}>
        <h1>Titulo</h1>
      </div>
      <div>Descricao</div>
      <div>Imagem</div>
    </div>
  )
}

export default FloatingCard;