import { StyleSheet, Text, View, FlatList } from 'react-native'
import { CATEGORIES } from '../Data/dummy-data'
import React from 'react'
import CategoryGridTile from '../Components/CategoryGridTile'


const CategoriesScreen = ({ navigation }) => {
    function renderCategoryItem(itemData) {
        function pressHandler() {
            navigation.navigate('MealsOverview', { categoryId: itemData.item.id })
        }
        return (
            <CategoryGridTile title={itemData.item.title}
                color={itemData.item.color}
                onPress={pressHandler} />

        )

    }


    return (
        <View>
            <FlatList
                data={CATEGORIES}
                keyExtractor={(item) => item.id}
                renderItem={renderCategoryItem}
                numColumns={2}>


            </FlatList>
        </View>
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({})