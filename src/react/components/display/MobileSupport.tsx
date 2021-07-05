import { useMediaQuery } from 'react-responsive'
import { DeviceEmbedProp } from '../type'

type Props = DeviceEmbedProp

export const MobileSupport = ({ children }: Props) => {
	const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}
