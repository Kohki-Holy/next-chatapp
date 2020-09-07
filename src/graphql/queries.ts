/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getChat = /* GraphQL */ `
  query GetChat($id: ID!) {
    getChat(id: $id) {
      id
      user_name
      message_text
      created_at
      createdAt
      updatedAt
    }
  }
`;
export const listChats = /* GraphQL */ `
  query ListChats(
    $filter: ModelChatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user_name
        message_text
        created_at
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchChats = /* GraphQL */ `
  query SearchChats(
    $filter: SearchableChatFilterInput
    $sort: SearchableChatSortInput
    $limit: Int
    $nextToken: String
  ) {
    searchChats(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        user_name
        message_text
        created_at
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
