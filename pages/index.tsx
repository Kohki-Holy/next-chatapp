import Layout from '../components/Layout'
import ChatBox from '../components/ChatBox'
import Message from '../components/Message'

import { useState, useRef } from 'react'

import dayjs from 'dayjs'
import 'dayjs/locale/ja'
dayjs().locale('ja')

import { Container, Box } from '@material-ui/core'

const IndexPage = () => {
  const [userName, setUserName] = useState('')
  const [bodyText, setBodyText] = useState('')

  const date = dayjs().format()

  const [messages, setMessages] = useState([
    {
      userName: 'Bot',
      text: 'チャットアプリへようこそ！',
      date,
    },
    {
      userName: 'Bot',
      text: '名前を入力して送信すると名前が確定されます。',
      date,
    },
  ])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target
    if (target) {
      if (target.name === 'userName') {
        setUserName(target.value)
      } else if (target.name === 'bodyText') {
        setBodyText(target.value)
      }
    }
  }

  const inputEl = useRef<HTMLInputElement>(null)
  const onClick = () => {
    if (inputEl && inputEl.current) {
      inputEl.current.readOnly = true
    }

    setMessages([
      ...messages,
      {
        userName,
        text: bodyText,
        date: dayjs().format(),
      },
    ])

    setBodyText(``)
  }

  return (
    <Layout title='Amplifyで作るチャットアプリ'>
      <Container>
        <h1>Hello Next.js 👋</h1>
        <Box>
          {messages.map((message, index) => (
            <Message
              key={`${message.userName} + ${index}`}
              text={message.text}
              userName={message.userName}
              date={message.date}
            />
          ))}
        </Box>
        {/* 入力欄コンポーネント */}
        <ChatBox onChange={onChange} onClick={onClick} inputEl={inputEl} />
      </Container>
    </Layout>
  )
}

export default IndexPage
