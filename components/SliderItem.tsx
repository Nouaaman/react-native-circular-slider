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
            // transform: [{
            //     translateY: interpolate(
            //         scrollX.value,
            //         [index - 1, index, index + 1],
            //         [itemSize / 2, 0, itemSize / 2]
            //     )
            // }],
            // borderWidth: 4,
            // borderColor: interpolateColor(
            //     scrollX.value,
            //     [index - 1, index, index + 1],
            //     ['transparent', 'rgba(255,255,255,1)', 'transparent']
            // )

        }
    })


    return (
        <Animated.View
            style={[styles, {
                width: itemSize,
                height: itemSize,
                borderRadius: itemSize / 2,
                borderWidth: 4,
                borderColor: 'rgb(7, 189, 255)',
                overflow: 'hidden',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'red'
            }]
            }>
            <Image style={{
                flex: 1,
                backgroundColor: 'green',
            }}
                source={image}
            />
        </Animated.View>
    )
}