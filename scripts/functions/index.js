import { showRecursionResults } from "./recursion.js"
import { showClosureResults } from "./closure.js"
import { showNfeResult } from "./nfe.js"
import { showIntervalsResults } from "./intervals.js"

export const showFunctionsResults = () => {
  showRecursionResults()
  showClosureResults()
  showNfeResult()
  showIntervalsResults()
}
