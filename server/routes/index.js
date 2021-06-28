const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const fs = require('fs')
const path = require('path')
const filePath = '../../store/initial_data.json'
const initialData = require(filePath)

app.use(bodyParser.json())

app.get('/posts', function(req, res) {
  return res.json(initialData.posts)
})

module.exports = {
  path: '/api',
  handler: app
}