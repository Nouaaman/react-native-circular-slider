import { View, Image } from 'react-native'
import React from 'react'
import { SharedValue } from 'react-native-reanimated'

interface SliderItemProps {
    image: any,
    index: number,
    itemSize: number,
    scrollX: SharedValue<number>
}

export default function SliderItem({ image, index, itemSize, scrollX }: SliderItemProps) {
    return (
        <View>
            <Image source={image} style={{
                width: itemSize,
                height: itemSize,
                borderRadius: itemSize / 2,
            }}
            />
        </View>
    )
}