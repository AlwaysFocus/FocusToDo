import React, {useEffect, memo} from 'react'
import {Pressable, Text, HStack, Box} from 'native-base'
import Animated, {Easing, useSharedValue, useAnimatedStyle, withTiming, withSequence, withDelay, interpolateColor} from 'react-native-reanimated'
import { useState } from 'react'

interface Props {
    strikethrough: boolean,
    textColor: string,
    inactiveTextColor: string,
    onPress?: () => void
    children?: React.ReactNode
}

const AnimatedBox = Animated.createAnimatedComponent(Box)
const animatedHStack = Animated.createAnimatedComponent(HStack)
const animatedText = Animated.createAnimatedComponent(Text)

const AnimatedTaskLabel = memo((props: Props) => {
    const {strikethrough, textColor, inactiveTextColor, onPress, children} = props

    const hstackOffset = useSharedValue(0)
    const hstackAnimatedStyles = useAnimatedStyle(
        () => ({
            transform: [{translateX: hstackOffset.value}]
        }),
        [strikethrough]
    )

    const textColorProgress = useSharedValue(0)
    const textColorAnimatedStyles = useAnimatedStyle(
        () => ({
            color: interpolateColor(
                textColorProgress.value,
                [0, 1],
                [textColor, inactiveTextColor]
            )
        }),
        [strikethrough, inactiveTextColor, textColor]
    )

    const strikethroughWidth = useSharedValue(0)
    const strikethroughAnimatedStyles = useAnimatedStyle(
        () => ({
            width: `${strikethroughWidth.value * 100}%`,
            borderBottomColor: interpolateColor(
                textColorProgress.value,
                [0, 1],
                [textColor, inactiveTextColor]
            )
        })
    )

    useEffect(() => {
        const easing = Easing.out(Easing.quad)

        if(strikethrough) {
            
        }
    })
})