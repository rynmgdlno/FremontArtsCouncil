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
  const {
    eventAboutText,
    eventAddress,
    eventDate,
    eventDescription,
    eventDonateImage,
    eventDonateText,
    eventHeaderPhoto,
    eventLocation,
    eventMapImage,
    eventRsvpText,
    eventRsvpTitle,
    eventTitle,
    eventVolunteerImage,
    eventVolunteerText,
    previousEventGallery,
    previousEventMainMedia
  } = element.fields

  const donateImage = `https:${eventDonateImage.fields.file.url}`
  const headerImage = `https:${eventHeaderPhoto.fields.file.url}`
  const mapImage = `https:${eventMapImage.fields.file.url}`
  const volunteerImage = `https:${eventVolunteerImage.fields.file.url}`
  const mainMedia = `https:${previousEventMainMedia.fields.file.url}`
  const gallery = []

  previousEventGallery.forEach(image => {
    gallery.push(`https:${image.fields.file.url}`)
  });

  console.log([
    eventAboutText,
    eventAddress,
    eventDate,
    eventDescription,
    donateImage,
    eventDonateText,
    headerImage,
    eventLocation,
    mapImage,
    eventRsvpText,
    eventRsvpTitle,
    eventTitle,
    volunteerImage,
    eventVolunteerText,
    gallery,
    mainMedia
  ])

  return [
    eventAboutText,
    eventAddress,
    eventDate,
    eventDescription,
    donateImage,
    eventDonateText,
    headerImage,
    eventLocation,
    mapImage,
    eventRsvpText,
    eventRsvpTitle,
    eventTitle,
    volunteerImage,
    eventVolunteerText,
    gallery,
    mainMedia
  ]
}