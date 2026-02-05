# AlgoMaster - Complete Setup & Usage Guide

## 🎯 Overview
AlgoMaster is a comprehensive platform for learning Data Structures and Algorithms with:
- **Light Theme** with animated purple and pink gradients
- **Student Portal** for learning and practice
- **Admin Dashboard** for content management
- **Responsive Design** works on all devices

---

## ✨ Features Implemented

### 1. **Beautiful Animated Homepage**
- Hero section with gradient text and floating animations
- Animated feature cards with hover effects
- Bouncing icons and smooth transitions
- Wave animations in CTA section
- Fully responsive mobile design
- Colors: Purple (#8b5cf6) & Pink (#ec4899)

### 2. **Authentication System**
- **Admin Login**: Direct login with email & password
- **Student Signup**: Registration with name, email, password
- **Student Login**: Access account and courses
- JWT tokens with 24-hour expiration
- Secure password hashing with bcrypt

### 3. **Student Dashboard**
- View all topics/courses
- Track progress (overall % and per-topic)
- Filter courses by status (All, In Progress, Completed)
- Start or continue courses
- Performance statistics
- Logout functionality

### 4. **Admin Dashboard**
- View total topics and questions
- Manage learning topics
- Add questions to topics
- Admin-only access with JWT verification
- Content management interface

---

## 🚀 Getting Started

### Prerequisites
- Node.js v14+
- PostgreSQL running locally
- npm or yarn

### Installation

1. **Navigate to project directory**
   ```bash
   cd "c:\Users\DELL\Downloads\ALGO Edu"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables** (`.env` file already configured)
   ```
   DB_USER=postgres
   DB_PASSWORD=Akku@8861
   DB_NAME=algomaster_clone
   DB_HOST=localhost
   DB_PORT=5432
   JWT_SECRET=supersecretkey123
   PORT=3000
   ```

4. **Setup database**
   ```bash
   node database/setup.js
   ```

5. **Start the server**
   ```bash
   node server.js
   ```

Server runs on: `http://localhost:3000`

---

## 📋 User Credentials

### Admin Account
- **Email**: `admin@algomaster.com`
- **Password**: `admin123`

### Student Accounts
Create new accounts at: `http://localhost:3000/student-signup-new.html`

---

## 🎨 Website Structure

### Public Pages

#### **Homepage** (`index.html`)
- Navigate to: `/`
- Display all features and topics
- Buttons to login/signup

#### **Admin Login** (`login-new.html`)
- Navigate to: `/login-new.html`
- Email & password form
- Beautiful gradient design
- Redirects to admin dashboard on success

#### **Student Signup** (`student-signup-new.html`)
- Navigate to: `/student-signup-new.html`
- Name, email, password fields
- Email validation and duplicate checking
- Redirects to dashboard after signup

#### **Student Login** (`student-login-new.html`)
- Navigate to: `/student-login-new.html`
- Email & password authentication
- Redirects to student dashboard on success

### Protected Pages (Login Required)

#### **Student Dashboard** (`student-dashboard.html`)
- Requires JWT token in localStorage
- Shows all courses/topics
- Progress tracking
- Filter tabs for different statuses
- Logout button

#### **Admin Dashboard** (`admin-dashboard.html`)
- Requires admin role in JWT
- Create new topics
- Add questions to topics
- View all content
- Manage platform

---

## 🔑 Authentication Flow

### **Student Signup Flow**
1. User visits `/student-signup-new.html`
2. Fills form (name, email, password)
3. Password validated and hashed with bcrypt
4. User created in `students` table
5. JWT token generated with role: 'student'
6. Token + user data saved to localStorage
7. Redirects to `/student-dashboard.html`

### **Admin Login Flow**
1. User visits `/login-new.html`
2. Enters email & password
3. Credentials verified against `admin` table
4. JWT token generated with role: 'admin'
5. Token saved to localStorage
6. Redirects to `/admin-dashboard.html`

### **Protected Route Access**
- Dashboard pages check localStorage for token
- Verify JWT hasn't expired (24 hours)
- Redirect to login if not authenticated
- Verify role matches (admin vs student)

---

## 💻 API Endpoints

### Authentication Routes
```
POST /api/auth/login
- Admin login
- Body: { email, password }
- Returns: { token, user }

POST /api/auth/student/signup
- Student registration
- Body: { name, email, password }
- Returns: { token, user }

POST /api/auth/student/login
- Student login
- Body: { email, password }
- Returns: { token, user }
```

### Content Routes
```
GET /api/content/sections
- Get all topics
- Returns: Array of sections

GET /api/content/questions/:sectionId
- Get questions for a topic
- Returns: Array of questions

(Additional endpoints can be added for create/update/delete)
```

---

## 🎨 Design System

### Colors
- **Primary**: #8b5cf6 (Purple)
- **Secondary**: #ec4899 (Pink)
- **Background**: #ffffff (White)
- **Accent**: #f3f0ff (Light Purple)
- **Text Dark**: #1f2937
- **Text Light**: #6b7280

### Typography
- **Font**: Poppins
- **Weights**: 300, 400, 500, 600, 700, 800

### Animations
- **Fade In/Out**: 0.3-0.8s
- **Slide In**: Left, Right, Up
- **Float**: Infinite 3-6s
- **Pulse**: Button hover effect
- **Bounce**: Icon animations
- **Rotate**: Icon interactions

---

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

---

## 🗄️ Database Schema

### Tables

#### **admin**
```sql
id: INTEGER PRIMARY KEY
email: VARCHAR(255) UNIQUE
password: VARCHAR(255) (hashed)
created_at: TIMESTAMP
```

#### **students**
```sql
id: INTEGER PRIMARY KEY
name: VARCHAR(255)
email: VARCHAR(255) UNIQUE
password: VARCHAR(255) (hashed)
created_at: TIMESTAMP
```

#### **sections** (Topics)
```sql
id: INTEGER PRIMARY KEY
section_name: VARCHAR(255) UNIQUE
```

#### **questions**
```sql
id: INTEGER PRIMARY KEY
section_id: INTEGER (Foreign Key)
title: VARCHAR(255)
leetcode_url: TEXT
```

---

## 🔒 Security Features

- ✅ Password hashing with bcrypt (10 salt rounds)
- ✅ JWT token validation (24-hour expiration)
- ✅ Email validation on signup
- ✅ Duplicate email checking
- ✅ CORS protection
- ✅ Input validation on all endpoints
- ✅ Role-based access control

---

## ⚡ Performance Optimizations

- CSS animations use GPU acceleration
- Lazy loading for images
- Minimal JavaScript bundle
- Efficient database queries
- Caching of user data in localStorage

---

## 🐛 Troubleshooting

### "Network Error" on Signup/Login
- Ensure server is running: `node server.js`
- Check PostgreSQL is running
- Verify database credentials in `.env`
- Check browser console for detailed errors

### Database Connection Error
- Start PostgreSQL service
- Verify connection string in `.env`
- Run `node database/setup.js` to create tables

### Animations Not Working
- Clear browser cache (Ctrl+Shift+Delete)
- Ensure CSS files are loaded correctly
- Check `css/theme.css` is linked in HTML

### Redirect Loop on Dashboard
- Clear localStorage: `localStorage.clear()`
- Logout and login again
- Check token expiration

---

## 📚 File Structure

```
ALGO Edu/
├── public/
│   ├── index.html (Homepage)
│   ├── login-new.html (Admin Login)
│   ├── student-signup-new.html (Student Signup)
│   ├── student-login-new.html (Student Login)
│   ├── student-dashboard.html (Student Dashboard)
│   ├── admin-dashboard.html (Admin Dashboard)
│   ├── css/
│   │   ├── theme.css (Main light theme with animations)
│   │   └── style.css (Backup old styles)
│   ├── js/
│   │   └── app.js (Client-side utilities)
├── controllers/
│   └── authController.js (Auth logic)
├── routes/
│   ├── authRoutes.js (Auth endpoints)
│   └── contentRoutes.js (Content endpoints)
├── database/
│   ├── schema.sql (Database schema)
│   ├── setup.js (Database initialization)
│   ├── seed.js (Sample data)
│   └── migrate_ui.js (Migration utilities)
├── config/
│   └── db.js (Database configuration)
├── middleware/
│   └── authMiddleware.js (JWT verification)
├── server.js (Main Express server)
├── package.json (Dependencies)
└── .env (Environment variables)
```

---

## 🚀 Next Steps

1. **Customize Topics**: Add your DSA topics in admin dashboard
2. **Add Questions**: Link LeetCode problems to each topic
3. **Deploy**: Use platforms like Heroku, Railway, or Vercel
4. **Monitoring**: Add logging and error tracking
5. **Analytics**: Track student progress and engagement

---

## 📞 Support

For issues or questions:
- Check the troubleshooting section
- Review server console for errors
- Ensure all prerequisites are installed
- Verify database connection

---

**Happy Learning! Master Algorithms. Ace Interviews. Get Hired.** 🎓
