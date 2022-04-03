import images from "./images";
import jobs from "./jobs";
import usernames from "./usernames";

const random = (range, offset) => {
  return (Math.floor(Math.random() * range) + offset).toString();
};

export const genders = ["M", "F", "Other"];
export const locations = [
  "Toronto",
  "Waterloo",
  "London",
  "Ottawa",
  "Montreal",
  "Vancouver",
  "Calgary",
];
export const ethnicities = [
  "Asian",
  "Arab",
  "Black",
  "Caucasian",
  "Hispanic",
  "Pacific Islander",
  "Other",
];
export const alcohols = ["Yes", "No"];
export const schools = [
  "University of Toronto",
  "University of Waterloo",
  "Western University",
  "University of Ottawa",
  "University de Montreal",
  "University of British Columbia",
  "University of Calgary",
];

const users = {};

usernames.slice(0,5).forEach((username) => {
  const job = jobs[random(jobs.length, 0)];
  users[username] = {
    name: username,
    job: job,
    images: [ images.pop(), images.pop(), images.pop(), images.pop(), images.pop(), images.pop()],
    prompts: [
      { title: job, content: username },
      { title: job, content: username },
      { title: job, content: username },
    ],
    tags: {
      age: random(30, 18),
      gender: genders[random(genders.length, 0)],
      height: random(50, 140) + "cm",
      location: locations[random(locations.length, 0)],
      ethnicity: ethnicities[random(ethnicities.length, 0)],
      alcohol: alcohols[random(alcohols.length, 0)],
      occupation: job,
      school: schools[random(schools.length, 0)],
    },
  };
});

export default users;
