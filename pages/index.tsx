import Layout from '../components/Layout'
import ChatBox from '../components/ChatBox'
import Message from '../components/Message'

import { useState, useRef, useEffect } from 'react'

import dayjs from 'dayjs'
import 'dayjs/locale/ja'
dayjs().locale('ja')

// Material UI コンポーネント
import { Container, Box } from '@material-ui/core'

// Amplify設定のインポート
import Amplify from '@aws-amplify/core'
import API, { graphqlOperation } from '@aws-amplify/api'
import awsmobile from '../src/aws-exports'
Amplify.configure(awsmobile)
API.configure(awsmobile)

// GraphQL用関数
import {
  createChat as createChatGraphQL,
  // deleteChat as deleteChatGraphQL,
} from '../src/graphql/mutations'
import { listChats } from '../src/graphql/queries'

import { ListChatsQuery } from '../src/API'

type ChatType = {
  id: string
  user_name: string
  message_text: string | null
  created_at: string | null
}

/*
type DataProp = {
  data: {
    listChats?: {
      items: Array<ChatType>
    }
  }
}
*/
const ChatApps = () => {
  const [userName, setUserName] = useState('')
  const [bodyText, setBodyText] = useState('')

  const [messages, setMessages] = useState<ChatType[]>([])

  // チャットデータ取得
  useEffect(() => {
    /* const querySort = Object.assign(
      {},
      {
        sort: {
          field: 'created_at', //作成日指定
          direction: 'asc', //早い順
        },
        limit: 100, //デフォルトだと10個までしかとれない
      }
    ) */
    const init = async () => {
      try {
        const res = await API.graphql(graphqlOperation(listChats))
        if ('data' in res) {
          const data = res.data as ListChatsQuery
          if (data.listChats) {
            const items = data.listChats.items as ChatType[]
            setMessages(items)
          }
        }
      } catch (e) {
        console.log(e) //エラー処理
      }
    }
    init()
  }, [])

  // チャットデータ送信
  const submitChats = async (
    // messages: Array<ChatType>,
    userName: string,
    bodyText: string
  ) => {
    // チャットデータ送信用オブジェクト
    const inputData = {
      input: {
        user_name: userName,
        message_text: bodyText,
        created_at: dayjs().format(),
      },
    }

    // チャットデータ送信
    try {
      await API.graphql(graphqlOperation(createChatGraphQL, inputData))
    } catch (e) {
      console.log(e)
    }
  }

  // チャットデータ削除（削除ボタン未実装）
  /*
  const deleteChat = async (id: String) => {
    const deleteData = {
      input: {
        id,
      },
    }
    try {
      await API.graphql(graphqlOperation(deleteChatGraphQL, deleteData))
    } catch (e) {
      console.log(e)
    }
  }
  */

  // 入力時処理（ステート変更）
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

  // 送信時処理
  const inputEl = useRef<HTMLInputElement>(null)
  const onClick = () => {
    if (inputEl && inputEl.current) {
      inputEl.current.readOnly = true
    }
    submitChats(userName, bodyText)
    setBodyText(``)
  }

  return (
    <Layout title='Amplifyで作るチャットアプリ'>
      <Container>
        <h1>Hello Next.js 👋</h1>
        <Box>
          {/* 表示欄コンポーネント */}
          {messages.map((message: ChatType) => (
            <Message
              key={message.id}
              text={message.message_text}
              userName={message.user_name}
              date={message.created_at}
            />
          ))}
        </Box>
        {/* 入力欄コンポーネント */}
        <ChatBox
          userName={userName}
          bodyText={bodyText}
          onChange={onChange}
          onClick={onClick}
          inputEl={inputEl}
        />
      </Container>
    </Layout>
  )
}

export default ChatApps
