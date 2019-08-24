import React from 'react'
import _ from 'lodash'

function CartoonSummary(data){
  return (
    <div style={{'width': '100%', 'height': '40px', 'backgroundColor': '#999'}}>{data.name}</div>
  )
}

export default CartoonSummary;
