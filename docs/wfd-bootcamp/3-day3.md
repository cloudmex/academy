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


# Setting up Tailwind with react 🔧

_Tailwind CSS requires Node.js 12.13.0 or higher._

Open the bash or the command prompt in the root folder and run the next command that will install a new dependendcy in your proyect.

```
npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```
### Install and configure CRACO
 ```
npm install @craco/craco
```
### Next, create a craco.config.js at the root of our project and add the tailwindcss and autoprefixer as PostCSS plugins: 

```
// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}
```

### Create your configuration file,This will create a minimal tailwind.config.js file at the root folder:


```
npx tailwindcss-cli@latest init
```

 ### Include Tailwind in your CSS
  
Open the ./src/index.css file that Create React App generates for you by default and use the @tailwind directive to include Tailwind’s base, components, and utilities styles, replacing the original file contents:
```
/* ./src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```
### Finally, ensure your CSS file is being imported in your ./src/index.js file:

``` // src/index.js
  import React from 'react';
  import ReactDOM from 'react-dom';
 >>> import './index.css'; <<<
  import App from './App';
  import reportWebVitals from './reportWebVitals';

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );

  // ...

```



**You’re finished!** Now when you run **_npm run start_**, Tailwind CSS will be  ready
> to see the official documentation go to [tailwindcss.com](https://tailwindcss.com/docs/guides/create-react-app)



# Creating the navigation in the SPA 🔧

_In this tutorial we'll use React.Router ._

### Open the bash or the command prompt in the root folder and run the next command that will install a new dependendcy in your proyect.

```
npm i react-router-dom --save
```
 This copies the appropriate React Router files and registers it in our package.json. 

###  Now open the App.js file and add the import for react-router
 
 ```
import { BrowserRouter as Router  } from "react-router-dom";
```


### Next, we can add our views as importations  like this:

```
//App.js
import ViewX from "./views/ViewX.js";
import ViewY from "./views/ViewY.js";
```
_this importations doesnt exist yet!_
### And then you can add the components imported before and set the navigation route:

```
// App.js
<Router>
      <Route exact path="/" component={Home}/>
      <Route path="/viewx" component={ViewX} />
      <Route path="/viewy" component={ViewY} />

</Router>
```
#### As you can see, the Route component contains a path prop. The value you specify for the path determines when this route is going to be active. When a route is active, the component specified by the component prop gets rendered.

#### _The exact prop ensures the Route is active only if the path is an exact match for what is being loaded._
 
**By now**, we've covered a good chunk of the cool functionality React Router has for helping you build your SPA. 



**You’re finished!** Now when you run **npm run start**, Tailwind CSS will be  ready
> to see the official documentation go to [reactrouter.com](https://reactrouter.com/web/guides/quick-start)

 

## Run and deploy your SPA 🛠️

> _At this point we have a basic react app ready to run and deploy_




### Run localy 🔧

_In the root folder run the next command:_

```bash
npm run start
```

### Run the production version 🔧
```bash
npm run build
npm i serve
serve -s build
```
 ### You will see the next message and try in the browser

```
   ┌────────────────────────────────────────┐
   │                                        │
   │   Serving!                             │
   │                                        │
   │   Local:  http://localhost:5000        │
   │                                        │
   │   Copied local address to clipboard!   │
   │                                        │
   └────────────────────────────────────────┘
```



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