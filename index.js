import { showFunctionsResults } from "./scripts/functions"
import { showDataTypesResults } from "./scripts/data-types"
import { showInheritanceRes } from "./scripts/inheritance"
import { showClassesRes } from "./scripts/classes"
import { showErrorsRes } from "./scripts/errors"
import { showPromisesRes } from "./scripts/promises"
import { showGeneratorsResults } from "./scripts/generators";


const showResults = () => {
  /*showDataTypesResults()
  showFunctionsResults()
  showInheritanceRes()
  showClassesRes()
  showErrorsRes()
  showPromisesRes()*/
  showGeneratorsResults()
}

showResults()