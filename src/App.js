import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//layouts
import RootLayout from "./layout/RootLayout";

import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import DashboardLayout from "./layout/DashboardLayout";
import HomeLayout from "./layout/HomeLayout";
import Dashboard from "./pages/Dashboard";
import GiftForMeLayout from "./layout/GiftForMeLayout";
import ProdCategoryLayout from "./layout/ProdCategoryLayout";
import ProdCategory from "./pages/ProdCategory";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
      </Route>

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
      </Route>

      <Route path="/gift4me" element={<GiftForMeLayout />} />

      <Route path="/product-category" element={<ProdCategoryLayout />}>
        <Route index element={<ProdCategory />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
