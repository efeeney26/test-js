import { showRecursionResults } from "./recursion.js"
import { showClosureResults } from "./closure.js"
import { showNfeResult } from "./nfe.js"

export const showFunctionsResults = () => {
  showRecursionResults()
  showClosureResults()
  showNfeResult()
}
