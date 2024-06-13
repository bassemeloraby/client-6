import { customFetch } from "../../utils/index";

const url = "allProducts";



const getProducts = async () => {
    const response = await customFetch(url);
  
    return response.data;
  };


const getOneProduct = async (id) => {
    // const response = await axios.get(`${API_URL}/${id}`);
    const response = await customFetch(`${url}/${id}`);
    return response.data;
  };

const deleteProduct = async (id) => {
    const response = await customFetch.delete(`${url}/${id}`);
    console.log(id)
  console.log(response)
    return response.data;
  };

// const updateProducts = async ({ id, TradeName }) => {
//     const response = await customFetch.patch(`${url}/${id}`,{ TradeName });
//     console.log(id)
//     console.log(TradeName)
//   console.log(response)
//     return response.data;
//   };


  const drugsService = {
    getDrugs,
    getOneDrug,
    deleteOneDrug,
    updateOneDrug
  };
  
  export default drugsService;