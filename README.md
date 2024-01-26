# YouTube Clone

This project is a YouTube Clone created with React, Tailwind CSS, Redux Toolkit, React Router DOM, and the YouTube API. The goal of the project was to replicate the look and feel of the YouTube user interface while incorporating additional features to enhance the user experience.

## Features

### 1. YouTube-Like UI

The user interface is designed to closely resemble the YouTube platform, providing a familiar and intuitive experience for users.

### 2. Fully Responsive

The application is fully responsive, ensuring compatibility with various devices and screen sizes.

### 3. Shimmer UI

Shimmer effects are implemented to enhance the user experience, providing a polished and visually appealing loading experience.

### 4. Infinite Scrolling

Infinite scrolling is incorporated to optimize user engagement, allowing seamless navigation through video content.

### 5. Optimized Search Feature

- **Live Suggestions:** As users type in the search bar, live suggestions are fetched from the YouTube API, offering real-time feedback.
- **Debouncing:** The search functionality uses debouncing to manage the number of API calls, improving performance and reducing unnecessary requests.
- **Caching:** Previous search suggestions are stored in the cache using Redux Toolkit, minimizing duplicate API calls.

### 6. N-Level Comment System

A sophisticated comment system, inspired by Reddit, is implemented, allowing users to engage in discussions at various levels.

### 7. Live Chat Feature

Users can participate in live chat-like discussions, where comments are loaded using API polling. The size of chats is limited to prevent page freezing and ensure a smooth user experience.

## Tech Stack

- **React:** Building the user interface and managing the application state.
- **Tailwind CSS:** Styling the components with a utility-first CSS framework.
- **Redux Toolkit:** State management for caching, handling search suggestions, and managing comments.
- **React Router DOM:** Navigating between different pages within the application.
- **YouTube API:** Fetching video data, search suggestions, and chat comments.

## Deployment

The application is deployed on Vercel. You can access the live demo [here](https://youtube-clone-nayana62.vercel.app/).

## Video Demonstration

[video](https://drive.google.com/file/d/1qU035pDH18OLLvPSAA53OBVtNtMw5kbD/view?usp=sharing)

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the development server with `npm start`.

Feel free to explore the codebase and contribute to the project!

