const EventEmitter = require("events");

const emitter = new EventEmitter();

const School = require('../nodejs/school.js');

// register a listener for bellRing even

const school = new School();

school.on('bellRing', ({period, text}) => {
    console.log(`We need to run because ${period} ${text} `);
});

school.startPeriod();