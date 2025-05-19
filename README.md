# React

- React is fast because of reconcilition and difference algorithm.

# Parcel

- Dev Build
- Creates Local Sever
- HMR (Hot Module Replacement)- Parcel Refresh Page Automatically.
- For HMR, Parcel Uses an Algorithm called File Watching Algorithm - Written in C++
- Caching, Faster Builds
- Tree Shaking - Remove unused code
- Minification
- Image Optimization
- Bundling
- Compressing
- Consistent Hashing ( way Generate filenames for output bundles)
- Code Splitting
- Differential Bundling - Support Of Older Browsers
- Diagnostic
- Error Handling
- Support HTTPS
- Different Dev and Prod Bundles

# JSX

- is a HTML LIKE Syntax developed by facebook users to create Elements in a developer friendly to code and readable makes developer work easy.
- JSX is not a part of react
- JSX is transpiled or compiled into react element by babel which is a javascript compiler.
- One important feature is it sanitizes the code - It prevents cross site attacking XSS. It Escapes the malicious data.

# React Component

- Two types of components - Class Based Component (OLD Way of writing code), Functional Component (NEW Way of writing code)
- Everything in a React is component.
- Functional Component - a function which returns jsx nothing but returns react element
- Component Composition - One component in another component

# Hook - useStae() and useEffect()

- A hook is normal java script function that reacts gives us.
- useState() used to create a state variable. - Named import.
- useEffect has an empty, dependencies and no dependency
- In empty dependency it will run only once
- In dependency it will run every time when the listed dependencies changes
- In no dependency it will run After every render. 

# Fetching Data From Backend to UI

- Two approaches to fetch data from backend
  - Loads -> API -> Render
  - Loads -> Render -> API -> Render
- Second Approach is best for better UX.

# React Class Component Life cycle

- When the class is loaded : constructor is called first then render method is called after rendering then component did mount is called.

# Mounting phase in React
- React has two phases in mounting - 1. Render phase 2. Commit Phase
- Render phase consists of constructor calling and rendering
- In commit phase react updates DOM and component did mount is called.
- To improve the performance, react batches the rendering phase of instances and then do the DOM manipulation. 
