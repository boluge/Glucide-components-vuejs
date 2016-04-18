export default class ajaxJson {
  constructor (url) {
    this.url = url
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest()     //  Firefox, Safari, ...
    }
    else  if (window.ActiveXObject) {
      xhr = new ActiveXObject("Microsoft.XMLHTTP")
    }
    request.open('GET', this.url, true)
    request.send()
    request.onreadystatechange = function () {
      console.log(this.readyState)
      if (this.readyState === 4) {
        return this.responseText
        // console.log(this.responseText)
      }
    }
  }
}
