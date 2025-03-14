# RecapAI

RecapAI is a React application built with Vite that allows users to process meeting transcripts, extract summaries and action items, and store meeting details. Users can also view and manage previously stored meetings.

## Features

- Process meeting transcripts to extract summaries and action items using GPT-3.
- Store meeting details in localStorage.
- View and manage previously stored meetings.
- Responsive design with Tailwind CSS.
- Overlay component for meeting selection.

## Technologies Used

- React
- Vite
- Tailwind CSS
- GPT-3 API
- localStorage

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/RecapAI.git
    cd RecapAI
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm run dev
    ```

## Usage

1. Open the application in your browser:
    ```sh
    http://localhost:3000
    ```

2. Enter a meeting title and either upload a text file or paste a transcript.

3. Click "Process Meeting" to extract the summary and action items.

4. View the results on the results page.

5. Use the overlay component to view and manage previously stored meetings.

## Components

### `MeetingPage.jsx`

- Handles the form submission for processing meeting transcripts.
- Navigates to the results page with the extracted summary and action items.
- Allows users to select previously stored meetings.

### `ResultPage.jsx`

- Displays the extracted summary and action items.
- Saves meeting details to localStorage.
- Allows users to copy the summary and action items to the clipboard.

### `MeetingsOverlay.jsx`

- Displays an overlay with a list of previously stored meetings.
- Allows users to select and delete meetings.

## Utils

### `chatGPT.js`

- Contains functions for interacting with the GPT-3 API.

### `files.js`

- Contains functions for reading files.

### `meetings.jsx`

- Contains the `MeetingsList` component for displaying a list of meetings.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [GPT-3](https://openai.com/)