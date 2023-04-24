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

### `Developer Notes About Project`

### `Summary`
This project is a web application created using React. The application manages different pages using Route components within a main Layout component. The Router is specified as BrowserRouter and React Router is used for page routing. A menu is used to switch between different pages of the project, which include content focused on various topics such as skills, projects, contact, home, and articles. ModalContext is a context created to manage modals used throughout the application. The App component is used to create and manage project components.


### `Third party dependencies`

Helmet is a third-party library that allows us to set various meta tags and other head elements of a web page to improve SEO performance. It helps search engines understand the content and context of the page, which can lead to better rankings in search results. By using Helmet, we were able to easily set important metadata such as title, description, for each page.

On the other hand, Tailwind CSS is a utility-first CSS framework that enables rapid and efficient styling of components. By using a set of pre-defined utility classes, we can quickly apply styles to various elements without having to write custom CSS. This makes the styling process faster and more consistent across the project. Additionally, Tailwind CSS has a responsive design system that makes it easy to create layouts that look great on different screen sizes.

Overall, both Helmet and Tailwind CSS are valuable tools for modern web development and helped to improve the SEO and styling of the project.


### `Services`

Axios library is used to connect to two different APIs within the services file. The first connection is directed to an endpoint created for Medium RSS feed and an instance called “mediumApi” is created. The second connection creates an instance named metaDataApi and is used to retrieve website information from CollectAPI. These instances are then exported to be used by other components.



### `Custom Hooks`

The first hook, useThemeSwitcher, allows switching between light and dark themes. It uses useState to manage the current theme and useEffect to apply the theme changes to the document root and save the current theme to local storage.

The second hook, useScrollToTop, shows a "back to top" button when the user has scrolled down the page. It uses useState to manage the visibility of the button and useEffect to add and remove an event listener for scrolling. When clicked, it scrolls the window to the top using window.scrollTo.

The third hook, useGetMediumArticles, fetches articles from a Medium RSS feed using the linkedlnApi instance from the project's API file. It uses useState to store the fetched articles and useEffect to call the API on component mount. It returns the fetched articles and a function to fetch the articles again as an array. 

During the customization process by other developers, there may arise a need to fetch data from different Medium pages where the customizations will be made. In this case, using a custom hook such as useGetMediumArticles would make it easier to fetch data on different pages as well. Other selection has could be create a new service to get request to medium page


### `Development suggestions`

As the project progresses, it becomes apparent that there are several areas that require further development. Primarily, there is a need to improve the filters. Specifically, after selecting a category, filtering by title is not currently possible. This issue needs to be addressed.

Secondly, having a single Context file may cause optimization problems as the project grows. In this case, creating different context.js files for different pages and filtering algorithms, as well as refactoring the existing context.js file, would be beneficial.

Additionally, there is room for improvement in terms of SEO. Certain meta tags and scripts that are useful for SEO purposes have not been added to the project, such as Google Analytics. Adding such tools after the project goes live would be highly beneficial for tracking purposes.

Finally, there are currently only a few images used in the project. This does not currently pose a problem in terms of file size, but if more images are added, it may become necessary to implement alternative optimization methods to prevent the project file from becoming too large. This is critical both in terms of user experience and SEO optimization. 

In the next step of the project, it may be necessary to strengthen the forms by writing a custom hook or utilizing libraries such as Formik and Yup. This way, we can prevent users from making erroneous inputs beforehand and ensure data accuracy.


