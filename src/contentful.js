const client = require('contentful').createClient({
  space: 'dcyhjsq3puzc',
  accessToken: '5BzBRNo222hmrBt-eorsI6BRCj2hs25MIIj5dknkTzM'
})

// TODO: To Do: Delete this function once all pages are connected //

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
  const eventsObj = await client.getEntries({ 'content_type': 'event'})
  const events = eventsObj.items
  return events
}