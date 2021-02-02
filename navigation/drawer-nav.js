import { createDrawerNavigator } from 'react-navigation-drawer'
import { Home } from '../components/main-app/home/home'
import { Products } from '../components/main-app/products/products'


export const DrawerNav = createDrawerNavigator(
    {
        HomePage: {
            screen: Home
        }
    },
    {
        initialRouteName: "HomePage",
    }
)