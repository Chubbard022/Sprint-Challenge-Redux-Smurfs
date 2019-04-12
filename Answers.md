1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    three methods that do not have side effects are .map, .filter, and .reduce. we use the assign method to create a new object and base that new object off another object we compare it to.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    in redux, the state ‘store’ is something that cannot be passed around as props but but instead the state is held within the redux store. To create a react redux application, there is the action, reducer and store. The actions are the interactions that are going to happen with the server and computer. The actions part of redux is telling the server what we want to do with its data, whether it’s getting, posting, putting, or deleting, all of these actions happen within the action section of redux. When we are getting an error, the actions will make sure to console log that error to help you debug those actions. The reducer is taking in all the actions, and manages the state depending on the actions that are being called. sense redux is where state is being updated, we pass state around and have to use the connect functionality to ensure that our actions get dispatched and then trigger the reducer which will update the state itself. The store is a way to bring down state for it to be passed around because of the provider that we wrap around App within the index.js file.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    application state is a top level state such as the redux store, and is something that can be easily passed around to any component. A component state is happening within a component meaning that it is updating the state within its component. A form is where we usually see the component state happening, and application state is like the reducer store within redux/

4.  What is middleware?
        middleware is allowing us to disrupt the normal flow between actions, reducers and updating the state. the middleware happens between the action and reducer sections of redux. is allows for synchronous calling of actions. it allows for a better flow of what actions should happen when something is triggered. 

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
        redux thunk allows for middleware to flow synchronously between actions. this replaces JavaScripts asynchronous behavior and allows for the promises to be created and consumed when we expect it.

6.  Which `react-redux` method links up our `components` with our `redux store`?
        the connect method allows us to connect the redux store to the component. we have to pass it a function saying what we want mapped from state to the props, giving us access to those values, second is an function from actions, and lastly passing in the component name. Doing all of this will allow for connection between components and the redux store.
