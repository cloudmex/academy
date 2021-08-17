---
sidebar_position: 4
---

# Day 4 - Integrate React App with an REST API

## Setup axios in your project

In many web projects we need to communicate our frontend with our backend for that reason it is common to use the 'HTTP protocol' through an HTTP client to connect those applications. Make use of an http request (GET;POST, PUT, DELETE) we may share data through our frontend or backend.
In this case we are going to use `Axios`. Axios is a lightweight HTTP client and promise-based, which gives you the ability to take advantage of JavaScript’s async and await for more readable asynchronous code.


### Installing axios 
```bash
npm install axios
``` 

### Import Axios to your React component 
```bash 
import axios from 'axios';
```

### Making a GET request in a functional component 

In this step you will use Axios to create a `GET request` using a React funtional component

```bash
    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.get('https://api.npms.io/v2/search?q=react')
            .then(response => setTotalReactPackages(response.data.total));

    // empty dependency array means this effect will only run once (like  componentDidMount in classes)
    }, []);

```

The next step is use this example on your components and get informatión from your REST API backend.

### Making a POST request in a functional component

In this step, you will use Axios with another HTTP request method called POST.
```bash
    useEffect(() => {
        // POST request using axios inside useEffect React hook
        const article = { title: 'React Hooks POST Request Example' };
        axios.post('https://reqres.in/api/articles', article)
            .then(response => setArticleId(response.data.id));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
```

The next step is use this example on your components and post informatión to your REST API backend.

The next link is a complete tutorial of [How to use Axios with a React app](https://www.freecodecamp.org/news/how-to-use-axios-with-react/) to communicate your react app with your backend.

## Save your proyect at github ✒️

Once you done you need to save your changes on GitHub, to achieve this run the next commands in your project directory

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


## Deploy your changes on netlify

To this point you have a GitHub branch connected (mostly master or main) to a netlify site as part of a CI/CD pipeline, when you push your changes to this branch your site are going to be updated. 
