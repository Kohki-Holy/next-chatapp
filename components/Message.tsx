import { Box } from '@material-ui/core'

import dayjs from 'dayjs'
import 'dayjs/locale/ja'
dayjs.locale('ja')
import relativeTime from 'dayjs/plugin/relativeTime'
import styled from 'styled-components'
dayjs.extend(relativeTime)

type Props = {
  text: string | null
  userName: string
  date: string | null
}

const MessageBox = styled(Box)`
  padding: 0.5em;
`

const MessageHeaderBox = styled.h2`
  margin: 0;
`

const UserNameBox = styled.span`
  font-size: 1rem;
`

const TimeStampBox = styled.span`
  font-size: 0.8rem;
  padding-left: 1em;
  font-weight: normal;
`

const Message: React.FC<Props> = ({ text, userName, date }) => {
  if (date === null) date = dayjs().format()
  if (userName === '') userName = '名無しさん'
  return (
    <MessageBox>
      <MessageHeaderBox>
        <UserNameBox>{userName}</UserNameBox>
        <TimeStampBox>{dayjs(date).clone().fromNow()}</TimeStampBox>
      </MessageHeaderBox>
      <div>{text}</div>
    </MessageBox>
  )
}

export default Message
