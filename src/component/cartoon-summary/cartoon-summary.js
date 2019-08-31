import React from 'react'

function CartoonSummary(data){
  console.log(data)
  return (
    <div style={{'width': '100%', 'height': '120px', 'marginBottom': '20px', 'backgroundColor': '#999'}}>
      <i src={data.data.firstPageUrl}></i>
      {data.data.cartoonName}
      <br/>
      Chapter: {data.data.chapter}
      <br/>
      Views: {data.data.views}
    </div>
  )
}

export default CartoonSummary;
