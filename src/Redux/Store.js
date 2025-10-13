import { configureStore } from "@reduxjs/toolkit";
import studentReducer from './Studentslice';

const Store = configureStore(
    {
        reducer:{
            students:studentReducer
        }
    }
);

export default Store;

