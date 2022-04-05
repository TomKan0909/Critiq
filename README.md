# team25

## Acknowledgement
As a foreword, we would like to thank Mark and Carlos for the constructive feedback in Phase 1.
From our discussion, we have:

1. Iterated on the appearance of all components.
2. Added tags to the landing page as a new feature (in addition to adding images, chat, and roast history).
3. Rebranded our website to Critiq to promote a positive image and mental health.
4. Layout the Users Admin page as a T-chart.
5. Create profiles with selfies and popular names to add realism.

We hope you enjoy our website and are looking forward to Phase 2!

---
## Run locally  

1. In the project directory first run to install all project depedencies:

`npm install`

2. Run this command to run the app on localhost:

`npm start`

3. Open [http://localhost:3000](http://localhost:3000) to view the project in your browser.

---
## User Features
Login with username: user, password: user to access the user's features

| Routes | Description |
| ------ | ----------- |
|  [http://localhost:3000/login](http://localhost:3000/login) | Route to login to application |
|  [http://localhost:3000](http://localhost:3000) | User can scroll down to look at all available Critiq rooms and click the join button. User profile will be displayed on the right hand side. There are two buttons one to view their profile and go live to create a Critiq room. At the top of a page there's a search bar where users can filter Critiq room by relevant tags. Users can logout by pressing the logout button located at the top left of the page.|
| [http://localhost:3000/critiqRoom](http://localhost:3000/critiqRoom) | User can chat in the Critiq room and leave a rating for the host of the room |
| [http://localhost:3000/profile](http://localhost:3000/profile) | On the right hand side the user can see how their profile will look like in a Critiq room. On the right there are three buttons. Edit Profile opens a modal where a user can change their pictures, prompts and tags. Go live creates a new Critiq room with the user. View Critiq history opens to a new tab | 
| [http://localhost:3000/profile/roastHistory](http://localhost:3000/profile/roastHistory) | User can click on the critiq Cards to see a modal of previous comments of the Critiq room which they went live |  

## Admin Features
Login with username: admin, password: admin to access the admin's features

| Routes | Description |
| ------ | ----------- |
|  [http://localhost:3000/login](http://localhost:3000/login) | Route to login to application |
|  [http://localhost:3000/admin](http://localhost:3000/admin) | Admin can scroll down to look at all available Critiq rooms and click the join button. Admin profile will be displayed on the right hand side. Admin can click on view stats site page to view relevant statistics to the webpage and search up users. At the top of a page there's a search bar where Admin can filter Critiq room by relevant tags. Admin can logout by pressing the logout button located at the top left of the page.|
| [http://localhost:3000/critiqRoomAdmin](http://localhost:3000/critiqRoomAdmin) | Admin can see the Critiq room and all live chat logs. Admin can moderate the room by click stop room if the comments get too toxic |
| [http://localhost:3000/usersAdmin](http://localhost:3000/usersAdmin) | Admin can view the relevant statistic of all users  in the left dropdown of site. On the right side of page, admin can search up users by name and click on them to have a user modal popup. Admin can they decide whether they want to ban the user or not.

---
## **Express Routes**
## **User Routes**

### Login
`post /api/users/login`

user is logged in and session is stored on server and cookie is stored on client
Example body
```
{
    username: "user",
    password: "user"
}
```

Example response

```
{
    currentUser: "user",
}
```

---

### Logout
`get /api/users/logout`

Destroys session stored on express server for current user. No body required make sure client 
sends with a cookie

---

### Create a user
`post /api/users`

Creates a user if username not taken. Default values are given for rest of user

Example body
```
{
    username: 'user1',
    password: 'user1'
}
```

Example response
```
{
    "isAdmin": false,
    "name": "Name",
    "images": [
        "",
        "",
        "",
        "",
        "",
        ""
    ],
    "age": 999,
    "gender": "Other",
    "height": "999cm",
    "location": "Location",
    "ethnicity": "Ethnicity",
    "alcohol": "Yes",
    "occupation": "Occupation",
    "school": "School",
    "_id": "624cbd9b4226ed2a4abdc44e",
    "username": "user1",
    "password": "$2a$10$3DI8WcVvaPe01O869bLhaeBQIo8jHpZ5C7M46RQZPM6BQAYeaHJ2u",
    "prompts": [
        {
            "title": "A life goal of mine",
            "content": "Loren ipsum",
            "_id": "624cbd9b4226ed2a4abdc44f"
        },
        {
            "title": "I take pride in",
            "content": "Loren ipsum",
            "_id": "624cbd9b4226ed2a4abdc450"
        },
        {
            "title": "Best travel story",
            "content": "Loren ipsum",
            "_id": "624cbd9b4226ed2a4abdc451"
        }
    ],
    "__v": 0
}
```


---

### Get current user profile
`get /api/users`

No body required make sure client has cookie.

Example response
```
{
    "isAdmin": false,
    "name": "Name",
    "images": [
        "",
        "",
        "",
        "",
        "",
        ""
    ],
    "age": 999,
    "gender": "Other",
    "height": "999cm",
    "location": "Location",
    "ethnicity": "Ethnicity",
    "alcohol": "Yes",
    "occupation": "Occupation",
    "school": "School",
    "_id": "624cbd9b4226ed2a4abdc44e",
    "username": "user1",
    "password": "$2a$10$3DI8WcVvaPe01O869bLhaeBQIo8jHpZ5C7M46RQZPM6BQAYeaHJ2u",
    "prompts": [
        {
            "title": "A life goal of mine",
            "content": "Loren ipsum",
            "_id": "624cbd9b4226ed2a4abdc44f"
        },
        {
            "title": "I take pride in",
            "content": "Loren ipsum",
            "_id": "624cbd9b4226ed2a4abdc450"
        },
        {
            "title": "Best travel story",
            "content": "Loren ipsum",
            "_id": "624cbd9b4226ed2a4abdc451"
        }
    ],
    "__v": 0
}
```

---

### Get user profile by id
`get /api/users/:id`

No body required. Make sure id in route is a valid userid created from a `post /api/users`.

Example Response
```
{
    "isAdmin": false,
    "name": "Name",
    "images": [
        "",
        "",
        "",
        "",
        "",
        ""
    ],
    "age": 999,
    "gender": "Other",
    "height": "999cm",
    "location": "Location",
    "ethnicity": "Ethnicity",
    "alcohol": "Yes",
    "occupation": "Occupation",
    "school": "School",
    "_id": "624cbd9b4226ed2a4abdc44e",
    "username": "user1",
    "password": "$2a$10$3DI8WcVvaPe01O869bLhaeBQIo8jHpZ5C7M46RQZPM6BQAYeaHJ2u",
    "prompts": [
        {
            "title": "A life goal of mine",
            "content": "Loren ipsum",
            "_id": "624cbd9b4226ed2a4abdc44f"
        },
        {
            "title": "I take pride in",
            "content": "Loren ipsum",
            "_id": "624cbd9b4226ed2a4abdc450"
        },
        {
            "title": "Best travel story",
            "content": "Loren ipsum",
            "_id": "624cbd9b4226ed2a4abdc451"
        }
    ],
    "__v": 0
}
```
---

### Delete user profile by id
`delete /api/users/:id`

No body is required. Make sure client cookie corresponds to admin user

Example Response
```
{
    {
    "isAdmin": false,
    "name": "Name",
    "images": [
        "",
        "",
        "",
        "",
        "",
        ""
    ],
    "age": 999,
    "gender": "Other",
    "height": "999cm",
    "location": "Location",
    "ethnicity": "Ethnicity",
    "alcohol": "Yes",
    "occupation": "Occupation",
    "school": "School",
    "_id": "624cbd9b4226ed2a4abdc44e",
    "username": "user1",
    "password": "$2a$10$3DI8WcVvaPe01O869bLhaeBQIo8jHpZ5C7M46RQZPM6BQAYeaHJ2u",
    "prompts": [
        {
            "title": "A life goal of mine",
            "content": "Loren ipsum",
            "_id": "624cbd9b4226ed2a4abdc44f"
        },
        {
            "title": "I take pride in",
            "content": "Loren ipsum",
            "_id": "624cbd9b4226ed2a4abdc450"
        },
        {
            "title": "Best travel story",
            "content": "Loren ipsum",
            "_id": "624cbd9b4226ed2a4abdc451"
        }
    ],
    "__v": 0
}
}
```

---

### Get all users
`get /api/usersAll`

no body is needed.

Example response
```
{
    "624b74865dcb054a254ac132": {
        "isAdmin": false,
        "name": "Name",
        "images": [
            "",
            "",
            "",
            "",
            "",
            ""
        ],
        "age": 999,
        "gender": "Other",
        "height": "999cm",
        "location": "Location",
        "ethnicity": "Ethnicity",
        "alcohol": "Yes",
        "occupation": "Occupation",
        "school": "School",
        "_id": "624b74865dcb054a254ac132",
        "username": "3",
        "password": "$2a$10$nyX522HvbPvASiTI2FSSDO3WmiQDmHU9LTm36qiXdtfl.67ujQTyO",
        "prompts": [
            {
                "title": "A life goal of mine",
                "content": "Loren ipsum",
                "_id": "624b74865dcb054a254ac133"
            },
            {
                "title": "I take pride in",
                "content": "Loren ipsum",
                "_id": "624b74865dcb054a254ac134"
            },
            {
                "title": "Best travel story",
                "content": "Loren ipsum",
                "_id": "624b74865dcb054a254ac135"
            }
        ],
        "__v": 0
    },
    "624b749d5dcb054a254ac13f": {
        "isAdmin": false,
        "name": "John",
        "images": [
            "http://res.cloudinary.com/dewbgfbqz/image/upload/v1649128335/jvpqes4re3a8hun353ew.jpg",
            "http://res.cloudinary.com/dewbgfbqz/image/upload/v1649151639/gptbszif6m8kdveqseyr.jpg",
            "",
            "",
            "",
            ""
        ],
        "age": 999,
        "gender": "Male",
        "height": "999cm",
        "location": "Location",
        "ethnicity": "Ethnicity",
        "alcohol": "Yes",
        "occupation": "Student",
        "school": "School",
        "_id": "624b749d5dcb054a254ac13f",
        "username": "user",
        "password": "$2a$10$BTjJcKBygCsIZKkMLqu.CuHVHRKiGpbYoaW9Y461mYtwij13VxW9e",
        "prompts": [
            {
                "title": "A life goal of mine",
                "content": "Loren ipsum",
                "_id": "624b749d5dcb054a254ac140"
            },
            {
                "title": "I take pride in",
                "content": "Loren ipsum",
                "_id": "624b749d5dcb054a254ac141"
            },
            {
                "title": "Best travel story",
                "content": "Loren ipsum",
                "_id": "624b749d5dcb054a254ac142"
            }
        ],
        "__v": 0
    }
}
```

---
### Update user profile (non-images)
`patch /api/users`

Make sure client has cookie corresponding to user they want to update

Example Body
```
{
    "name": "bob",
    "age": 23,
    "ethnicity": "caucassian",
    "school": "University of Toronto"
}
```

Example Response
```
{
    "isAdmin": false,
    "name": "John",
    "images": [
        "http://res.cloudinary.com/dewbgfbqz/image/upload/v1649128335/jvpqes4re3a8hun353ew.jpg",
        "http://res.cloudinary.com/dewbgfbqz/image/upload/v1649151639/gptbszif6m8kdveqseyr.jpg",
        "",
        "",
        "",
        ""
    ],
    "age": 999,
    "gender": "Male",
    "height": "999cm",
    "location": "Location",
    "ethnicity": "Ethnicity",
    "alcohol": "Yes",
    "occupation": "Student",
    "school": "School",
    "_id": "624b749d5dcb054a254ac13f",
    "username": "user",
    "password": "$2a$10$BTjJcKBygCsIZKkMLqu.CuHVHRKiGpbYoaW9Y461mYtwij13VxW9e",
    "prompts": [
        {
            "title": "A life goal of mine",
            "content": "Loren ipsum",
            "_id": "624b749d5dcb054a254ac140"
        },
        {
            "title": "I take pride in",
            "content": "Loren ipsum",
            "_id": "624b749d5dcb054a254ac141"
        },
        {
            "title": "Best travel story",
            "content": "Loren ipsum",
            "_id": "624b749d5dcb054a254ac142"
        }
    ],
    "__v": 0
}
```

---
### Update user profile (images)
`patch /api/users/images`

Make sure client has cookie corresponding to user they want to update. Set header for request to `Content-Type: multipart/form-data`

Example Body
```
form-data({
    images 0: javascript image file object,
    images 1: javascript image file object,
    images 5: javascript image file object 
})
```

Example Response
```
Images uploaded
```

---

## **CritiqRoom Routes**

## Create a critiqRoom
`post /api/rooms`
Example body
```
{   // instance of UserSchema
    creator: {
    isAdmin: false,
    name: 'John',
    images: [...],
    age: 999,
    gender: 'Male',
    height: '999cm',
    location: 'Location',
    ethnicity: 'Ethnicity',
    alcohol: 'Yes',
    occupation: 'Student',
    school: 'School',
    _id: ...,
    username: '...',
    password: '...',
    prompts: [ [Object], [Object], [Object] ],
    __v: 0
  },
}
```

Example response
```
{ // instance of RoomSchema
    room: {
        creator: {
        isAdmin: false,
        name: 'John',
        images: [...],
        age: 999,
        gender: 'Male',
        height: '999cm',
        location: 'Location',
        ethnicity: 'Ethnicity',
        alcohol: 'Yes',
        occupation: 'Student',
        school: 'School',
        _id: ...,
        username: '...',
        password: '...',
        prompts: [ [Object], [Object], [Object] ],
        __v: 0
      },
      messages: [],
      createdAt: ...,
      updatedAt: ...,
      __v: 0
     }
}
```

---
## Get all active critiqRoom
`get /api/rooms`
Example body
```
{   
    // empty
}
```

Example response
```
{ 
    // Array of RoomSchema
    rooms: [Room1, Room2, Room3]
}
```

---
## Get critiqRoom history filtered by userid
`get /api/rooms/:userid/history`
Example body
```
{   
    // empty
}
```

Example body
```
{  
    userid: ObjectId of user
}
```

Example response
```
{ 
    // Array of RoomSchema, more specifically array of rooms that are inactive
    rooms: [Room1, Room2, Room3]
}
```




---
## Get the latest critiqRoom for current logged in user (used in go live to check if active room exists)
`get /api/rooms/latest`
Example body
```
{   
    // empty
}
```

Example session
```
{   
    user: ObjectId of user 
}
```

Example response
```
{ 
    room: RoomSchema latest room that is active
}
```

---
## Get the latest critiqRoom filtered by userid (used in join rooms)
`get /api/rooms/latest/:userid`
Example params
```
{    
    userid: ObjectId of user 
}
```

Example response
```
{ 
    room: RoomSchema latest room that is active for that user
}
```

---
## Get a critiqRoom by id
`get /api/rooms/:id`
Example params
```
}    
    id: ObjectId of critiqRoom
}
```

Example response
```
{ 
    room: RoomSchema latest room that is active for that user
}
```

---
## Post a new message to a critiqRoom filtered by id (adds new message to room)
`post /api/rooms/:id/messages`
Example params
```
{    
    id: ObjectId of critiqRoom
}
```

Example response
```
{ 
    data: "Message sent"
}
```

---
## Update a critiqRoom to set it's status to stop
`patch /api/rooms/:id/stop`
Example params
```
{    
    id: ObjectId of critiqRoom
}
```

Example response
```
{ 
    data: "Stopped room"
}
```


## List of Libraries Used 
- React
- MaterialUI
- Chart.js
- React-icons
- React-router-dom




