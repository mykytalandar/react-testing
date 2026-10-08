# React Testing Library Practice

A learning project focused on testing React applications using **Jest** and **React Testing Library**.

The project contains practical examples of testing React components, user interactions, asynchronous operations, and API requests.

## Tech Stack

* React
* TypeScript
* Jest
* React Testing Library
* Testing Library Jest DOM
* Testing Library User Event
* Axios

## Testing Topics

This project covers the following testing concepts:

* Rendering React components
* Finding elements with Testing Library queries
* Testing user interactions
* Testing input events
* Testing component state changes
* Testing asynchronous operations
* Testing API requests
* Mocking Axios requests with Jest
* Testing loading and loaded states
* Testing rendered API data
* Jest mocks and mock functions
* DOM assertions with `jest-dom`

## Examples

### Component Rendering

Testing whether React components render the expected elements and content.

### User Interactions

Testing user actions such as:

* clicking buttons
* entering text into inputs
* changing input values

### Asynchronous Operations

Testing components that load data asynchronously and updating the UI after receiving a response.

### API Mocking

Axios requests are mocked with Jest so tests do not depend on a real API response.

Example:

```typescript
jest.mock('axios');

const mockedAxios = jest.mocked(axios);

mockedAxios.get.mockResolvedValue({
  data: [
    {
      id: 1,
      username: 'Bret',
      email: 'Sincere@april.biz',
    },
  ],
});
```

This allows the test to control the API response and verify how the component behaves.

## Running the Project

Clone the repository:

```bash
git clone https://github.com/mykytalandar/react-testing.git
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Run tests:

```bash
npm test
```

## Purpose

The main purpose of this project is to gain practical experience with **React Testing Library and Jest** and understand how to test React applications from the user's perspective.

The project is part of my frontend development learning path.

