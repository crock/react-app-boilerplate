import * as React from 'react';
import {
    createReactRouter,
    createRouteConfig,
  } from '@tanstack/react-router'
  
  const rootRoute = createRouteConfig()
  
  const indexRoute = rootRoute.createRoute({
    path: '/',
    component: () => <>homepage</>,
  })
  
  const loginRoute = rootRoute.createRoute({
    path: '/login',
    component: () => <>login form</>,
  })
  
  const routeConfig = rootRoute.addChildren([indexRoute, loginRoute])
  
  const router = createReactRouter({ routeConfig })

  export default router