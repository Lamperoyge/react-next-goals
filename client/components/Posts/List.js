import gql from "graphql-tag";
import Link from "next/link";
import { graphql } from "react-apollo";
import React from 'react';


const Posts = (
    { data: { loading, error, posts }, search },
    req
) => {
    if(error) return 'Error loading posts';
    if(posts && posts.length) {
        const searchQuery = posts.filter(query => {
            query.name.toLowerCase().includes(search)
        });

        if(searchQuery.length) {
            return (
                <div>
                    {
                        searchQuery.map((el, idx) => {
                          return (
                              <div key={idx}>
                                  <div>
                                      {el.name}
                                  </div>
                                  <div>
                                      {el.id}
                                  </div>
                                  <div>
                                      {el.description}
                                  </div>
                              </div>
                          )
                        })
                    }
                </div>
            )
        }
    }
};


const query = gql `{
    posts {
        id
        name
        description
        image {
            url
        }
    }
}`;

Posts.getInitialProps = async () => {
    const res = await fetch('https://api.github.com/repos/zeit/next.js');
    const json = await res.json();
    return { stars: json.stargazers_count }
};

export default graphql(query, {
    props: ({ data }) => ({
        data
    })
})(Posts);
