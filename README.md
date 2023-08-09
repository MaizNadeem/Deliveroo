![Banner Image](https://github.com/MaizNadeem/Deliveroo-2.0/blob/main/Screenshots/Deliveroo-Banner.png)

# Deliveroo App

Deliveroo Clone with React Native Expo (React Navigation, Redux, Tailwind CSS & Firebase)

## Installation

To install the Deliveroo app on your Android device, follow these steps:

- Download the APK file from the following link: [Download APK](https://drive.google.com/file/d/1yGeEmzMSG1cvEjTx2Am3kkB4xIG3apDv/view?usp=drive_link)
- Once the APK is downloaded, open it on your Android device.
- If prompted, allow the installation of apps from unknown sources in your device settings.
- Follow the on-screen instructions to install the app.
- Once the installation is complete, you can open the app and start using the Deliveroo Clone with React Native!

Please note that this installation method is for Android devices only.

## About the Project

The "Deliveroo" app is a React Native Expo application for food delivery. It utilizes a variety of technologies to create a comprehensive solution. Here's an overview of the project:

### Project Description

The "Deliveroo" app aims to provide a seamless food delivery experience to users. It offers a range of screens to facilitate different functionalities, including:

- **Splash Screen:**		Initial screen with branding and loading indicators.
- **Login and Signup Screens:**	Enable users to create accounts or authenticate for personalized features.
- **Dashboard Screen:**		Main screen to browse, search restaurants, explore menus, and place orders.
- **Basket Screen:**		Display items in the user's basket for order review and modification.
- **Profile Screen:**		Manage personal info, view order history, and customize preferences.
- **Restaurant Screen:**	Detailed info about a specific restaurant, including menu, reviews, and location.
- **Delivery Screen:**		Track the status and progress of ongoing food delivery, including estimated arrival time.

## Screenshots

<div style="display: inline_block" align="center">
<br>
	<img align="center" alt="Deliveroo" width="180" src="https://github.com/MaizNadeem/Deliveroo-2.0/blob/main/Screenshots/4.jpg">
	<img align="center" alt="Deliveroo" width="180" src="https://github.com/MaizNadeem/Deliveroo-2.0/blob/main/Screenshots/5.jpg">
	<img align="center" alt="Deliveroo" width="180" src="https://github.com/MaizNadeem/Deliveroo-2.0/blob/main/Screenshots/6.jpg">
	<img align="center" alt="Deliveroo" width="180" src="https://github.com/MaizNadeem/Deliveroo-2.0/blob/main/Screenshots/7.jpg">
</div>
<br>

## Technologies

![React](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37)
![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFC900?style=for-the-badge&logo=Firebase&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Google Cloud](https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white)
![Apollo-GraphQL](https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql)
![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)

### Front-end:
- **React Native:** A popular JavaScript framework for building native mobile applications.
- **Redux:** A state management library that helps manage the app's global state and facilitates data flow between components.
- **React Navigation:** A routing and navigation library for React Native that allows seamless navigation between different screens.
- **Tailwind CSS:** A utility-first CSS framework used for styling the app's user interface.

### API:
- **Google Maps (Cloud API):** An API provided by Google Maps that enables integration with maps and location-based services.

### Back-end (Firebase):
- **Firestore:** A NoSQL database provided by Firebase for storing and syncing data in real-time.
- **Firebase Authentication:** Firebase service for user authentication, enabling users to sign up and log in securely.
- **Storage Bucket:** Firebase's storage service for storing and serving user-generated content like images and videos.
- **Cloud Functions:** Serverless functions that run in response to events in Firebase, allowing custom server-side logic.
- **GraphQL:** A query language and runtime that enables efficient communication between the client and server, reducing unnecessary data transfers and improving performance.
- **Node JS:** A server-side JavaScript runtime that powers the backend server of the app, handling authentication, data retrieval, and server-side operations.

## Getting Started

### Run Locally

Install this project with expo using git-cli.

Clone the project

```bash
git clone https://github.com/MaizNadeem/Deliveroo-2.0.git
```

Change directory

```bash
cd Deliveroo-2.0
```

Install dependencies

```bash
npm install
```

Update the `DeliveryScreen.js` file with your own Google Maps API key:

1. Open the file located at `Deliveroo-2.0/screens/DeliveryScreen.js`.
2. Look for the line `const apiKey = process.env.GOOGLE_MAPS_API_KEY;`.
3. Replace `process.env.GOOGLE_MAPS_API_KEY` with your API key:

```javascript
const apiKey = "YOUR_API_KEY";
```

4. Replace `"YOUR_API_KEY"` with your actual Google Maps API key obtained from Google Cloud Platform (cloud.google.com).
5. Save the file after making the changes.

Remember to handle sensitive information securely and avoid sharing API keys publicly.

It's all! You can start the expo server now for development:

```bash
npx expo start
```

## Contact

Maiz - contact.maiznadeem@gmail.com

Project Link: [https://github.com/MaizNadeem/Deliveroo-2.0.git](https://github.com/MaizNadeem/Deliveroo-2.0.git)

---