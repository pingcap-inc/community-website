import {useCallback, useEffect, useMemo, useRef, useState} from "react";

export const useTimer = (
  initialRemainSecond = 0,
  cycleSecond = 60,
  intervalMillisecond = 1000,
  step = -1,
) => {
  const [remainSecond, setRemainSecond] = useState(initialRemainSecond)
  const timer = useRef<ReturnType<Window['setInterval']>>()

  const setTimer = useCallback(() => {
    return window.setInterval(() => {
      setRemainSecond((draft) => {
        if (draft > 0) {
          return draft + step
        } else {
          window.clearInterval(timer.current)
          return 0
        }
      })
    }, intervalMillisecond)
  }, [intervalMillisecond, step])

  useEffect(() => {
    timer.current = setTimer()
    return () => {
      window.clearInterval(timer.current)
    }
  }, [setTimer])

  const reset = useCallback(() => {
    setRemainSecond(cycleSecond)
    timer.current = setTimer()
  }, [cycleSecond, setTimer])
  
  const hasRemain = useMemo(() => remainSecond > 0, [remainSecond])

  return {remainSecond, reset, hasRemain}
}
