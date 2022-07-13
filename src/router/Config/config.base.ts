import { routes } from './config.routes'
import { Routes } from '../type'
import {
    ShoppingCartPage,
    AllProductsPage,
    StatisticsPage,
    ProfilePage,
    AboutPage,
} from '../../components/_pages'

export default {
    [routes.default]: {
        component: ProfilePage
    },
    [routes.statistics]: {
        component: StatisticsPage
    },
    [routes.catalog]: {
        component: AllProductsPage
    },
    [routes.about]: {
        component:  AboutPage
    },
    [routes.shoppingcart]: {
        component: ShoppingCartPage
    }
} as Routes