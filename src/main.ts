import { ParseFile } from "./parser"
import { WriteJSONFile } from "./file"


async function Main() {
  try {
    const response = await ParseFile("./files/src.pdf")

    WriteJSONFile("./files/output.json", response)
    
  } catch (err) {
    console.error(err)
  }
}

Main().then(()=>{
  console.log("Done")
})
