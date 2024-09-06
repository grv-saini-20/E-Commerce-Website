import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    status: "idle"
}

const productSlice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {
        // fetchProducts(state, action) {
        //     state.data = action.payload.products
        // },
    },
    extraReducers: (builder) => {
        builder
        .addCase(getProducts.pending, (state, action) => {
            state.status = "loading"
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.data = action.payload.products
            state.status = "idle"
        })
        .addCase(getProducts.rejected, (state, action) => {
            state.status = "error"
        })
    }
})

export const {fetchProducts} = productSlice.actions;
export default productSlice.reducer;

export const getProducts = createAsyncThunk("products/get", async() => {
    const data = await fetch("https://dummyjson.com/products")
    const result  = await data.json();
    return result;
})

// export function getProducts () {
//     return async function getProductsThunk (dispatch, getState) {
//         const data = await fetch("https://dummyjson.com/products")
//         const result  = await data.json();
//         dispatch(fetchProducts(result))
//     }
// }