class Account {
  constructor(username) {
    this.username = username;
    // Have the account balance start at $0 since that makes more sense.
    this.balance = 0;
    this.history = [];
  }

  set balances(a) {

  }


  get balances() {
    // let balance=0
    // for (let i=0; i<acc1.history.length; i++){

    //   this.balance+=acc1.history[i].amount
    // }
    return this.balance
  }

  addTransaction(transaction) {

    this.history.push(transaction);
  }
}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    // Keep track of the time of the transaction
    this.time = new Date();
    // Add the transaction to the account
    this.account.addTransaction(this);
  }
}

class Deposit extends Transaction {
  commit() {
    this.account.balance += this.amount;
    super.commit()
    // this.account.history.push(`${this.amount}`)
  }
}

class Withdrawal extends Transaction {
  commit() {
    if(this.amount>this.account.balance){

      console.log(`Error cannot withdrawl ${this.amount}, your balance is only ${this.account.balance}`)
      return
    } else {
      this.account.balance -= this.amount;
      super.commit()
    }

    // this.account.history.push(`${this.amount*-1}`)
  }
}

//////////////////////////////////////////////////////
let acc1 = new Account("Superbob");

// console.log(acc1);

let d1 = new Deposit(100, acc1);
d1.commit();

// console.log(acc1);

let w1 = new Withdrawal(25, acc1);
w1.commit();

let w2 = new Withdrawal(76, acc1);
w2.commit();



// let d2 = new Deposit(50, acc1);
// d2.commit();
console.log(acc1);

// console.log(acc1.history[0].amount)
// console.log(acc1.history[0])
// console.log(acc1.balances)
