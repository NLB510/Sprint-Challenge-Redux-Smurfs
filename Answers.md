1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
  * Three Array/Object methods that don't produce side-effects would be .filter(), .map(). and .reduce(). The method we would use to create a new object and extend the properties of another would be Object.assign() or using the es6 spread operator. 

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
  * A single source of truth means there is always an original state, and that original state must be treated as immutable. All changes must be made on a copy off of a copy of the single source of truth. A store is an App’s single source of truth. It is the object that holds all of the state in an app. A reducer is a function that listens for signals for what type of change (action) are happening within the app, makes a copy of the previous state and then returns an updated version to the store. An action is an object the contains the signal the reducer is listening for in order to make state updates. The action is then called by the app via action creators wherever the change needs to happen. 

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
  * Application state is state that is necessary for the overall function of an app. Data that needs to be fetched from an api and potentially used in various parts of the app is a good example of application state. Component state is state that’s only important to that component and its children. A form with input value state is a good example. 

4.  What is middleware?
  * Middleware can be thought of as extensions to redux that intercepts actions before they are sent to the reducer, and running some logic with the data being passed through before typically sending it along to the reducer. 

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
  * Redux thunk is a middleware that allows us to asynchronously dispatch actions to the reducer from action creators.  For example, we can dispatch actions that change various states on the store while a data fetching goes through various stages. 

6.  Which `react-redux` method links up our `components` with our `redux store`?
  * The connect method.
