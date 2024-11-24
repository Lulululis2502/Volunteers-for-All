import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import search from './search';
import home from './home';
import notificacoes from './notificacoes';
import chat from './chat';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Ionicons}from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

function Routes(){
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle:{
                    position: 'absolute',
                    borderTopWidth: 0,

                }
            }}
        >
            <Tab.Screen
            name="home"
            component={home}
            options={{
                headerShown: false,
                tabBarIcon:({color, size, focused}) => {
                    if(focused){
                        return <FontAwesome name="home" size={size} color={'#BDA47E'}/>
                    }
                        return <FontAwesome name="home" size={size} color={'black'}/>
                }
            }}
            />

            <Tab.Screen
            name="search"
            component={search}
            options={{
                headerShown: false,
                tabBarIcon:({color, size, focused}) => {
                    if(focused){
                        return <Ionicons name="search" size={size} color={'#BDA47E'}/>
                    }
                        return <Ionicons name="search" size={size} color={'black'}/>
                }
            }}
            />

<Tab.Screen
            name="notificacoes"
            component={notificacoes}
            options={{
                headerShown: false,
                tabBarIcon:({color, size, focused}) => {
                    if(focused){
                        return <Ionicons name="notifications" size={size} color={'#BDA47E'}/>
                    }
                        return <Ionicons name="notifications-outline" size={size} color={'black'}/>
                }
            }}
            />

<Tab.Screen
            name="chat"
            component={chat}
            options={{
                headerShown: false,
                tabBarIcon:({color, size, focused}) => {
                    if(focused){
                        return <Ionicons name="chatbubbles" size={size} color={'#BDA47E'}/>
                    }
                        return <Ionicons name="chatbubbles-outline" size={size} color={'black'}/>
                }
            }}
            />
        </Tab.Navigator>

    )

}

export default Routes;