"use strict";(self.webpackChunkcloudmex_academy=self.webpackChunkcloudmex_academy||[]).push([[982],{5053:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),r=["components"],l={sidebar_position:3},d="Day 3 - Develop your first React App!",p={unversionedId:"wfd-bootcamp/day3",id:"wfd-bootcamp/day3",isDocsHomePage:!1,title:"Day 3 - Develop your first React App!",description:"Hi there, this is the  third bootcamp's day and now you'll learn how to develop a basic react app with the next documentation.",source:"@site/docs/wfd-bootcamp/3-day3.md",sourceDirName:"wfd-bootcamp",slug:"/wfd-bootcamp/day3",permalink:"/docs/wfd-bootcamp/day3",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/wfd-bootcamp/3-day3.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Day 2 - Develop a web server",permalink:"/docs/wfd-bootcamp/day2"},next:{title:"Day 4 - Integrate React App with an REST API",permalink:"/docs/wfd-bootcamp/day4"}},s=[{value:"Hi there, this is the  third bootcamp&#39;s day and now you&#39;ll learn how to develop a basic react app with the next documentation.",id:"hi-there-this-is-the--third-bootcamps-day-and-now-youll-learn-how-to-develop-a-basic-react-app-with-the-next-documentation",children:[]},{value:"Starting with react \ud83d\ude80",id:"starting-with-react-",children:[{value:"Open the bash or the command prompt in the root folder and run the next command that will install a new dependendcy in your proyect.",id:"open-the-bash-or-the-command-prompt-in-the-root-folder-and-run-the-next-command-that-will-install-a-new-dependendcy-in-your-proyect",children:[]},{value:"Now open the App.js file and add the import for react-router",id:"now-open-the-appjs-file-and-add-the-import-for-react-router",children:[]},{value:"Next, we can see something like this in the index.js:",id:"next-we-can-see-something-like-this-in-the-indexjs",children:[]},{value:"Now to continue yo need to follow the next guide:",id:"now-to-continue-yo-need-to-follow-the-next-guide",children:[]},{value:"You will need to do this:",id:"you-will-need-to-do-this",children:[]},{value:"Configure your template paths",id:"configure-your-template-paths",children:[]},{value:"Add the Tailwind directives to your CSS",id:"add-the-tailwind-directives-to-your-css",children:[]},{value:"Start using Tailwind in your project",id:"start-using-tailwind-in-your-project",children:[]}]},{value:"Save your proyect at github \u2712\ufe0f",id:"save-your-proyect-at-github-\ufe0f",children:[{value:"Add all your files \ud83d\udd27",id:"add-all-your-files-",children:[]},{value:"Add a commit \ud83d\udd27",id:"add-a-commit-",children:[]},{value:"Make a push to the main branch \ud83d\udd27",id:"make-a-push-to-the-main-branch-",children:[]}]},{value:"A Step-by-Step Guide: Deploying on Netlify \ud83d\udee0\ufe0f",id:"a-step-by-step-guide-deploying-on-netlify-\ufe0f",children:[]}],u={toc:s};function c(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"day-3---develop-your-first-react-app"},"Day 3 - Develop your first React App!"),(0,i.kt)("h3",{id:"hi-there-this-is-the--third-bootcamps-day-and-now-youll-learn-how-to-develop-a-basic-react-app-with-the-next-documentation"},"Hi there, this is the  third bootcamp's day and now you'll learn how to develop a basic react app with the next documentation."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"Feel free to ask any question you had about the day's before in the discord channel."))),(0,i.kt)("h2",{id:"starting-with-react-"},"Starting with react \ud83d\ude80"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"The next instructions contains the  neceseary steps to create a basic react app.")),(0,i.kt)("p",null,"In your work folder open a new bash or command prompt and paste the next code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npx create-react-app hello-cloudmex\n")),(0,i.kt)("p",null,"And then you should be able to see the next message:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"We suggest that you begin by typing:\n\n  cd hello-cloudmex\n  yarn start\n\nHappy hacking!\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Congratulations")," you created your first react app. run the next commads to see your app"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd hello-cloudmex\nnpm run start\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"To see the official documentation go to ",(0,i.kt)("a",{parentName:"p",href:"https://es.reactjs.org/docs/create-a-new-react-app.html"},"React.org"))),(0,i.kt)("h1",{id:"creating-the-navigation-"},"Creating the navigation \ud83d\udd27"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"In this tutorial we'll use React.Router .")),(0,i.kt)("h3",{id:"open-the-bash-or-the-command-prompt-in-the-root-folder-and-run-the-next-command-that-will-install-a-new-dependendcy-in-your-proyect"},"Open the bash or the command prompt in the root folder and run the next command that will install a new dependendcy in your proyect."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd router-tutorial\nnpm install react-router-dom@6\n")),(0,i.kt)("p",null," This copies the appropriate React Router files and registers it in our package.json. "),(0,i.kt)("h3",{id:"now-open-the-appjs-file-and-add-the-import-for-react-router"},"Now open the App.js file and add the import for react-router"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"export default function App() {\n return (\n   <div>\n     <h1>Bookkeeper!</h1>\n   </div>\n );\n}\n")),(0,i.kt)("h3",{id:"next-we-can-see-something-like-this-in-the-indexjs"},"Next, we can see something like this in the index.js:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'mport { render } from "react-dom";\nimport App from "./App";\n\nconst rootElement = document.getElementById("root");\nrender(<App />, rootElement);\n')),(0,i.kt)("h3",{id:"now-to-continue-yo-need-to-follow-the-next-guide"},"Now to continue yo need to follow the next guide:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://reactrouter.com/docs/en/v6/getting-started/tutorial#connect-the-url"},"reactrouter.com")),(0,i.kt)("h3",{id:"you-will-need-to-do-this"},"You will need to do this:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Connect the URL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Add Some Links")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Add Some Routes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Nested Routes"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"And now you\u2019re finished!")," Now when you run ",(0,i.kt)("strong",{parentName:"p"},"npm run start")),(0,i.kt)("h1",{id:"setting-up-tailwind-with-react-"},"Setting up Tailwind with react \ud83d\udd27"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Tailwind CSS requires Node.js 12.13.0 or higher.")),(0,i.kt)("p",null,"Open the bash or the command prompt in the root folder and run the next command that will install a new dependendcy in your proyect."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p\n")),(0,i.kt)("h3",{id:"configure-your-template-paths"},"Configure your template paths"),(0,i.kt)("p",null,"Add the paths to all of your template files in your tailwind.config.js file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'module.exports = {\n content: [\n   "./src/**/*.{js,jsx,ts,tsx}",\n ],\n theme: {\n   extend: {},\n },\n plugins: [],\n}\n')),(0,i.kt)("h3",{id:"add-the-tailwind-directives-to-your-css"},"Add the Tailwind directives to your CSS"),(0,i.kt)("p",null,"Add the @tailwind directives for each of Tailwind\u2019s layers to your ./src/index.css file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"@tailwind base;\n@tailwind components;\n@tailwind utilities;\n")),(0,i.kt)("h3",{id:"start-using-tailwind-in-your-project"},"Start using Tailwind in your project"),(0,i.kt)("p",null,"Start using Tailwind\u2019s utility classes to style your content."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'export default function App() {\n return (\n   <h1 className="text-3xl font-bold underline">\n     Hello world!\n   </h1>\n )\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"You\u2019re finished!")," Now when you run ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"npm run start")),", Tailwind CSS will be  ready"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"to see the official documentation go to ",(0,i.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/guides/create-react-app"},"tailwindcss.com"))),(0,i.kt)("h2",{id:"save-your-proyect-at-github-\ufe0f"},"Save your proyect at github \u2712\ufe0f"),(0,i.kt)("h3",{id:"add-all-your-files-"},"Add all your files \ud83d\udd27"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"In the root folder run the next command:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git add .\n")),(0,i.kt)("h3",{id:"add-a-commit-"},"Add a commit \ud83d\udd27"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'git commit -m "{ write here a message}"\n')),(0,i.kt)("h3",{id:"make-a-push-to-the-main-branch-"},"Make a push to the main branch \ud83d\udd27"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git push origin maintain \n")),(0,i.kt)("h2",{id:"a-step-by-step-guide-deploying-on-netlify-\ufe0f"},"A Step-by-Step Guide: Deploying on Netlify \ud83d\udee0\ufe0f"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"In this tutorial, we will show you how easy it is to launch your site on Netlify. If you are not already a Netlify user, go ahead and ",(0,i.kt)("a",{parentName:"em",href:"https://app.netlify.com/signup"},"sign up")," for free first."))),(0,i.kt)("p",null,"click ",(0,i.kt)("a",{parentName:"p",href:"https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/"},"here")," to see the tutorial"))}c.isMDXComponent=!0}}]);