import { Image } from 'react-native'
import React from 'react'
import Animated, { interpolate, interpolateColor, SharedValue, useAnimatedStyle } from 'react-native-reanimated'

interface SliderItemProps {
    image: any,
    index: number,
    itemSize: number,
    scrollX: SharedValue<number>
}

export default function SliderItem({ image, index, itemSize, scrollX }: SliderItemProps) {

    const styles = useAnimatedStyle(() => {
        return {
            transform: [{
                translateY: interpolate(
                    scrollX.value,
                    [index - 1, index, index + 1],
                    [itemSize * 0.2, 0, itemSize * 0.2]
                )
            }],

            borderColor: interpolateColor(
                scrollX.value,
                [index - 1, index, index + 1],
                ['transparent', 'white', 'transparent']
            )

        }
    })


    return (
        <Animated.View
            style={[styles,
                {
                    borderWidth: 4,
                    width: itemSize,
                    height: itemSize,
                    borderRadius: itemSize / 2,
                    overflow: 'hidden',
                    justifyContent: 'center',
                    alignItems: 'center',
                }]
            }>
            <Image style={{
                width: itemSize,
                height: itemSize,
                borderRadius: itemSize / 2,
            }}
                source={image}
            />
        </Animated.View>
    )
}