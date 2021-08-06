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

/** A category */
export type Category = {
  __typename?: 'Category';
  id: Scalars['Int'];
  items: Array<Item>;
  title: Scalars['String'];
};

/** An item */
export type Item = {
  __typename?: 'Item';
  categoryId: Scalars['Int'];
  id: Scalars['Int'];
  notes?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Int']>;
  status?: Maybe<Status>;
  title: Scalars['String'];
};

export type ItemInput = {
  categoryId: Scalars['Int'];
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
  categories: Array<Category>;
  categoryItems?: Maybe<Array<Maybe<Category>>>;
};


export type RootQueryTypeCategoryItemsArgs = {
  categoryId: Scalars['Int'];
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
