# 📰 The Hide News Online

<div align="center">

![The Hide News Online Banner](https://img.shields.io/badge/The%20Hide%20News-Online-red?style=for-the-badge&logo=news&logoColor=white)

### *Stay Informed, Stay Ahead* 🚀

A modern, feature-rich news platform built with React and Firebase, offering real-time news updates with a seamless user experience.

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Click_Here-success?style=for-the-badge)](https://projectnewsonline-75378.web.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/TusharChow20)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/tusharchowdhury20211/)

</div>

---

## ✨ Features

<div align="center">

| 🔐 Authentication | 📱 Responsive Design | 🎨 Modern UI | 🔔 Real-time Updates |
|:---:|:---:|:---:|:---:|
| **Secure Login** | **Mobile-First** | **Sleek Interface** | **Live News Feed** |

</div>

### 🎯 Core Features

- 🔒 **Secure Authentication System**
  - Email/Password registration and login
  - Email verification for enhanced security
  - Google OAuth integration
  - GitHub OAuth integration
  - Password strength validation
  - Private route protection
  
- 📰 **News Management**
  - Dynamic news categories
  - Latest news section
  - Detailed news view
  - Category-based news filtering
  - News card components
  
- 📧 **Email Verification**
  - Automatic verification email on registration
  - Resend verification option
  - Login blocked for unverified users
  
- 🎨 **Beautiful User Interface**
  - Modern, clean design with Tailwind CSS
  - Responsive layout for all devices
  - Smooth animations with Lottie
  - Professional alerts with SweetAlert2
  - Left and right navigation sidebars
  
- 🔔 **Smart Notifications**
  - Real-time error feedback with animations
  - Success messages with custom styling
  - User-friendly error messages
  - Loading states with Lottie animations
  
- 🛡️ **Enhanced Security**
  - Protected routes with PrivateRoutes
  - Session management
  - Secure Firebase authentication
  - Password validation with regex

- 🏗️ **Multiple Layouts**
  - HomeLayout for main pages
  - AuthLayout for login/register
  - NewsLayout for news details
  
- 🧭 **Advanced Routing**
  - React Router DOM v7
  - Protected routes
  - Dynamic category routes
  - News detail routes with parameters

---

## 🛠️ Tech Stack

<div align="center">

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### Backend & Database
![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)
![Firebase Auth](https://img.shields.io/badge/Firebase_Auth-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)

### Libraries & Tools
![Lottie](https://img.shields.io/badge/Lottie-00D4AA?style=for-the-badge&logo=lottie&logoColor=white)
![SweetAlert2](https://img.shields.io/badge/SweetAlert2-7952B3?style=for-the-badge)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

</div>

---

## 📦 NPM Packages Used

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^7.1.1",
    "firebase": "^11.1.0",
    "sweetalert2": "^11.15.2",
    "lottie-react": "^2.4.0"
  },
  "devDependencies": {
    "tailwindcss": "^3.4.17",
    "vite": "^6.0.5",
    "@vitejs/plugin-react": "^4.3.4"
  }
}
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/TusharChow20/the-hide-news-online.git
   cd the-hide-news-online
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Firebase**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication (Email/Password, Google, GitHub)
   - Create a `.env` file in the root directory:
   ```env
   VITE_APIKEY=your_api_key
   VITE_AUTHDOMAIN=your_auth_domain
   VITE_PROJECTID=your_project_id
   VITE_STORAGEBUCKET=your_storage_bucket
   VITE_MESSAGINGSENDERID=your_messaging_sender_id
   VITE_APPID=your_app_id
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

---

## 🎨 Project Structure

```
the-hide-news-online/
├── 📦 firebase/
├── 📦 node_modules/
├── 📁 public/
│   ├── categories.json
│   ├── error.json          # Lottie error animation
│   ├── loading.json        # Loading animation
│   └── news.json           # News data
├── 📁 src/
│   ├── 📂 assets/
│   ├── 📂 Components/
│   │   ├── CategoryNews.jsx
│   │   ├── Header.jsx
│   │   ├── LatestNews.jsx
│   │   ├── LeftSideNav.jsx
│   │   ├── Navbar.jsx
│   │   ├── NewsCard.jsx
│   │   └── RightSideNav.jsx
│   ├── 📂 Layout/
│   │   ├── AuthLayout.jsx
│   │   ├── HomeLayout.jsx
│   │   └── NewsLayout.jsx
│   ├── 📂 Pages/
│   │   ├── CategoryNews.jsx
│   │   ├── Login.jsx
│   │   ├── NewsDetails.jsx
│   │   └── Register.jsx
│   ├── 📂 Provider/
│   │   └── AuthProvider.jsx  # Authentication context
│   ├── 📂 Routes/
│   │   └── PrivateRoutes.jsx # Protected routes
│   ├── 📂 FireBase/
│   │   └── firebase.config.js # Firebase configuration
│   ├── App.jsx              # Main app component
│   ├── index.css           # Global styles
│   └── main.jsx            # Entry point
├── .env                     # Environment variables
├── .eslintrc.cjs           # ESLint configuration
├── .firebaserc             # Firebase config
├── .gitignore
├── eslint.config.js
├── firebase.json
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

---

## 🔐 Authentication Flow

```mermaid
graph TD
    A[User Visits Site] --> B{Registered?}
    B -->|No| C[Register]
    B -->|Yes| D[Login]
    C --> E[Email Verification Sent]
    E --> F[Verify Email]
    F --> D
    D --> G{Email Verified?}
    G -->|No| H[Show Warning & Resend Option]
    G -->|Yes| I{Authorized?}
    H --> F
    I -->|Yes| J[Access Protected Routes]
    I -->|No| K[Redirect to Login]
    J --> L[View News Details]
    J --> M[Browse Categories]
    J --> N[Access Full Features]
```

---

## 🎯 Key Features Breakdown

### 1. **Registration System**
- ✅ Name validation (minimum 3 characters)
- ✅ Password strength checker
- ✅ Email verification on signup
- ✅ Profile photo URL support
- ✅ Terms & Conditions acceptance
- ✅ Error animations with Lottie
- ✅ SweetAlert notifications

### 2. **Login System**
- ✅ Email verification check
- ✅ Resend verification email option
- ✅ Remember login state
- ✅ Redirect to intended page
- ✅ Social login (Google & GitHub)
- ✅ Forgot password placeholder

### 3. **News Features**
- ✅ Dynamic news categories from JSON
- ✅ Latest news section
- ✅ Category-based news filtering
- ✅ Detailed news view with full article
- ✅ News card components with images
- ✅ Author information display
- ✅ Publication date and time
- ✅ Responsive news grid layout

### 4. **Navigation System**
- ✅ Header with branding
- ✅ Navbar with user profile
- ✅ Left sidebar with categories
- ✅ Right sidebar with additional info
- ✅ Mobile-responsive navigation
- ✅ Protected route navigation

### 5. **Security Features**
- ✅ Password regex validation:
  - Minimum 6 characters
  - At least one uppercase letter
  - At least one lowercase letter
  - At least one number
  - At least one special character (@$!%*?&)
- ✅ Firebase security rules
- ✅ Private routes with PrivateRoutes component
- ✅ Session management with AuthProvider
- ✅ Automatic logout for unverified users

---

### 📱 Screenshots

<div align="center">

### 🏠 Home Page
![Home Page](https://via.placeholder.com/800x400/1f2937/ffffff?text=The+Hide+News+Online+-+Home)

### 📰 News Categories
![News Categories](https://via.placeholder.com/800x400/1f2937/ffffff?text=Browse+by+Categories)

### 📖 News Details
![News Details](https://via.placeholder.com/800x400/1f2937/ffffff?text=Detailed+News+View)

### 🔐 Login Page
![Login Page](https://via.placeholder.com/800x400/1f2937/ffffff?text=Secure+Login)

### 📝 Register Page
![Register Page](https://via.placeholder.com/800x400/1f2937/ffffff?text=User+Registration)

</div>

---

## 🌟 Highlights

- 🎨 **Modern UI/UX** - Clean and intuitive interface
- ⚡ **Fast Performance** - Built with Vite for optimal speed
- 📱 **Fully Responsive** - Works seamlessly on all devices
- 🔒 **Secure Authentication** - Firebase-powered security
- 🎭 **Animated Feedback** - Lottie animations for better UX
- 🔔 **Smart Alerts** - SweetAlert2 for beautiful notifications
- 🚀 **Production Ready** - Deployed and live

---

## 🤝 Connect With Me

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-Follow-black?style=for-the-badge&logo=github)](https://github.com/TusharChow20)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/tusharchowdhury20211/)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-red?style=for-the-badge&logo=google-chrome&logoColor=white)](https://projectnewsonline-75378.web.app/)

</div>

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Firebase for authentication services
- Lottie for beautiful animations
- SweetAlert2 for elegant alerts
- Tailwind CSS for styling
- React team for the amazing framework

---

<div align="center">

### Made with ❤️ by [Tushar Chowdhury](https://github.com/TusharChow20)

⭐ **Star this repo if you found it helpful!** ⭐

![Visitors](https://visitor-badge.laobi.icu/badge?page_id=TusharChow20.the-hide-news-online)
![GitHub Stars](https://img.shields.io/github/stars/TusharChow20/the-hide-news-online?style=social)
![GitHub Forks](https://img.shields.io/github/forks/TusharChow20/the-hide-news-online?style=social)

</div>

---

## 🐛 Found a Bug?

If you find a bug or have a feature request, please open an issue [here](https://github.com/TusharChow20/the-hide-news-online/issues).

---

## 📈 Future Enhancements

- [ ] Dark mode toggle
- [ ] Advanced news search functionality
- [ ] Bookmark favorite articles
- [ ] User profile management page
- [ ] Comment system for articles
- [ ] Share articles on social media
- [ ] Push notifications for breaking news
- [ ] News API integration for real-time updates
- [ ] Pagination for news lists
- [ ] Trending news section
- [ ] Save articles for later reading
- [ ] Newsletter subscription
- [ ] Multiple language support
- [ ] Reading time estimation
- [ ] Related articles suggestions

---

<div align="center">

**Happy Coding! 💻**

</div>