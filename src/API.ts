/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateChatInput = {
  id?: string | null,
  user_name: string,
  message_text?: string | null,
  created_at?: string | null,
};

export type ModelChatConditionInput = {
  user_name?: ModelStringInput | null,
  message_text?: ModelStringInput | null,
  created_at?: ModelStringInput | null,
  and?: Array< ModelChatConditionInput | null > | null,
  or?: Array< ModelChatConditionInput | null > | null,
  not?: ModelChatConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateChatInput = {
  id: string,
  user_name?: string | null,
  message_text?: string | null,
  created_at?: string | null,
};

export type DeleteChatInput = {
  id?: string | null,
};

export type ModelChatFilterInput = {
  id?: ModelIDInput | null,
  user_name?: ModelStringInput | null,
  message_text?: ModelStringInput | null,
  created_at?: ModelStringInput | null,
  and?: Array< ModelChatFilterInput | null > | null,
  or?: Array< ModelChatFilterInput | null > | null,
  not?: ModelChatFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type SearchableChatFilterInput = {
  id?: SearchableIDFilterInput | null,
  user_name?: SearchableStringFilterInput | null,
  message_text?: SearchableStringFilterInput | null,
  created_at?: SearchableStringFilterInput | null,
  and?: Array< SearchableChatFilterInput | null > | null,
  or?: Array< SearchableChatFilterInput | null > | null,
  not?: SearchableChatFilterInput | null,
};

export type SearchableIDFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
};

export type SearchableStringFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
};

export type SearchableChatSortInput = {
  field?: SearchableChatSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableChatSortableFields {
  id = "id",
  user_name = "user_name",
  message_text = "message_text",
  created_at = "created_at",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type CreateChatMutationVariables = {
  input: CreateChatInput,
  condition?: ModelChatConditionInput | null,
};

export type CreateChatMutation = {
  createChat:  {
    __typename: "Chat",
    id: string,
    user_name: string,
    message_text: string | null,
    created_at: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateChatMutationVariables = {
  input: UpdateChatInput,
  condition?: ModelChatConditionInput | null,
};

export type UpdateChatMutation = {
  updateChat:  {
    __typename: "Chat",
    id: string,
    user_name: string,
    message_text: string | null,
    created_at: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteChatMutationVariables = {
  input: DeleteChatInput,
  condition?: ModelChatConditionInput | null,
};

export type DeleteChatMutation = {
  deleteChat:  {
    __typename: "Chat",
    id: string,
    user_name: string,
    message_text: string | null,
    created_at: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetChatQueryVariables = {
  id: string,
};

export type GetChatQuery = {
  getChat:  {
    __typename: "Chat",
    id: string,
    user_name: string,
    message_text: string | null,
    created_at: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListChatsQueryVariables = {
  filter?: ModelChatFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatsQuery = {
  listChats:  {
    __typename: "ModelChatConnection",
    items:  Array< {
      __typename: "Chat",
      id: string,
      user_name: string,
      message_text: string | null,
      created_at: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type SearchChatsQueryVariables = {
  filter?: SearchableChatFilterInput | null,
  sort?: SearchableChatSortInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SearchChatsQuery = {
  searchChats:  {
    __typename: "SearchableChatConnection",
    items:  Array< {
      __typename: "Chat",
      id: string,
      user_name: string,
      message_text: string | null,
      created_at: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    total: number | null,
  } | null,
};

export type OnCreateChatSubscription = {
  onCreateChat:  {
    __typename: "Chat",
    id: string,
    user_name: string,
    message_text: string | null,
    created_at: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateChatSubscription = {
  onUpdateChat:  {
    __typename: "Chat",
    id: string,
    user_name: string,
    message_text: string | null,
    created_at: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteChatSubscription = {
  onDeleteChat:  {
    __typename: "Chat",
    id: string,
    user_name: string,
    message_text: string | null,
    created_at: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
