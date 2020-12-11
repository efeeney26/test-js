'use strict'

class FormatError extends SyntaxError {
  constructor(message) {
    super(message)
    this.name = 'FormatError'
  }
}

export const showErrorsRes = () => {
  try {
    throw new FormatError('bad json')
  } catch (e) {
    console.error(e.message)
    console.error(e.name)
  }

}