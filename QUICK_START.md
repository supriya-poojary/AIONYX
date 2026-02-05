# 🚀 AlgoMaster - Quick Start Guide

## ⚡ One-Minute Setup

```bash
# Terminal 1: Start Server
cd "c:\Users\supri\Documents\ALGO Edu final\ALGO Edu"
node server.js

# Server runs on: http://localhost:3000
```

## 🔐 Login Credentials

### Admin Account
```
Email: admin@algomaster.com
Password: admin123
```

### Student Accounts
Create new via signup at: `/student-signup-new.html`

---

## 🎯 Quick Navigation

| Page | URL | Purpose |
|------|-----|---------|
| **Home** | `http://localhost:3000` | Landing page with features |
| **Admin Login** | `/login-new.html` | Admin authentication |
| **Student Signup** | `/student-signup-new.html` | Create student account |
| **Student Login** | `/student-login-new.html` | Student authentication |
| **Student Dashboard** | `/student-dashboard.html` | View courses & progress |
| **Admin Dashboard** | `/admin-dashboard.html` | Manage content |

---

## ✨ What You'll See

### Homepage
- ✅ Animated hero section with floating effects
- ✅ Feature cards with hover animations
- ✅ Purple and pink gradient theme
- ✅ Wave animations in CTA section
- ✅ Statistics counter
- ✅ Topics showcase

### Admin Dashboard
- ✅ Create topics
- ✅ Add LeetCode problems
- ✅ Manage platform content
- ✅ View statistics

### Student Dashboard
- ✅ See all topics/courses
- ✅ Track progress percentage
- ✅ Filter by status (All, In Progress, Completed)
- ✅ Beautiful course cards
- ✅ Start or continue courses

---

## 🎨 Design Features

### Light Theme
- **Background**: White (#ffffff)
- **Primary**: Purple (#8b5cf6)
- **Secondary**: Pink (#ec4899)
- **Accent**: Light Purple (#f3f0ff)

### Animations
- 🔄 Floating circles in hero
- ⭐ Bouncing feature icons
- 🎯 Pulsing buttons
- 📊 Animated progress bars
- 🌊 Wave effects
- ✨ Smooth transitions

### Responsive
- 📱 Works on all devices
- 💻 Desktop optimized
- 📲 Mobile friendly
- 🖥️ Tablet responsive

---

## 🔄 User Flows

### Student Journey
```
1. Visit Homepage
   ↓
2. Click "Start Free"
   ↓
3. Sign up with name, email, password
   ↓
4. Auto redirect to Dashboard
   ↓
5. See all courses
   ↓
6. Click "Start" on any topic
   ↓
7. Start learning!
```

### Admin Journey
```
1. Visit /login-new.html
   ↓
2. Enter: admin@algomaster.com / admin123
   ↓
3. Auto redirect to Admin Dashboard
   ↓
4. Create topics (Arrays, Trees, etc)
   ↓
5. Add LeetCode problems to topics
   ↓
6. Monitor student progress
```

---

## 🔧 Troubleshooting

### Server won't start?
- Check if PostgreSQL is running
- Run: `node database/setup.js`
- Check `.env` file exists

### Animations not working?
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+F5)
- Check CSS file is loaded

### Login not working?
- Check server console for errors
- Verify database connection
- Try logout and login again

### Forgot password?
- Admin: Use `admin@algomaster.com` / `admin123`
- Student: Sign up a new account

---

## 📊 Database Status

✅ **Connected to PostgreSQL**
- Database: `algomaster_clone`
- Tables: admin, students, sections, questions
- Automatic schema creation on setup

---

## 🎓 Features at a Glance

| Feature | Admin | Student |
|---------|-------|---------|
| Create Topics | ✅ | ❌ |
| Add Questions | ✅ | ❌ |
| View Courses | ❌ | ✅ |
| Track Progress | ❌ | ✅ |
| Manage Content | ✅ | ❌ |
| Access Dashboard | ✅ | ✅ |

---

## 💡 Tips

1. **First Time?** Start at homepage and explore
2. **As Admin?** Create a topic first, then add questions
3. **As Student?** Sign up to access all courses
4. **Tracking?** Student dashboard shows all progress
5. **Mobile?** Everything works perfectly on mobile!

---

## ✅ Everything Works!

- ✨ Beautiful animations
- 🔐 Secure authentication
- 📊 Progress tracking
- 🎨 Light theme design
- 📱 Fully responsive
- ⚡ Fast performance
- 🚀 Ready to deploy

---

## 🎉 You're All Set!

**Your AlgoMaster platform is running and ready to go!**

Visit: **http://localhost:3000**

Start learning, or become an admin and create content today! 🚀

---

**Master Algorithms. Ace Interviews. Get Hired.** 🎓
