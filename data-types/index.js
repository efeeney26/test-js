'use strict'

import { showNumbersTasks } from "./numbers.js"
import { showStringTasks } from "./strings.js"
import { showArraysTasks } from "./arrays.js"
import { showArraysMethods } from "./arrays-methods.js"
import { showMapAndSetResults } from "./map-and-set.js"
import { showObjectIterationResult } from "./object-iteration.js"
import { showDestructingResults } from "./destructing.js"
import { showDateResult } from "./date.js"

const showResults = () => {
  showNumbersTasks()
  showStringTasks()
  showArraysTasks()
  showArraysMethods()
  showMapAndSetResults()
  showObjectIterationResult()
  showDestructingResults()
  showDateResult()
}

showResults()