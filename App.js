import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';
import HomeScreen from './screens/HomeScreen'
import Cadastro from './screens/Cadastro'
import Login from './screens/Login'
import QRcode from './screens/QRcode'

const MainNavigator = createStackNavigator(
	{
  		Home: { screen: HomeScreen },
		Cadastro: { screen: Cadastro },
		Login: { screen: Login },
		QRcode: { screen: QRcode },
	},
	{
		defaultNavigationOptions: {
			headerTintColor: 'white',
			headerStyle: {
				backgroundColor: '#4169E1',
			},
		},
		initialRouteName: 'Home',
	},	
);

const App = createAppContainer(MainNavigator);

export default App;