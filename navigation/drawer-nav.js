import { createDrawerNavigator } from 'react-navigation-drawer'
import { Home } from '../components/home/home'
import { Products } from '../components/products/products'


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