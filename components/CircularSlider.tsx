import { View, Dimensions, Image, StyleSheet } from 'react-native'
import React from 'react'
import SliderItem from './SliderItem'
import Animated, { clamp, FadeIn, FadeOut, runOnJS, useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated'

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
    const [activeIndex, setActiveIndex] = React.useState(0)
    const scrollX = useSharedValue(0)
    const onSroll = useAnimatedScrollHandler((e) => {
        scrollX.value = clamp(e.contentOffset.x / (_itemSize + _spacing), 0, images.length - 1)
        const newActiveIndex = Math.round(scrollX.value)
        if (activeIndex !== newActiveIndex) runOnJS(setActiveIndex)(newActiveIndex)
    })

    return (
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <View style={[StyleSheet.absoluteFill, { justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }]}>
                <Animated.Image
                    entering={FadeIn.duration(500)}
                    exiting={FadeOut.duration(500)}
                    key={`img-${activeIndex}`}
                    source={images[activeIndex]}
                    style={{ width: '100%', height: '100%' }} />
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