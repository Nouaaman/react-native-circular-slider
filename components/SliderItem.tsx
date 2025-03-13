import { View, Image } from 'react-native'
import React from 'react'

export default function SliderItem({ image, index, itemSize }: { image: any, index: number, itemSize: number }) {
    return (
        <View>
            <Image source={image} style={{
                width: itemSize,
                height: itemSize,
                borderRadius: itemSize / 2,
            }} />
        </View>
    )
}