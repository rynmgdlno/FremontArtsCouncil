const client = require('contentful').createClient({
  space: 'dcyhjsq3puzc',
  accessToken: '5BzBRNo222hmrBt-eorsI6BRCj2hs25MIIj5dknkTzM'
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

export const getEvent = async (elementID) => {
  const element = await client.getEntry(elementID)
  const fields = element.fields
  console.log(fields)
}