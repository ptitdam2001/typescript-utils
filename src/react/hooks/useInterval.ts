import { useEffect, useRef } from 'react'

/**
 * Use setInterval in functional React component with the same API. 
 * Set your callback function as a first parameter and a delay (in milliseconds) for the second argument. 
 * You can also stop the timer passing null instead the delay.
 * The main difference between the setInterval you know and this useInterval hook is that its arguments are "dynamic".
 * @param callback 
 * @param delay 
 */
export function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback)

  // Remember the latest callback if it changes.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    // Don't schedule if no delay is specified.
    if (delay === null) {
      return
    }

    const id = setInterval(() => savedCallback.current(), delay)

    return () => clearInterval(id)
  }, [delay])
}
