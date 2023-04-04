import { createBottomTabNavigator } from '@react-navigation/bottom-tabs' //Tabbar-bottom
import { Home } from '../pages/home' //page
import { Favorites } from '../pages/favorites' //page
import { Ionicons } from '@expo/vector-icons' //icones


const Tab = createBottomTabNavigator()

export function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, //não mostra o header nativo
        tabBarHideOnKeyboard: true, //para o TabBar não subir quando o teclado aparecer
        tabBarShowLabel: false, //oculta o texto da TabBar
        tabBarActiveTintColor: '#121212',

        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 0
        }
      }}
    >
      <Tab.Screen
        name='HomeTab'
        component={Home}
        options={{
          //estilos dos icones em caso de foco e desfoco
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name='home' color='#000' size={size} />
            }
            return <Ionicons name='home-outline' color={color} size={size} />
          }
        }}
      />
      <Tab.Screen
        name='FavoritesTab'
        component={Favorites}
        options={{
          //estilos dos icones em caso de foco e desfoco
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name='heart' color='#ff4141' size={size} />
            }
            return <Ionicons name='heart' color={color} size={size} />
          }
        }}
      />
    </Tab.Navigator>
  )
}