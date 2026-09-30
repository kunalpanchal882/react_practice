import {configureStore} from '@reduxjs/toolkit'
import counterrSLice from '../features/counterSlicer'

export const store = configureStore({
    reducer:{
        counter:counterrSLice
    }
})