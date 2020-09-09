import Layout from '../components/Layout'
import ChatBox from '../components/ChatBox'
import Message from '../components/Message'

import { useState, useEffect } from 'react'

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
import { searchChats } from '../src/graphql/queries'
import { onCreateChat } from '../src/graphql/subscriptions'

import { SearchChatsQuery, OnCreateChatSubscription } from '../src/API'

type ChatType = {
  user_name: string
  message_text: string | null
  created_at: string | null
}

/*
type DataProp = {
  data: {
    searchChats?: {
      items: Array<ChatType>
    }
  }
}
*/

type ChatSubscriptionEvent = { value: { data: OnCreateChatSubscription } }

const useChats = () => {
  const [messages, setMessages] = useState<ChatType[]>([])

  // チャットデータ取得 マウント時のみ実行
  useEffect(() => {
    const querySort = Object.assign(
      {},
      {
        sort: {
          // Defaultはパーティションキー順になってしまうので対策
          field: 'createdAt',
          direction: 'asc',
        },
        limit: 30,
      }
    )

    const init = async () => {
      try {
        const res = await API.graphql(graphqlOperation(searchChats, querySort))
        if ('data' in res && res.data) {
          const item = res.data as SearchChatsQuery
          if (item.searchChats) {
            setMessages(item.searchChats.items as ChatType[])
          }
        }
      } catch (e) {
        console.log(e) //エラー処理
      }

      // Subscriptionで更新を動的に取得する
      const client = API.graphql(graphqlOperation(onCreateChat))
      if ('subscribe' in client) {
        /* const subscription = */
        client.subscribe({
          next: ({ value: { data } }: ChatSubscriptionEvent) => {
            if (data.onCreateChat) {
              const item: ChatType = data.onCreateChat
              setMessages((prev) => [...prev, item])
            }
          },
        })
        // return () => subscription.unsubscribe()
      }
    }
    init()
  }, [])

  return messages
}

const ChatApps = () => {
  const [userName, setUserName] = useState('')
  const [bodyText, setBodyText] = useState('')

  const messages = useChats()

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
  const onClick = () => {
    if (bodyText === '') return
    // チャットデータ送信用オブジェクト
    const message = {
      user_name: userName,
      message_text: bodyText,
      created_at: dayjs().format(),
    }
    const inputData = {
      input: message,
    }
    setBodyText(``)
    API.graphql(graphqlOperation(createChatGraphQL, inputData))
  }

  return (
    <Layout title='Amplifyで作るチャットアプリ'>
      <Container>
        <h1>Hello Next.js 👋</h1>
        <Box>
          {messages.map((message: ChatType, index) => (
            <Message
              key={index}
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
        />
      </Container>
    </Layout>
  )
}

export default ChatApps
