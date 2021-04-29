const Reader = require("./Classes/Reader");
const Writer = require('./Classes/Writer');
const Processor = require("./Classes/Processor");
const Table = require("./Classes/Table");
const HtmlParser = require("./Classes/HtmlParser");
const PDFWriter = require("./Classes/PDFWriter");

const leitor = new Reader();
const writer = new Writer();
(async () => {
  let data = await leitor.Read("./file.csv");
  let dataProcessed = Processor.Process(data);

  let table = new Table(dataProcessed);

  var html = await HtmlParser.Parse(table)

  writer.Write(Date.now()+".html", html);
  PDFWriter.WritePDF(Date.now()+".PDF", html);

})();
