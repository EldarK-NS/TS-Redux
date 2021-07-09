import React from 'react'
import {Provider} from 'react-redux'
import {store} from '../state'
import { RepositoriesList } from './RepositoriesList'



export const App = () => {
   return (
      <Provider store={store}>
         <div>
            <h1>Search for a Packages</h1>
            <RepositoriesList/>
         </div>
      </Provider>
   )
}
