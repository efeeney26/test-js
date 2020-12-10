import { showFunctionsResults } from "./scripts/functions"
import { showDataTypesResults } from "./scripts/data-types"
import { showInheritanceRes } from "./scripts/inheritance"

const showResults = () => {
  showDataTypesResults()
  showFunctionsResults()
  showInheritanceRes()
}

showResults()