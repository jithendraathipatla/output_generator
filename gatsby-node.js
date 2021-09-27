var path = require('path');
var userName = process.env['USERPROFILE'];
var loginId = userName;
console.log(loginId);

exports.onCreatePage = ({ page, actions }) => {
    const { createPage, deletePage } = actions
    deletePage(page)
    // You can access the variable "house" in your page queries now
    createPage({
      ...page,
      context: {
        ...page.context,
        loginName: loginId,
      },
    })
}