/*jshint esversion:6*/
// LALITHSAGAR J
// ENG18CS0147
const EventEmitter = require("events");

class TicketManager extends EventEmitter {
  constructor(supply) {
    super();
    this.supply = supply;
  }
  buy(email, price) {
    this.supply--;
    this.emit("buy", email, price, Date.now());
  }
}


module.exports = TicketManager;
