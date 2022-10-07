https://thestudentmarketplace.netlify.app/

### **As of Sepetember 2022 - 1.1.0 Is out Now (Change Log Coming Soon!)**



This is my dissertation for The Student Marketplace Website, this is where the code is being held and sourced, a database will be connected via Brighton domains


### **What's New!**

A lot has changed from Version 0.1.4.56 To 0.9.12, The Whole site has been redesigned and new pages have been added along with a lot of under the hood improvements. Here's the full list starting from the index page to the last page on the site. The application is almost available for full release as there are some minor changes and additions and the testing phase is now taking phase. By Version 0.9.9 - 1.0.0 The site will be finished. 

### **Index Page: (Redesign / Added Real Text)**
- A newly redesigned home page to let users know what they are signing up to or visiting. Here is a list of what's new on the page:
- Separate Login and Sign up buttons that take the user to the correct screen. 
- Why I Made This Section To let users know. 
- Review Section, where other students have left reviews of the site and service. 
- Contact Section, Which lets users contact support and report bugs as well as opening hours for support.
- Footer Section, Which lets the user know what version number and credits of the site. 

### **Login / Sign Up Page: (New)**
- Regex Implemented to only accept valid AC.UK emails. A verification system has also been created so when the user their account, a 
verification/ password rest email is sent to their account so that they can enter a password, as without it they would not be able to enter as no password was created when signing up. 
- Sign in page has the relevant links to let the user either reset their password or create a new account. 
- Enter key is now mapped to allow users to hit enter and it will log them in. 
- Sign in / Sign up box is now centered aligned from the previous build (v.0.1.456).
- Alerts have been set up to let the user know the following:

1. Enter a password/ email if the field is left blank. 
2. Enter an email to send a password reset email.
3. No internet connection. 
4. Poor Internet connection/ timeout.
5. Verification Email Sent. 

 ### **Dashboard Page: (New)**
- Added Title "Welcome To Your DashBoard"
- Added Date and Time to let the user know. 
- Added a Weather API, Users Location Must be enabled and when they are signed in for the first time it requests location. 
- API Data gathered from Open weather map. 
- User can select the temperature to display in Fahrenheit. 
- Icons Update to correspond with correct weather. 
- Added App news and Notice tickers to let users know of any issues that may have been raised. 
- Dark Mode Added To Page. (Dark mode discussed in the sidebar).

### **Sidebar: (New)**
- Added a new sidebar to every page for easy access to all pages on all screen sizes. 
- Added a feature that shows the correct users' email they are logged in the sidebar to show they are on the correct account.
- Added Online/ Offline indicators to let the users know they are connected to the internet. 
- Added Changelog Modal to let users know any new features/bugs have been fixed in the new update. 
- Added Log out Button 
- Added Dark mode toggle to let users switch between different modes. 

### **Dark Mode: (Feature)**
- Dark Mode has its own feature such as it can now read the user's system preferences and apply the current device theme. 
- Dark mode is applied throughout the site and uses locale storage to save the user's preference when they switch pages and log out. 

### **Upload Page: (New)**
- Added Time feature to let users know when the post was created along with the date. 
- Added Selection for Good or Service, Gives the user a clear indication of what it is. 
- Added Title Section so the post can have a title. 
- Added a price section with a maximum value as well as added a rule to only accept whole numbers i.e. £25 and not £24.99.
- Added a condition selector.
- Added a description section to let users know more about the product.
- Added a phone number field so that users can contact the seller.
- Added a file upload option so that the user can upload one image to show to the market. 
- All fields are required and must be filled out, this is added into the HTML. 
- Added Progress bar to let users know how long until the post is uploaded into the database. 
- Added an alert to let the users know when the post is uploaded. 
- The page is redirected to the feed page when the upload is successful.  
- Dark Mode Is supported. 

### **Feed Page: (New)**
- Added search bar to allow users to find relevant data on the feed page. This will filter the results the user has searched (Read Search Bar Feature)
- Added card style for each post to make it clear for each user what post is what. 
- Added user's email for easy contact. added a feature to let users press on the email to email them in their respective email client it will also auto-complete the subject as well as enter the title of the post. 
- Added a comment section. 
- Only Users who created the post can delete their own post.
- Added a dynamic back-to-top button which has an animation that brings the user back to the top as well as the circle lets the user know how far they are to the bottom of the page. 
- Dark Mode Is supported.

### **News Page: (New)**
- Used a new API to scrape news articles and sort them within the correct topics. This allows the user to view the topics they want to see. 
- Styled the data into cards for easier viewability for both mobile and desktop.
- Added a search bar that lets the user search for posts they want to see. 
- Dark Mode is partially supported (This is being worked on). 
- Sidebar is modified so that it only shows the home button and topics instead of all the other pages. This allowed the user to select the topics they want to see on mobile. 

### **Comment Section: (Feature)**
- Added Users Email to see who sent the message
- Added the time it was sent 

### **Search Bar: (Feature)**
- Filter results such as to only show what you search for. For example:
- Posts with good conditions. 
- Posts with a certain price. 
- Post with a specific title, such as Books for law only. or show only shoes. 


### **_Upcoming Features_**
Here is a list of upcoming features that are being worked on. 
- Add a feature to let users know what uni they have come from to see if it's far or not for pick up or collection. (Starting Soon)
- Remove animations from the index page, as it lags the page when loading and it does not look clean. (Done)
- Style Search bar on New page. (Doing)
- Fix Highlight on news page and sidebar (hover elements). (Doing)
- Successful Upload Color To Green (currently orange). (Done)

**_A Trello board was created to keep on top of features and stuff I was doing so I don't lose track._**
- Here is a link (https://github.com/Raheemshah2809/The-Student-Marketplace/projects/1)

### **Android and iOS App: (Feature)**
- An Android and iOS application were created using flutter. This uses the web view feature and time was spent fixing the geolocation features which did not work atm. An IPA could not be created for iOS due to security rules by apple and another method was used to create an installable application. 
- Flutter App (APK Only): https://drive.google.com/file/d/13SeYgevXL0Wz-y-Gzj2ZbcoC-bzxkJPa/view?usp=sharing
- An PWA service was installed which allowed the user to install the application as a standalone application. Features are listed below. 

### **PWA: (Feature)**
- Send Notifications to users regarding updates or issues. 
- Added an offline indicator so that the user is notified that they have to be online to use the application. 
- Added a "Click to update" to show every 30 minutes due to inactivity to keep the site refreshed. 
- Floating action button to allow users to install the app, on specific pages such as:
- Index Page, Sign in Page, Dashboard. 

## What's Changed
* Under Going Maintenance by @Raheemshah2809 in https://github.com/Raheemshah2809/The-Student-Marketplace/pull/7
* added changes  by @Raheemshah2809 in https://github.com/Raheemshah2809/The-Student-Marketplace/pull/13
* Updated links by @Raheemshah2809 in https://github.com/Raheemshah2809/The-Student-Marketplace/pull/16
* Added correct link by @Raheemshah2809 in https://github.com/Raheemshah2809/The-Student-Marketplace/pull/17
* updated links by @Raheemshah2809 in https://github.com/Raheemshah2809/The-Student-Marketplace/pull/18


**Full Changelog**: https://github.com/Raheemshah2809/The-Student-Marketplace/compare/v0.1.4.56...0.9.12
