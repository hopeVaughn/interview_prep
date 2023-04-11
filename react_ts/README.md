# React and TypeScript Interview Questions

## Questions

1. [What is TypeScript and why is it beneficial when working with React?](#what-is-typescript)

2. [How do you create a functional component](#how-to-create-a-functional-component) in React using TypeScript? Please provide a code example

3. [What are TypeScript interfaces](#what-are-interfaces) and how can they be used for defining React component props?

4. [Explain the difference between the "any" and "unknown"](#explain-any-unknown) types in TypeScript. Provide examples of when to use each.

5. [How do you use TypeScript to define the state of a React class component](#how-to-define-state)? Provide a code example.

6. [Describe the process of creating and using custom hooks](#creating-custom-hooks) with TypeScript in a React application.

7. [What is the purpose of TypeScript's "keyof" operator](#keyof), and how can it be helpful in a React application?

8. [How do you use TypeScript to create a higher-order component](#hoc) (HOC) in React? Provide a code example.

9. [Explain the role of "type guards"](#typegaurds) in TypeScript and provide an example of how they can be used in a React application.

10. [How would you handle a situation where you need to integrate third-party libraries](#third-party-libraries) that don't have TypeScript typings in your React project?

11. [Can you show an example of how to use TypeScript's "Partial" utility type](#partial-utility-type) in the context of a React component's props? Provide a code example.

12. [How do you handle events](#events), such as onClick or onChange, in React with TypeScript? Show a code example.

13. [How do you use TypeScript to create and work with context](#context) in a React application? Provide a code example.

14. [Explain the purpose of "Discriminated Unions"](#discriminated-unions) in TypeScript, and provide an example of how they can be used to manage different types of actions in a React application using Redux.

15. [What are some best practices for managing types](#managing-types) in a large-scale React application built with TypeScript?

## Answers

<a id="what-is-typescript"></a>

### 1. What is TypeScript and why is it beneficial when working with React? <sup><sub>[top](#questions)</sub></sup>

TypeScript is a programming language and a superset of JavaScript that adds optional static type checking to JavaScript. It was developed by Microsoft and released in 2012. TypeScript provides all the features of JavaScript, along with additional features such as type annotations, interfaces, enums, classes, and more. These features help developers catch errors before runtime, provide better code readability and maintainability, and increase developer productivity.

When working with React, TypeScript can be beneficial in several ways:

- Catching errors before runtime: TypeScript helps catch errors before runtime by providing type checking and compile-time error checking.
- Better code readability and maintainability: Type annotations in TypeScript help developers understand the codebase better and make it easier to maintain the codebase.
- Improved developer productivity: TypeScript helps increase developer productivity by providing better tooling support, such as code completion, code navigation, and refactoring tools.

Overall, TypeScript is beneficial when working with React as it helps catch errors early, improves code readability and maintainability, and increases developer productivity.

<a id="how-to-create-a-functional-component"></a>

### 2. How do you create a functional component in React using TypeScript? Please provide a code example <sup><sub>[top](#questions)</sub></sup>

To create a functional component in React using TypeScript, you can define the component's props using an interface and then use that interface to specify the props type for the component. Here's an example:

```tsx
import React from 'react';

interface Props {
  name: string;
  age: number;
}

const MyComponent: React.FC<Props> = ({ name, age }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default MyComponent;
```

In this example, we're defining a functional component called MyComponent that takes in two props: name and age. We're defining the Props interface with two properties: name, which is of type string, and age, which is of type number.

We're then specifying the props type for the component using the React.FC<Props> type. This tells TypeScript that MyComponent is a functional component that takes in props of type Props.

Finally, we're using destructuring to extract the name and age props from the Props object, and then rendering them in the component's JSX.

<a id="what-are-interfaces"></a>

### 3. What are TypeScript interfaces and how can they be used for defining React component props? <sup><sub>[top](#questions)</sub></sup>

TypeScript interfaces are used to define the shape of an object in TypeScript. They describe the properties and methods that an object should have. An interface is a way to define a custom type in TypeScript.

When working with React components, interfaces can be used to define the props that a component should accept. This provides a way to define the types of props that a component expects, which helps catch errors early and makes the code more maintainable.

Here's an example of how you can define a TypeScript interface to define the props of a React component:

```tsx
interface MyComponentProps {
  name: string;
  age: number;
}

const MyComponent: React.FC<MyComponentProps> = ({ name, age }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};
```

In this example, we've defined an interface called MyComponentProps, which has two properties: name of type string and age of type number. We then use this interface to define the props type for the MyComponent component using the React.FC type.

Now, whenever we use the MyComponent component, we can pass in props that conform to the MyComponentProps interface. For example:

```tsx
<MyComponent name='John Doe' age={30} />
```

Here, we're passing in name and age props that are both of the correct types according to the MyComponentProps interface. If we were to pass in props that didn't match the interface, TypeScript would give us a compile-time error, which helps catch errors early and improve code quality.

<a id="explain-any-unknown"></a>

### 4. Explain the difference between the "any" and "unknown" types in TypeScript. Provide examples of when to use each. <sup><sub>[top](#questions)</sub></sup>

In TypeScript, the any and unknown types are used to represent values whose types are unknown or dynamically determined at runtime. However, there are some differences between the two types that can affect how they are used.

The any type represents a value that can be of any type. It is similar to using plain JavaScript and turning off TypeScript's type checking. Using the any type is discouraged, as it can lead to runtime errors and makes the code harder to maintain. Here's an example of using the any type:

```tsx
let myVariable: any = 'Hello, world!';
myVariable = 42;
myVariable = true;
```

In this example, we've defined a variable called myVariable with the type any. We can assign any value to this variable, regardless of its type. This can be useful in situations where the type of a value is not known, but it should be used with caution as it can lead to errors and makes the code less maintainable.

The unknown type is a safer alternative to the any type. It represents a value whose type is unknown and provides more type safety than the any type. You can think of unknown as the type-safe counterpart of any. Here's an example of using the unknown type:

```tsx
let myVariable: unknown = 'Hello, world!';
if (typeof myVariable === 'string') {
  console.log(myVariable.toUpperCase());
}
```

In this example, we've defined a variable called myVariable with the type unknown. We can't assign any value to this variable, as we could with the any type. Instead, we must check the type of myVariable before using it. In this example, we're checking if myVariable is a string before calling the toUpperCase method on it. This provides more type safety and helps catch errors at compile-time rather than runtime.

In summary, the any type represents a value that can be of any type and is not recommended, while the unknown type represents a value whose type is unknown and provides more type safety. You should use the unknown type when you're not sure of a value's type and need to perform type checks before using it.

<a id="how-to-define-state"></a>

### 5. How do you use TypeScript to define the state of a React class component? Please provide a code example <sup><sub>[top](#questions)</sub></sup>

In a React class component, you can define the state using a TypeScript interface. Here's an example:

```tsx
interface MyComponentState {
  count: number;
}

class MyComponent extends React.Component<{}, MyComponentState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}
```

In this example, we've defined an interface called MyComponentState, which has one property: count of type number. We then use this interface to define the state type for the MyComponent class component.

We've defined the MyComponent class component as a generic type by passing in {} for the props and MyComponentState for the state. We've also defined a constructor that initializes the state with a count property set to 0.

We're then rendering the count state property in the component's JSX. We've also added a button that updates the state's count property when clicked.

Using TypeScript to define the state of a React class component provides more type safety and helps catch errors at compile-time. It also makes the code more maintainable and easier to understand.

<a id="creating-custom-hooks"></a>

### 6. How do you create custom React hooks in TypeScript? Please provide a code example <sup><sub>[top](#questions)</sub></sup>

To create a custom React hook in TypeScript, you can define a function that returns an object with the hook's state and functions. Here's an example:

```tsx
import { useState, useEffect } from 'react';

interface WindowSize {
  width: number | undefined;
  height: number | undefined;
}

function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

export default useWindowSize;
```

In this example, we're defining a custom hook called useWindowSize that returns an object with the state of the window's size. We're defining a WindowSize interface with two properties: width and height, both of type number or undefined.

We're then defining a function called useWindowSize that uses the useState and useEffect hooks from React to update the state of windowSize when the window is resized. We're also adding an event listener to the window to listen for resize events and updating the state accordingly.

Finally, we're returning the windowSize object from the hook.

Using TypeScript to define the custom hook's return type provides more type safety and helps catch errors at compile-time. It also makes the code more maintainable and easier to understand.

<a id="keyof"></a>

### 7. What is the keyof operator in TypeScript? Please provide a code example <sup><sub>[top](#questions)</sub></sup>

The keyof operator in TypeScript is used to get the union type of all possible keys in an object. It returns a string or numeric literal union of the keys of a given type.

Here's an example of how to use the keyof operator:

```tsx
interface MyObject {
  name: string;
  age: number;
  email: string;
}

type MyObjectKeys = keyof MyObject;

// MyObjectKeys will be "name" | "age" | "email"
```

In this example, we're defining an interface called MyObject with three properties: name, age, and email. We're then using the keyof operator to create a type called MyObjectKeys that represents a union of all possible keys in MyObject. The MyObjectKeys type will be a string or numeric literal union of the keys of MyObject, in this case, it will be "name" | "age" | "email".

You can use the keyof operator to create more generic functions and types in TypeScript. For example, you can use it to create a type-safe way of accessing properties of an object:

```tsx
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const myObject = { name: 'John', age: 30, email: 'john@example.com' };
const name = getProperty(myObject, 'name'); // name is of type string
const age = getProperty(myObject, 'age'); // age is of type number
const email = getProperty(myObject, 'email'); // email is of type string
const invalid = getProperty(myObject, 'invalid'); // TypeScript error: Argument of type 'invalid' is not assignable to parameter of type 'keyof { name: string; age: number; email: string; }'
```

In this example, we're defining a function called getProperty that takes in an object obj and a key, and returns the value of the specified key from the object. We're using the keyof operator to ensure that the key argument is a valid key of the obj object.

This provides more type safety and helps catch errors at compile-time. If we were to pass in an invalid key, TypeScript would give us a compile-time error, which helps improve code quality.

<a id="hoc"></a>

### 8. How do you use TypeScript to create a higher-order component (HOC)? Please provide a code example <sup><sub>[top](#questions)</sub></sup>

To create a higher-order component (HOC) in TypeScript, you can define a function that takes in a component as an argument and returns a new component with additional props. Here's an example:

```tsx
import React from 'react';

interface WithUserProps {
  user: string;
}

function withUser<T extends WithUserProps>(
  WrappedComponent: React.ComponentType<T>
) {
  const WithUser: React.FC<Omit<T, keyof WithUserProps>> = (props) => {
    const user = 'John Doe'; // get user from some source
    return <WrappedComponent {...(props as T)} user={user} />;
  };
  return WithUser;
}

interface MyComponentProps {
  name: string;
  age: number;
  user: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ name, age, user }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>User: {user}</p>
    </div>
  );
};

const MyComponentWithUser = withUser(MyComponent);

export default MyComponentWithUser;
```

In this example, we're defining a higher-order component called withUser that takes in a component as an argument and returns a new component with an additional user prop. We're defining an interface called WithUserProps that has one property: user of type string.

We're using the React.ComponentType type to ensure that the WrappedComponent argument is a valid React component. We're also using a generic type parameter T that extends the WithUserProps interface to ensure that the returned component has a user prop.

Inside the withUser function, we're defining a new component called WithUser that takes in all props except for user using the Omit utility type. We're then defining a user variable and rendering the WrappedComponent with the user prop added.

Finally, we're using the MyComponentWithUser component, which is the result of calling withUser with the MyComponent component as an argument.

Using TypeScript to create a higher-order component provides more type safety and helps catch errors at compile-time. It also makes the code more maintainable and easier to understand.

<a id="typegaurds"></a>

### 9. Explain the role of "type guards" in TypeScript and provide an example of how they can be used in a React application. <sup><sub>[top](#questions)</sub></sup>

In TypeScript, "type guards" are used to check the type of a value at runtime and narrow down the type to a more specific type. They allow developers to write code that handles different types of data in a type-safe way.

Type guards can be used in a React application to handle different types of data passed as props to components. Here's an example:

```tsx
interface MyComponentProps {
  name: string;
  age: number | undefined;
}

const MyComponent: React.FC<MyComponentProps> = ({ name, age }) => {
  if (age === undefined) {
    return (
      <div>
        <p>Name: {name}</p>
        <p>Age: Unknown</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
      </div>
    );
  }
};
```

In this example, we're defining a component called MyComponent that takes in two props: name of type string and age of type number or undefined.

We're using a type guard to check if age is undefined. If it is, we're rendering a message that says the age is unknown. If it's not undefined, we're rendering the actual age.

Using a type guard in this way provides more type safety and helps catch errors at compile-time. It also makes the code more maintainable and easier to understand.

<a id="third-party-libraries"></a>

### 10. How would you handle a situation where you need to integrate third-party libraries that don't have TypeScript typings in your React project? <sup><sub>[top](#questions)</sub></sup>

When integrating third-party libraries into a TypeScript React project that don't have TypeScript typings, there are a few options available:

1. Use the library's type definitions if available: Some third-party libraries may have type definitions available on DefinitelyTyped, a repository of TypeScript type definitions for popular libraries. If the library you want to use has type definitions available, you can install them using npm or yarn. For example, if you wanted to install the jquery type definitions, you could run npm install --save-dev @types/jquery.

2. Use TypeScript's any type: You can use the any type to represent a value whose type is unknown. While using any can reduce type safety, it can be a useful option when integrating third-party libraries that don't have type definitions.

3. Use TypeScript's unknown type: Similar to any, you can use the unknown type to represent a value whose type is unknown. However, unlike any, you need to narrow down the type of unknown values before using them in your code. This can provide more type safety than using any.

4. Write your own type definitions: If the third-party library you want to use doesn't have type definitions available, you can write your own. You can create a d.ts file in your project's types directory and define the types for the library. This can be a time-consuming process, but it can provide the most type safety and make the code more maintainable in the long run.

Overall, it's important to balance type safety with the need to use third-party libraries. While it's always best to use TypeScript's type system when possible, sometimes it's not feasible. In those cases, using any or unknown can be useful, but it's important to be mindful of the potential trade-offs.

<a id="partial-utility-type"></a>

### 11. Can you show an example of how to use TypeScript's "Partial" utility type in the context of a React component's props? Provide a code example. <sup><sub>[top](#questions)</sub></sup>

In TypeScript, the Partial utility type is used to make all properties of a given type optional. This can be useful in the context of a React component's props when you want to allow certain props to be optional.

Here's an example:

```tsx
interface MyComponentProps {
  name: string;
  age: number;
  email: string;
}

const MyComponent: React.FC<Partial<MyComponentProps>> = ({
  name,
  age,
  email,
}) => {
  return (
    <div>
      <p>Name: {name || 'Unknown'}</p>
      <p>Age: {age || 'Unknown'}</p>
      <p>Email: {email || 'Unknown'}</p>
    </div>
  );
};
```

In this example, we're defining a component called MyComponent with three required props: name, age, and email. We're using the Partial utility type to make all of these props optional.

Inside the component, we're using the || operator to provide default values for the props in case they're not passed in. This ensures that the component renders correctly even if some props are missing.

Using Partial in this way provides more flexibility when using the component and allows certain props to be optional, which can be useful in certain scenarios.

<a id="events"></a>

### 12. How do you handle events, such as onClick or onChange, in React with TypeScript? Show a code example. <sup><sub>[top](#questions)</sub></sup>

To handle events in React with TypeScript, you can define the type of the event object and pass it as an argument to the event handler function. Here's an example:

```tsx
import React, { useState } from 'react';

interface MyComponentProps {
  name: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ name }) => {
  const [count, setCount] = useState<number>(0);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCount(count + 1);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
      <input type='text' onChange={handleChange} />
    </div>
  );
};

export default MyComponent;
```

In this example, we're defining a component called `MyComponent` that takes in a prop called `name`. We're also defining a state variable called `count` and initializing it to 0 using the `useState` hook.

We're defining two event handler functions: `handleClick` for the button's onClick event and `handleChange` for the input's onChange event. We're passing in the event object as an argument to both functions and defining their types using `React.MouseEvent` and `React.ChangeEvent` respectively.

In the component's JSX, we're rendering the `name` prop, the count state variable, a button with the `handleClick` event handler, and an input with the `handleChange` event handler.

Using TypeScript to define the types of event objects provides more type safety and helps catch errors at compile-time. It also makes the code more maintainable and easier to understand.

<a id="context"></a>

### 13. How do you use TypeScript to create and work with context in a React application? Provide a code example. <sup><sub>[top](#questions)</sub></sup>

In a React application, context is a way to share data between components without having to pass the data through props. TypeScript can be used to create and work with context by defining types for the context value and provider.

Here's an example:

```tsx
import React, { createContext, useContext, useState } from 'react';

interface MyContextValue {
  count: number;
  increment: () => void;
}

const MyContext = createContext<MyContextValue | undefined>(undefined);

const MyProvider: React.FC = ({ children }) => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  };

  const contextValue: MyContextValue = {
    count,
    increment,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

const MyComponent: React.FC = () => {
  const contextValue = useContext<MyContextValue | undefined>(MyContext);

  if (!contextValue) {
    throw new Error('MyComponent must be used within a MyProvider');
  }

  const { count, increment } = contextValue;

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export { MyProvider, MyComponent };
```

In this example, we're defining a context called `MyContext` with a type of `MyContextValue`, which has two properties: `count` of type `number` and increment of type `() => void`.

We're also defining a provider called `MyProvider` that uses the `useState` hook to define a count state variable and an `increment` function that updates the `count` variable. We're creating a `contextValue` object with the `count` and `increment` properties and passing it to the `MyContext.Provider` component as the value.

We're also defining a component called `MyComponent` that uses the `useContext` hook to access the `MyContext` context value. We're checking that the context value is not undefined, throwing an error if it is. We're then rendering the `count` value and a button with the `increment` function as the event handler.

Using TypeScript to define the types of the context value and provider provides more type safety and helps catch errors at compile-time. It also makes the code more maintainable and easier to understand.

<a id="discriminated-unions"></a>

### 14. Explain the purpose of "Discriminated Unions in TypeScript, and provide an example of how they can be used to manage different types of actions in a React application using Redux. <sup><sub>[top](#questions)</sub></sup>

In TypeScript, "Discriminated Unions" (also known as "Tagged Unions" or "Algebraic Data Types") is a pattern that allows you to create a union type that includes a discriminator property to distinguish between the different members of the union.

In the context of a React application using Redux, discriminated unions can be used to manage different types of actions. Each action has a type and payload property, and the type property is used as the discriminator property.

Here's an example:

```tsx
interface IncrementAction {
  type: 'INCREMENT';
  payload: {
    amount: number;
  };
}

interface DecrementAction {
  type: 'DECREMENT';
  payload: {
    amount: number;
  };
}

type MyAction = IncrementAction | DecrementAction;

function reducer(state: number, action: MyAction) {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.payload.amount;
    case 'DECREMENT':
      return state - action.payload.amount;
    default:
      return state;
  }
}

const MyComponent: React.FC = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  const handleIncrement = () => {
    dispatch({
      type: 'INCREMENT',
      payload: {
        amount: 1,
      },
    });
  };

  const handleDecrement = () => {
    dispatch({
      type: 'DECREMENT',
      payload: {
        amount: 1,
      },
    });
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default MyComponent;
```

In this example, we're defining two interfaces: `IncrementAction` and `DecrementAction`, which represent the different types of actions that can be dispatched to the reducer. Each interface has a `type` property that is a string literal type (`'INCREMENT'` or `'DECREMENT'`) and a `payload` property that is an object containing data relevant to the action.

We're also defining a union type called `MyAction`, which includes both `IncrementAction` and `DecrementAction`.

We're defining a reducer function that takes in a `state` of type `number` and an action of type `MyAction`. We're using a `switch` statement with the `type` property of the `action` object as the discriminator property to handle the different types of actions.

We're defining a component called `MyComponent` that uses the `useReducer` hook to manage the state of the `count` variable. We're defining two event handler functions (`handleIncremen`t and `handleDecrement`) that dispatch the appropriate action to the reducer.

Using discriminated unions in this way provides more type safety and helps catch errors at compile-time. It also makes the code more maintainable and easier to understand, as each action is clearly defined and managed in a centralized way.

<a id="managing-types"></a>

### 15. What are some best practices for managing types in a large-scale React application built with TypeScript? <sup><sub>[top](#questions)</sub></sup>

Here are some best practices for managing types in a large-scale React application built with TypeScript:

1. Use interfaces to define your data structures: Interfaces provide a way to define the shape of your data structures and can be reused across your application. This helps to ensure consistency and makes your code more maintainable.

2. Use types to define your function signatures: Types can be used to define the input and output types of your functions. This provides more type safety and helps catch errors at compile-time.

3. Use generics to create reusable components and functions: Generics provide a way to create reusable components and functions that can work with a variety of data types. This can help reduce code duplication and make your code more maintainable.

4. Use namespaces or modules to organize your types: Namespaces or modules can be used to organize your types into logical groups. This helps to reduce naming conflicts and makes it easier to find and use the types you need.

5. Use type aliases to create more descriptive type names: Type aliases provide a way to create more descriptive type names that make your code easier to understand. For example, you could create a type alias called User instead of using an interface called IUser.

6. Use type guards to narrow down types: Type guards can be used to narrow down the type of a value at runtime. This can provide more type safety and help catch errors at compile-time.

7. Use third-party type definitions: There are many third-party type definitions available for popular libraries and frameworks. Using these type definitions can save you time and help ensure consistency across your application.

By following these best practices, you can ensure that your TypeScript code is well-organized, maintainable, and provides the maximum amount of type safety.
