import React from 'react'
import _ from 'lodash'
import {Grid} from 'semantic-ui-react'
import CartoonSummary from '../../component/cartoon-summary/cartoon-summary.js'

function CartoonContainer(cartoonData){
  const columns = _.times(6, (i)=>(
    <Grid.Column key={i}>
      <CartoonSummary data={{'name': '123'}}></CartoonSummary>
    </Grid.Column>
  ))

  return(
    <Grid centered>
      {columns}
    </Grid>
  )
}

export default CartoonContainer;
