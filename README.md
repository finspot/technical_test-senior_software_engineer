# Technical test – Senior Software Engineer

## Content of this exercise

Welcome! Here you'll find the fundation of the exercise. It is a monorepo built around 2 packages: **client** and **server**. Fork-it! And make sure we get access to yours so we can start reviewing it once you're done.

### The server

The server is running an Apollo Server delivering a GraphQL API on port 3001. You'll need to change some of its code to make some new data available but don't expect you to change its core functions.

**Installation**

```sh
yarn
```

**Get started**

```sh
yarn start
```

**Query example**

```gql
query People {
  people(limit: 5) {
    id
    fullName
  }
}
```

**Note**

- Both `countPeople` and `people` have a filter argument built-in, providing a simple case-insensitive searching system.
- `people` has a cursur-based pagination system build-in.

### The client

The client contains a bunch of components and utility files that will help you through the making of your exercise.

## What we expect from you?

- [ ] A landing page that looks like this: https://www.figma.com/file/QSoIY3TnKYNzQSo5zZvGb8/technical_test-senior_software_engineer?node-id=0%3A1 (could be a SPA or static generated, your call)
- [ ] A dev server + compiler of your choice to run the provided client code
- [ ] It should use React + CSS or CSS modules or styled-components or ... as you wish (but we expect that you keep the current styling that uses styled-components)
- [ ] A pixel perfect integration following the grid system provided in Figma (the provided components are considered done and we don't expect you to invest time on them, but if you do, it'd be evaluated)
- [ ] Responsiveness (we'll ignore tablet)
- [ ] Proper use of HTML tags and their semantic
- [ ] Accessibility (as much as you can)
- [ ] A data provider using Apollo Client that consumed the GraphQL API provided in the **server** package
- [ ] A working pagination (using the cursor-based pagination beforementioned)
- [ ] A working search field (it should filter the table content, using the `filter` argument provided in the GraphQL API
- [ ] (in **server**) A new property `profilePicture: String!` on `People` that gives a random image using a third-party service like picsum, unsplash...

**Notes**

- You may preview all available pictos at https://finspot.github.io/picto/
- Typescript is optional
- No time limitation, but we'll ask how long it took you
- Have fun 🙂
