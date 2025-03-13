import CircularSlider from '@/components/CircularSlider'
import React from 'react'
import { View } from 'react-native'
import 'react-native-reanimated'

function _layout() {
    return (
        <View style={{ flex: 1 }}>
            <CircularSlider />
        </View>
    )
}

export default _layout