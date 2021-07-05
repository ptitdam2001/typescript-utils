import { useMediaQuery } from 'react-responsive'
import { DeviceEmbedProp } from '../type'

type Props = DeviceEmbedProp

export const TabletSupport = ({ children }: Props) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}
