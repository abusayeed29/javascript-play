const EventEmitter = require("events");

class School extends EventEmitter {
    startPeriod() {
        console.log("Class Started");
      
        // raise even when bell ring
        // raise am event
        setTimeout(() => {
          this.emit("bellRing", {
            period: "first",
            text: "period ended",
          });
        }, 2000);
      }
}

module.exports = School