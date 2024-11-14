# **ReactJS for Angular Developers Part 2: User Interaction and Forms**

In the first part of this series, we discussed navigation and routing and examined the different approaches of Angular and React. Next, we created a placeholder React task management web app. The app had two pages Login and Tasks. Then, we installed the React Router and configured it to navigate from one page to the other.

Now, we have a foundation in place, we can build on it and add some basic functionality. In this article, we will add a form to the Login page.

![Login Page](react-task-tutorial-02-login.png)

The form enables a user to type an email and password. When the user presses the Submit button, the app checks the submitted credentials and authenticates the user. If the user’s credentials are valid, the application displays a message and navigates to the task page.

For the sake of simplicity, user credentials are stored in plain text in a Javascript file. In addition, some styles from a CSS template have been applied to the Login and Tasks files. All the files referenced in this article, and the sample React and Angular code are available from GitHub.

## **User Interaction with Angular Forms**

Like Routing, Angular supports user interaction with forms as part of its comprehensive approach to web application development. To complicate matters [Angular](https://angular.dev/guide/forms) has two different models for implementing forms: [Template-driven](https://angular.dev/guide/forms/template-driven-forms) and [Reactive](https://angular.dev/guide/forms/reactive-forms). As the name suggests, template-driven forms let you create forms using templates that resemble generic HTML forms. Reactive Forms takes a completely different, Angular-centric approach to forms management. This approach uses a combination of Typescript code and Angular Directives to build a form. Without going into details regarding the relative merits of each approach, Template-driven forms are regarded as simpler, and Reactive forms are considered the more complex option.

Despite their added complexity and steeper learning curve, Reactive forms offer a range of powerful and flexible features. This is why Reactive forms are the preferred option for Angular development. For this reason, we will use them to illustrate Angular form management. Since there are some striking similarities between Angular’s Reactive forms and React, using them in this example seems appropriate.

The first step in creating a Reactive form is to open the LoginComponent and add references to the ReactiveFormsModule, FormGroup, and FormControl. ReactiveFormsModule provides the required functionality. A FormGroup contains a group of FormControls and manages form data (state) and related events.

```javascript
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl} from "@angular/forms";
@Component({
 selector: 'app-login',
 standalone: true,
 imports: [ ReactiveFormsModule],
 templateUrl: './login.component.html',
 styleUrl: './login.component.scss'
})
```

Now we can declare loginForm as a new FormGroup object. loginForm has two formControls for the user’s email and password. By default, the controls are empty but can be pre-populated with data.

```javascript
export class LoginComponent implements OnInit {


 loginForm = new FormGroup({
   email: new FormControl(''),
   password: new FormControl(''),
 });


 constructor() { }
 ngOnInit(): void {}
}
```

Now we can add a Form to LoginComponent.html. The formGroup directive binds the form and each of its controls to the LoginForm object we declared.

```html
<div class="card">
 <h1>Part 2: Login</h1>
   <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
       <label for="email" >Email</label><br/>
       <input formControlName="email" id="email" required /><br/>
       <label for="password" >Password</label><br/>
       <input formControlName="password" type="password" /><br/>
       <button type="submit" class="btn btn-primary">Submit</button>
   </form>
</div>
```

Note that our example’s ngSubmit calls an undeclared onSubmit method. So before we can run this code, we need to add an onSubmit method to our component. The method queries the list of users and matches the supplied credentials; and, if a single match is returned, the method opens the Home (tasks) page.

```javascript
 onSubmit(){
   this.user = this.users.filter((user:any) => 
     user.email === this.loginForm.value.email && 
     user.password === this.loginForm.value.password)[0];
     if(this.user !== null )this.router.navigate(['/home']);
   }
}
```

## **Building React Forms**

In our React app, let’s start by editing Login.js (src/pages/Login.js). First, we will add the following references. The first reference is the file with our list of users. The last file is a CSS template. Both these files can be downloaded from GitHub.

```javascript
 onSubmit(){
   this.user = this.users.filter((user:any) => 
     user.email === this.loginForm.value.email && 
     user.password === this.loginForm.value.password)[0];
     if(this.user !== null )this.router.navigate(['/home']);
   }
}
```

Now, let’s add the necessary data to display a form.

```javascript
const Login = () => {
  return (
   <div className="card">
     <h1>Part 2:Login</h1>
      <form >
       <label>Email</label>
       <input
         type="email"
         name="username" 
         placeholder="Enter email"/>
         <br/>


       <label>Password</label>
        <input
         type="password"
         name="password" 
         placeholder="Password"/>


       <br/>
       <button type="submit">Login</button>
     </form>


   </div>
 );
}
```

## **Managing Local State**

Now we have a form, we need to have a mechanism for collecting data and managing user interactions. In React, data collected by an application is called local state. To manage and store local state, add a reference to React’s useState Hook.

```javascript
import { useState } from 'react';
```

In the Login() function, we declare variables to store the local state of the user’s credentials (email, password) and authenticated user profile. Each state variable is an array with two elements. The first element is the variable name that stores a local state value, such as email. The second is a reference to a function that updates the state using useState, such as setEmail.

```javascript
const Login = () => {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [user, setUser] = useState();
 …
}
```

## **UseState in Action**

After we have declared our state variables, we can use them to collect and display form data. Here, when a user enters or changes values in the Email field an event (e) is triggered. The event updates email by calling setEmail. When the value has been updated, the field’s value parameter displays the new local state of email.

```javascript
const Login = () => {
  return (
   <div className="card">
     <h1>Part 2:Login</h1>
      <form >
       <label>Email</label>
       <input
         type="email"
         name="username" 
         placeholder="Enter email"/>
         <br/>


       <label>Password</label>
        <input
         type="password"
         name="password" 
         placeholder="Password"/>


       <br/>
       <button type="submit">Login</button>
     </form>


   </div>
 );
}
```

## **Submitting and Reacting to Form Data**

Once we have a working form, we need a way to submit and authenticate the data. In this case, we need to add an onSubmit event that is triggered when the user clicks the Submit button. To ensure that the onSubmit event is not triggered each time the page loads or reloads, we add the e.preventDefault() method.

```javascript
<form onSubmit={(e) => {
 e.preventDefault();
 const currUser = Users.filter((user) => 
   user.email === email && user.password === password)[0];
    if(currUser){
      alert(`Email: ${email}\nPassword: ${password}`);
      setUser(currUser)
    }
 }}
```

When the user submits their credentials, the function declares a value called currentUser. currentUser queries the list of users and matches the supplied credentials. If the query matches a single user, a message is displayed. Then, setUser is called to add the profile to the component’s local state. Since the default value of the local state’s user object is Null, once it is updated with valid data, the function can display the Tasks page.

```javascript
<div className="card">
     <h1>Part 2:Login</h1>
     {user && (
       <Navigate to="/tasks" replace={true} />
     )}
    <form onSubmit={(e) => {
     …
```
