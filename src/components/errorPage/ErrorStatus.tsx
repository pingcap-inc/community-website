import * as React from "react"

import * as Styled from './ErrorStatus.styled'
import Svg403 from './403.svg';
import Svg404 from './404.svg';
import Svg500 from './500.svg';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  statusCode?: number
  errorMsg?: React.ReactNode
}

const icons = {
  403: Svg403,
  404: Svg404,
  500: Svg500,
};

const errorMessages = {
  403: '抱歉，您没有权限访问该页面',
  404: '您访问的页面不存在',
  500: '服务器异常，请稍后重试',
};

const ErrorStatus: React.FC<IProps> = (props) => {
  const {statusCode, errorMsg, ...rest} = props

  const statusCodeOutput = props.statusCode ?? 500
  const errorMsgOutput = props.errorMsg ?? errorMessages[statusCodeOutput]
  const Icon = icons[statusCodeOutput]

  return (
    <Styled.Container {...rest}>
      <Styled.Main>
        <Styled.IconWrapper>
          <Icon />
        </Styled.IconWrapper>
        <Styled.Message>{errorMsgOutput}</Styled.Message>
      </Styled.Main>
    </Styled.Container>
  )
}

export default ErrorStatus
