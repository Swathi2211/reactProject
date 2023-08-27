import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './redx';

export default configureStore({
    reducer : {
        counter : counterReducer
    }
});