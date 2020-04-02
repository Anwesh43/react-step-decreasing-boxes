import {useState} from 'react'

export const useAnimatedScale = (scGap, delay, n) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    const [dir, setDir] = useState(1)
    return {
        start() {
            if (!animated) {
                setAnimated(true)
                var currScale = scale
                const interval = setInterval(() => {
                    currScale += (scGap / n) * dir
                    setScale(currScale)
                    if (Math.abs(currScale - scale) > 1) {
                        setScale(scale + dir)
                        setDir(dir * -1)
                        setAnimated(false)
                        clearInterval(interval)
                    }
                }, delay)
            }
        },
        scale
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    return {
        w,
        h,
        resize() {
            window.onresize = () => {
                setW(window.innerWidth)
                setH(window.innerHeight)
            }
        },
        disableResizing() {
            window.onresize = () => {

            }
        }
    }
}
