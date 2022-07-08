import { routes } from './config.routes'
import { Routes } from '../type'
import {
    ShoppingCartPage,
    AllProductsPage,
    StatisticsPage,
    ProfilePage,
    ProductPage,
    AboutPage,
} from '../../components/_pages'

export default {
    [routes.default]: {
        component: ProfilePage
    },
    [routes.statistics]: {
        component: StatisticsPage
    },
    [routes.allproducts]: {
        component: AllProductsPage
    },
    [routes.about]: {
        component:  AboutPage
    },
    [routes.shoppingcart]: {
        component: ShoppingCartPage
    },
    [routes.productsid]: {
        component: ProductPage
    }
} as Routes