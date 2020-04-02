import React from 'react'
import {divideScale} from './utils'

const decreasingBoxStyle = (scale, w, h, i, n) => {
    const sizeFactor = 0.75 / Math.pow(2, i)
    const gap = w / n
    const width = `${gap * scale}px`
    const height = `${h * sizeFactor}px`
    const top = `${h / 2 - parseFloat(height) / 2}px`
    const left = `${i * gap}px`
    const position = 'absolute'
    const background = '#673AB7'
    return {position, top, left, width, height, background}
}
const DecreasingBox = ({scale, i, n, w, h}) => {
    const sc = divideScale(scale, i, n)
    return <div style = {decreasingBoxStyle(sc, w, h, i, n)}></div>
}

export default DecreasingBox
