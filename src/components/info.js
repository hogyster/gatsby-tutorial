import React from 'react'
import {StaticQuery,graphql} from 'gatsby'


const getData = graphql` {
  info: site{
      siteMetadata{
          title
          description
          author
      }
  }
}`

export default function Info() {
  return (
    <StaticQuery query={getData} render={data => {
      const siteData = data.info.siteMetadata;
      const {title, description, author } = siteData;
    

         return(<div>
        <h2>
          title:{title}
        </h2>
        <p>
          description:{description}
        </p>
        <h2>
          author:{author}
        </h2>
       
      </div>)

    }}/>
  )
}
