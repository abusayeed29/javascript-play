// async before function. manily return promise
// await ofcourse will stay with "async"

// async function friendlyFunction(){
//     return `Hello`;
// }
// console.log(friendlyFunction());

const hasMeeting = false;

const meeting = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    const meetingDetails = {
      name: "Technical Meeting",
      location: "Google meet",
      time: "10.0PM",
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

// meeting
//   .then(addToCalender)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {console.log(err.message);});

// avoid then. line by line then use not use
async function myMeeting(){
    try{
        const meetingDetails = await meeting;
        const calender = await addToCalender(meetingDetails);
        console.log(calender);
    }catch{
        console.log(`Something wrong happened`);
    }
}

  myMeeting();

  console.log(`Hello world`);
