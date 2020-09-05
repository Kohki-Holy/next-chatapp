import React, { ReactNode } from 'react'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&amp;display=swap'
      />
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css?family=Noto+Sans+JP&amp;subset=japanese'
      />
    </Head>
    <header></header>
    {children}
    <footer></footer>
  </div>
)

export default Layout
