
import PDFParser, { Page } from "pdf2json"
type ParseResponse = {
  filepath: string,
  meta: any,
  pages: Array<Page>
}
export async function ParseFile(filepath:string):Promise<ParseResponse> {
  return new Promise((resolve,reject)=>{
    const pdfParser = new PDFParser(),
          pages: Array<Page> = []
    let fileMetadata = {}

    pdfParser.on("readable", (meta) => {
      fileMetadata = meta
    })
  
    pdfParser.on("data", (pdfData: Page | null) => {
      if(pdfData) {
        pages.push(pdfData)
      } else {
        resolve({
          filepath,
          meta: fileMetadata,
          pages,
        })
      }
    })

    pdfParser.on("pdfParser_dataError", (err)=>{
      console.error(err)
    })

    pdfParser
      .loadPDF(filepath)
      .catch((err)=>{
        reject(err)
      })
  })
}