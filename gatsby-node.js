const { graphql } = require('gatsby');
const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Create Blog Pages
  const blogTemplate = path.resolve('./src/templates/blog.template.tsx')
  const res = await graphql(`
    query {
      allContentfulDataBlogPosts {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  res.data.allContentfulDataBlogPosts.edges.forEach((edge) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  })

  // Create Wine Pages
  const wineTemplate = path.resolve('./src/templates/wine.template.tsx')
  const wineres = await graphql(`
    query {
      allContentfulDataWines {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  wineres.data.allContentfulDataWines.edges.forEach((edge) => {
    createPage({
      component: wineTemplate,
      path: `/wines/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  })

  // Create Generic Pages
  const pageTemplate = path.resolve('./src/templates/page.template.tsx')
  const pageRes = await graphql(`
    query {
      allContentfulPage {
        edges {
          node {
            relativePath
          }
        }
      }
    }
  `)
  pageRes.data.allContentfulPage.edges.forEach((edge) => {
    createPage({
      component: pageTemplate,
      path: `/${edge.node.relativePath === '/' ? '' : edge.node.relativePath}`,
      context: {
        relativePath: edge.node.relativePath
      }
    })
  })
}