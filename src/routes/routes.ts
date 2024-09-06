import { Main } from "../pages/main/main";
import { Pages } from "../pages/pages/pages";
import { PricePlans } from "../pages/price-plans/price-plans";
import { Products } from "../pages/products/products";

type Route = {
    path: string;
    title: string;
    component: React.FunctionComponent;
};
export const ROUTES: Route[] = [
  {
    path: "/",
    title: 'Main Page',
    component: Main,
  },
  {
    path: "/pages",
    title: 'Pages',
    component: Pages,
  },
  {
    path: "/price-plans",
    title: 'Price plans',
    component: PricePlans,
  },
  {
    path: "/products",
    title: 'Products',
    component: Products,
  },
];
