#!/usr/bin/env node

/**
 * Quick Test Script for AlgoMaster Authentication
 * Tests signup, login, and error handling
 */

const http = require('http');

const BASE_URL = 'http://localhost:3000';

// Color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[36m'
};

function log(color, message) {
  console.log(`${color}${message}${colors.reset}`);
}

// Helper function to make HTTP requests
function makeRequest(method, path, body = null) {
  return new Promise((resolve, reject) => {
    const url = new URL(path, BASE_URL);
    const options = {
      method,
      hostname: url.hostname,
      port: url.port,
      path: url.pathname + url.search,
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          status: res.statusCode,
          headers: res.headers,
          body: data ? JSON.parse(data) : null
        });
      });
    });

    req.on('error', reject);
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

async function runTests() {
  log(colors.blue, '\n===== AlgoMaster Authentication Tests =====\n');

  try {
    // Test 1: Admin Login
    log(colors.yellow, '📝 Test 1: Admin Login');
    const adminLogin = await makeRequest('POST', '/api/auth/login', {
      email: 'admin@algomaster.com',
      password: 'admin123'
    });

    if (adminLogin.status === 200 && adminLogin.body.token) {
      log(colors.green, '✅ Admin login successful');
      log(colors.blue, `   Token: ${adminLogin.body.token.substring(0, 20)}...`);
      log(colors.blue, `   Role: ${adminLogin.body.user.role}`);
    } else {
      log(colors.red, `❌ Admin login failed: ${adminLogin.body.message}`);
    }

    // Test 2: Invalid Admin Login
    log(colors.yellow, '\n📝 Test 2: Invalid Admin Credentials');
    const invalidAdmin = await makeRequest('POST', '/api/auth/login', {
      email: 'admin@algomaster.com',
      password: 'wrongpassword'
    });

    if (invalidAdmin.status === 401) {
      log(colors.green, '✅ Invalid credentials properly rejected');
      log(colors.blue, `   Message: ${invalidAdmin.body.message}`);
    } else {
      log(colors.red, `❌ Should have rejected invalid credentials`);
    }

    // Test 3: Student Signup
    log(colors.yellow, '\n📝 Test 3: Student Signup');
    const testEmail = `test${Date.now()}@example.com`;
    const studentSignup = await makeRequest('POST', '/api/auth/student/signup', {
      name: 'Test User',
      email: testEmail,
      password: 'TestPassword123'
    });

    if (studentSignup.status === 201 && studentSignup.body.token) {
      log(colors.green, '✅ Student signup successful');
      log(colors.blue, `   Student ID: ${studentSignup.body.user.id}`);
      log(colors.blue, `   Name: ${studentSignup.body.user.name}`);
      log(colors.blue, `   Email: ${studentSignup.body.user.email}`);
      log(colors.blue, `   Role: ${studentSignup.body.user.role}`);
    } else {
      log(colors.red, `❌ Student signup failed: ${studentSignup.body.message}`);
    }

    // Test 4: Student Login
    log(colors.yellow, '\n📝 Test 4: Student Login');
    const studentLogin = await makeRequest('POST', '/api/auth/student/login', {
      email: testEmail,
      password: 'TestPassword123'
    });

    if (studentLogin.status === 200 && studentLogin.body.token) {
      log(colors.green, '✅ Student login successful');
      log(colors.blue, `   Token: ${studentLogin.body.token.substring(0, 20)}...`);
      log(colors.blue, `   Role: ${studentLogin.body.user.role}`);
    } else {
      log(colors.red, `❌ Student login failed: ${studentLogin.body.message}`);
    }

    // Test 5: Duplicate Email
    log(colors.yellow, '\n📝 Test 5: Duplicate Email Registration');
    const duplicateSignup = await makeRequest('POST', '/api/auth/student/signup', {
      name: 'Another User',
      email: testEmail,
      password: 'AnotherPassword123'
    });

    if (duplicateSignup.status === 400 && duplicateSignup.body.message.includes('already')) {
      log(colors.green, '✅ Duplicate email properly rejected');
      log(colors.blue, `   Message: ${duplicateSignup.body.message}`);
    } else {
      log(colors.red, `❌ Should have rejected duplicate email`);
    }

    // Test 6: Invalid Student Login
    log(colors.yellow, '\n📝 Test 6: Invalid Student Credentials');
    const invalidStudent = await makeRequest('POST', '/api/auth/student/login', {
      email: testEmail,
      password: 'WrongPassword'
    });

    if (invalidStudent.status === 401) {
      log(colors.green, '✅ Invalid credentials properly rejected');
      log(colors.blue, `   Message: ${invalidStudent.body.message}`);
    } else {
      log(colors.red, `❌ Should have rejected invalid credentials`);
    }

    // Test 7: Missing Fields
    log(colors.yellow, '\n📝 Test 7: Missing Required Fields');
    const missingFields = await makeRequest('POST', '/api/auth/student/signup', {
      name: 'Test User',
      email: 'test@example.com'
      // password missing
    });

    if (missingFields.status === 400) {
      log(colors.green, '✅ Missing fields properly validated');
      log(colors.blue, `   Message: ${missingFields.body.message}`);
    } else {
      log(colors.red, `❌ Should have validated missing fields`);
    }

    log(colors.blue, '\n===== All Tests Complete =====\n');

  } catch (error) {
    log(colors.red, `\n❌ Test Error: ${error.message}`);
    log(colors.red, 'Make sure the server is running on http://localhost:3000');
  }
}

// Run tests
runTests();
