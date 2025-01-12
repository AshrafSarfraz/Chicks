import React from 'react'
import StackNavigation from './src/navigations/StackNavigation'
import { persistor, store } from './redux/store'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
const App = () => {

  return (
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
    <StackNavigation />
    </PersistGate>
    </Provider>
  )
}

export default App