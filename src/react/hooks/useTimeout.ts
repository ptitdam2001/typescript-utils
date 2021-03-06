import { useEffect, useRef } from 'react'

/**
 * Very similar to the useInterval hook, this React hook implements the native setTimeout function keeping the same interface.
 * You can enable the timeout by setting delay as a number or disabling it using null.
 * When the time finish, the callback function called.
 * @param callback 
 * @param delay 
 */
export function useTimeout(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback)

  // Remember the latest callback if it changes.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the timeout.
  useEffect(() => {
    // Don't schedule if no delay is specified.
    if (delay === null) {
      return
    }

    const id = setTimeout(() => savedCallback.current(), delay)

    return () => clearTimeout(id)
  }, [delay])
}
