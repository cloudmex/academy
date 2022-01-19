---
sidebar_position: 3
---
# Day 3 - Develop your first React App!
### Hi there, this is the  third bootcamp's day and now you'll learn how to develop a basic react app with the next documentation.
> _Feel free to ask any question you had about the day's before in the discord channel._

## Starting with react 🚀

_The next instructions contains the  neceseary steps to create a basic react app._

In your work folder open a new bash or command prompt and paste the next code.

```
npx create-react-app hello-cloudmex
```
And then you should be able to see the next message:
```
We suggest that you begin by typing:

  cd hello-cloudmex
  yarn start

Happy hacking!
```

**Congratulations** you created your first react app. run the next commads to see your app
```
cd hello-cloudmex
npm run start
```
> To see the official documentation go to [React.org](https://es.reactjs.org/docs/create-a-new-react-app.html)



# Creating the navigation 🔧

_In this tutorial we'll use React.Router ._

### Open the bash or the command prompt in the root folder and run the next command that will install a new dependendcy in your proyect.

```
cd router-tutorial
npm install react-router-dom@6
```
 This copies the appropriate React Router files and registers it in our package.json. 

###  Now open the App.js file and add the import for react-router
 
 ```
export default function App() {
  return (
    <div>
      <h1>Bookkeeper!</h1>
    </div>
  );
}
```


### Next, we can see something like this in the index.js:

```
mport { render } from "react-dom";
import App from "./App";

const rootElement = document.getElementById("root");
render(<App />, rootElement);
```

### Now to continue yo need to follow the next guide:
[reactrouter.com](https://reactrouter.com/docs/en/v6/getting-started/tutorial#connect-the-url)
### You will need to do this:

- **Connect the URL**
- **Add Some Links**
- **Add Some Routes**
- **Nested Routes**

**And now you’re finished!** Now when you run **npm run start**

# Setting up Tailwind with react 🔧

_Tailwind CSS requires Node.js 12.13.0 or higher._

Open the bash or the command prompt in the root folder and run the next command that will install a new dependendcy in your proyect.

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
### Configure your template paths

Add the paths to all of your template files in your tailwind.config.js file.
 ```
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
### Add the Tailwind directives to your CSS

Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.
 ```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Start using Tailwind in your project

Start using Tailwind’s utility classes to style your content.

 ```
export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
```


**You’re finished!** Now when you run **_npm run start_**, Tailwind CSS will be  ready
> to see the official documentation go to [tailwindcss.com](https://tailwindcss.com/docs/guides/create-react-app)



## Save your proyect at github ✒️

### Add all your files 🔧

> _In the root folder run the next command:_

```bash
git add .
```

### Add a commit 🔧
```bash
git commit -m "{ write here a message}"
```
### Make a push to the main branch 🔧
```bash
git push origin maintain 
```

##  A Step-by-Step Guide: Deploying on Netlify 🛠️

> _In this tutorial, we will show you how easy it is to launch your site on Netlify. If you are not already a Netlify user, go ahead and [sign up](https://app.netlify.com/signup) for free first._

click [here](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/) to see the tutorial