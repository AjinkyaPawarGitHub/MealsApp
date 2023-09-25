import { useLayoutEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

import IconButton from '../Components/IconButton';
import List from '../Components/MealDetail/List';
import Subtitle from '../Components/MealDetail/Subtitle';
import MealDetail from '../Components/MealDetail';
import { MEALS } from '../Data/dummy-data';

function MealDetailScreen({ route, navigation }) {
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    function headerButtonPressHandler() {
        navigation.goBack();
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton

                        icon="home"
                        color="red"
                        onPress={headerButtonPressHandler}
                    />
                );
            },
        });
    }, [navigation, headerButtonPressHandler]);

    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetail
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white',
    },
    detailText: {
        color: 'white',
    },
    listOuterContainer: {
        alignItems: 'center',
    },
    listContainer: {
        width: '80%',
    },
});