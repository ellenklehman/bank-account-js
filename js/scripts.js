var BankAccount = {
  balance: 0,
  withdraw: function(amount) {
    this.balance = this.balance - amount;
  },
  deposit: function(amount) {
    this.balance = this.balance + amount;
  }
};

$(document).ready(function() {

  $('form#new-account').submit(function(event) {
    event.preventDefault();

    var name = $('input#name').val();
    var initialDeposit = parseInt($('input#initial-deposit').val());

    $('input#name').val("");
    $('input#initial-deposit').val("");

    var bankAccount = Object.create(BankAccount);
    bankAccount.balance = initialDeposit;
    bankAccount.name = name;

    $("#account").text(bankAccount.name);
    $("#balance").text("$" + bankAccount.balance);

    $('form#transaction').submit(function(event) {
      event.preventDefault();

      var depositAmt = parseInt($('input#deposit').val());
      var withdrawAmt = parseInt($('input#withdraw').val());

      $('input#deposit').val("");
      $('input#withdraw').val("");

      if(depositAmt) {
        bankAccount.deposit(depositAmt);
      }

      if(withdrawAmt) {
        bankAccount.withdraw(withdrawAmt);
      }

      $("#balance").text("$" + bankAccount.balance);
    });
  });
});
