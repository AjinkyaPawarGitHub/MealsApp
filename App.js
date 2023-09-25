import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, Button } from 'react-native';


import CategoriesScreen from './Screen/CategoriesScreen';
import MealsOverviewScreen from './Screen/MealsOverviewScreen';
import MealDetailScreen from './Screen/MealDetailScreen';

const Stack = createStackNavigator();

function DrawerNavigator() {
  return
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer >
        <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: "#351401" }, headerTintColor: 'white', cardStyle: { backgroundColor: "#3f2f25" } }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{ title: "All Categories" }}
          />


          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
          // options={({ route, navigation }) => {
          //   const catId = route.params.categoryId;
          //   return {
          //     title: catId,
          //   };
          // }}
          />
          <Stack.Screen name="MealDetail" component={MealDetailScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});