import { Switch, Route } from 'react-router-dom'

import { Header } from '../components/_organisms'
import { routes } from './Config/config.routes'
import configBase from './Config/config.base'

const AppRoutes = () => {

  return (
    <Switch>
      <Route
        path={[
          routes.shoppingcart,
          routes.catalog,
          routes.statistics,
          routes.default,
          routes.about,
        ]}
        render={() => (
          <>
            <Header />
            <Switch>
                <Route exact path={routes.shoppingcart} component={configBase[routes.shoppingcart]?.component} />
                <Route exact path={routes.catalog} component={configBase[routes.catalog]?.component} />
                <Route exact path={routes.statistics} component={configBase[routes.statistics]?.component} />
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
