# Random Users Directory

A React-based user directory application that fetches and displays user profiles using the Random Users API. The application provides a clean and responsive interface with search and pagination functionality.

## 🚀 Features

- Fetches user data from the Random Users API
- Displays users in responsive profile cards
- Search users by name or email
- Server-side pagination
- Loading state handling
- Error handling
- Responsive design for desktop, tablet, and mobile devices

## 🛠️ Tech Stack

- React.js
- Vite
- CSS3
- Random Users API

## 📦 Installation

1. Clone the repository

```bash
git clone <your-repository-url>
```

2. Navigate to the project directory

```bash
cd random-users-app
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

5. Open your browser and visit

```text
http://localhost:5173
```

## 📡 API Used

Random Users API:

```text
https://api.freeapi.app/api/v1/public/randomusers
```

## 📂 Project Structure

```text
src/
│
├── components/
│   ├── UserCard.jsx
│   └── SearchBar.jsx
│
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

## 🎯 Functionalities

### User Cards

Each card displays:

- Profile Picture
- Full Name
- Email Address
- Phone Number
- Age
- Gender
- Username
- Location

### Search

Users can search profiles by:

- First Name
- Last Name
- Full Name
- Email Address

### Pagination

- Previous and Next navigation
- Current page indicator
- Dynamic API fetching based on page number

## ⚡ Performance Considerations

- Server-side pagination reduces unnecessary data loading
- React state management for efficient re-rendering
- Conditional rendering for loading and error states

## 📸 Screenshots

Add screenshots of your application here.

## 🔗 Live Demo

Add your deployed application link here.

## 💻 GitHub Repository

Add your GitHub repository link here.

## 👨‍💻 Author

Rahul Kumar

Built as part of a React API Integration assignment.
