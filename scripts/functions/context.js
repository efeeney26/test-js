'use strict'

function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user1 = {
  name: 'Вася',

  loginOk() {
    console.log(`${this.name} logged in`);
  },

  loginFail() {
    console.log(`${this.name} failed to log in`);
  },

}

let user2 = {
  name: 'John',

  login(result) {
    console.log( this.name + (result ? ' logged in' : ' failed to log in') );
  }
};

export const showContextResult = () => {
  //askPassword(user1.loginOk.bind(user1), user1.loginFail.bind(user1))
  //askPassword(user2.login.bind(user2, true), user2.login.bind(user2, false))
}