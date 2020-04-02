import {useDimension, useAnimatedScale} from './hooks'
import React, {useEffect} from 'react'
import DecreasingBox from './DecreasingBox'

const Button = ({w, h, scale, onClick}) => {
    const btnMessage = scale == 0 ? 'start' : (scale == 1) ? "rewind" : "updating..."
    const btnStyle = {position : 'absolute', left : `${w * 0.35}px`, top : `0px`}
    return <button onClick = {onClick} style = {btnStyle}>{btnMessage}</button>
}


const DecreasingBoxes = ({n}) => {
    const decreasingBoxes = []
    const {scale, start} = useAnimatedScale(0.02, 20, n)
    console.log(scale)
    const {w, h, resize, disableResizing} = useDimension()
    useEffect(() => {
        resize()
        return disableResizing
    })
    for (let i = 0; i < n; i++) {
        decreasingBoxes.push(<DecreasingBox w = {w} h = {h} scale = {scale} i = {i} n = {n}/>)
    }
    console.log(decreasingBoxes)
    return (<div>
              <Button w = {w} h = {h} scale = {scale} onClick = {start}/>
              {decreasingBoxes}
          </div>)
}

export default DecreasingBoxes
