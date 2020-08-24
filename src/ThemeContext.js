import React from 'react'

var req = new XMLHttpRequest()
req.open(
  'GET',
  'https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
  false
)
req.send()

let data = {}
data = JSON.parse(req.responseText)

const ThemeContext = React.createContext(data)

export default ThemeContext
