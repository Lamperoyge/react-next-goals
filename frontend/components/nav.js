import React from 'react'
import Link from 'next/link'
import { useQuery } from '@apollo/react-hooks'
import { NetworkStatus } from 'apollo-client'
import gql from 'graphql-tag'



export const ALL_POSTS_QUERY = gql`
  query allPosts {
    posts(sort: "created_at:desc") {
      id
      title
      description
      created_at
    }
  }
`;



export const allPostsQueryVars = {
  skip: 0,
  first: 10
}


export default function PostList() {
  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    ALL_POSTS_QUERY,
    {
      // variables: allPostsQueryVars,
      // Setting this value to true will make the component rerender when
      // the "networkStatus" changes, so we are able to know if it is fetching
      // more data
      notifyOnNetworkStatusChange: true
    }
  )

  // const { allPosts, _allPostsMeta } = data;

  return (
    <div>
      {console.log(data)}
    </div>
  )

}