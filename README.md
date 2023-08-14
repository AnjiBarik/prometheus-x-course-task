It's a "JS Band Store".
The final task at Ciklum University JS Band internship.
Main Features of the Program:

1. Authentication: We implemented a simple authentication mechanism using usernames. Users can log in and view their orders. Only authorized users can access the application. Usernames must be between 3 and 17 characters. The "Sign In" button becomes active when this condition is met.

2. Book Display: We created a page that displays a list of books with the ability to filter and sort. Users can search for books by title and select sorting parameters, such as price. When hovering or tapping on a book card, a reusable component called "PriceBlock" appears for instant purchase and quantity adjustment. This component enhances user interaction, providing a quick and convenient way to buy books in just two clicks, ideal for users who value their time and seek a seamless purchase experience.

3. Shopping Cart: We added the ability to add books to the cart and view ordered items. Users can view the number of books in the cart and the total cost, change the quantity of books in the order (triggering the appearance of the "PriceBlock" component), or remove items. The "Buy" button clears the order state.

4. Theme Switching: Users can change the interface theme (light or dark) for comfortable viewing.

5. Sign Out: A "Sign Out" button allows users to log out of their account in one click. All data in local storage is cleared, and the cart is preserved using a hashed sum of the username. When users log in again, their cart data is restored by comparing the hashed sums.

Technologies and Tools Used:

1. React Router: We used this library to implement routing and transitions between different pages of the application.

2. React Contexts and Hooks: These were utilized to track data changes and update the display.

3. GitHub: The entire code of the program is stored and managed using GitHub. We use Git for version control and potential collaboration on the project.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
