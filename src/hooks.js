import {useState} from 'react'

export const useAnimatedScale = (scGap, delay) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    const [dir, setDir] = useState(1)
    return {
        start() {
            if (!animated) {
                setAnimated(true)
                var currScale = scale
                const interval = setInterval(() => {
                    currScale += scGap * dir
                    setScale(currScale)
                    if (Math.abs(currScale - scale) > 1) {
                        setScale(1)
                        setDir(dir * -1)
                        setAnimated(false)
                        clearInterval(interval)
                    }
                })
            }
        },
        scale
    }
}
