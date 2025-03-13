import { View, Text, FlatList, Dimensions, NativeEventEmitter } from 'react-native'
import React from 'react'
import SliderItem from './SliderItem'
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated'

const images = [
    require('../assets/images/1.jpg'),
    require('../assets/images/2.jpg'),
    require('../assets/images/3.jpg'),
    require('../assets/images/4.jpg'),
    require('../assets/images/5.jpg'),
    require('../assets/images/6.jpg'),
]

const screenWidth = Dimensions.get('screen').width
const _itemSize = screenWidth * 0.30
const _spacing = 14

export default function CIrcularSlider() {
    const scrollX = useSharedValue(0)
    const onSroll = useAnimatedScrollHandler((e) => {
        scrollX.value = e.contentOffset.x
    })

    return (
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <Animated.FlatList
                style={{ flexGrow: 0 }}
                data={images}
                keyExtractor={(_, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <SliderItem
                        image={item}
                        index={index}
                        itemSize={_itemSize}
                    />
                )}
                onScroll={onSroll}
                scrollEventThrottle={16}
            />
        </View>
    )
}