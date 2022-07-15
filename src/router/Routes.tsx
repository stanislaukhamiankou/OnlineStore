import { Routes, Route } from 'react-router-dom'

import { AboutPage, AllProductsPage, ProfilePage, ShoppingCartPage, StatisticsPage } from 'src/components/_pages'
import { routes } from './Config/config.routes'

const AppRoutes = () => {

  return (
    <Routes>
      <Route path={routes.shoppingcart} element={<ShoppingCartPage />} />
      <Route path={routes.catalog} element={<AllProductsPage/>} />
      <Route path={routes.statistics} element={<StatisticsPage />} />
      <Route path={routes.default} element={<ProfilePage />} />
      <Route path={routes.about} element={<AboutPage />} />
    </Routes>
  )
}
export default AppRoutes
