# Rapid React Part 2: Routing

In Part 1, we started with a brief introduction to ReactJS. Next, we created and ran a boilerplate project. In this installment, we will begin building a Task Management web app. The app will have two pages. The first is a placeholder Login page with a title and link to the application’s Home (Tasks) page

![Login Page](react-task-tutorial-01-login.png)

We will also create a placeholder Home page with a link to the Login page.

![Tasks Page](react-task-tutorial-01-tasks.png)

## **Key Concepts**

This series takes a just-in-time approach to React terminology and concepts. Ideas will be described in context as and when you need them. We will start by explaining JSX and routing.

### **JavaScript XML (JSX)**

Until the launch of React in 2013, developers strived to keep a strict separation between an application’s view (presentation) and model (code). Yes, you could do it, and development environments, such as PHP, legacy ASP, and Javascript, encouraged it. However, the cool kids like Apple (ObjectiveC), Google (Angular1x), and even Microsoft (ASP.net) were insisting on implementing the Model, View, Controller pattern, so the rest of us had to bow to their lead. Facebook’s React team had other ideas and created JSX. JSX horrified developers by mixing HTML and Javascript. Here is an example.

```javascript
const page = () => {
 return (
    <h1>Title</h1>
 );
}
```

Facebook justified JSX on the grounds of improved performance and modularity. Luckily for Facebook, it worked, and the rest is history.

### **Routing**

In a web application, routing refers to how a user navigates from point A to point B. In most cases, the user lands on the home page and clicks on a link to the page they are interested in. Once the target page is displayed, they can return to the home via the browser’s back button or explore links to other pages displayed on any page or through navigation elements, such as a top bar or side menu. Since React has no built-in router we will need to install one.

## **Adding Pages**

Before we can add new pages, open the src/App.js and remove the boilerplate code.

```javascript
import './App.css';
function App() {
 return (
   <div className="App"></div>
 );
}
export default App;
```

Now let’s create a folder called pages that contains two files Login.js and Tasks.js

![Tasks Page](react-task-tutorial-01-files.png)

Add the following code to Login.js.

```javascript
const Login = () => {
 return (
   <div>
     <h1>Login</h1>
     <p>Part 1: The Basics</p>
   </div>
 );
}
export default Login;
```

Next, update Tasks.js

```javascript
const Tasks = () => {
 return (
   <div>
     <h1>Tasks</h1>
     <p>TBD</p>
   </div>
 );
}
export default Tasks;
```

With the pages in place, we need to reference them from App.js.

```javascript
import Login from './pages/Login';
import Tasks from './pages/Tasks';
```

## Navigating Between Pages

In order to provide navigation, we need to install the React Router.

```bash
npm install react-router-dom
```

React Router includes a number of different Routers, but since our needs are pretty basic, we will use the BrowserRouter. This stores a link’s URL in the browser’s address bar and lets you navigate forward and backward to and from the page. In our App.js file, let’s add a reference to BrowserRouter.

```javascript
import { BrowserRouter } from "react-router-dom";
To use the BrowserRouter, we must also define Routes and Route elements, so we will also need to reference these elements.
import { BrowserRouter, Routes, Route } from "react-router-dom";
```

Now we will need to add the Browser router to the App function with a child Routes object. We will define the Routes for each page.

```javascript
function App() {
 return (
   <div className="App">
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Login />} />
         <Route path="/tasks" element={<Tasks />} />
       </Routes>
     </BrowserRouter>


   </div>
 );
}
```

To navigate between pages, we will need to add a link object to each page. First, let’s update Login.js

```javascript
import {  Link } from "react-router-dom";
const Login = () => {
 return (
   <div>
     <h1>Login</h1>
     <p>Part 1: The Basics</p>
     <Link to="/tasks">Go to tasks</Link>
   </div>
 );
}
export default Login;
```

Next, we update Tasks.js.

```javascript
import {  Link } from "react-router-dom";


const Tasks = () => {
 return (
   <div>
     <h1>Tasks</h1>
     <p>TBD</p>
     <Link to="/">Go to login</Link>
   </div>
 );
}


export default Tasks;
```

The final step is to launch the App with NPM Start. The following is displayed

## **Conclusion and What’s Next**

In this installment, we introduced you to the theory and practice of creating pages with JSX and how to navigate between them. Next, we removed our apps boilerplate markup and added two pages: Login and Tasks. Then, we installed the React Router and configured it to navigate from one page to the other. In the next installment, we will discuss user interaction and forms.
