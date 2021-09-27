// Create a new service object
const process = require('process');
  // Printing process.env property value
console.log(process.env.USERNAME);

exports.onCreatePage = ({ page, actions }) => {
    const { createPage, deletePage } = actions
    deletePage(page)
    // You can access the variable "house" in your page queries now
    createPage({
      ...page,
      context: {
        ...page.context,
        loginName: process.env.USERNAME,
      },
    })
}