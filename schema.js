const fetch = require("node-fetch");
const util = require('util')
const parseXMl = util.promisify(require('xml2js').parseString)

const x = fetch(
  "https://www.goodreads.com/author/show.xml?id=4432&key=vnKpF77ygAOzItRvSBAGBQ"
).then(response => response.text());
