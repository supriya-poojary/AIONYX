// Quick API Test Script
// Run with: node test-api.js

const http = require('http');

const tests = [
    {
        name: 'Admin Login',
        method: 'POST',
        path: '/api/auth/login',
        body: { email: 'admin@algomaster.com', password: 'admin123' }
    },
    {
        name: 'Get Sections',
        method: 'GET',
        path: '/api/content/sections',
        body: null
    }
];

async function runTests() {
    console.log('🧪 Starting API Tests...\n');

    for (const test of tests) {
        await runTest(test);
    }

    console.log('\n✅ Tests completed!\n');
}

function runTest(test) {
    return new Promise((resolve) => {
        const options = {
            hostname: 'localhost',
            port: 3000,
            path: test.path,
            method: test.method,
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const req = http.request(options, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                console.log(`✓ ${test.name}`);
                console.log(`  Status: ${res.statusCode}`);
                try {
                    const json = JSON.parse(data);
                    console.log(`  Response: ${JSON.stringify(json).substring(0, 100)}...`);
                } catch (e) {
                    console.log(`  Response: ${data.substring(0, 100)}...`);
                }
                console.log('');
                resolve();
            });
        });

        req.on('error', (error) => {
            console.log(`✗ ${test.name}`);
            console.log(`  Error: ${error.message}`);
            console.log('');
            resolve();
        });

        if (test.body) {
            req.write(JSON.stringify(test.body));
        }

        req.end();
    });
}

runTests();
