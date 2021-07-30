/* eslint-disable */
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** An item */
export type Item = {
  __typename?: 'Item';
  id?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Int']>;
  status?: Maybe<Status>;
  title?: Maybe<Scalars['String']>;
};

export type ItemInput = {
  id: Scalars['Int'];
  notes?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Int']>;
  status?: Maybe<Status>;
};

export type RootMutationType = {
  __typename?: 'RootMutationType';
  updateItem?: Maybe<Item>;
};


export type RootMutationTypeUpdateItemArgs = {
  item: ItemInput;
};

export type RootQueryType = {
  __typename?: 'RootQueryType';
  items?: Maybe<Array<Maybe<Item>>>;
};

/** Media item statuses */
export enum Status {
  /** Finished */
  Finished = 'FINISHED',
  /** Not Started */
  Pending = 'PENDING',
  /** Started */
  Started = 'STARTED'
}
