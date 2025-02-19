import {api, API_BASE_URL} from "../../config/apiConfig";
import {FIND_PRODUCTS_FAILURE,FIND_PRODUCTS_SUCCESS,FIND_PRODUCTS_REQUEST, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_SUCCESS, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS} from "./ActionType";

// export const findProducts=(reqData)=>async(dispatch)=>{
//     dispatch({type:FIND_PRODUCTS_REQUEST});
//     const {colors, 
//         sizes,      
//         minPrice,
//         maxPrice,
//         minDiscount,
//         category,  
//         sort,
//         pageNumber,
//         pageSize,
//     } = reqData;
//     console.log("Request Data:", reqData);

//     try{
//         const {data}=await api.get(`/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`)
//             console.log("API Response:", data);
//             console.log("Product data",data);
//             dispatch({type:FIND_PRODUCTS_SUCCESS,payload:data})
//     }catch(error){
//         dispatch({type:FIND_PRODUCTS_FAILURE,payload:error.message})      
//     }
// };
export const findProducts = (reqData) => async (dispatch) => {
    dispatch({ type: FIND_PRODUCTS_REQUEST });

    const {
        colors = [],
        sizes,
        minPrice,
        maxPrice,
        minDiscount,
        category,
        sort,
        pageNumber,
        pageSize
    } = reqData;

    console.log("Request Data:", reqData);

    try {
        const queryString = new URLSearchParams({
           color: Array.isArray(colors) ? colors.join(",") : "",
            size: sizes || "",
            minPrice: minPrice || "",
            maxPrice: maxPrice || "",
            minDiscount: minDiscount || "",
            category: category || "",
            sort: sort || "",
            pageNumber: pageNumber || "",
            pageSize: pageSize || ""
        }).toString();

        const { data } = await api.get(`/api/products?${queryString}`);
        console.log("API Response:", data);
        dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });
    } catch (error) {
        console.error("Error fetching products:", error.message);
        dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message });
    }
};



export const findProductsById=(reqData)=>async(dispatch)=>{
    dispatch({type:FIND_PRODUCT_BY_ID_REQUEST})

    const productId = typeof reqData === "string" ? reqData : reqData.productId;
    console.log("Product ID:", productId); // Debugging step
  
    try{
        const {data}= await api.get(`/api/products/id/${productId}`)
        console.log("product data", data);  
         
        dispatch({type:FIND_PRODUCT_BY_ID_SUCCESS,payload:data})
    }catch(error){
        console.error("Error fetching product:", error.message); // Improved error logging

        dispatch({type:FIND_PRODUCT_BY_ID_FAILURE,payload:error.message})      
    }
};

// export const createProduct=(product)=>async(dispatch)=>{
//     try{
//         dispatch({type:CREATE_PRODUCT_REQUEST})
//         const {data} = await api.post(`${API_BASE_URL}`);
//         dispatch({
//             type:CREATE_PRODUCT_SUCCESS,
//             payload:data,
//         })
//     }catch (error) {
//         console.error("Error fetching products:", error.message);
//         dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message });
//     }
// }
