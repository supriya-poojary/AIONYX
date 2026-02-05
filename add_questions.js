const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

const addMoreQuestions = async () => {
    try {
        console.log("Adding professional engineering questions...");

        // Get section IDs
        const resSections = await pool.query('SELECT id, section_name FROM sections');
        const sectionIds = {};
        resSections.rows.forEach(row => {
            sectionIds[row.section_name] = row.id;
        });

        const newQuestions = [
            // Arrays & Strings
            {
                section_id: sectionIds['Arrays & Strings'],
                title: 'Trapping Rain Water',
                leetcode_url: 'https://leetcode.com/problems/trapping-rain-water/',
                difficulty: 'Hard',
                procedure: 'Use two pointers (left and right) and track max left/right heights to calculate water trapped at each index.',
                solution_python: 'def trap(height):\n    if not height: return 0\n    l, r = 0, len(height) - 1\n    leftMax, rightMax = height[l], height[r]\n    res = 0\n    while l < r:\n        if leftMax < rightMax:\n            l += 1\n            leftMax = max(leftMax, height[l])\n            res += leftMax - height[l]\n        else:\n            r -= 1\n            rightMax = max(rightMax, height[r])\n            res += rightMax - height[r]\n    return res',
                solution_java: 'class Solution {\n    public int trap(int[] height) {\n        int l = 0, r = height.length - 1, res = 0;\n        int leftMax = height[l], rightMax = height[r];\n        while (l < r) {\n            if (leftMax < rightMax) {\n                leftMax = Math.max(leftMax, height[++l]);\n                res += leftMax - height[l];\n            } else {\n                rightMax = Math.max(rightMax, height[--r]);\n                res += rightMax - height[r];\n            }\n        }\n        return res;\n    }\n}',
                solution_cpp: 'class Solution {\npublic:\n    int trap(vector<int>& height) {\n        int l = 0, r = height.size() - 1, res = 0;\n        int leftMax = height[l], rightMax = height[r];\n        while (l < r) {\n            if (leftMax < rightMax) {\n                leftMax = max(leftMax, height[++l]);\n                res += leftMax - height[l];\n            } else {\n                rightMax = max(rightMax, height[--r]);\n                res += rightMax - height[r];\n            }\n        }\n        return res;\n    }\n};'
            },
            // Linked Lists
            {
                section_id: sectionIds['Linked Lists'],
                title: 'LRU Cache',
                leetcode_url: 'https://leetcode.com/problems/lru-cache/',
                difficulty: 'Medium',
                procedure: 'Implement using a Hash Map and a Doubly Linked List for O(1) performance for both put and get operations.',
                solution_python: 'class Node:\n    def __init__(self, key, val):\n        self.key, self.val = key, val\n        self.prev = self.next = None\n\nclass LRUCache:\n    def __init__(self, capacity):\n        self.cap = capacity\n        self.cache = {}\n        self.left, self.right = Node(0, 0), Node(0, 0)\n        self.left.next, self.right.prev = self.right, self.left\n\n    def remove(self, node):\n        prev, nxt = node.prev, node.next\n        prev.next, nxt.prev = nxt, prev\n\n    def insert(self, node):\n        prev, nxt = self.right.prev, self.right\n        prev.next = nxt.prev = node\n        node.next, node.prev = nxt, prev\n\n    def get(self, key):\n        if key in self.cache:\n            self.remove(self.cache[key])\n            self.insert(self.cache[key])\n            return self.cache[key].val\n        return -1\n\n    def put(self, key, value):\n        if key in self.cache:\n            self.remove(self.cache[key])\n        self.cache[key] = Node(key, value)\n        self.insert(self.cache[key])\n        if len(self.cache) > self.cap:\n            lru = self.left.next\n            self.remove(lru)\n            del self.cache[lru.key]',
                solution_java: '// Detailed Java implementation for LRU Cache involving custom doubly linked list...',
                solution_cpp: '// Detailed C++ implementation for LRU Cache involving custom doubly linked list...'
            },
            // Trees & Graphs
            {
                section_id: sectionIds['Trees & Graphs'],
                title: 'Course Schedule',
                leetcode_url: 'https://leetcode.com/problems/course-schedule/',
                difficulty: 'Medium',
                procedure: 'Detect a cycle in a Directed Graph using DFS and a recursion stack or topological sort (Kahn\'s algorithm).',
                solution_python: 'def canFinish(numCourses, prerequisites):\n    preMap = { i:[] for i in range(numCourses) }\n    for crs, pre in prerequisites: preMap[crs].append(pre)\n    visitSet = set()\n    def dfs(crs):\n        if crs in visitSet: return False\n        if preMap[crs] == []: return True\n        visitSet.add(crs)\n        for pre in preMap[crs]:\n            if not dfs(pre): return False\n        visitSet.remove(crs)\n        preMap[crs] = []\n        return True\n    for crs in range(numCourses):\n        if not dfs(crs): return False\n    return True',
                solution_java: '// Java DFS solution for Course Schedule...',
                solution_cpp: '// C++ DFS solution for Course Schedule...'
            },
            // Dynamic Programming
            {
                section_id: sectionIds['Dynamic Programming'],
                title: 'Longest Palindromic Substring',
                leetcode_url: 'https://leetcode.com/problems/longest-palindromic-substring/',
                difficulty: 'Medium',
                procedure: 'Expand around center for each index (and each gap between indices) to find the longest palindrome.',
                solution_python: 'def longestPalindrome(s):\n    res = ""\n    for i in range(len(s)):\n        # odd\n        l, r = i, i\n        while l >= 0 and r < len(s) and s[l] == s[r]:\n            if (r - l + 1) > len(res): res = s[l:r+1]\n            l -= 1; r += 1\n        # even\n        l, r = i, i + 1\n        while l >= 0 and r < len(s) and s[l] == s[r]:\n            if (r - l + 1) > len(res): res = s[l:r+1]\n            l -= 1; r += 1\n    return res',
                solution_java: '// Java Expand Around Center solution...',
                solution_cpp: '// C++ Expand Around Center solution...'
            }
        ];

        for (const q of newQuestions) {
            // Check if already exists
            const check = await pool.query('SELECT id FROM questions WHERE title = $1', [q.title]);
            if (check.rows.length === 0) {
                await pool.query(
                    `INSERT INTO questions (section_id, title, leetcode_url, difficulty, procedure, solution_python, solution_java, solution_cpp)
                     VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
                    [q.section_id, q.title, q.leetcode_url, q.difficulty, q.procedure, q.solution_python, q.solution_java, q.solution_cpp]
                );
                console.log(`Added: ${q.title}`);
            }
        }

        console.log("Additional questions loaded successfully!");
    } catch (err) {
        console.error("Error adding questions:", err);
    } finally {
        await pool.end();
    }
};

addMoreQuestions();
