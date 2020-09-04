# 概要

Next.JS + TypeScript + Amplify + AppSyc で作るチャットアプリ

# 制作経緯

1. Next.JS でなんか作りたかった
2. Amplify でなんか作りたかった
3. AppSync（GraphQL）でなんか作りたかった
4. チャットアプリを作ろう

# 構成

- フロント：Next.JS
- バックエンド：Amplify
  - API：AppSync（GraphQL）
  - ホスティング：S3
  - ユーザー認証：Cognito
  - IaC: CloudFormation

# 感想

Amplify でサーバーレス実装したのでフロント開発のみに集中できてとても良い感じでした
