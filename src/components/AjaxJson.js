export default class ajaxJson {
  constructor (url) {
    this.url = url
    // var request
    var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
    // if (window.XMLHttpRequest) {
    var request = new XMLHttpRequest()
    // } else {
    //  request = new ActiveXObject('Microsoft.XMLHTTP')
    // }
    request.setRequestHeader('Host', 'xxx')
    request.open('GET', this.url, true)
    request.send()
    request.onreadystatechange = function () {
      console.log(this.readyState)
      if (this.readyState === 4) {
        return this.responseText
      }
    }
  }
}
// https://vuejs.org/examples/commits.html
