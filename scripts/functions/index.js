import { showRecursionResults } from "./recursion.js"
import { showClosureResults } from "./closure.js"
import { showNfeResult } from "./nfe.js"
import { showIntervalsResults } from "./intervals.js"
import { showDecoratorsResults } from "./decorators.js"
import { showContextResult } from "./context.js"

export const showFunctionsResults = () => {
  showRecursionResults()
  showClosureResults()
  showNfeResult()
  showIntervalsResults()
  showDecoratorsResults()
  showContextResult()
}
