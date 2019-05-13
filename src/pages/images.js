import React from 'react'
import Layout from "../components/layout";
import {graphql} from 'gatsby'



export default function images({data}) {
    const images = data.allFile.edges
    return (
      <Layout>
      <h1>All the images</h1>
       {images.map(({node}, index) => {
           return <h3 key={index}>{node.relativePath}</h3>
       })}
        </Layout>
    )
  }

  export const query = graphql`
  {
      allFile {
          edges {
              node {
                  relativePath
              }
          }
      }
  }
  `
