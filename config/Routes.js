import { StackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import NewGuildScreen from '../screens/NewGuildScreen';


export const RootStack = StackNavigator(
    {
      Home: {
        screen: HomeScreen,
        navigationOptions: {
          title: 'Home'
        },
      },
      NewGuild: {
          screen: NewGuildScreen,
          navigationOptions: {
            title: 'New Guild'
          },
      },
      GuildDetails: {
        screen: DetailsScreen,
        navigationOptions: {
          title: 'Guild'
        },
      }
    },
    {
      initialRouteName: 'Home',
    }
);