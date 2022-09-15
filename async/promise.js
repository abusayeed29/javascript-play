// human friendly look for callback function
// mainly use for callback look up
// sequenially call function or task
// hello working as async
// ekta promse ke kaje lagaie r ekta promise hote pare
// ekta catch dea multiple error handle kora jai

const hasMeeting = false;

const meeting = new Promise((resolve, reject) => {
  // do stufff
  if (!hasMeeting) {
    const meetingDetails = {
      name: "Technical Meeting",
      location: "Google meet",
      time: "100.0PM",
    };
    resolve(meetingDetails);
  } else {
    reject(new Error("Meeting already scheduled"));
  }
});

const addToCalender = (meetingDetails) => {
  const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
  return Promise.resolve(calender);
};

meeting
  .then(addToCalender)
  .then((res) => {
    //resolved data
    console.log(res);
  })
  .catch((err) => {
    // rejected data
    console.log(err.message);
  });

console.log("hello");
