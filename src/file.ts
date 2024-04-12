import { writeFileSync } from "fs"

export function WriteJSONFile(filepath:string, data:object) {

  const text = JSON.stringify(data)

  writeFileSync(filepath, text, "utf-8")
}