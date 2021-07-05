import { useMediaQuery } from 'react-responsive'
import { DeviceEmbedProp } from '../type'

type Props = DeviceEmbedProp

export const DesktopSupport = ({ children }: Props) => {
	const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}
