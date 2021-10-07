# Final Project for Lighthouse Labs

# Sundance Mazda

Sundance Mazda is a project to create a e-commerce site for a single car dealership. The goal of the project was to create a site that allowed a user to buy a vehicle completly online, looked great, and was designed to be responsive for all media types. The manager and owner of Sundance Mazda (Located in Edmonton, AB) were kind enough to allow us to use their dealership for our project.

This repository was created by building our own skelton using Node, Express and Postgres back end. The front end was created using React and Material UI for styling. Stripe and Google Maps API's are used for payment and map functionality.

## Authors

Created by:

Amit Baid

- amit.baid@hotmail.com
- [Github](https://github.com/Abaid77)
- [LinkedIn](https://www.linkedin.com/in/amit-baid-300898220/)

Nahom Mehanzel

- You can find me on [LinkedIn](https://www.linkedin.com/in/nahom-mehanzel/) or [Github](https://github.com/NahomKibreab).

## App Functions

The site includes the following functionality:

- Single page app created using React.
- Uses Google Maps API to show a map with the dealers location.
- Uses Stripe API to collect payment from the customer.
- Responsive design for mobile/tablet/desktop.
- Communicates with the server via Axios(JSON) and HTTP request.
- Communicates with the database using Postgres(PG Native API).
- Nav Bar:
  - is fixed to the top.
  - has padding on both side.
  - contains the Sundance Mazda logo in the top left.
  - contains links for Home, Inventory, About Us, Videos, Reviews and News.
  - contains a phone Icon with links to the phone numbers for all departments.
  - contains a user icon with link to My Profile, My Garage, and Logout.
  - changes to drawer menu with menu button on left for tablet and mobile.
  - links and user icon disappear and links are moved to drawer menu.
  - is styled using MAterial UI.
- Footer Bar:
  - contains the address, email and phone number for the dealership.
  - contains icons for links to Facebook, Twitter and Instagram.
  - contains clickable abs to show the hours for all departments.
  - contains helpful links.
  - is on every page.
  - is mobile responsive.
  - is styled using Material UI.
- Home Page:
  - contains a banner with the dealers name and tag line.
  - contains a responsive carousel to display offers. The carousel:
    - rotates automatically between pictures.
    - has 3 different sets of pictures for mobile/tablet/desktop and switches based on media size.
    - will stop rotating if you hover your mouse over the picture.
  - contains 3 boxes to showcase Manager Specials. These boxes:
    - pull data and pictures from the data base.
    - are links to the details page for those vehicles.
    - are changed to column and resized for tablet and mobile.
  - contains a full width intergrated Google Maps with the dealers location centered and pinned.
  - responsive design for mobile/tablet/desktop
  - is styled using Material UI.
- Inventory Page:
  - displays the entire inventory of the dealer from the database, with each vehicle on its own card. These vehicle cards:
    - pull info from the database in order to display info about each vehicle.
    - are changed to column and resized for tablet and mobile.
    - have icons for adding to my garage and sharing the link.
    - have a buy now button that links to the details page for that vehicle.
    - clicking anywhere will also link to the details page for that vehicle.
  - has a searbar at the top. The search bar:
    - allows user to search by year, make, model, trim or any other term.
    - checks all fields in the vehicles table for matches and then only shows matching vehciles.
    - updates as the user is typing.
  - is styled using Material UI.
- Car Detials Page:

  - displays the year, model, trim and price at the top of the page.
  - has a responsive carousel at the top that:
    - displays pictures of the correct make, model,trim and color by accessing them from the database.
    - rotates through 3 pictures to show all angles of the vehicle.
    - does not stop rotating on mouse over.
    - is resized to fit for mobile and tablet.
  - displays details about the stock number, exterior and interior colors.
  - has a 2nd responsive carousel that:
    - shows pictures of the actual vehicle at the dealer by accessing them from the database.
    - does not rotate automatically.
    - has arrows on either side to scroll through the pictures.
    - has clickable thumbnails below.
    - the current picture will be high lighted in the thumbnails.
    - is resized to fit for mobile and tablet.
  - has tabs to display specifications and features. These tabs:
    - allow the user to click between specs and features and displays the correct info from the database.
    - automatically create 2 columns from the data in order to display.
    - each item is highlighted on mouse over and has a star icon.
  - has a price details section with 2 boxes for a pay monthly option or pay once option. These boxes:
    - display the price, taxes, shipping and either total for pay once or monthly payment for pay monthly.
    - allows the user to choose the number of years and down payment for pay monthly, and updates automatically as changed.
    - has a ? icon which opens a modal with detailed information on the financing. This modal is updated based on the users choices for term and down payment.
    - has a pay deposit/total button at the bottom which will call the Stripe API to collect either the full payment or cash down. This button open a confirmation popper that confirms payment and email of bill of sale, changes the status of the vehicle in the database to sold and opens a confirmation modal that:
      - displays all information about that transaction taken from the database and user inputs.
      - is designed to look like a bill of sale would and contains seller's info, buyer's info, vehicle info, purchase info and in the case of monthly payment info.
      - has a button at the bottom to print all documents.
      - cannot be closed until the DONE button is clicked.
      - redirects user to home page after closing.
      - resizes for extra small media size.

- About Us Page:
  - displays a welcome banner at the top.
  - displays a welcome message from the dealer.
  - displays page wide interactive Google Map with dealership centered and pinned.
  - responsive design for mobile/tablet/desktop
  - is styled using Material UI.
- Videos Page:
  - displays a banner on the top with a title.
  - displays embeded youtube videos created by the staff of the dealership.
  - responsive design for mobile/tablet/desktop
  - is styled using Material UI.

## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information on both the frontend and backend.

- Front End:
  REACT_APP_STRIPE_SKEY= (YOUR STRIPE PUBLIC KEY)
  REACT_APP_GOOGLE_MAPS_KEY= (YOUR GOOGLE MAPS API KEY)

- Back End:
  PGHOST=localhost
  PGUSER=mazda
  PGDATABASE=mazda
  PGPASSWORD=mazda
  PGPORT=5432
  EXPRESSPORT=8000
  STRIPE_SKEY= (YOUR STRIPE SECRET KEY)

3. Install dependencies: `npm i` in both the frontend and backend folder.
4. Reset the data base using `npm run reset` in the backend folder. (You can use this command anytime to reset the database to intial state)
5. From the backend folder run `npm start` to launch the database

- Check the db folder to see what gets created and seeded in the SDB

7. Run the server: `npm run local`

- Note: nodemon is used, so you should not have to restart your server

8. Visit `http://localhost:8080/`

Please note:

- To see the owners page you will need to login as 1@example.com with any password
- You can log in with any other email and password to be logged in as user 2
- The owners page needs to be refreshed to see new orders
- The app has been setup to work on the local time of the server, if you need to convert from UTC some of the database queries will need to be adjusted

## Screenshots

!["Screenshot of index page mobile"](https://github.com/Abaid77/taco_empire/blob/master/public/images/ss-index-mobile.png?raw=true)

###### Index page mobile version

###### Owners page

## Warnings & Tips

- Do not edit the `layout.css` file directly, it is auto-generated by `layout.scss`
- Split database schema (table definitions) and seeds (inserts) into separate files, one per table. See `db` folder for pre-populated examples.
- Use the `npm run db:reset` command each time there is a change to the database schema or seeds.
  - It runs through each of the files, in order, and executes them against the database.
  - Note: you will lose all newly created (test) data each time this is run, since the schema files will tend to `DROP` the tables and recreate them.

## Dependencies

- Node 10.x or above
- NPM 5.x or above
- PG 6.x
- Body-parser 1.19.0 or above
- Chalk 2.4.2 or above
- Cookie-session 1.4.0 or above
- Dotenv 2.0.0 or above
- Ejs 2.6.2 or above
- Express 4.17.1 or above
- Morgan 1.9.1 or above
- Node-sass-middleware 0.11.0 or above
- PG-native" 3.0.0 or above
- Twilio 3.67.0 or above

## Dev Dependencies

- nodemon 1.19.1 or above
