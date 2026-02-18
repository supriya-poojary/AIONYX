const pythonLessons = {
    // MODULE 1: Variables & Data Types
    "1.1": {
        title: "Introduction to Variables",
        content: `
            <h1>Introduction to Variables</h1>
            <p>In Python, a <b>variable</b> is like a label or a name tag that you attach to a piece of data stored in your computer's memory. Imagine your computer's memory as a giant warehouse full of boxes; a variable is the name you write on the box so you can find it later.</p>
            
            <h2>What happens in depth?</h2>
            <p>Unlike languages like C++ or Java, Python is <b>dynamically typed</b>. This means you don't have to tell Python "this box will only hold numbers" (declaration). Instead, Python looks at what you put in the box and figures out the type automatically. When you write <code>x = 5</code>, Python creates an integer object <code>5</code> in memory and makes <code>x</code> point to it.</p>
            
            <h2>Key Characteristics</h2>
            <ul>
                <li><b>Assignment:</b> Use the <code>=</code> operator to assign a value.</li>
                <li><b>Re-assignment:</b> You can change the value of a variable at any time.</li>
                <li><b>Dynamic:</b> A variable that held a number can later hold text.</li>
            </ul>

            <div class="code-block">name = "Aionyx" # String
score = 95       # Integer
price = 19.99    # Float</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Create three variables: <code>city</code> with the name of your favorite city, <code>temp</code> with its current temperature, and <code>is_sunny</code> set to True or False. Print all three.</p>
        `,
        code: `# Step 1: Create a variable for city
city = "Tokyo"

# Step 2: Create a variable for temperature (float)


# Step 3: Create a variable for 'is_sunny' (boolean)


# Step 4: Print them all
print(city)`
    },
    "1.2": {
        title: "Variable Naming Rules",
        content: `
            <h1>Variable Naming Rules</h1>
            <p>To keep your code readable and bug-free, Python enforces specific rules on how you can name your variables. Choosing "good" names is a skill that separates junior developers from seniors.</p>
            
            <h2>The Strict Rules</h2>
            <ul>
                <li>Must start with a <b>letter</b> or an <b>underscore (_)</b>.</li>
                <li>Cannot start with a <b>number</b>.</li>
                <li>Can only contain alpha-numeric characters (A-z, 0-9) and underscores.</li>
                <li><b>Case-Sensitive:</b> <code>myVar</code>, <code>myvar</code>, and <code>MYVAR</code> are 3 different variables.</li>
            </ul>

            <h2>Professional "Best Practices"</h2>
            <p>In the Python community, we use <b>snake_case</b> for variable names (e.g., <code>user_registration_date</code>). This makes names easy to read. Avoid using Python keywords like <code>if</code>, <code>while</code>, or <code>print</code> as variable names.</p>

            <div class="code-block"># Good Names
user_age = 25
_internal_count = 10

# Bad Names (Will cause Errors)
2_factor_auth = "Yes"
user-name = "John"</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Correct the illegal variable names in the editor so the code runs without errors.</p>
        `,
        code: `# FIX THESE NAMES:
my_first_place = "Gold"
my_salary = 50000
my_class = "Math"

print("Success!")`
    },
    "1.3": {
        title: "Integer Data Type",
        content: `
            <h1>Integer Data Type (int)</h1>
            <p>An <b>Integer</b> is a whole number without any fractional or decimal parts. It can be positive, negative, or zero.</p>
            
            <h2>In Depth: Python's "Infinite" Integers</h2>
            <p>In many languages, integers have a limit (like 2 billion). However, in Python 3, integers have <b>arbitrary precision</b>. This means they can be as large as your computer's memory allows! You can calculate <code>10 ** 1000</code> (10 to the power of 1000) and Python will handle it perfectly.</p>
            
            <h2>Common Uses</h2>
            <ul>
                <li>Counting items in a loop.</li>
                <li>Mathematical indexing (e.g., getting the 1st item in a list).</li>
                <li>Any calculation where fractions don't make sense (like number of users).</li>
            </ul>

            <div class="code-block">big_number = 100000000000000000000
negative_val = -42
zero = 0</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Create a variable <code>base</code> and <code>exponent</code>. Calculate <code>base</code> raised to the power of <code>exponent</code> using <code>**</code> and print the result. Use large numbers to see Python's power!</p>
        `,
        code: `base = 2
exponent = 100

# Calculate power and print result
result = base ** exponent
print(result)`
    },
    "1.4": {
        title: "Floating Point Data Type",
        content: `
            <h1>Floating Point (float)</h1>
            <p>A <b>Float</b> represents a "real" number—any number that contains a decimal point. Examples include <code>3.14</code>, <code>-0.001</code>, and even <code>7.0</code>.</p>
            
            <h2>In Depth: Floating Point Precision</h2>
            <p>Computers store floats using a standard called IEEE 754. Because of how binary works, sometimes tiny rounding errors occur. For example, <code>0.1 + 0.2</code> might result in <code>0.30000000000000004</code>. For high-precision financial work, Python has a special <code>Decimal</code> module, but for almost everything else, standard floats are perfect.</p>
            
            <h2>Scientific Notation</h2>
            <p>You can use <code>e</code> to represent powers of 10. <code>3e2</code> is scientific notation for 300.0 (3 * 10²).</p>

            <div class="code-block">pi = 3.14159
gravity = 9.8
micro = 1.2e-5 # 0.000012</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Calculate the area of a circle with <code>radius = 5.5</code>. Use the formula: <code>area = 3.14 * radius * radius</code>. Print the area.</p>
        `,
        code: `radius = 5.5
pi = 3.14

# Calculate area
area = pi * radius * radius
print("Area of circle:", area)`
    },
    "1.5": {
        title: "String Data Type",
        content: `
            <h1>String Data Type (str)</h1>
            <p>A <b>String</b> is a sequence of characters. It’s what Python uses to represent text. Anything inside quotes is a string.</p>
            
            <h2>In Depth: Flexible Quotes</h2>
            <p>Python lets you use single quotes (<code>'</code>) or double quotes (<code>"</code>). This is helpful if your text contains a quote: <code>"Don't worry"</code> works easily because the outer double quotes don't clash with the inner single quote.</p>
            
            <h2>Multiline Strings</h2>
            <p>You can use triple quotes (<code>'''</code> or <code>"""</code>) to create strings that span multiple lines, often used for documentation or long text blocks.</p>

            <div class="code-block">msg = "Hello Python!"
long_msg = """This is a
multiline string."""</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Create a variable <code>full_name</code> and assign it your name. Create another variable <code>greeting</code> that combined "Hello " + <code>full_name</code>. Print the greeting.</p>
        `,
        code: `first_name = "Guido"
last_name = "van Rossum"

# Join them with a space and add a greeting
full_name = first_name + " " + last_name
greeting = "Hello " + full_name
print(greeting)`
    },
    "1.6": {
        title: "Boolean Data Type",
        content: `
            <h1>Boolean Data Type (bool)</h1>
            <p>The <b>Boolean</b> type is the simplest data type: it has only two possible values: <code>True</code> and <code>False</code>.</p>
            
            <h2>In Depth: "Truthiness"</h2>
            <p>In Python, almost any value can be evaluated as a Boolean. Numbers other than <code>0</code> are considered "truthy", while <code>0</code>, <code>None</code>, and empty sequences (like <code>""</code>) are "falsy". This is extremely powerful for writing concise logic.</p>
            
            <h2>Logic Building Blocks</h2>
            <p>Booleans are the result of comparisons like <code>10 > 5</code>. They are the backbone of decision-making in code.</p>

            <div class="code-block">is_running = True
has_finished = False

result = (100 == 100) # result is True</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Compare two numbers: <code>a = 15</code> and <code>b = 20</code>. Create a variable <code>is_greater</code> that stores if <code>a</code> is greater than <code>b</code>. Print <code>is_greater</code>.</p>
        `,
        code: `a = 15
b = 20

# Compare and store result
is_greater = a > b
print("Is a > b?", is_greater)`
    },
    "1.7": {
        title: "Checking Data Types",
        content: `
            <h1>Checking Data Types</h1>
            <p>Sometimes when you receive data from a file or a user, you aren't sure what type it is. Python provides the <code>type()</code> function to inspect any variable.</p>
            
            <h2>Why check types?</h2>
            <p>Python is "Strongly Typed", meaning it won't let you perform operations that don't make sense (like adding a number to a string). Checking the type first prevents your program from crashing.</p>

            <div class="code-block">x = 10
print(type(x)) # <class 'int'>

y = "10"
print(type(y)) # <class 'str'></div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>We have a list of variables below. Print the <code>type()</code> of each one to see how Python treats them differently.</p>
        `,
        code: `a = 100
b = 100.0
c = "100"
d = True

# Print types of a, b, c, and d
print(type(a))
print(type(b))
print(type(c))
print(type(d))`
    },
    "1.8": {
        title: "Type Casting",
        content: `
            <h1>Type Casting (Conversion)</h1>
            <p><b>Casting</b> is the process of converting a variable from one data type to another. For example, converting the string <code>"10"</code> into the integer <code>10</code>.</p>
            
            <h2>Core Casting Functions</h2>
            <ul>
                <li><code>int()</code>: Converts to an integer. Floors floating points (3.9 becomes 3).</li>
                <li><code>float()</code>: Converts to a decimal number.</li>
                <li><code>str()</code>: Converts anything into text format.</li>
            </ul>

            <div class="code-block">price_str = "49.99"
price_num = float(price_str) # Conversion complete!

age = 25
msg = "I am " + str(age) # Must cast to join with string</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Convert the string <code>s = "50"</code> into an integer and add <code>10</code> to it. Print the result. If you don't cast, Python will give a TypeError!</p>
        `,
        code: `s = "50"

# Convert s to int and add 10
num = int(s) + 10
print(num)`
    },
    "1.9": {
        title: "Multiple Assignment",
        content: `
            <h1>Multiple Assignment</h1>
            <p>Python allows you to assign values to multiple variables in a single line. This is a "Pythonic" shorthand that keeps your code clean and readable.</p>
            
            <h2>Techniques</h2>
            <ul>
                <li><b>Many Values to Many Variables:</b> <code>x, y = 1, 2</code></li>
                <li><b>One Value to Many Variables:</b> <code>x = y = z = 0</code></li>
                <li><b>Unpacking:</b> You can even extract values from lists directly into variables.</li>
            </ul>

            <div class="code-block"># Swapping variables (very easy in Python!)
a, b = 5, 10
a, b = b, a # Swapped! a is 10, b is 5</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Assign your <code>first_name</code>, <code>age</code>, and <code>country</code> in one single line. Print all three variables.</p>
        `,
        code: `# Assign in one line
name, age, country = "John", 30, "USA"

print(name)
print(age)
print(country)`
    },

    // MODULE 2: Input, Output & Formatting
    // MODULE 2: Input, Output & Formatting
    "2.1": {
        title: "Input Function",
        content: `
            <h1>Getting User Input</h1>
            <p>Programs are much more useful when they can interact with users. The <code>input()</code> function pauses your program and waits for the user to type something.</p>
            
            <h2>The "String" Rule</h2>
            <p><b>Crucial Point:</b> The <code>input()</code> function always returns the data as a <b>String</b>, even if the user types a number. If you need a number for math, you must cast it (using <code>int()</code> or <code>float()</code>).</p>
            
            <h2>Adding a Prompt</h2>
            <p>You should always pass a string to <code>input()</code> to tell the user what you want them to do.</p>

            <div class="code-block">fav_color = input("What's your favorite color? ")
print("Cool, I like " + fav_color + " too!")</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Ask the user for their <code>name</code> using <code>input()</code>. Then, print a message saying "Welcome to AIONYX, [name]!".</p>
        `,
        code: `# Ask for name
user_name = input("Enter your name: ")

# Print welcome message
print(f"Welcome to AIONYX, {user_name}!")`
    },
    "2.2": {
        title: "Type Conversion with Input",
        content: `
            <h1>Math with User Input</h1>
            <p>Because <code>input()</code> returns strings, trying to do math with them will cause errors. To fix this, we wrap the <code>input()</code> inside a casting function.</p>
            
            <h2>Nested Functions</h2>
            <p>You can call a function inside another function. <code>int(input("..."))</code> first gets the text from the user, then immediately tries to turn that text into a whole number.</p>

            <div class="code-block"># Correct way to get a number
age = int(input("Enter your age: "))
years_left = 100 - age
print(f"You will reach 100 in {years_left} years.")</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Ask the user for two numbers (use <code>float()</code> for decimals). Calculate their sum and print "The total is: [sum]".</p>
        `,
        code: `num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))

# Calculate sum and print
total = num1 + num2
print("The total is:", total)`
    },
    "2.3": {
        title: "Output using print()",
        content: `
            <h1>Mastering the print() Function</h1>
            <p>The <code>print()</code> function is the most basic way to output data. It sends data to the "standard output" (usually the terminal or console).</p>
            
            <h2>Automatic Newline</h2>
            <p>By default, every <code>print()</code> statement starts on a new line. You don't have to worry about adding line breaks manually unless you want extra ones.</p>
            
            <h2>Printing Different Types</h2>
            <p>You can pass multiple items of different types separated by commas, and Python will automatically put a space between them and convert them to text.</p>

            <div class="code-block">print("Hello", 123, True) # Output: Hello 123 True</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Print the phrase "Knowledge is power" but use three separate strings inside a single <code>print()</code> function call.</p>
        `,
        code: `# Print using three separate strings in one function call
print("Knowledge", "is", "power")`
    },
    "2.4": {
        title: "Printing Multiple Values",
        content: `
            <h1>Printing Multiple Values</h1>
            <p>When using <code>print()</code>, you can pass as many arguments as you like. This is often cleaner than joining strings with <code>+</code>.</p>
            
            <h2>Difference between + and ,</h2>
            <ul>
                <li><b>Commas (<code>,</code>):</b> Automatically adds a space and allows mixing types (numbers + strings).</li>
                <li><b>Plus (<code>+</code>):</b> Only works for the same type (string + string) and does <b>not</b> add a space automatically.</li>
            </ul>

            <div class="code-block">age = 20
# Comma is better here
print("I am", age, "years old.")</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Create variables <code>item = "Python"</code> and <code>level = 1</code>. Print them together in a sentence like "Item: Python, Level: 1" using the comma method.</p>
        `,
        code: `item = "Python"
level = 1

# Print them together
print("Item:", item, "Level:", level)`
    },
    "2.5": {
        title: "sep and end Parameters",
        content: `
            <h1>Customizing Output: sep & end</h1>
            <p>The <code>print()</code> function has two hidden "secret" parameters that give you complete control over formatting.</p>
            
            <h2>1. sep (Separator)</h2>
            <p>By default, <code>sep=" "</code> (a space). You can change it to dashes, dots, or nothing at all.</p>
            
            <h2>2. end (End of line)</h2>
            <p>By default, <code>end="\\n"</code> (a newline). You can change it to a space or a tab to keep the next print statement on the <b>same line</b>.</p>

            <div class="code-block">print("127", "0", "0", "1", sep=".") # 127.0.0.1
print("Hello", end=" ")
print("World") # Hello World (one line)</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Print three words: "Apple", "Banana", "Cherry". Use <code>sep=" + "</code> to separate them and <code>end=" = Fruit Salad"</code> at the end.</p>
        `,
        code: `# Use sep and end parameters
print("Apple", "Banana", "Cherry", sep=" + ", end=" = Fruit Salad")`
    },
    "2.6": {
        title: "Escape Characters",
        content: `
            <h1>Escape Characters</h1>
            <p>Escape characters allow you to insert characters that are otherwise difficult to type in code, like a newline or a tab.</p>
            
            <h2>Common Escapes</h2>
            <ul>
                <li><code>\\n</code>: New Line (starts a new line).</li>
                <li><code>\\t</code>: Tab (adds horizontal spacing).</li>
                <li><code>\\\\'</code>: Single Quote.</li>
                <li><code>\\\\"</code>: Double Quote.</li>
            </ul>

            <div class="code-block">print("Line 1\\nLine 2")
print("I\\'m learning Python.")</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Print a "shopping list" with items on different lines using only <b>one</b> <code>print()</code> function call and <code>\\n</code>. Item 1: Milk, Item 2: Bread, Item 3: Eggs.</p>
        `,
        code: `# Print the list using \n inside one string
print("Milk\\nBread\\nEggs")`
    },
    "2.7": {
        title: "f-Strings",
        content: `
            <h1>Modern Formatting: f-Strings</h1>
            <p>Introduced in Python 3.6, <b>f-Strings</b> (formatted string literals) are the modern and fastest way to format text. They look much cleaner than old methods.</p>
            
            <h2>How to use?</h2>
            <p>Put an <code>f</code> before the opening quote, and then wrap your variable names in curly braces <code>{}</code> directly inside the string.</p>

            <div class="code-block">name = "Alice"
age = 22
print(f"Hello, {name}. Next year you will be {age + 1}.")</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Create variables <code>brand = "Tesla"</code> and <code>model = "Model 3"</code>. Use an f-string to print "I want to drive a Tesla Model 3."</p>
        `,
        code: `brand = "Tesla"
model = "Model 3"

# Use f-string
message = f"I want to drive a {brand} {model}."
print(message)`
    },
    "2.8": {
        title: "Number Formatting",
        content: `
            <h1>Formatting Numbers</h1>
            <p>When showing data to users, you often want to limit decimal places (like <code>$19.99</code> instead of <code>$19.987654321</code>). f-Strings make this easy.</p>
            
            <h2>The Format Specifier</h2>
            <p>Inside the braces, use a colon <code>:</code> followed by <code>.2f</code>.
            <ul>
                <li><code>.</code>: Decimal point.</li>
                <li><code>2</code>: Number of digits.</li>
                <li><code>f</code>: Float.</li>
            </ul>

            <div class="code-block">score = 85.66666
print(f"Your score is {score:.1f}%") # 85.7%</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Calculate <code>10 / 3</code>. Store it in a variable <code>val</code>. Use an f-string to print it formatted to exactly <b>3 decimal places</b>.</p>
        `,
        code: `val = 10 / 3

# Format to 3 decimal places
print(f"Result: {val:.3f}")`
    },

    // MODULE 3: Operators
    // MODULE 3: Operators
    "3.1": {
        title: "Arithmetic Operators",
        content: `
            <h1>Arithmetic Operators</h1>
            <p>Arithmetic operators are used with numeric values to perform common mathematical operations.</p>
            
            <h2>Standard Operators</h2>
            <ul>
                <li><code>+</code> (Addition)</li>
                <li><code>-</code> (Subtraction)</li>
                <li><code>*</code> (Multiplication)</li>
                <li><code>/</code> (Division): Always returns a float (e.g., <code>10 / 2</code> is <code>5.0</code>).</li>
            </ul>

            <h2>Advanced Operators</h2>
            <ul>
                <li><code>%</code> (Modulus): Returns the remainder (e.g., <code>10 % 3</code> is <code>1</code>).</li>
                <li><code>**</code> (Exponentiation): Power operator (e.g., <code>2 ** 3</code> is <code>8</code>).</li>
                <li><code>//</code> (Floor Division): Rounds the result down to the nearest whole number (e.g., <code>10 // 3</code> is <code>3</code>).</li>
            </ul>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Calculate the remainder when <code>100</code> is divided by <code>7</code> using the modulus operator. Print the result.</p>
        `,
        code: `# Calculate remainder of 100 / 7
remainder = 100 % 7
print("Remainder:", remainder)`
    },
    "3.2": {
        title: "Relational Operators",
        content: `
            <h1>Relational (Comparison) Operators</h1>
            <p>Comparison operators compare two values and return a <code>Boolean</code> (True or False). They are the "eyes" of your program's logic.</p>
            
            <h2>The List</h2>
            <ul>
                <li><code>==</code> (Equal to): Note the double equals!</li>
                <li><code>!=</code> (Not equal to)</li>
                <li><code>></code> / <code><</code> (Greater than / Less than)</li>
                <li><code>>=</code> / <code><=</code> (Greater or equal / Less or equal)</li>
            </ul>

            <div class="code-block">print(5 == 5) # True
print(10 != 10) # False</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Check if <code>4^2</code> (4 squared) is equal to <code>16</code>. Use <code>**</code> for the power and <code>==</code> for the comparison. Print the result.</p>
        `,
        code: `# Compare 4 squared with 16
result = (4 ** 2) == 16
print("Is 4^2 equal to 16?", result)`
    },
    "3.3": {
        title: "Logical Operators",
        content: `
            <h1>Logical Operators</h1>
            <p>Logical operators allow you to combine multiple Boolean conditions together.</p>
            
            <h2>The Three Pillars</h2>
            <ol>
                <li><b>and:</b> Returns True if <b>both</b> statements are true.</li>
                <li><b>or:</b> Returns True if <b>at least one</b> statement is true.</li>
                <li><b>not:</b> Reverses the result (True becomes False).</li>
            </ol>

            <div class="code-block">x = 5
print(x > 3 and x < 10) # True
print(x > 10 or x < 2) # False</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Create a variable <code>age = 25</code>. Write a condition that checks if age is greater than 18 <b>and</b> less than 30. Print the result.</p>
        `,
        code: `age = 25

# Check if age is between 18 and 30
is_eligible = age > 18 and age < 30
print("Is eligible?", is_eligible)`
    },
    "3.4": {
        title: "Assignment Operators",
        content: `
            <h1>Assignment Operators</h1>
            <p>Assignment operators are used to assign values to variables. You already know <code>=</code>, but Python has several "compound" versions that save time.</p>
            
            <h2>Shorthand for Math</h2>
            <p>Instead of writing <code>x = x + 5</code>, you can write <code>x += 5</code>. This works for almost all arithmetic operators.</p>

            <div class="code-block">x = 10
x += 3 # x is now 13
x *= 2 # x is now 26
x /= 13 # x is now 2.0</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Start with <code>balance = 500</code>. Use <code>+=</code> to add <code>100</code> and then use <code>-=</code> to subtract <code>50</code>. Print the final balance.</p>
        `,
        code: `balance = 500

# Use += and -=
balance += 100
balance -= 50

print("Final Balance:", balance)`
    },
    "3.5": {
        title: "Identity & Membership Operators",
        content: `
            <h1>Identity & Membership</h1>
            <p>These operators are unique to Python and make code read like English.</p>
            
            <h2>1. Identity (is, is not)</h2>
            <p>Checks if two variables point to the <b>exact same object</b> in memory (not just if they have the same value).</p>
            
            <h2>2. Membership (in, not in)</h2>
            <p>Checks if a value exists inside a sequence like a string or a list.</p>

            <div class="code-block">name = "Aionyx"
print("A" in name) # True
print("z" not in name) # True</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Check if the letter "p" is in the word "python". Remember that Python is case-sensitive!</p>
        `,
        code: `word = "python"

# Use 'in' to check for "p"
result = "p" in word
print("Is 'p' in word?", result)`
    },

    // MODULE 4: Conditional Statements
    // MODULE 4: Conditional Statements
    "4.1": {
        title: "if Statement",
        content: `
            <h1>The If Statement</h1>
            <p>The <code>if</code> statement is used to execute a block of code only if a specific condition is True. It is the most fundamental tool for decision-making.</p>
            
            <h2>Crucial: Indentation</h2>
            <p>In Python, indentation (the whitespace at the start of a line) is <b>not optional</b>. It defines which code belongs to the <code>if</code> block. If you don't indent, your code will fail.</p>
            
            <h2>Syntax</h2>
            <p><code>if condition:</code><br> followed by an indented line.</p>

            <div class="code-block">a = 33
b = 200
if b > a:
    print("b is greater than a")</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Create a variable <code>score = 90</code>. Write an <code>if</code> statement that prints "Excellent!" if the score is greater than or equal to 80.</p>
        `,
        code: `score = 90

# Write your if statement here
if score >= 80:
    print("Excellent!")`
    },
    "4.2": {
        title: "if–else Statement",
        content: `
            <h1>The if-else Statement</h1>
            <p>The <code>else</code> statement runs a block of code if the <code>if</code> condition was False. It's your "Plan B".</p>
            
            <div class="code-block">temp = 10
if temp > 20:
    print("Warm")
else:
    print("Cold")</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Ask for a number using <code>input()</code>. Inform the user if the number is "Positive" or "Not Positive" (0 or negative).</p>
        `,
        code: `num = int(input("Enter number: "))

if num > 0:
    print("Positive")
else:
    print("Not Positive")`
    },
    "4.3": {
        title: "if–elif–else Ladder",
        content: `
            <h1>The elif Ladder</h1>
            <p>Use <code>elif</code> (else if) to check multiple specific conditions in a row. Python stops at the first True condition.</p>

            <div class="code-block">if score >= 90:
    print("Grade A")
elif score >= 80:
    print("Grade B")
else:
    print("Keep working!")</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Create a simple traffic light logic. If <code>light == "Green"</code>, print "Go". If <code>light == "Yellow"</code>, print "Slow down". Otherwise, print "Stop".</p>
        `,
        code: `light = "Yellow"

# Use if-elif-else
if light == "Green":
    print("Go")
elif light == "Yellow":
    print("Slow down")
else:
    print("Stop")`
    },
    "4.4": {
        title: "Nested if Statements",
        content: `
            <h1>Nested if Statements</h1>
            <p>You can have <code>if</code> statements inside other <code>if</code> statements. This is called <b>nesting</b>. While powerful, be careful: too much nesting makes code hard to read.</p>
            
            <h2>Example</h2>
            <div class="code-block">if x > 10:
    print("Above ten,")
    if x > 20:
        print("and also above 20!")
    else:
        print("but not above 20.")</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>We are checking a user's <code>age</code> and <code>has_ticket</code>. If <code>age >= 18</code>, print "Entry permitted". Inside that block, check if <code>has_ticket</code> is True. If so, print "Enjoy the show!".</p>
        `,
        code: `age = 20
has_ticket = True

# Nested If
if age >= 18:
    print("Entry permitted")
    if has_ticket:
        print("Enjoy the show!")`
    },

    // MODULE 5: Loops
    // MODULE 5: Control Flow (Loops)
    "5.1": {
        title: "While Loop",
        content: `
            <h1>The While Loop</h1>
            <p>A <code>while</code> loop repeatedly executes a block of code as long as a given condition remains <b>True</b>. It is ideal when you don't know exactly how many times you need to repeat something.</p>
            
            <h2>Avoiding Infinite Loops</h2>
            <p>Crucial: Inside the loop, you <b>must</b> change something that eventually makes the condition False. If you forget to increment a counter, your program will run forever (an "infinite loop")!</p>

            <div class="code-block">count = 1
while count <= 5:
    print(f"Iteration {count}")
    count += 1 # Critical step!</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Create a countdown. Start <code>timer = 10</code>. Use a <code>while</code> loop to print the timer value and decrease it by 1 each time until it reaches 0. After the loop, print "Blast off!".</p>
        `,
        code: `timer = 10

# Write while loop here
while timer > 0:
    print(timer)
    timer -= 1

print("Blast off!")`
    },
    "5.2": {
        title: "For Loop",
        content: `
            <h1>The For Loop</h1>
            <p>A <code>for</code> loop is used for iterating over a sequence (like a list, a tuple, a dictionary, a set, or a string).</p>
            
            <h2>"Pythonic" Iteration</h2>
            <p>Unlike other languages where you manage an index (like <code>i=0; i<n; i++</code>), Python's <code>for</code> loop directly grabs each item from the collection. It's much cleaner!</p>

            <div class="code-block">fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(f"I like {fruit}")</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Iterate through the string <code>word = "AIONYX"</code>. Print each character on a new line.</p>
        `,
        code: `word = "AIONYX"

# Loop through the string
for char in word:
    print(char)`
    },
    "5.3": {
        title: "range() Function",
        content: `
            <h1>The range() Function</h1>
            <p>The <code>range()</code> function returns a sequence of numbers. It is most commonly used to run a <code>for</code> loop a specific number of times.</p>
            
            <h2>Three Ways to Use range()</h2>
            <ul>
                <li><code>range(5)</code>: 0, 1, 2, 3, 4 (stops <b>before</b> 5).</li>
                <li><code>range(2, 6)</code>: 2, 3, 4, 5 (start at 2, stop before 6).</li>
                <li><code>range(1, 10, 2)</code>: 1, 3, 5, 7, 9 (start at 1, step by 2).</li>
            </ul>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Use <code>range()</code> to print all even numbers from 2 to 20 (inclusive).</p>
        `,
        code: `# Use range(start, stop, step)
for i in range(2, 21, 2):
    print(i)`
    },
    "5.4": {
        title: "Nested Loops",
        content: `
            <h1>Nested Loops</h1>
            <p>A nested loop is a loop inside a loop. The "inner loop" will execute completely for every single iteration of the "outer loop".</p>
            
            <h2>Common Use Case: Grids</h2>
            <p>Nested loops are perfect for processing 2D data, like coordinates in a game or cells in a spreadsheet.</p>

            <div class="code-block">for i in range(3): # Outer
    for j in range(2): # Inner
        print(f"Coord: {i},{j}")</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Print a 3x3 square of stars (<code>*</code>) using nested loops. Use <code>end=" "</code> in the inner print to stay on the same line, and an empty <code>print()</code> in the outer loop to start a new row.</p>
        `,
        code: `# Outer loop for rows
for i in range(3):
    # Inner loop for columns
    for j in range(3):
        print("*", end=" ")
    # New row
    print()`
    },
    "5.5": {
        title: "Break Statement",
        content: `
            <h1>The Break Statement</h1>
            <p>The <code>break</code> statement is used to exit a loop prematurely, regardless of whether the loop condition is still True.</p>
            
            <h2>When to use?</h2>
            <p>Use it when you've found what you were looking for (like an item in a list) and there's no need to check the rest.</p>

            <div class="code-block">for n in range(1, 100):
    if n == 5:
        break # Stops the loop at 5
    print(n)</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>We are searching for the number <code>7</code> in a loop from 1 to 10. Once you find it, print "Found it!" and use <code>break</code>.</p>
        `,
        code: `for i in range(1, 11):
    if i == 7:
        print("Found it!")
        break
    print("Checking:", i)`
    },
    "5.6": {
        title: "Continue Statement",
        content: `
            <h1>The Continue Statement</h1>
            <p>The <code>continue</code> statement stops the <b>current iteration</b> and immediately jumps to the next one.</p>
            
            <h2>Break vs. Continue</h2>
            <ul>
                <li><b>break:</b> Kills the entire loop.</li>
                <li><b>continue:</b> Just skips the current item and moves on to the next.</li>
            </ul>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Loop from 1 to 5. Use <code>continue</code> to skip the number <code>3</code>. You should see 1, 2, 4, 5 in the output.</p>
        `,
        code: `for i in range(1, 6):
    if i == 3:
        continue
    print(i)`
    },
    "5.7": {
        title: "Pass Statement",
        content: `
            <h1>The Pass Statement</h1>
            <p>The <code>pass</code> statement is a null operation—it does absolutely nothing. Use it as a placeholder when a statement is syntactically required but you don't want to execute any code yet.</p>
            
            <h2>Why?</h2>
            <p>Python will throw an error if you have an empty <code>if</code> or <code>for</code> block. <code>pass</code> keeps the code valid while you plan your implementation.</p>

            <div class="code-block">def complex_function():
    pass # I'll finish this tomorrow!</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>We have an empty loop below that causes an error. Add <code>pass</code> inside the loop to make the code run correctly.</p>
        `,
        code: `for i in range(10):
    # Add pass here to avoid error
    pass

print("Code executed successfully!")`
    },

    // MODULE 6: Strings
    // MODULE 6: Strings (In-depth)
    "6.1": {
        title: "String Creation",
        content: `
            <h1>The Secret of Quotes</h1>
            <p>Strings are one of the most used data types in Python. You can create them with many types of quotes, each with a special purpose.</p>
            
            <h2>Single vs. Double Quotes</h2>
            <p>Technically, they are the same. However, if your string contains a single quote (like "I'm"), you should use double quotes to wrap it, and vice versa.</p>
            
            <h2>Triple Quotes (''')</h2>
            <p>Used for multiline strings. Anything you type between triple quotes is preserved exactly as it is, including spaces and newlines.</p>

            <div class="code-block">s1 = "I'm a coder"
s2 = 'He said "Hello"'
s3 = """Line 1
Line 2"""</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Create a triple-quoted string that contains your favorite poem or a 3-line description of yourself. Print it.</p>
        `,
        code: `my_story = """I am a developer.
I love solving problems.
AIONYX is my tool."""

print(my_story)`
    },
    "6.2": {
        title: "String Indexing",
        content: `
            <h1>String Indexing</h1>
            <p>Every character in a string has an address, called an <b>index</b>. In Python, we start counting from <b>0</b>.</p>
            
            <h2>Negative Indexing</h2>
            <p>Python also supports negative indices. <code>-1</code> refers to the <b>last</b> character, <code>-2</code> to the second-to-last, and so on. This is incredibly useful for getting the end of a string!</p>

            <div class="code-block">txt = "Python"
# P y t h o n
# 0 1 2 3 4 5
# -6 -5 -4 -3 -2 -1</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Given <code>word = "Developer"</code>, print the first character using index <code>0</code> and the last character using index <code>-1</code>.</p>
        `,
        code: `word = "Developer"

# Print first and last characters
print("First:", word[0])
print("Last:", word[-1])`
    },
    "6.3": {
        title: "String Slicing",
        content: `
            <h1>String Slicing</h1>
            <p>Slicing allows you to extract a range of characters from a string using the syntax <code>[start : stop]</code>.</p>
            
            <h2>Important Rules</h2>
            <ul>
                <li>The <code>start</code> index is <b>included</b>.</li>
                <li>The <code>stop</code> index is <b>excluded</b> (it stops just before).</li>
                <li>If you leave <code>start</code> blank, it starts at 0.</li>
                <li>If you leave <code>stop</code> blank, it goes to the end.</li>
            </ul>

            <div class="code-block">txt = "Hello World"
print(txt[0:5]) # "Hello"
print(txt[6:])  # "World"</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Extract the word "Python" from <code>phrase = "Learn Python Now"</code> using slicing. Print it.</p>
        `,
        code: `phrase = "Learn Python Now"

# Slice out "Python"
python_word = phrase[6:12]
print(python_word)`
    },
    "6.4": {
        title: "String Methods",
        content: `
            <h1>String Methods</h1>
            <p>Python provides many built-in "tools" (methods) to modify and analyze strings. Note: These methods don't change the original string; they return a <b>new</b> one.</p>
            
            <h2>Common Methods</h2>
            <ul>
                <li><code>.upper()</code>: ALL CAPS.</li>
                <li><code>.lower()</code>: all lowercase.</li>
                <li><code>.strip()</code>: Removes spaces from start and end.</li>
                <li><code>.replace("old", "new")</code>: Swaps text.</li>
                <li><code>.split(",")</code>: Splits text into a list.</li>
            </ul>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Clean up the string <code>data = "   apple,banana,cherry   "</code>. First, use <code>.strip()</code> to remove spaces, then use <code>.upper()</code> to make it caps. Print the final result.</p>
        `,
        code: `data = "   apple,banana,cherry   "

# Clean and convert
cleaned = data.strip().upper()
print(cleaned)`
    },
    "6.5": {
        title: "String Immutability",
        content: `
            <h1>String Immutability</h1>
            <p>In Python, strings are <b>immutable</b>. This means once a string is created, you cannot change its individual characters.</p>
            
            <h2>Wait, what?</h2>
            <p>If you try <code>txt[0] = "h"</code>, Python will throw an error. To "change" a string, you must create a new one, usually by re-assigning the variable or using methods.</p>

            <div class="code-block">txt = "Hello"
# txt[0] = "J" -> Error!
txt = "Jello"  # This is okay (re-assignment)</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Try to change the first letter of <code>fruit = "apple"</code> to "A". Since you can't do it directly, create a new variable <code>new_fruit</code> using slicing and concatenation: <code>"A" + fruit[1:]</code>. Print <code>new_fruit</code>.</p>
        `,
        code: `fruit = "apple"

# Create new string with capital A
new_fruit = "A" + fruit[1:]
print(new_fruit)`
    },
    "6.6": {
        title: "String Formatting (Review)",
        content: `
            <h1>String Formatting Recap</h1>
            <p>We've already seen <b>f-Strings</b>, but let's look at one more trick: performing math inside the braces.</p>
            
            <h2>Expression Injection</h2>
            <p>You can put any valid Python code inside <code>{}</code> within an f-string, and Python will evaluate it before printing.</p>

            <div class="code-block">x = 10
y = 20
print(f"The sum is {x + y}")</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Create a variable <code>price = 99.99</code> and <code>tax_rate = 0.1</code>. Use an f-string to print "Total: [price + price*tax_rate]" formatted to 2 decimal places.</p>
        `,
        code: `price = 99.99
tax_rate = 0.1

# Calculate and print total in one f-string
print(f"Total: {price * (1 + tax_rate):.2f}")`
    },

    // MODULE 7: Lists
    // MODULE 7: Lists
    "7.1": {
        title: "Creating Lists",
        content: `
            <h1>Introduction to Lists</h1>
            <p>A <b>List</b> is a collection which is ordered and changeable. It allows duplicate members. In Python, lists are written with square brackets <code>[]</code>.</p>
            
            <h2>The "Everything" Container</h2>
            <p>Unlike some languages where a list can only hold one type of data, a Python list can hold a mix of strings, integers, floats, and even other lists!</p>

            <div class="code-block">my_list = ["apple", 42, 3.14, True]</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Create a list called <code>my_hobbies</code> with three of your favorite activities as strings. Print the list.</p>
        `,
        code: `my_hobbies = ["Coding", "Gaming", "Reading"]
print(my_hobbies)`
    },
    "7.2": {
        title: "Accessing List Elements",
        content: `
            <h1>Accessing List Elements</h1>
            <p>Just like strings, lists use zero-based indexing. You can get a specific item by putting its index in brackets <code>[index]</code>.</p>
            
            <h2>Common Techniques</h2>
            <ul>
                <li><code>list[0]</code>: First item.</li>
                <li><code>list[-1]</code>: Last item.</li>
                <li><code>len(list)</code>: Get the total number of items in the list.</li>
            </ul>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Given <code>colors = ["Red", "Green", "Blue", "Yellow"]</code>, print the second color in the list (index 1) and the total number of colors using <code>len()</code>.</p>
        `,
        code: `colors = ["Red", "Green", "Blue", "Yellow"]

# Print the 2nd item and the length
print("Second color:", colors[1])
print("Total colors:", len(colors))`
    },
    "7.3": {
        title: "List Methods",
        content: `
            <h1>List Methods</h1>
            <p>Lists are <b>mutable</b>, meaning they can be changed after they are created. Python provides several methods to add or remove items.</p>
            
            <h2>Adding Items</h2>
            <ul>
                <li><code>.append(item)</code>: Adds to the end.</li>
                <li><code>.insert(index, item)</code>: Puts item at a specific spot.</li>
            </ul>

            <h2>Removing Items</h2>
            <ul>
                <li><code>.remove(item)</code>: Deletes the first occurrence of that value.</li>
                <li><code>.pop(index)</code>: Removes and <b>returns</b> the item at that index (defaults to the last item).</li>
            </ul>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Start with <code>fruits = ["apple", "banana"]</code>. Use <code>.append()</code> to add "cherry". Then use <code>.insert()</code> to put "orange" at index 1. Print the final list.</p>
        `,
        code: `fruits = ["apple", "banana"]

# Add "cherry" to end
fruits.append("cherry")

# Insert "orange" at index 1
fruits.insert(1, "orange")

print(fruits)`
    },
    "7.4": {
        title: "List Slicing",
        content: `
            <h1>List Slicing</h1>
            <p>Slicing works on lists exactly the same way it works on strings! Use <code>list[start : stop]</code> to get a sub-list.</p>
            
            <div class="code-block">nums = [10, 20, 30, 40, 50]
print(nums[1:4]) # [20, 30, 40]</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Extract the first three items from the list <code>scores = [95, 88, 72, 91, 85]</code> and store them in <code>top_three</code>. Print it.</p>
        `,
        code: `scores = [95, 88, 72, 91, 85]

# Get first three items
top_three = scores[:3]
print(top_three)`
    },
    "7.5": {
        title: "Nested Lists (2D)",
        content: `
            <h1>Nested Lists (Matrices)</h1>
            <p>A list can contain other lists. This is how we represent grids, tables, or matrices in Python.</p>
            
            <h2>Accessing Data</h2>
            <p>Use two sets of brackets: the first for the "row" and the second for the "column". <code>matrix[0][1]</code> gets the 2nd item of the 1st list.</p>

            <div class="code-block">matrix = [
    [1, 2, 3],
    [4, 5, 6]
]
print(matrix[1][0]) # Output: 4</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>We have a <code>grid</code> below. Access and print the number <code>9</code> using double brackets.</p>
        `,
        code: `grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# Access number 9
val = grid[2][2]
print("Found:", val)`
    },

    // MODULE 8: Tuples & Sets
    // MODULE 8: Tuples & Sets
    "8.1": {
        title: "Tuples",
        content: `
            <h1>Introduction to Tuples</h1>
            <p>A <b>Tuple</b> is a collection which is ordered and <b>unchangeable</b>. In Python, tuples are written with round brackets <code>()</code>.</p>
            
            <h2>The "Lockbox"</h2>
            <p>Unlike lists, once a tuple is created, you cannot add, remove, or change items. This makes tuples faster and safer for data that should never change (like coordinates or configuration settings).</p>

            <div class="code-block">my_tuple = ("Red", "Green", "Blue")</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Create a tuple called <code>dimensions</code> with three numbers: 1920, 1080, and 60. Print the second item using indexing.</p>
        `,
        code: `dimensions = (1920, 1080, 60)

# Print the 2nd item
print("Dimension:", dimensions[1])`
    },
    "8.2": {
        title: "Tuple Methods",
        content: `
            <h1>Tuple Methods</h1>
            <p>Because tuples are immutable, they have very few methods compared to lists. Their primary purpose is to hold data, not manipulate it.</p>
            
            <h2>Core Methods</h2>
            <ul>
                <li><code>.count(value)</code>: Returns how many times a value appears.</li>
                <li><code>.index(value)</code>: Returns the first position where the value is found.</li>
            </ul>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>We have a tuple <code>votes = ("Yes", "No", "Yes", "Yes", "No")</code>. Use <code>.count()</code> to find out how many "Yes" votes are in the tuple. Print the result.</p>
        `,
        code: `votes = ("Yes", "No", "Yes", "Yes", "No")

# Count "Yes" votes
yes_count = votes.count("Yes")
print("Total Yes:", yes_count)`
    },
    "8.3": {
        title: "Sets",
        content: `
            <h1>Introduction to Sets</h1>
            <p>A <b>Set</b> is a collection which is unordered, unchangeable*, and unindexed. Sets are written with curly brackets <code>{}</code>.</p>
            
            <h2>The "Unique" Rule</h2>
            <p>The most important rule of a set: <b>Duplicate values are not allowed</b>. If you add the same item twice, the set will only keep one copy. This is perfect for removing duplicates from a list!</p>

            <div class="code-block">my_set = {"a", "b", "c", "a"}
print(my_set) # Output: {"a", "b", "c"}</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Create a set called <code>unique_ids</code> with the numbers <code>101, 102, 103, 101</code>. Print the set to see how it handles the duplicate <code>101</code>.</p>
        `,
        code: `unique_ids = {101, 102, 103, 101}

# Print the set
print(unique_ids)`
    },
    "8.4": {
        title: "Set Operations",
        content: `
            <h1>Set Operations (Math)</h1>
            <p>Sets are powerful because they allow you to perform mathematical operations like union and intersection.</p>
            
            <h2>Common Operations</h2>
            <ul>
                <li><code>set1.union(set2)</code>: Joins both sets (removes duplicates).</li>
                <li><code>set1.intersection(set2)</code>: Keeps only items found in <b>both</b> sets.</li>
                <li><code>set1.difference(set2)</code>: Keeps items in set1 that are <b>not</b> in set2.</li>
            </ul>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Find the common items between <code>set_a = {1, 2, 3}</code> and <code>set_b = {2, 3, 4}</code> using <code>.intersection()</code>. Print the result.</p>
        `,
        code: `set_a = {1, 2, 3}
set_b = {2, 3, 4}

# Find intersection
common = set_a.intersection(set_b)
print("Common items:", common)`
    },

    // MODULE 9: Dictionaries
    "9.1": {
        title: "Dictionary Basics",
        content: `
            <h1>Dictionary Basics</h1>
            <p>A <b>Dictionary</b> is a collection which is ordered*, changeable, and does not allow duplicates. Dictionaries store data in <b>key:value</b> pairs.</p>
            
            <h2>Real-world Analogy</h2>
            <p>Think of a dictionary as a contacts list on your phone. The <b>Name</b> (Key) is unique, and it points to a <b>Phone Number</b> (Value).</p>

            <div class="code-block">my_dict = {
    "brand": "Tesla",
    "model": "Model S",
    "year": 2023
}</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Create a dictionary called <code>car</code> with keys <code>"make"</code>, <code>"model"</code>, and <code>"year"</code>. Set them to any values you like. Print the dictionary.</p>
        `,
        code: `car = {
    "make": "Ford",
    "model": "Mustang",
    "year": 1964
}
print(car)`
    },
    "9.2": {
        title: "Accessing Dictionary Values",
        content: `
            <h1>Accessing Values</h1>
            <p>You can access the value of a specific item by referring to its <b>key name</b> inside square brackets.</p>
            
            <h2>The .get() Method</h2>
            <p>Using <code>dict["key"]</code> will throw an error if the key doesn't exist. Using <code>dict.get("key")</code> is safer because it returns <code>None</code> instead of crashing your program.</p>

            <div class="code-block">model = car["model"]
# OR
model = car.get("model")</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Given the <code>user</code> dictionary below, access the <code>"email"</code> using the square bracket method and print it.</p>
        `,
        code: `user = {
    "username": "coder123",
    "email": "hello@aionyx.com",
    "status": "active"
}

# Access and print email
print("Email:", user["email"])`
    },
    "9.3": {
        title: "Updating Dictionary",
        content: `
            <h1>Updating Dictionaries</h1>
            <p>Dictionaries are mutable. You can change the value of a specific item by referring to its key name, or add a new item by using a new key name.</p>
            
            <h2>Changing & Adding</h2>
            <ul>
                <li><code>dict["existing_key"] = new_value</code>: Updates.</li>
                <li><code>dict["brand_new_key"] = value</code>: Adds.</li>
            </ul>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Update the <code>car</code> dictionary. Change the <code>"year"</code> to <code>2024</code> and add a new key <code>"color"</code> with the value <code>"Red"</code>. Print the dictionary.</p>
        `,
        code: `car = {"brand": "Tesla", "year": 2023}

# Update year
car["year"] = 2024

# Add color
car["color"] = "Red"

print(car)`
    },
    "9.4": {
        title: "Dictionary Methods",
        content: `
            <h1>Dictionary Methods</h1>
            <p>Python provides several methods to interact with the structure of a dictionary.</p>
            
            <h2>Key Methods</h2>
            <ul>
                <li><code>.keys()</code>: Returns a list of all keys.</li>
                <li><code>.values()</code>: Returns a list of all values.</li>
                <li><code>.items()</code>: Returns each item as a tuple (key, value) in a list.</li>
                <li><code>.pop("key")</code>: Removes the item with the specified key name.</li>
            </ul>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Use <code>.pop()</code> to remove the <code>"model"</code> from the <code>bike</code> dictionary. Then print all remaining keys using <code>.keys()</code>.</p>
        `,
        code: `bike = {"brand": "Yamaha", "model": "R1", "year": 2022}

# Remove model
bike.pop("model")

# Print keys
print("Remaining Keys:", bike.keys())`
    },
    "9.5": {
        title: "Nested Dictionaries",
        content: `
            <h1>Nested Dictionaries</h1>
            <p>A dictionary can contain dictionaries, this is called nested dictionaries.</p>
            
            <h2>Accessing Nested Data</h2>
            <div class="code-block">myfamily = {
  "child1" : {"name" : "Emil", "year" : 2004},
  "child2" : {"name" : "Tobias", "year" : 2007}
}
print(myfamily["child1"]["name"]) # Emil</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Access and print the <code>"year"</code> of <code>"child2"</code> from the <code>myfamily</code> dictionary.</p>
        `,
        code: `myfamily = {
  "child1" : {"name" : "Emil", "year" : 2004},
  "child2" : {"name" : "Tobias", "year" : 2007}
}

# Access child2's year
print("Child 2 Year:", myfamily["child2"]["year"])`
    },

    // MODULE 10: Functions
    "10.1": {
        title: "Defining Functions",
        content: `
            <h1>What is a Function?</h1>
            <p>A <b>function</b> is a block of code which only runs when it is called. You can pass data, known as parameters, into a function.</p>
            
            <h2>The "def" Keyword</h2>
            <p>To create a function, we use the <code>def</code> keyword followed by the function name and parentheses <code>()</code>.</p>

            <div class="code-block">def my_function():
  print("Hello from Aionyx!")

my_function() # This "calls" the function</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Define a function called <code>greet()</code> that prints "Welcome to Python!". Call the function after defining it.</p>
        `,
        code: `def greet():
    # Print welcome message
    print("Welcome to Python!")

# Call the function
greet()`
    },
    "10.2": {
        title: "Function Parameters",
        content: `
            <h1>Parameters & Arguments</h1>
            <p>Data can be passed into functions as arguments. Arguments are specified after the function name, inside the parentheses.</p>
            
            <h2>Multiple Arguments</h2>
            <p>You can add as many arguments as you want, just separate them with a comma.</p>

            <div class="code-block">def welcome(name, course):
  print(f"Hello {name}, welcome to the {course} course.")

welcome("Alice", "Python")</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Create a function <code>square_num(n)</code> that takes a number and prints its square (<code>n * n</code>). Call it with the number <code>5</code>.</p>
        `,
        code: `def square_num(n):
    print(n * n)

# Call with 5
square_num(5)`
    },
    "10.3": {
        title: "The Return Statement",
        content: `
            <h1>The Return Statement</h1>
            <p>To let a function <b>send a value back</b> to the caller, use the <code>return</code> statement. Once a function hits a <code>return</code>, it stops executing.</p>
            
            <div class="code-block">def add(a, b):
    return a + b

result = add(5, 3) # result is now 8</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Write a function <code>multiply(a, b)</code> that <b>returns</b> the product of <code>a</code> and <code>b</code>. Store the result in a variable <code>val</code> and print it.</p>
        `,
        code: `def multiply(a, b):
    return a * b

# Get returned value
val = multiply(10, 5)
print("Result:", val)`
    },
    "10.4": {
        title: "Default Arguments",
        content: `
            <h1>Default Arguments</h1>
            <p>You can provide a default value for a parameter. If the function is called without that argument, it uses the default.</p>
            
            <div class="code-block">def greet(name="User"):
    print(f"Hello, {name}")

greet() # Output: Hello, User
greet("Bob") # Output: Hello, Bob</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Create a function <code>power(base, exponent=2)</code>. It should return <code>base ** exponent</code>. Call it once with only <code>power(10)</code> (should return 100) and once with <code>power(2, 3)</code> (should return 8).</p>
        `,
        code: `def power(base, exponent=2):
    return base ** exponent

# Use default
print("10 squared:", power(10))

# Override default
print("2 cubed:", power(2, 3))`
    },
    "10.5": {
        title: "Keyword & Arbitrary Arguments",
        content: `
            <h1>Advanced Arguments</h1>
            <p>Python offers flexible ways to pass data to functions.</p>
            
            <h2>1. Keyword Arguments (kwargs)</h2>
            <p>You can pass arguments with the <code>key = value</code> syntax. This way the order of the arguments does not matter.</p>
            
            <h2>2. *args (Arbitrary Arguments)</h2>
            <p>If you don't know how many arguments your function will get, add a <code>*</code> before the parameter name. It will receive a <b>tuple</b> of arguments.</p>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Write a function <code>sum_all(*nums)</code> that uses <code>sum(nums)</code> to return the total of any number of arguments. Call it with <code>sum_all(1, 2, 3, 4)</code> and print the result.</p>
        `,
        code: `def sum_all(*nums):
    return sum(nums)

# Call with multiple numbers
print("Total:", sum_all(1, 2, 3, 4, 5))`
    },
    "10.6": {
        title: "Lambda Functions",
        content: `
            <h1>Lambda Functions</h1>
            <p>A lambda function is a small anonymous function. It can take any number of arguments, but can only have <b>one expression</b>.</p>
            
            <div class="code-block"># lambda arguments : expression
add = lambda a, b : a + b
print(add(5, 5))</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Create a lambda function that takes one argument <code>x</code> and returns <code>x * 10</code>. Call it with <code>7</code> and print the result.</p>
        `,
        code: `ten_times = lambda x : x * 10

# Call lambda
print("Result:", ten_times(7))`
    },

    // MODULE 11: Recursion
    "11.1": {
        title: "Introduction to Recursion",
        content: `
            <h1>What is Recursion?</h1>
            <p>Recursion is a programming technique where a function calls itself. It's like a set of Russian Matryoshka dolls: you open one, and inside is a smaller version of itself.</p>
            
            <h2>The Basic Idea</h2>
            <p>We use recursion to solve complex problems by breaking them down into smaller, identical sub-problems.</p>

            <div class="code-block">def say_hello(n):
    if n > 0:
        print("Hello!")
        say_hello(n - 1) # Calling itself</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Write a recursive function <code>count_down(n)</code> that prints the number <code>n</code> and then calls itself with <code>n - 1</code>, only if <code>n</code> is greater than 0. Call it with <code>3</code>.</p>
        `,
        code: `def count_down(n):
    if n > 0:
        print(n)
        count_down(n - 1)

# Call with 3
count_down(3)`
    },
    "11.2": {
        title: "The Base Case",
        content: `
            <h1>The Base Case</h1>
            <p>The <b>Base Case</b> is the most important part of a recursive function. It is the condition that tells the function to <b>stop</b> calling itself.</p>
            
            <h2>Why is it needed?</h2>
            <p>Without a base case, the function would call itself forever, leading to a "Stack Overflow" error (where the computer runs out of memory).</p>

            <div class="code-block">def factorial(n):
    if n == 1: # Base Case
        return 1
    return n * factorial(n - 1)</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Identify the base case in the factorial example: <code>if n == 1: return 1</code>. Now, write a recursive function <code>sum_to(n)</code> that returns the sum of all numbers from <code>n</code> down to <code>1</code>. The base case should be <code>if n == 1: return 1</code>.</p>
        `,
        code: `def sum_to(n):
    # Base case
    if n == 1:
        return 1
    # Recursive step
    return n + sum_to(n - 1)

print("Sum to 5:", sum_to(5))`
    },
    "11.3": {
        title: "Recursive Function Flow",
        content: `
            <h1>The Call Stack</h1>
            <p>When you call a recursive function, the computer places each call on a "Stack". Think of it as a stack of plates. You keep adding plates, and then you start removing them one by one from the top down.</p>
            
            <h2>How it works</h2>
            <ol>
                <li>Function calls itself (adds a plate to the stack).</li>
                <li>Reaches the base case.</li>
                <li>The last call returns its value back to the previous call.</li>
                <li>The stack "unwinds" until the very first call is finished.</li>
            </ol>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Trace the flow of <code>sum_to(3)</code>. It calls <code>sum_to(2)</code>, which calls <code>sum_to(1)</code>. Then <code>sum_to(1)</code> returns <code>1</code>, and the math starts happening: <code>2 + 1 = 3</code>, then <code>3 + 3 = 6</code>. Run the code below to see the result.</p>
        `,
        code: `def sum_to(n):
    if n == 1:
        return 1
    return n + sum_to(n - 1)

result = sum_to(3)
print("Final result:", result)`
    },

    // MODULE 12: File Handling
    "12.1": {
        title: "Opening Files",
        content: `
            <h1>File Handling Basics</h1>
            <p>Python has several functions for creating, reading, updating, and deleting files. The key function is <code>open()</code>.</p>
            
            <h2>File Modes</h2>
            <ul>
                <li><code>"r"</code> (Read): Default. Opens for reading, error if file doesn't exist.</li>
                <li><code>"w"</code> (Write): Opens for writing, creates file if it doesn't exist, <b>overwrites</b> existing content.</li>
                <li><code>"a"</code> (Append): Opens for writing, creates file if it doesn't exist, <b>adds</b> to the end.</li>
                <li><code>"x"</code> (Create): Creates the file, returns error if it exists.</li>
            </ul>

            <div class="code-block">f = open("myfile.txt", "r")</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Try to open a file named <code>"test.txt"</code> in <b>write</b> mode. Since we don't have real files in this browser environment, we'll use a <code>try-except</code> block to "simulate" the action and handle potential errors.</p>
        `,
        code: `try:
    f = open("test.txt", "w")
    print("File opened successfully!")
    f.close()
except Exception as e:
    print("Action simulated. In a real environment, this would create 'test.txt'.")`
    },
    "12.2": {
        title: "Reading Files",
        content: `
            <h1>Reading Files</h1>
            <p>Once a file is open, you can extract its text using several methods.</p>
            
            <h2>Common Methods</h2>
            <ul>
                <li><code>f.read()</code>: Returns the entire content as one string.</li>
                <li><code>f.readline()</code>: Returns one line at a time.</li>
                <li><code>f.read(5)</code>: Returns the first 5 characters.</li>
            </ul>

            <div class="code-block">f = open("demofile.txt", "r")
print(f.read())
f.close()</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Write out the code you would use to read exactly <b>10 characters</b> from a file named <code>"data.txt"</code>.</p>
        `,
        code: `# Code to read 10 characters
# f = open("data.txt", "r")
# print(f.read(10))
# f.close()
print("To read 10 chars, use f.read(10)")`
    },
    "12.3": {
        title: "Writing & Overwriting",
        content: `
            <h1>Writing to Files</h1>
            <p>When you open a file with <code>"w"</code>, Python will erase everything inside it and start fresh. Be careful!</p>
            
            <div class="code-block">f = open("myfile.txt", "w")
f.write("This is new content!")
f.close()</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Imagine you have a file <code>"notes.txt"</code>. Use <code>"w"</code> mode to write "Hello World" into it. (Simulation below)</p>
        `,
        code: `print("Opening in 'w' mode will overwrite the file.")
# f = open("notes.txt", "w")
# f.write("Hello World")
# f.close()`
    },
    "12.4": {
        title: "Appending Content",
        content: `
            <h1>Appending to Files</h1>
            <p>If you want to add text to the <b>end</b> of a file without deleting what's already there, use the <code>"a"</code> (append) mode.</p>
            
            <div class="code-block">f = open("logs.txt", "a")
f.write("\\nNew log entry")
f.close()</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Simulate appending "End of file" to a file named <code>"report.txt"</code>. Use <code>\\n</code> to ensure it starts on a new line.</p>
        `,
        code: `print("Appending text to report.txt...")
# f = open("report.txt", "a")
# f.write("\\nEnd of file")
# f.close()`
    },
    "12.5": {
        title: "The 'with' Statement",
        content: `
            <h1>The 'with' Statement</h1>
            <p>In all previous examples, we had to call <code>f.close()</code> manually. If you forget, it can lead to memory leaks or file corruption.</p>
            
            <h2>Best Practice</h2>
            <p>Use the <code>with</code> statement! It automatically handles closing the file for you, even if an error occurs inside the block.</p>

            <div class="code-block">with open("myfile.txt", "r") as f:
    content = f.read()
    print(content)
# File is now automatically closed here!</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Use the <code>with</code> block to write "Safe and sound" into a file named <code>"secure.txt"</code>.</p>
        `,
        code: `# Using 'with' for auto-closing
with open("secure.txt", "w") as f:
    f.write("Safe and sound")
print("File written and closed safely!")`
    },

    // MODULE 13: Exception Handling
    "13.1": {
        title: "Types of Errors",
        content: `
            <h1>Understanding Errors</h1>
            <p>Errors are a natural part of coding. In Python, we categorize them into three main types:</p>
            
            <h2>1. Syntax Errors</h2>
            <p>Mistakes in the rules of the language (like forgetting a colon <code>:</code>). Python won't even start to run if there's a syntax error.</p>
            
            <h2>2. Runtime Errors (Exceptions)</h2>
            <p>The code is syntactically correct, but something happens during execution that causes it to crash (like dividing by zero).</p>
            
            <h2>3. Logical Errors</h2>
            <p>The program runs, but it does the wrong thing because your logic is flawed. These are the hardest to find!</p>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Look at the code below. It has a <b>Runtime Error</b>. Can you guess what will happen when you run it? (Hint: You can't divide by zero!)</p>
        `,
        code: `x = 10
# This will cause a ZeroDivisionError
print(x / 0)`
    },
    "13.2": {
        title: "Try–Except",
        content: `
            <h1>Handling Exceptions</h1>
            <p>The <code>try</code> block lets you test a block of code for errors. The <code>except</code> block lets you handle the error if one occurs.</p>
            
            <h2>Graceful Failure</h2>
            <div class="code-block">try:
    print(10 / 0)
except ZeroDivisionError:
    print("Oops! You cannot divide by zero.")</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>We are trying to print a variable <code>y</code> that hasn't been defined yet. Wrap the print in a <code>try-except</code> block to catch the <code>NameError</code> and print "Variable y is not defined."</p>
        `,
        code: `try:
    # y is not defined
    print(y)
except NameError:
    print("Variable y is not defined.")`
    },
    "13.3": {
        title: "Else & Finally",
        content: `
            <h1>Else and Finally</h1>
            <p>You can extend <code>try-except</code> with two more keywords:</p>
            
            <ul>
                <li><code>else</code>: Runs only if <b>no</b> error occurred in the try block.</li>
                <li><code>finally</code>: Runs <b>every time</b>, whether an error happened or not. Ideal for cleaning up (like closing a file).</li>
            </ul>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Complete the code below. Add an <code>else</code> block that prints "Calculation successful" and a <code>finally</code> block that prints "Process complete".</p>
        `,
        code: `try:
    result = 10 / 2
except ZeroDivisionError:
    print("Error!")
else:
    print("Calculation successful")
finally:
    print("Process complete")`
    },
    "13.4": {
        title: "Raising Exceptions",
        content: `
            <h1>Raising Custom Errors</h1>
            <p>As a developer, you can choose to throw an error if a certain condition is met using the <code>raise</code> keyword.</p>
            
            <div class="code-block">age = -5
if age < 0:
    raise ValueError("Age cannot be negative!")</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Write a condition that checks if <code>score > 100</code>. If it is, <code>raise</code> an <code>Exception</code> with the message "Invalid score".</p>
        `,
        code: `score = 150

# Raise exception if score > 100
if score > 100:
    raise Exception("Invalid score")`
    },

    // MODULE 14: Object Oriented Programming (OOP)
    "14.1": {
        title: "Classes & Objects",
        content: `
            <h1>The Blueprint (Classes)</h1>
            <p>Object Oriented Programming (OOP) is about creating "objects" that contain both data and functions. A <b>Class</b> is like a blueprint, while an <b>Object</b> is the actual building made from that blueprint.</p>
            
            <h2>Example</h2>
            <p>Class: <code>Dog</code> (The blueprint defines that all dogs have a name and a breed).<br>
               Object: <code>my_dog</code> (The actual dog named "Buddy").</p>

            <div class="code-block">class MyClass:
  x = 5

p1 = MyClass()
print(p1.x)</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Create a class named <code>Car</code> with a property <code>brand = "Tesla"</code>. Create an object of this class and print its <code>brand</code>.</p>
        `,
        code: `class Car:
    brand = "Tesla"

# Create object
my_car = Car()
print(my_car.brand)`
    },
    "14.2": {
        title: "The __init__() Constructor",
        content: `
            <h1>The __init__() Method</h1>
            <p>All classes have a function called <code>__init__()</code>, which is executed when the object is being created. It is used to assign values to object properties.</p>
            
            <h2>The "self" Parameter</h2>
            <p>The <code>self</code> parameter is a reference to the current instance of the class and is used to access variables that belong to the class.</p>

            <div class="code-block">class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

p1 = Person("John", 36)</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Create a <code>Student</code> class with an <code>__init__</code> method that takes <code>name</code> and <code>grade</code>. Create a student "Alice" with grade "A" and print her name.</p>
        `,
        code: `class Student:
    def __init__(self, name, grade):
        self.name = name
        self.grade = grade

# Create Alice
s1 = Student("Alice", "A")
print("Student Name:", s1.name)`
    },
    "14.3": {
        title: "Instance & Class Methods",
        content: `
            <h1>Object Methods</h1>
            <p>Objects can also contain methods. Methods in objects are functions that belong to the object.</p>
            
            <div class="code-block">class Dog:
  def __init__(self, name):
    self.name = name

  def bark(self):
    print(f"{self.name} says Woof!")

d = Dog("Buddy")
d.bark()</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Add a method <code>intro()</code> to the <code>Student</code> class from before. It should print "My name is [name] and I am in grade [grade]". Call it for your student object.</p>
        `,
        code: `class Student:
    def __init__(self, name, grade):
        self.name = name
        self.grade = grade

    def intro(self):
        print(f"My name is {self.name} and I am in grade {self.grade}")

s1 = Student("Alice", "A")
s1.intro()`
    },
    "14.4": {
        title: "Inheritance",
        content: `
            <h1>Inheritance</h1>
            <p>Inheritance allows us to define a class that inherits all the methods and properties from another class.</p>
            
            <ul>
                <li><b>Parent class:</b> The class being inherited from (Base class).</li>
                <li><b>Child class:</b> The class that inherits from another class (Derived class).</li>
            </ul>

            <div class="code-block">class Animal:
    def breathe(self):
        print("Breathing...")

class Bird(Animal): # Bird inherits from Animal
    def fly(self):
        print("Flying...")</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Create a child class <code>ElectricCar</code> that inherits from <code>Car</code>. Add a method <code>charge()</code> that prints "Battery charging...".</p>
        `,
        code: `class Car:
    def drive(self):
        print("Driving...")

class ElectricCar(Car):
    def charge(self):
        print("Battery charging...")

my_tesla = ElectricCar()
my_tesla.drive()  # Inherited
my_tesla.charge() # Unique to child`
    },
    "14.5": {
        title: "Polymorphism",
        content: `
            <h1>Polymorphism</h1>
            <p>The word "Polymorphism" means "many forms". In programming, it means that different classes can have methods with the same name, but they do different things.</p>
            
            <div class="code-block">class Car:
  def move(self):
    print("Drive!")

class Boat:
  def move(self):
    print("Sail!")</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Create two classes, <code>Cat</code> and <code>Dog</code>. Both should have a method <code>speak()</code>. Cat should print "Meow" and Dog should print "Woof". Create a list of both and loop through them, calling <code>speak()</code> on each.</p>
        `,
        code: `class Cat:
    def speak(self): print("Meow")

class Dog:
    def speak(self): print("Woof")

animals = [Cat(), Dog()]

for animal in animals:
    animal.speak()`
    },
    "14.6": {
        title: "Encapsulation (Private Members)",
        content: `
            <h1>Encapsulation</h1>
            <p>Encapsulation is the idea of "bundling" data and the methods that work on that data into a single unit (the class), and hiding the internal details from the outside.</p>
            
            <h2>Private Attributes (__)</h2>
            <p>In Python, we indicate a private variable by adding a double underscore <code>__</code> before the name. This makes it harder (though not impossible) to access from outside the class.</p>

            <div class="code-block">class BankAccount:
    def __init__(self, balance):
        self.__balance = balance # Private

    def get_balance(self):
        return self.__balance</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Try to access the private <code>__balance</code> directly from a <code>BankAccount</code> object. See if it throws an error!</p>
        `,
        code: `class BankAccount:
    def __init__(self, balance):
        self.__balance = balance

acc = BankAccount(1000)

try:
    print(acc.__balance) # This should fail
except AttributeError:
    print("Cannot access private member directly!")`
    },

    // MODULE 15: Modules & Packages
    "15.1": {
        title: "Importing Modules",
        content: `
            <h1>Using Modules</h1>
            <p>A <b>Module</b> is a file containing Python code. We use them to break down large programs into small, manageable, and reusable pieces.</p>
            
            <h2>The "import" Keyword</h2>
            <p>You can use any Python source file as a module by using the <code>import</code> statement.</p>

            <div class="code-block">import math
print(math.sqrt(16)) # 4.0</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Import the <code>platform</code> module and print <code>platform.system()</code> to see your current Operating System.</p>
        `,
        code: `import platform

# Print OS name
print("Operating System:", platform.system())`
    },
    "15.2": {
        title: "Built-in Modules",
        content: `
            <h1>The "Standard Library"</h1>
            <p>Python comes with a huge set of built-in modules that you can use immediately. These collectively are known as the Standard Library.</p>
            
            <h2>Common Modules</h2>
            <ul>
                <li><code>math</code>: Square roots, trigonometry, constants like pi.</li>
                <li><code>random</code>: Generate random numbers.</li>
                <li><code>datetime</code>: Work with dates and times.</li>
                <li><code>os</code>: Interact with the underlying operating system.</li>
            </ul>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Import <code>random</code> and print a random number between <code>1</code> and <code>100</code> using <code>random.randint(1, 100)</code>.</p>
        `,
        code: `import random

# Generate random number
num = random.randint(1, 100)
print("Random Number:", num)`
    },
    "15.3": {
        title: "Creating Custom Modules",
        content: `
            <h1>Custom Modules</h1>
            <p>To create a module, just save the code you want in a file with the file extension <code>.py</code>.</p>
            
            <h2>Example</h2>
            <p>If you save <code>def greet(): print("Hi!")</code> in a file named <code>mymodule.py</code>, you can import it in another file like this:</p>
            <div class="code-block">import mymodule
mymodule.greet()</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Imagine you have a file <code>calc.py</code> with a function <code>add(a, b)</code>. Write the code to import only the <code>add</code> function from <code>calc</code> using the <code>from ... import ...</code> syntax.</p>
        `,
        code: `# Code to import specific function
# from calc import add

# result = add(5, 5)
print("Use: from module import function")`
    },
    "15.4": {
        title: "pip & External Packages",
        content: `
            <h1>What is pip?</h1>
            <p><b>pip</b> is the package manager for Python. It allows you to install thousands of open-source libraries (packages) from the Python Package Index (PyPI).</p>
            
            <h2>Common Commands</h2>
            <ul>
                <li><code>pip install package_name</code>: Installs a library.</li>
                <li><code>pip list</code>: Shows all installed libraries.</li>
                <li><code>pip uninstall package_name</code>: Removes a library.</li>
            </ul>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>If you wanted to install the famous <code>requests</code> library for making web requests, what command would you type in your terminal?</p>
        `,
        code: `# Type the command as a string to "answer"
command = "pip install requests"
print("Command to run:", command)`
    },

    // MODULE 16: Advanced Python Features
    "16.1": {
        title: "List Comprehension",
        content: `
            <h1>List Comprehensions</h1>
            <p>List comprehension offers a shorter syntax when you want to create a new list based on the values of an existing list.</p>
            
            <h2>Syntax</h2>
            <p><code>newlist = [expression for item in iterable if condition]</code></p>

            <div class="code-block">fruits = ["apple", "banana", "cherry"]
# Normal way:
new_list = []
for x in fruits:
    if "a" in x:
        new_list.append(x)

# List Comprehension way:
new_list = [x for x in fruits if "a" in x]</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Given <code>nums = [1, 2, 3, 4, 5]</code>, use list comprehension to create a new list <code>squares</code> containing the square of each number. Print it.</p>
        `,
        code: `nums = [1, 2, 3, 4, 5]

# Use list comprehension
squares = [n**2 for n in nums]
print(squares)`
    },
    "16.2": {
        title: "Iterators & Generators",
        content: `
            <h1>Iterators & Generators</h1>
            <p>Iterators are objects that can be iterated upon. Generators are functions that use the <code>yield</code> keyword to return values one by one.</p>
            
            <h2>Why Generators?</h2>
            <p>Generators don't store the entire list in memory; they calculate items on the fly. This makes them extremely memory-efficient for large datasets.</p>

            <div class="code-block">def my_generator():
    yield 1
    yield 2
    yield 3

for val in my_generator():
    print(val)</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Create a generator <code>even_gen(n)</code> that yields even numbers from 0 up to <code>n</code>. Use it in a loop to print even numbers up to 6.</p>
        `,
        code: `def even_gen(n):
    for i in range(0, n + 1, 2):
        yield i

# Use the generator
for num in even_gen(6):
    print(num)`
    },
    "16.3": {
        title: "Decorators",
        content: `
            <h1>Decorators</h1>
            <p>Decorators allow you to modify the behavior of a function without changing its source code. They "wrap" another function.</p>
            
            <div class="code-block">def my_decorator(func):
    def wrapper():
        print("Something is happening before...")
        func()
        print("Something is happening after...")
    return wrapper

@my_decorator
def say_hi():
    print("Hi!")</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Think of a decorator as a "Custom Envelope" for a letter. Run the code below to see how the decorator adds extra behavior to the <code>say_hi</code> function.</p>
        `,
        code: `def alert_decorator(func):
    def wrapper():
        print("[ALERT] Function is starting!")
        func()
        print("[ALERT] Function is finished!")
    return wrapper

@alert_decorator
def run_task():
    print("Task is running...")

run_task()`
    },
    "16.4": {
        title: "*args and **kwargs",
        content: `
            <h1>*args and **kwargs</h1>
            <p>These allow you to pass a variable number of arguments to a function.</p>
            
            <ul>
                <li><code>*args</code>: Pass a list of non-keyword arguments (as a tuple).</li>
                <li><code>**kwargs</code>: Pass a dictionary of keyword arguments.</li>
            </ul>

            <div class="code-block">def my_func(*args, **kwargs):
    print(args)   # (1, 2, 3)
    print(kwargs) # {'name': 'Alice'}

my_func(1, 2, 3, name="Alice")</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Write a function <code>show_info(**data)</code> that prints each key and value from the <code>kwargs</code> dictionary. Call it with <code>show_info(name="Aionyx", version="1.0")</code>.</p>
        `,
        code: `def show_info(**data):
    for key, value in data.items():
        print(f"{key}: {value}")

show_info(name="Aionyx", version="1.0")`
    },

    // MODULE 17: Data Structures (In-depth)
    "17.1": {
        title: "Stacks (LIFO)",
        content: `
            <h1>The Stack</h1>
            <p>A <b>Stack</b> is a linear data structure that follows the <b>LIFO</b> (Last-In, First-Out) principle. Think of a stack of plates—the last plate you put on top is the first one you take off.</p>
            
            <h2>Key Operations</h2>
            <ul>
                <li><b>Push:</b> Add an item to the top (In Python, use <code>.append()</code>).</li>
                <li><b>Pop:</b> Remove the top item (In Python, use <code>.pop()</code>).</li>
            </ul>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Create a stack using a list. Push the numbers <code>10</code> and <code>20</code>. Then <code>pop</code> the top item and print it. It should be <code>20</code>.</p>
        `,
        code: `stack = []

# Push items
stack.append(10)
stack.append(20)

# Pop top item
top = stack.pop()
print("Popped item:", top)
print("Remaining stack:", stack)`
    },
    "17.2": {
        title: "Queues (FIFO)",
        content: `
            <h1>The Queue</h1>
            <p>A <b>Queue</b> follows the <b>FIFO</b> (First-In, First-Out) principle. Think of a line at a movie theater—the first person in line is the first one to get a ticket.</p>
            
            <h2>Key Operations</h2>
            <ul>
                <li><b>Enqueue:</b> Add to the back (Use <code>.append()</code>).</li>
                <li><b>Dequeue:</b> Remove from the front (Use <code>.pop(0)</code>).</li>
            </ul>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Create a queue <code>customers = ["Alice", "Bob"]</code>. Add "Charlie" to the end. Then <code>pop(0)</code> to serve the first customer and print their name.</p>
        `,
        code: `customers = ["Alice", "Bob"]

# Enqueue
customers.append("Charlie")

# Dequeue first customer
first = customers.pop(0)
print("Serving:", first)
print("Remaining line:", customers)`
    },
    "17.3": {
        title: "Linear Search",
        content: `
            <h1>Linear Search</h1>
            <p>Linear search is the simplest searching algorithm. It looks through a list one item at a time until it finds a match.</p>
            
            <div class="code-block">def search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i # Found it!
    return -1 # Not found</div>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Search for the number <code>42</code> in the list <code>[10, 23, 42, 55, 90]</code>. Print the index where it's found.</p>
        `,
        code: `nums = [10, 23, 42, 55, 90]
target = 42

def find_index(arr, x):
    for i in range(len(arr)):
        if arr[i] == x:
            return i
    return -1

print("Found 42 at index:", find_index(nums, target))`
    },
    "17.4": {
        title: "Sorting (Bubble Sort Intro)",
        content: `
            <h1>Basic Sorting</h1>
            <p>Sorting is the process of arranging data in a specific order (like 1 to 10). While Python has a built-in <code>.sort()</code>, understanding how it works under the hood is vital.</p>
            
            <h2>Bubble Sort Concept</h2>
            <p>Compare two neighbors. If they are in the wrong order, swap them. Repeat this until the largest values "bubble up" to the end.</p>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Use Python's built-in <code>sorted()</code> function to sort <code>[5, 2, 9, 1, 5, 6]</code> in ascending order. Print the result.</p>
        `,
        code: `unsorted_list = [5, 2, 9, 1, 5, 6]

# Sort the list
sorted_list = sorted(unsorted_list)
print("Original:", unsorted_list)
print("Sorted:", sorted_list)`
    },

    // MODULE 18: Mini Projects (Practical Application)
    "18.1": {
        title: "Project: Smart Calculator",
        content: `
            <h1>Mini-Project: Smart Calculator</h1>
            <p>In this project, you'll build a calculator that can perform addition, subtraction, multiplication, and division based on user input.</p>
            
            <h2>What you'll use:</h2>
            <ul>
                <li>Functions (to organize math operations).</li>
                <li>Conditional Statements (to choose the operation).</li>
                <li>While Loops (to keep the calculator running).</li>
            </ul>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Run the starter code below. Try adding your own function for <code>multiply</code> and call it within the <code>main</code> loop.</p>
        `,
        code: `def add(x, y): return x + y
def subtract(x, y): return x - y

print("--- Smart Calc ---")
print("1. Add\\n2. Subtract")
choice = input("Select (1/2): ")

num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))

if choice == '1':
    print("Result:", add(num1, num2))
elif choice == '2':
    print("Result:", subtract(num1, num2))`
    },
    "18.2": {
        title: "Project: Number Guessing Game",
        content: `
            <h1>Mini-Project: Number Guessing</h1>
            <p>Create a game where the computer selects a random number between 1 and 10, and the user has to guess it.</p>
            
            <h2>What you'll use:</h2>
            <ul>
                <li><code>random</code> module.</li>
                <li><code>while</code> loop with a <code>break</code> statement.</li>
                <li>Comparison operators.</li>
            </ul>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Run the code and try to guess the number. Can you add a variable <code>attempts</code> that counts how many times the user guessed?</p>
        `,
        code: `import random

target = random.randint(1, 10)
print("I'm thinking of a number between 1 and 10.")

while True:
    guess = int(input("Your guess: "))
    if guess == target:
        print("Correct! You won!")
        break
    else:
        print("Try again!")`
    },
    "18.3": {
        title: "Project: Student Management",
        content: `
            <h1>Mini-Project: Students (OOP)</h1>
            <p>Apply your OOP knowledge to manage a list of students.</p>
            
            <h2>Features:</h2>
            <ul>
                <li>Class <code>Student</code> with attributes.</li>
                <li>A list to store student objects.</li>
                <li>A loop to display all students.</li>
            </ul>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>The code below defines a <code>Student</code> and adds one to a list. Run it, then try adding another student called "Bob" with grade "B".</p>
        `,
        code: `class Student:
    def __init__(self, name, grade):
        self.name = name
        self.grade = grade

students = []
students.append(Student("Alice", "A"))

# Display all
print("Student List:")
for s in students:
    print(f"- {s.name}: {s.grade}")`
    },
    "18.4": {
        title: "Project: Password Generator",
        content: `
            <h1>Mini-Project: Password Gen</h1>
            <p>Security is vital! Use the <code>random</code> module to generate a strong, random password for the user.</p>
            
            <h2>Concepts:</h2>
            <ul>
                <li>String concatenation.</li>
                <li>Random selection.</li>
                <li>Loops.</li>
            </ul>

            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>Run the generator below. Can you modify it to make the password <b>12 characters</b> long instead of 8?</p>
        `,
        code: `import random

chars = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"
password = ""

for i in range(8):
    password += random.choice(chars)

print("Your new password:", password)`
    },
    "18.5": {
        title: "Project: To-Do List (CLI)",
        content: `
            <h1>Mini-Project: To-Do List</h1>
            <p>Build a simple command-line interface (CLI) application to manage tasks.</p>
            
            <h2 id="exercise"><i class="fas fa-edit"></i> Hands-on Exercise</h2>
            <p>This is a complete loop-based app. Run it and try adding "Buy Milk". Then type <code>show</code> to see it.</p>
        `,
        code: `tasks = []

while True:
    print("\\n1. add [task]\\n2. show\\n3. exit")
    action = input("> ").split()
    
    if action[0] == "add":
        tasks.append(" ".join(action[1:]))
        print("Task added!")
    elif action[0] == "show":
        print("Tasks:", tasks)
    elif action[0] == "exit":
        break`
    },

    // MODULE 19: Coding Challenges (Final Test)
    "19.1": {
        title: "Level 1: Beginner",
        content: `
            <h1>Beginner Challenges</h1>
            <p>Test your foundations! These challenges focus on variables, math, and simple input/output.</p>
            
            <h2>The Challenge:</h2>
            <p>Write a program that takes a temperature in <b>Celsius</b> and converts it to <b>Fahrenheit</b> using the formula: <code>(C * 9/5) + 32</code>.</p>
        `,
        code: `celsius = float(input("Enter Celsius: "))

# Calculate Fahrenheit
fahrenheit = (celsius * 9/5) + 32

print(f"{celsius}C is equivalent to {fahrenheit}F")`
    },
    "19.2": {
        title: "Level 2: Loop Logic",
        content: `
            <h1>Loop Challenges</h1>
            <p>These challenges test your ability to use <code>for</code> and <code>while</code> loops effectively.</p>
            
            <h2>The Challenge:</h2>
            <p>Print a "number pyramid". For example, if <code>n=3</code>, it should print:<br>
            1<br>
            2 2<br>
            3 3 3</p>
        `,
        code: `n = 5

for i in range(1, n + 1):
    # Print the number i, i times
    print(str(i) * i)`
    },
    "19.3": {
        title: "Level 3: String Master",
        content: `
            <h1>String Challenges</h1>
            <p>Work with slicing, methods, and character manipulation.</p>
            
            <h2>The Challenge:</h2>
            <p>Check if a word is a <b>Palindrome</b> (reads the same forwards and backwards). Hint: Use slicing <code>[::-1]</code> to reverse the string.</p>
        `,
        code: `word = input("Enter a word: ").lower()

# Reverse the word
reversed_word = word[::-1]

if word == reversed_word:
    print("It's a palindrome!")
else:
    print("Not a palindrome.")`
    },
    "19.4": {
        title: "Level 4: Data Guru",
        content: `
            <h1>Data Structure challenges</h1>
            <p>Test your knowledge of lists, dictionaries, and sets.</p>
            
            <h2>The Challenge:</h2>
            <p>Given a list <code>data = [1, 2, 2, 3, 4, 4, 5]</code>, create a new list with all <b>duplicates removed</b>. Hint: Use a <code>set()</code>.</p>
        `,
        code: `data = [1, 2, 2, 3, 4, 4, 5, 6, 6, 1]

# Remove duplicates
unique_data = list(set(data))

print("Original:", data)
print("Unique:", unique_data)`
    },
    "19.5": {
        title: "Level 5: Timed Logic",
        content: `
            <h1>Advanced Logic</h1>
            <p>These challenges require combining multiple concepts like functions, loops, and conditions.</p>
            
            <h2>The Challenge:</h2>
            <p>Write a function <code>is_prime(n)</code> that returns <code>True</code> if a number is prime, and <code>False</code> otherwise. A prime number is only divisible by 1 and itself.</p>
        `,
        code: `def is_prime(n):
    if n < 2: return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

num = int(input("Enter number to check: "))
print(f"Is {num} prime? {is_prime(num)}")`
    },
};
