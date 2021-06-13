require('dotenv').config({
  path: '../../.env'
})
const accessToken = process.env.REACT_APP_ACCESS_TOKEN
const space = process.env.REACT_APP_SPACE

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken
})

export const getHeader = async (headerID) => {
  const stuff = await client.getEntry(headerID)
  const fields = stuff.fields
  const pageTitle = fields.pageTitle
  const pageIntroText = fields.pageIntroText
  const pageHeaderImage = `https:${fields.pageHeaderImage.fields.file.url}`
  const imageAltText = fields.imageAltText
  return [pageTitle, pageIntroText, pageHeaderImage, imageAltText]
}

export const getElement = async (elementID) => {
  const element = await client.getEntry(elementID)
  return element
}

export const getEvents = async () => {
  const eventsObj = await client.getEntries({ content_type: 'event', order: 'fields.sortDate'})
  const events = eventsObj.items
  return events
}

export const getNews = async () => {
  const newsObj = await client.getEntries({ content_type: 'newsEntry', order: 'sys.createdAt'})
  const news = newsObj.items
  return news
}

export const getPress = async () => {
  const pressObj = await client.getEntries({ content_type: 'pressEntry', order: 'sys.createdAt'})
  const press = pressObj.items
  return press
}

export const getFaq = async () => {
  const faqObj = await client.getEntries({ content_type: 'faqPage'})
  const events = faqObj.items
  return events
}
