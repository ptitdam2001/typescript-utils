import { useMediaQuery } from 'react-responsive'
import { DeviceEmbedProp } from '../type'

type Props = DeviceEmbedProp

export const DefaultSupport = ({ children }: Props) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}