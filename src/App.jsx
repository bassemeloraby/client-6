import "bootstrap/dist/css/bootstrap.min.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {  createHashRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import {
  AddProduct,
  AllProducts,
  Calc,
  Calc5,
  Cart,
  Courses,
  Error,
  FilterProducts,
  HomeLayout,
  Icd10,
  Insurance,
  Landing,
  Lists,
  Login,
  Scientific,
  SingleProduct,
  UpdateProduct,
} from "./pages";
import { ErrorElement } from "./components";

// loaders
import { loader as productsLoader } from "./pages/AllProducts";
import { loader as singleProductLoader } from "./pages/SingleProduct";
import { loader as UpdateProductLoader } from "./pages/UpdateProduct";
import { loader as scientificLoader } from "./pages/Scientific";
import { loader as indicationLoader } from "./pages/Icd10";
import { loader as listsLoader } from "./pages/Lists";
import { loader as filterLoader } from "./pages/FilterProducts";

// actions
import { action as updateProductAction } from "./pages/UpdateProduct";
import { action as addProductAction } from "./pages/AddProduct";
import { action as deleteProductAction } from "./pages/SingleProduct";
// import { action as filterProductAction } from "./pages/FilterProducts";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createHashRouter([
  {
    path: "/*",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
      },
      {
        path: "products",
        element: <AllProducts />,
        loader: productsLoader,
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        loader: singleProductLoader,
        action: deleteProductAction,
      },
      {
        path: "addProduct",
        element: <AddProduct />,
        // loader: singleProductLoader,
        action: addProductAction,
      },
      {
        path: "updateProduct/:id",
        element: <UpdateProduct />,
        loader: UpdateProductLoader,
        action: updateProductAction,
      },
      {
        path: "filterProducts",
        element: <FilterProducts />,
        loader: filterLoader,
        // action: filterProductAction,
      },
      {
        path: "scientific/:scientificName",
        element: <Scientific />,
        loader: scientificLoader,
        // action: updateProductAction,
      },
      {
        path: "icd10/:scientificName",
        element: <Icd10 />,
        loader: indicationLoader,
        // action: updateProductAction,
      },
      {
        path: "cart",
        element: <Cart />,
        // loader: indicationLoader,
        // action: updateProductAction,
      },
      {
        path: "lists",
        element: <Lists />,
        loader: listsLoader,
        // action: updateProductAction,
      },
      {
        path: "insurance",
        element: <Insurance />,
        errorElement: <ErrorElement />,
      },
      {
        path: "courses",
        element: <Courses />,
        errorElement: <ErrorElement />,
      },
      {
        path: "calc",
        element: <Calc />,
        errorElement: <ErrorElement />,
      },
      {
        path: "calc5",
        element: <Calc5 />,
        errorElement: <ErrorElement />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
