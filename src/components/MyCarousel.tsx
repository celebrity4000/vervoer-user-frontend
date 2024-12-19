import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';

// Get screen width for carousel sizing
const { width: screenWidth } = Dimensions.get('window');

// Define slider and item width
const sliderWidth = screenWidth;
const itemWidth = screenWidth * 0.75;

// Define the type for each item in the entries array
interface Entry {
    title: string;
}

// Define the state type for the component
interface State {
    entries: Entry[];
}

// Define the ref type for Carousel component
interface CarouselRef {
    snapToItem: (index: number) => void;
}

export class MyCarousel extends Component<{}, State> {
    private _carousel: CarouselRef | null = null;  // Define _carousel with correct type

    // Set the initial state with dummy data
    constructor(props: {}) {
        super(props);
        this.state = {
            entries: [
                { title: 'Item 1' },
                { title: 'Item 2' },
                { title: 'Item 3' },
                { title: 'Item 4' },
                { title: 'Item 5' },
            ],
        };
    }

    // Function to render each carousel item
    _renderItem = ({ item }: { item: Entry }) => {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>{item.title}</Text>
            </View>
        );
    }

    render() {
        return (
            <Carousel
                ref={(c) => { this._carousel = c; }}
                data={this.state.entries}
                renderItem={this._renderItem}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
            />
        );
    }
}

const styles = StyleSheet.create({
    slide: {
        backgroundColor: 'lightblue',
        borderRadius: 10,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
})
