import { TextField, IconButton } from '@material-ui/core'

import SendIcon from '@material-ui/icons/Send'
import styled from 'styled-components'

type Props = {
  userName: String
  bodyText: String
  onChange: Function
  onClick: Function
}

const Style = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-end;
  & > div {
    flex-grow: 1;
    &:first-child {
      flex-grow: 0;
      flex-shrink: 1;
      margin-right: 1em;
    }
  }
  & [readonly] {
    background-color: #eee;
  }
`
const ChatBox: React.FC<Props> = ({
  userName,
  bodyText,
  onChange,
  onClick,
}) => {
  return (
    <Style>
      <TextField
        variant='outlined'
        name='userName'
        label='名前'
        size='small'
        onChange={(e) => onChange(e)}
        value={userName}
      ></TextField>
      <TextField
        multiline
        variant='outlined'
        name='bodyText'
        label='本文'
        size='small'
        onChange={(e) => onChange(e)}
        rowsMax={4}
        value={bodyText}
      ></TextField>
      <IconButton
        onClick={() => onClick()}
        edge={'end'}
        style={{ padding: '8px' }}
      >
        <SendIcon></SendIcon>
      </IconButton>
    </Style>
  )
}

export default ChatBox
