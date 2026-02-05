const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

const seedData = async () => {
    try {
        console.log("Initializing database seed...");

        // Clear existing data to avoid conflicts during mass seed
        await pool.query('TRUNCATE student_progress, questions, sections CASCADE');

        console.log("Creating 8 Sections...");
        const sectionsData = [
            'Arrays & Strings',
            'Two Pointers',
            'Sliding Window',
            'Linked Lists',
            'Trees & Graphs',
            'Dynamic Programming',
            'Backtracking',
            'Bit Manipulation'
        ];

        const sectionIds = {};
        for (const name of sectionsData) {
            const res = await pool.query('INSERT INTO sections (section_name) VALUES ($1) RETURNING id', [name]);
            sectionIds[name] = res.rows[0].id;
        }

        console.log("Inserting 20 Questions...");
        const questions = [
            // Arrays & Strings
            {
                section_id: sectionIds['Arrays & Strings'],
                title: 'Two Sum',
                leetcode_url: 'https://leetcode.com/problems/two-sum/',
                difficulty: 'Easy',
                procedure: 'Use a Hash Map to store numbers and their indices. For each number, calculate the target complement and check if it exists in the map.',
                solution_python: 'def twoSum(nums, target):\n    prevMap = {}\n    for i, n in enumerate(nums):\n        diff = target - n\n        if diff in prevMap: return [prevMap[diff], i]\n        prevMap[n] = i',
                solution_java: 'class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        Map<Integer, Integer> prevMap = new HashMap<>();\n        for (int i = 0; i < nums.length; i++) {\n            int diff = target - nums[i];\n            if (prevMap.containsKey(diff)) return new int[] {prevMap.get(diff), i};\n            prevMap.put(nums[i], i);\n        }\n        return new int[0];\n    }\n}',
                solution_cpp: 'class Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        unordered_map<int, int> prevMap;\n        for (int i = 0; i < nums.size(); i++) {\n            int diff = target - nums[i];\n            if (prevMap.count(diff)) return {prevMap[diff], i};\n            prevMap[nums[i]] = i;\n        }\n        return {};\n    }\n};'
            },
            {
                section_id: sectionIds['Arrays & Strings'],
                title: 'Valid Anagram',
                leetcode_url: 'https://leetcode.com/problems/valid-anagram/',
                difficulty: 'Easy',
                procedure: 'Use a character frequency count table (size 26) to compare both strings.',
                solution_python: 'def isAnagram(s, t):\n    return sorted(s) == sorted(t)',
                solution_java: 'class Solution {\n    public boolean isAnagram(String s, String t) {\n        if (s.length() != t.length()) return false;\n        int[] count = new int[26];\n        for (char c : s.toCharArray()) count[c - \'a\']++;\n        for (char c : t.toCharArray()) if (--count[c - \'a\'] < 0) return false;\n        return true;\n    }\n}',
                solution_cpp: 'class Solution {\npublic:\n    bool isAnagram(string s, string t) {\n        if (s.length() != t.length()) return false;\n        int count[26] = {0};\n        for (char c : s) count[c - \'a\']++;\n        for (char c : t) if (--count[c - \'a\'] < 0) return false;\n        return true;\n    }\n};'
            },
            {
                section_id: sectionIds['Arrays & Strings'],
                title: 'Group Anagrams',
                leetcode_url: 'https://leetcode.com/problems/group-anagrams/',
                difficulty: 'Medium',
                procedure: 'Sort each string and use it as a key in a Hash Map to group them.',
                solution_python: 'from collections import defaultdict\ndef groupAnagrams(strs):\n    res = defaultdict(list)\n    for s in strs:\n        res["".join(sorted(s))].append(s)\n    return res.values()',
                solution_java: 'class Solution {\n    public List<List<String>> groupAnagrams(String[] strs) {\n        Map<String, List<String>> res = new HashMap<>();\n        for (String s : strs) {\n            char[] charArray = s.toCharArray();\n            Arrays.sort(charArray);\n            String sortedS = new String(charArray);\n            res.computeIfAbsent(sortedS, k -> new ArrayList<>()).add(s);\n        }\n        return new ArrayList<>(res.values());\n    }\n}',
                solution_cpp: 'class Solution {\npublic:\n    vector<vector<string>> groupAnagrams(vector<string>& strs) {\n        unordered_map<string, vector<string>> res;\n        for (string s : strs) {\n            string t = s;\n            sort(t.begin(), t.end());\n            res[t].push_back(s);\n        }\n        vector<vector<string>> ans;\n        for (auto& p : res) ans.push_back(p.second);\n        return ans;\n    }\n};'
            },

            // Two Pointers
            {
                section_id: sectionIds['Two Pointers'],
                title: 'Valid Palindrome',
                leetcode_url: 'https://leetcode.com/problems/valid-palindrome/',
                difficulty: 'Easy',
                procedure: 'Clean the string and use two pointers (start and end) to check if characters match.',
                solution_python: 'def isPalindrome(s):\n    s = "".join(c.lower() for c in s if c.isalnum())\n    return s == s[::-1]',
                solution_java: 'class Solution {\n    public boolean isPalindrome(String s) {\n        int l = 0, r = s.length() - 1;\n        while (l < r) {\n            if (!Character.isLetterOrDigit(s.charAt(l))) l++;\n            else if (!Character.isLetterOrDigit(s.charAt(r))) r--;\n            else {\n                if (Character.toLowerCase(s.charAt(l++)) != Character.toLowerCase(s.charAt(r--))) return false;\n            }\n        }\n        return true;\n    }\n}',
                solution_cpp: 'class Solution {\npublic:\n    bool isPalindrome(string s) {\n        int l = 0, r = s.size() - 1;\n        while (l < r) {\n            if (!isalnum(s[l])) l++;\n            else if (!isalnum(s[r])) r--;\n            else {\n                if (tolower(s[l++]) != tolower(s[r--])) return false;\n            }\n        }\n        return true;\n    }\n};'
            },
            {
                section_id: sectionIds['Two Pointers'],
                title: '3Sum',
                leetcode_url: 'https://leetcode.com/problems/3sum/',
                difficulty: 'Medium',
                procedure: 'Sort the array and iterate. For each element, use Two Pointers to find two other elements that sum to the negative value of the current element.',
                solution_python: 'def threeSum(nums):\n    res = []\n    nums.sort()\n    for i, a in enumerate(nums):\n        if i > 0 and a == nums[i - 1]: continue\n        l, r = i + 1, len(nums) - 1\n        while l < r:\n            threeSum = a + nums[l] + nums[r]\n            if threeSum > 0: r -= 1\n            elif threeSum < 0: l += 1\n            else:\n                res.append([a, nums[l], nums[r]])\n                l += 1\n                while nums[l] == nums[l - 1] and l < r: l += 1\n    return res',
                solution_java: 'class Solution {\n    public List<List<Integer>> threeSum(int[] nums) {\n        Arrays.sort(nums);\n        List<List<Integer>> res = new ArrayList<>();\n        for (int i = 0; i < nums.length - 2; i++) {\n            if (i > 0 && nums[i] == nums[i - 1]) continue;\n            int l = i + 1, r = nums.length - 1;\n            while (l < r) {\n                int sum = nums[i] + nums[l] + nums[r];\n                if (sum < 0) l++;\n                else if (sum > 0) r--;\n                else {\n                    res.add(Arrays.asList(nums[i], nums[l], nums[r]));\n                    while (l < r && nums[l] == nums[++l]);\n                    while (l < r && nums[r] == nums[--r]);\n                }\n            }\n        }\n        return res;\n    }\n}',
                solution_cpp: 'class Solution {\npublic:\n    vector<vector<int>> threeSum(vector<int>& nums) {\n        sort(nums.begin(), nums.end());\n        vector<vector<int>> res;\n        for (int i = 0; i < (int)nums.size() - 2; i++) {\n            if (i > 0 && nums[i] == nums[i-1]) continue;\n            int l = i + 1, r = nums.size() - 1;\n            while (l < r) {\n                int s = nums[i] + nums[l] + nums[r];\n                if (s < 0) l++;\n                else if (s > 0) r--;\n                else {\n                    res.push_back({nums[i], nums[l], nums[r]});\n                    while (l < r && nums[l] == nums[l+1]) l++;\n                    while (l < r && nums[r] == nums[r-1]) r--;\n                    l++; r--;\n                }\n            }\n        }\n        return res;\n    }\n};'
            },

            // Sliding Window
            {
                section_id: sectionIds['Sliding Window'],
                title: 'Best Time to Buy and Sell Stock',
                leetcode_url: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/',
                difficulty: 'Easy',
                procedure: 'Keep a pointer to the minimum value seen so far and update maximum profit using the current price.',
                solution_python: 'def maxProfit(prices):\n    l, r = 0, 1\n    max_p = 0\n    while r < len(prices):\n        if prices[l] < prices[r]:\n            max_p = max(max_p, prices[r] - prices[l])\n        else:\n            l = r\n        r += 1\n    return max_p',
                solution_java: 'class Solution {\n    public int maxProfit(int[] prices) {\n        int l = 0, maxP = 0;\n        for (int r = 1; r < prices.length; r++) {\n            if (prices[r] < prices[l]) l = r;\n            else maxP = Math.max(maxP, prices[r] - prices[l]);\n        }\n        return maxP;\n    }\n}',
                solution_cpp: 'class Solution {\npublic:\n    int maxProfit(vector<int>& prices) {\n        int l = 0, maxP = 0;\n        for (int r = 1; r < prices.size(); r++) {\n            if (prices[r] < prices[l]) l = r;\n            else maxP = max(maxP, prices[r] - prices[l]);\n        }\n        return maxP;\n    }\n};'
            },
            {
                section_id: sectionIds['Sliding Window'],
                title: 'Longest Substring Without Repeating Characters',
                leetcode_url: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/',
                difficulty: 'Medium',
                procedure: 'Use a sliding window and a hash set. Expand the window to the right and shrink from the left whenever a duplicate is found.',
                solution_python: 'def lengthOfLongestSubstring(s):\n    charSet = set()\n    l = 0\n    res = 0\n    for r in range(len(s)):\n        while s[r] in charSet:\n            charSet.remove(s[l])\n            l += 1\n        charSet.add(s[r])\n        res = max(res, r - l + 1)\n    return res',
                solution_java: 'class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        Set<Character> charSet = new HashSet<>();\n        int l = 0, res = 0;\n        for (int r = 0; r < s.length(); r++) {\n            while (charSet.contains(s.charAt(r))) charSet.remove(s.charAt(l++));\n            charSet.add(s.charAt(r));\n            res = Math.max(res, r - l + 1);\n        }\n        return res;\n    }\n}',
                solution_cpp: 'class Solution {\npublic:\n    int lengthOfLongestSubstring(string s) {\n        unordered_set<char> charSet;\n        int l = 0, res = 0;\n        for (int r = 0; r < s.size(); r++) {\n            while (charSet.count(s[r])) charSet.erase(s[l++]);\n            charSet.insert(s[r]);\n            res = max(res, r - l + 1);\n        }\n        return res;\n    }\n};'
            },

            // Linked Lists
            {
                section_id: sectionIds['Linked Lists'],
                title: 'Reverse Linked List',
                leetcode_url: 'https://leetcode.com/problems/reverse-linked-list/',
                difficulty: 'Easy',
                procedure: 'Maintain prev, curr, and next pointers. Flip the next pointer of each node as you traverse.',
                solution_python: 'def reverseList(head):\n    prev, curr = None, head\n    while curr:\n        nxt = curr.next\n        curr.next = prev\n        prev = curr\n        curr = nxt\n    return prev',
                solution_java: 'class Solution {\n    public ListNode reverseList(ListNode head) {\n        ListNode prev = null, curr = head;\n        while (curr != null) {\n            ListNode tmp = curr.next; curr.next = prev; prev = curr; curr = tmp;\n        }\n        return prev;\n    }\n}',
                solution_cpp: 'class Solution {\npublic:\n    ListNode* reverseList(ListNode* head) {\n        ListNode* prev = NULL, *curr = head;\n        while(curr) {\n            ListNode* tmp = curr->next; curr->next = prev; prev = curr; curr = tmp;\n        }\n        return prev;\n    }\n};'
            },
            {
                section_id: sectionIds['Linked Lists'],
                title: 'Merge Two Sorted Lists',
                leetcode_url: 'https://leetcode.com/problems/merge-two-sorted-lists/',
                difficulty: 'Easy',
                procedure: 'Create a dummy node and pointers to traverse both lists. Attach the smaller node to the merged list and move the pointer.',
                solution_python: 'def mergeTwoLists(l1, l2):\n    dummy = ListNode()\n    tail = dummy\n    while l1 and l2:\n        if l1.val < l2.val: tail.next = l1; l1 = l1.next\n        else: tail.next = l2; l2 = l2.next\n        tail = tail.next\n    tail.next = l1 or l2\n    return dummy.next',
                solution_java: 'class Solution {\n    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {\n        ListNode dummy = new ListNode(0);\n        ListNode tail = dummy;\n        while(l1 != null && l2 != null) {\n            if (l1.val < l2.val) { tail.next = l1; l1 = l1.next; }\n            else { tail.next = l2; l2 = l2.next; }\n            tail = tail.next;\n        }\n        if (l1 != null) tail.next = l1; else tail.next = l2;\n        return dummy.next;\n    }\n}',
                solution_cpp: 'class Solution {\npublic:\n    ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {\n        ListNode dummy(0); ListNode* tail = &dummy;\n        while(l1 && l2) {\n            if(l1->val < l2->val) { tail->next = l1; l1 = l1->next; }\n            else { tail->next = l2; l2 = l2->next; }\n            tail = tail->next;\n        }\n        tail->next = l1 ? l1 : l2;\n        return dummy.next;\n    }\n};'
            },
            {
                section_id: sectionIds['Linked Lists'],
                title: 'Linked List Cycle',
                leetcode_url: 'https://leetcode.com/problems/linked-list-cycle/',
                difficulty: 'Easy',
                procedure: 'Floyd\'s Tortoise and Hare algorithm: Use a slow and fast pointer. If they meet, a cycle exists.',
                solution_python: 'def hasCycle(head):\n    slow, fast = head, head\n    while fast and fast.next:\n        slow = slow.next\n        fast = fast.next.next\n        if slow == fast: return True\n    return False',
                solution_java: 'public class Solution {\n    public boolean hasCycle(ListNode head) {\n        ListNode slow = head, fast = head;\n        while(fast != null && fast.next != null) {\n            slow = slow.next; fast = fast.next.next;\n            if (slow == fast) return true;\n        }\n        return false;\n    }\n}',
                solution_cpp: 'class Solution {\npublic:\n    bool hasCycle(ListNode *head) {\n        ListNode *slow = head, *fast = head;\n        while(fast && fast->next) {\n            slow = slow->next; fast = fast->next->next;\n            if(slow == fast) return true;\n        }\n        return false;\n    }\n};'
            },

            // Trees & Graphs
            {
                section_id: sectionIds['Trees & Graphs'],
                title: 'Invert Binary Tree',
                leetcode_url: 'https://leetcode.com/problems/invert-binary-tree/',
                difficulty: 'Easy',
                procedure: 'Recursively swap the left and right children of every node.',
                solution_python: 'def invertTree(root):\n    if not root: return None\n    root.left, root.right = root.right, root.left\n    invertTree(root.left)\n    invertTree(root.right)\n    return root',
                solution_java: 'class Solution {\n    public TreeNode invertTree(TreeNode root) {\n        if (root == null) return null;\n        TreeNode tmp = root.left; root.left = root.right; root.right = tmp;\n        invertTree(root.left); invertTree(root.right);\n        return root;\n    }\n}',
                solution_cpp: 'class Solution {\npublic:\n    TreeNode* invertTree(TreeNode* root) {\n        if (!root) return NULL;\n        swap(root->left, root->right);\n        invertTree(root->left); invertTree(root->right);\n        return root;\n    }\n};'
            },
            {
                section_id: sectionIds['Trees & Graphs'],
                title: 'Maximum Depth of Binary Tree',
                leetcode_url: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/',
                difficulty: 'Easy',
                procedure: 'Recursive DFS: The depth is 1 + max(depth of left, depth of right).',
                solution_python: 'def maxDepth(root):\n    if not root: return 0\n    return 1 + max(maxDepth(root.left), maxDepth(root.right))',
                solution_java: 'class Solution {\n    public int maxDepth(TreeNode root) {\n        if (root == null) return 0;\n        return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));\n    }\n}',
                solution_cpp: 'class Solution {\npublic:\n    int maxDepth(TreeNode* root) {\n        if (!root) return 0;\n        return 1 + max(maxDepth(root->left), maxDepth(root->right));\n    }\n};'
            },
            {
                section_id: sectionIds['Trees & Graphs'],
                title: 'Lowest Common Ancestor of a BST',
                leetcode_url: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/',
                difficulty: 'Medium',
                procedure: 'Exploit BST property: if both p and q are smaller than root, move left; if both are larger, move right; else, the current root is the LCA.',
                solution_python: 'def lowestCommonAncestor(root, p, q):\n    curr = root\n    while curr:\n        if p.val > curr.val and q.val > curr.val: curr = curr.right\n        elif p.val < curr.val and q.val < curr.val: curr = curr.left\n        else: return curr',
                solution_java: 'class Solution {\n    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {\n        while (true) {\n            if (p.val < root.val && q.val < root.val) root = root.left;\n            else if (p.val > root.val && q.val > root.val) root = root.right;\n            else return root;\n        }\n    }\n}',
                solution_cpp: 'class Solution {\npublic:\n    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {\n        while(root) {\n            if (p->val < root->val && q->val < root->val) root = root->left;\n            else if (p->val > root->val && q->val > root->val) root = root->right;\n            else return root;\n        }\n        return NULL;\n    }\n};'
            },

            // Dynamic Programming
            {
                section_id: sectionIds['Dynamic Programming'],
                title: 'Climbing Stairs',
                leetcode_url: 'https://leetcode.com/problems/climbing-stairs/',
                difficulty: 'Easy',
                procedure: 'Fibonacci sequence pattern: f(n) = f(n-1) + f(n-2). Use two variables to store previous values to save space.',
                solution_python: 'def climbStairs(n):\n    one, two = 1, 1\n    for i in range(n - 1):\n        one, two = one + two, one\n    return one',
                solution_java: 'class Solution {\n    public int climbStairs(int n) {\n        int one = 1, two = 1;\n        for (int i = 0; i < n - 1; i++) {\n            int tmp = one; one = one + two; two = tmp;\n        }\n        return one;\n    }\n}',
                solution_cpp: 'class Solution {\npublic:\n    int climbStairs(int n) {\n        int one = 1, two = 1;\n        for(int i = 0; i < n - 1; i++) {\n            int tmp = one; one = one + two; two = tmp;\n        }\n        return one;\n    }\n};'
            },
            {
                section_id: sectionIds['Dynamic Programming'],
                title: 'Coin Change',
                leetcode_url: 'https://leetcode.com/problems/coin-change/',
                difficulty: 'Medium',
                procedure: 'Bottom-up DP: dp[i] = min(dp[i], 1 + dp[i - coin]) for each coin.',
                solution_python: 'def coinChange(coins, amount):\n    dp = [amount + 1] * (amount + 1)\n    dp[0] = 0\n    for a in range(1, amount + 1):\n        for c in coins:\n            if a - c >= 0:\n                dp[a] = min(dp[a], 1 + dp[a - c])\n    return dp[amount] if dp[amount] != amount + 1 else -1',
                solution_java: 'class Solution {\n    public int coinChange(int[] coins, int amount) {\n        int[] dp = new int[amount + 1];\n        Arrays.fill(dp, amount + 1); dp[0] = 0;\n        for (int a = 1; a <= amount; a++) {\n            for (int c : coins) {\n                if (a - c >= 0) dp[a] = Math.min(dp[a], 1 + dp[a - c]);\n            }\n        }\n        return dp[amount] > amount ? -1 : dp[amount];\n    }\n}',
                solution_cpp: 'class Solution {\npublic:\n    int coinChange(vector<int>& coins, int amount) {\n        vector<int> dp(amount + 1, amount + 1);\n        dp[0] = 0;\n        for(int a = 1; a <= amount; a++) {\n            for(int c : coins) {\n                if (a - c >= 0) dp[a] = min(dp[a], 1 + dp[a - c]);\n            }\n        }\n        return dp[amount] > amount ? -1 : dp[amount];\n    }\n};'
            },

            // Backtracking
            {
                section_id: sectionIds['Backtracking'],
                title: 'Subsets',
                leetcode_url: 'https://leetcode.com/problems/subsets/',
                difficulty: 'Medium',
                procedure: 'Use DFS to decide for each element whether to include it or not in the current subset.',
                solution_python: 'def subsets(nums):\n    res = []\n    subset = []\n    def dfs(i):\n        if i >= len(nums):\n            res.append(subset[:]); return\n        subset.append(nums[i]); dfs(i+1)\n        subset.pop(); dfs(i+1)\n    dfs(0); return res',
                solution_java: 'class Solution {\n    public List<List<Integer>> subsets(int[] nums) {\n        List<List<Integer>> res = new ArrayList<>();\n        dfs(0, nums, new ArrayList<>(), res);\n        return res;\n    }\n    private void dfs(int i, int[] nums, List<Integer> sub, List<List<Integer>> res) {\n        if (i == nums.length) { res.add(new ArrayList<>(sub)); return; }\n        sub.add(nums[i]); dfs(i + 1, nums, sub, res);\n        sub.remove(sub.size() - 1); dfs(i + 1, nums, sub, res);\n    }\n}',
                solution_cpp: 'class Solution {\npublic:\n    vector<vector<int>> subsets(vector<int>& nums) {\n        vector<vector<int>> res; vector<int> sub;\n        dfs(0, nums, sub, res); return res;\n    }\n    void dfs(int i, vector<int>& nums, vector<int>& sub, vector<vector<int>>& res) {\n        if(i == nums.size()) { res.push_back(sub); return; }\n        sub.push_back(nums[i]); dfs(i + 1, nums, sub, res);\n        sub.pop_back(); dfs(i + 1, nums, sub, res);\n    }\n};'
            },

            // Bit Manipulation
            {
                section_id: sectionIds['Bit Manipulation'],
                title: 'Number of 1 Bits',
                leetcode_url: 'https://leetcode.com/problems/number-of-1-bits/',
                difficulty: 'Easy',
                procedure: 'Use bitwise AND with n-1 to cancel the rightmost set bit in each step.',
                solution_python: 'def hammingWeight(n):\n    res = 0\n    while n: n &= (n - 1); res += 1\n    return res',
                solution_java: 'public class Solution {\n    public int hammingWeight(int n) {\n        int res = 0;\n        while (n != 0) { n &= (n - 1); res++; }\n        return res;\n    }\n}',
                solution_cpp: 'class Solution {\npublic:\n    int hammingWeight(uint32_t n) {\n        int res = 0;\n        while(n) { n &= (n - 1); res++; }\n        return res;\n    }\n};'
            },
            {
                section_id: sectionIds['Bit Manipulation'],
                title: 'Sum of Two Integers',
                leetcode_url: 'https://leetcode.com/problems/sum-of-two-integers/',
                difficulty: 'Medium',
                procedure: 'Use bitwise XOR for sum without carry and AND followed by shift for carry.',
                solution_python: 'def getSum(a, b):\n    mask = 0xffffffff\n    while b & mask != 0:\n        a, b = (a ^ b), (a & b) << 1\n    return (a & mask) if b > 0 else a',
                solution_java: 'class Solution {\n    public int getSum(int a, int b) {\n        while (b != 0) { int tmp = (a & b) << 1; a = a ^ b; b = tmp; }\n        return a;\n    }\n}',
                solution_cpp: 'class Solution {\npublic:\n    int getSum(int a, int b) {\n        while(b != 0) { int tmp = (unsigned int)(a & b) << 1; a ^= b; b = tmp; }\n        return a;\n    }\n};'
            },
            {
                section_id: sectionIds['Bit Manipulation'],
                title: 'Missing Number',
                leetcode_url: 'https://leetcode.com/problems/missing-number/',
                difficulty: 'Easy',
                procedure: 'XOR all numbers from 0 to n and all numbers in the array. The final result is the missing number.',
                solution_python: 'def missingNumber(nums):\n    res = len(nums)\n    for i in range(len(nums)): res ^= i ^ nums[i]\n    return res',
                solution_java: 'class Solution {\n    public int missingNumber(int[] nums) {\n        int res = nums.length;\n        for (int i = 0; i < nums.length; i++) res ^= i ^ nums[i];\n        return res;\n    }\n}',
                solution_cpp: 'class Solution {\npublic:\n    int missingNumber(vector<int>& nums) {\n        int res = nums.size();\n        for(int i = 0; i < nums.size(); i++) res ^= i ^ nums[i];\n        return res;\n    }\n};'
            },
            {
                section_id: sectionIds['Bit Manipulation'],
                title: 'Reverse Bits',
                leetcode_url: 'https://leetcode.com/problems/reverse-bits/',
                difficulty: 'Easy',
                procedure: 'Iterate 32 times. Extract the last bit of the number and build the result by shifting left.',
                solution_python: 'def reverseBits(n):\n    res = 0\n    for i in range(32):\n        res = (res << 1) | (n & 1)\n        n >>= 1\n    return res',
                solution_java: 'public class Solution {\n    public int reverseBits(int n) {\n        int res = 0;\n        for (int i = 0; i < 32; i++) { res <<= 1; res |= (n & 1); n >>>= 1; }\n        return res;\n    }\n}',
                solution_cpp: 'class Solution {\npublic:\n    uint32_t reverseBits(uint32_t n) {\n        uint32_t res = 0;\n        for(int i = 0; i < 32; i++) { res <<= 1; res |= (n & 1); n >>= 1; }\n        return res;\n    }\n};'
            }
        ];

        for (const q of questions) {
            await pool.query(
                `INSERT INTO questions (section_id, title, leetcode_url, difficulty, procedure, solution_python, solution_java, solution_cpp)
                 VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
                [q.section_id, q.title, q.leetcode_url, q.difficulty, q.procedure, q.solution_python, q.solution_java, q.solution_cpp]
            );
        }

        console.log("Seeding completed successfully with 8 sections and 20 questions!");
    } catch (err) {
        console.error("Seeding error:", err);
    } finally {
        await pool.end();
    }
};

seedData();
