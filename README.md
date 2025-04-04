﻿# Countries-API

 <p>
    This project is a React application built with Parcel, designed to explore and display detailed information about countries worldwide. It leverages the REST Countries API to fetch data for approximately 250 countries. The application provides an interactive user interface where users can browse country details, search for specific countries, filter by region, and seamlessly navigate between countries using border information.
  </p>

  <h2>Key Features Implemented:</h2>

  <ul>
    <li>
      <strong>Country Listing:</strong> Displays a list of countries fetched from the REST Countries API, showing basic information such as name, population, region, and capital.
    </li>
    <li>
      <strong>Detailed Country View:</strong> Upon clicking a country, a detailed page is displayed, showcasing comprehensive information, including:
      <ul>
        <li>Country Name (Native Name)</li>
        <li>Population</li>
        <li>Region and Subregion</li>
        <li>Capital City</li>
        <li>Top Level Domain</li>
        <li>Currencies</li>
        <li>Languages</li>
        <li>Border Countries (with clickable links to view details of those countries)</li>
      </ul>
    </li>
    <li>
      <strong>Search Functionality:</strong> Allows users to search for countries by name, enabling quick access to specific country details.
    </li>
    <li>
      <strong>Region Filtering:</strong> Provides a dropdown menu to filter countries by region (e.g., Africa, Americas, Asia, Europe, Oceania).
    </li>
    <li>
      <strong>Dynamic Border Navigation:</strong> Users can click on border countries listed in the detailed view to navigate to the details of those bordering countries, creating a seamless exploration experience.
    </li>
    <li>
      <strong>Dark Mode/Light Mode:</strong> Implemented a custom theme hook (<code>useTheme</code>) to allow users to switch between dark and light modes, enhancing user accessibility and preference.
    </li>
    <li>
      <strong>Responsive Design:</strong> Ensures the application is usable across various screen sizes and devices.
    </li>
  </ul>

  <h2>Technologies and Concepts Learned:</h2>

  <ul>
    <li>
      <strong>React:</strong> Building a dynamic and interactive user interface using React components.
    </li>
    <li>
      <strong>JSX:</strong> Writing declarative UI components using JSX syntax.
    </li>
    <li>
      <strong>Babel:</strong> Transpiling modern JavaScript (ES6+) into browser-compatible code.
    </li>
    <li>
      <strong>Parcel:</strong> Using Parcel as a zero-configuration bundler for efficient development and production builds.
    </li>
    <li>
      <strong>Fetching Multiple API Requests:</strong> Handling asynchronous API calls to fetch data for countries and their borders.
    </li>
    <li>
      <strong>State Management (useState):</strong> Managing component state to update UI elements dynamically.
    </li>
    <li>
      <strong>Effect Hooks (useEffect):</strong> Performing side effects like data fetching and DOM manipulation in functional components.
    </li>
    <li>
      <strong>Custom Hooks:</strong> Creating reusable logic with custom hooks, such as <code>useTheme</code> for managing dark/light modes.
    </li>
    <li>
      <strong>Conditional Rendering:</strong> Displaying different UI elements based on data and user interactions.
    </li>
    <li>
      <strong>Component Composition:</strong> Building complex UIs by composing smaller, reusable components.
    </li>
    <li>
      <strong>Handling Asynchronous Operations:</strong> Implementing error handling and loading states for API requests.
    </li>
    <li>
      <strong>Array Methods:</strong> Using array methods like <code>map</code>, <code>filter</code>, and <code>find</code> for data manipulation.
    </li>
  </ul>

  <h2>Project Deployment:</h2>

  <p>
    This project is deployed on Netlify:
    <br>
    <a href="https://countriesapi-production.netlify.app/">Project Link</a>
  </p>
