const path = require('path');

// node module path
exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions
    
    return graphql(`
        {
            allContentfulProduct {
              edges {
                node {
                  id
                  title
                }
              }
            }
          }
          
    `)
    .then(result => {
        result.data.allContentfulProduct.edges.forEach(({node})=>{
            createPage({path:`products/${node.title}`, component: path.resolve(`./src/templates/product-template.js`),
            context:{
                id:node.id,
                // context pass downthe contents of id
            },
        })
        })
    })
    .catch(err =>console.log(err))
}