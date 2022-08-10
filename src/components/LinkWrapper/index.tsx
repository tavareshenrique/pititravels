import Link from 'next/link'

import { ILinkWrapperProps } from './@interfaces'
import * as S from './styles'

export default function LinkWrapper({ href, children }: ILinkWrapperProps) {
  return (
    <S.Wrapper>
      <Link href={href}>{children}</Link>
    </S.Wrapper>
  )
}
