import { View, Dimensions, Image } from 'react-native'
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
const _itemSize = screenWidth * 0.24
const _spacing = 18

export default function CircularSlider() {
    const scrollX = useSharedValue(0)
    const onSroll = useAnimatedScrollHandler((e) => {
        scrollX.value = e.contentOffset.x / (_itemSize + _spacing)
    })

    return (
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={images[0]} />
            </View>

            <Animated.FlatList
                style={{ flexGrow: 0, paddingBottom: _itemSize }}
                contentContainerStyle={{ paddingHorizontal: (screenWidth - _itemSize) / 2, gap: _spacing }}
                data={images}
                keyExtractor={(_, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <SliderItem
                        image={item}
                        index={index}
                        itemSize={_itemSize}
                        scrollX={scrollX}
                    />
                )}
                onScroll={onSroll}
                scrollEventThrottle={16}
                snapToInterval={_itemSize + _spacing}
                decelerationRate={'fast'}
            />
        </View>
    )
}