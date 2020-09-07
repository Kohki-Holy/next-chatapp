import { Box } from '@material-ui/core'

import dayjs from 'dayjs'
import 'dayjs/locale/ja'
dayjs.locale('ja')
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

type Props = {
  text: string | null
  userName: string
  date: string | null
}

const Message: React.FC<Props> = ({ text, userName, date }) => {
  if (date === null) date = dayjs().format()
  return <Box>{`${userName}: ${text}: ${dayjs(date).clone().fromNow()}`}</Box>
}

export default Message
