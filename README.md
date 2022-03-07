# team25

## Acknowledgement
As a foreword, we would like to thank Mark and Carlos for the constructive feedback in Phase 1.
From our discussion, we have:

1. Iterated on the appearance of all components.
2. Added tags to the landing page as a new feature.
3. Rebranded our website to Critiq to promote a positive image and mental health.
4. Separated a Users Admin page as a T-chart.
5. Create profiles with selfies and popular names to add realism.

We hope you enjoy our website and are looking forward to Phase 2!

## Setup

1. In the project directory first run to install all project depedencies:

`npm install`

2. Run this command to run the app on localhost:

`npm start`

3. Open [http://localhost:3000](http://localhost:3000) to view the project in your browser.

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



## List of Libraries Used 
- React
- MaterialUI
- Chart.js
- React-icons
- React-router-dom




