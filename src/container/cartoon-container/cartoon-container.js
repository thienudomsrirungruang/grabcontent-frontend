import React, {useState, useEffect} from 'react'
import _ from 'lodash'
import {Grid} from 'semantic-ui-react'
import CartoonSummary from '../../component/cartoon-summary/cartoon-summary.js'
import axios from 'axios'

function CartoonContainer(){

  const [data, setData] = useState([])
  const [load, setLoad] = useState(false)

  useEffect(()=>{
    if(!load){
      setLoad(true)
      axios.get('http://localhost:8080/api/cartoon?page=1',
        {
          crossdomain: true
        }
      )
      .then(function(response){ 
        console.log(response)
        setData(response['data'])
      })
    }
  })

  var columns = []
  for(var i = 0; i < 4; i++){
    var column = []
    for(var j = i; j < data.length; j+=4){
      column.push(
        <CartoonSummary key={data[j]['id']} data={data[j]}></CartoonSummary>
      )
    }
    columns.push(
      <Grid.Column key={i}>
        {column}
      </Grid.Column>
    )
  }
  
  // var columns = data.map((d)=>(
  //   <Grid.Column key={d.id}>
  //     <CartoonSummary data={d}></CartoonSummary>
  //   </Grid.Column>
  // ))

  return(
    <Grid centered>
      {columns}
    </Grid>
  )
}

export default CartoonContainer;
