import { showFunctionsResults } from "./scripts/functions"
import { showDataTypesResults } from "./scripts/data-types"
import { showInheritanceRes } from "./scripts/inheritance"
import { showClassesRes } from "./scripts/classes"
import { showErrorsRes } from "./scripts/errors"

const showResults = () => {
  showDataTypesResults()
  showFunctionsResults()
  showInheritanceRes()
  showClassesRes()
  showErrorsRes()
}

showResults()