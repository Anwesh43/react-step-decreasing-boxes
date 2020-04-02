import {useDimension, useAnimatedScale} from './hooks'
import React, {useEffect} from 'react'

const DecreasingBoxes = ({n}) => {
    const decreasingBoxes = []
    const {scale, start} = useAnimatedScale(0.02, 20)
    const {w, h, resize, disableResizing} = useDimension()
    useEffect(() => {
        resize()
        return disableResizing
    })
    for (let i = 0; i < n; i++) {
        decreasingBoxes.push(<DecreasingBox w = {w} h = {h} scale = {scale} i = {i} n = {n}/>)
    }
    return (<React.Fragment>
              {decreasingBoxes}
          </React.Fragment>)
}

export default DecreasingBoxes
