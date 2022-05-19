import React from "react";
function TopNavBar(){
  return(
    <div>
      <div>
        pesquisa
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