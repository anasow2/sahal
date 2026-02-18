
# Sahal - Somali Movie Streaming App

## 1. Project Description

**Sahal** is a modern, single-page web application built with Angular for browsing and streaming a curated collection of Somali cinema. It features a sleek, dark-themed, and highly interactive interface designed to provide an immersive and enjoyable movie-discovery experience for fans of Somali films worldwide.

The application is built using the latest frontend technologies, emphasizing a clean architecture, high performance with Angular's zoneless change detection, and a beautiful, responsive UI crafted with Tailwind CSS.

## 2. Key Features

-   **Stunning Dark-Mode UI:** A visually appealing interface that puts the focus on the movie posters and content.
-   **Dynamic Movie Discovery:** Users can browse movies from several curated sections:
    -   New This Week
    -   Most Watched
    -   Special Selections (Documentaries, Series, etc.)
-   **Instant Search:** A powerful, full-screen search modal allows users to find movies instantly by title, genre, or year.
-   **Detailed Movie Pages:** Each movie has its own dedicated page featuring:
    -   High-resolution poster
    -   Synopsis, genre, and release year
    -   Embedded movie trailer
    -   Full cast list
-   **Interactive Cast Biographies:** Clicking on a cast member's name opens a modal window displaying their photo and a brief biography, enriching the user's knowledge of Somali actors.
-   **Visual Star Ratings:** Movie ratings are displayed intuitively with a 5-star system that supports half-star increments for more accurate representation.
-   **Fully Responsive:** The layout is optimized for a seamless experience across desktops, tablets, and mobile devices.
-   **Modern Frontend Stack:** Built with standalone components, signals for state management, and modern Angular practices.

## 3. Technology Stack

-   **Framework:** Angular (v20+)
-   **State Management:** Angular Signals for reactive and efficient state management.
-   **Styling:** Tailwind CSS for a utility-first, responsive, and customizable design.
-   **Routing:** Angular Router with `withHashLocation` strategy for SPA navigation.
-   **Language:** TypeScript
-   **Architecture:**
    -   **Zoneless Application:** Utilizes `provideZonelessChangeDetection()` for improved performance.
    -   **Standalone Components:** Follows modern Angular architecture, eliminating the need for NgModules.
-   **Dependencies:** Leverages an `importmap` in `index.html` to load libraries like RxJS and Angular from a CDN (`esm.sh`), simplifying the development setup.

## 4. Application Structure

-   **`index.tsx`**: The main entry point that bootstraps the Angular application and sets up the router.
-   **`index.html`**: The main HTML file containing the Tailwind CSS setup, Google Fonts, Material Symbols, and the import map for dependencies.
-   **`src/app.component.ts`**: The root component, containing the main layout (header, router-outlet, footer).
-   **`src/home.component.ts`**: The component for the main landing page, displaying the hero section and lists of movies.
-   **`src/movie-detail.component.ts`**: The component for the movie details page, which loads movie data based on the route parameter.
-   **`src/movie.service.ts`**: An injectable service that acts as a mock backend, providing all the movie data and managing the search state for the application.

This project serves as an excellent example of a modern, feature-rich single-page application built with the latest Angular features and best practices.
