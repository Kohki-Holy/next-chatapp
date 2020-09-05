import { Box } from '@material-ui/core'

import dayjs from 'dayjs'
import 'dayjs/locale/ja'
dayjs.locale('ja')
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

type Props = {
  text: string
  userName: string
  date: string
}

const Message: React.FC<Props> = ({ text, userName, date }) => {
  return <Box>{`${userName}: ${text}: ${dayjs(date).clone().fromNow()}`}</Box>
}

export default Message
