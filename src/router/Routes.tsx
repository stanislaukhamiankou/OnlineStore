import { Switch, Route } from 'react-router-dom'

import { HeaderMenu } from '../components/_organisms'
import { routes } from './Config/config.routes'
import configBase from './Config/config.base'

const AppRoutes = () => {

  return (
    <Switch>
      <Route
        path={[
          routes.shoppingcart,
          routes.allproducts,
          routes.statistics,
          routes.default,
          routes.about,
        ]}
        render={() => (
          <>
            <HeaderMenu />
            <Switch>
                <Route exact path={routes.shoppingcart} component={configBase[routes.shoppingcart]?.component} />
                <Route exact path={routes.allproducts} component={configBase[routes.allproducts]?.component} />
                <Route exact path={routes.statistics} component={configBase[routes.statistics]?.component} />
                <Route exact path={routes.productsid} component={configBase[routes.productsid]?.component} />
                <Route exact path={routes.default} component={configBase[routes.default]?.component} />
                <Route exact path={routes.about} component={configBase[routes.about]?.component} />
            </Switch>
          </>
        )}
      />
    </Switch>
  )
}
export default AppRoutes
