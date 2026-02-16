const pythonLessons = {
    // MODULE 1: Variables & Data Types
    "1.1": {
        title: "Introduction to Variables",
        content: `
            <h1>Introduction to Variables</h1>
            <p>A variable is a container for storing data values. Unlike other programming languages, Python has no command for declaring a variable.</p>
            <p>A variable is created the moment you first assign a value to it.</p>
            
            <h2>Creating Variables</h2>
            <p>Python variables do not need to be declared with any particular type, and can even change type after they have been set.</p>
            
            <div class="code-block">x = 5
y = "Hello, World!"
print(x)
print(y)</div>

            <h2>Casting</h2>
            <p>If you want to specify the data type of a variable, this can be done with casting.</p>
            <div class="code-block">x = str(3)    # x will be '3'
y = int(3)    # y will be 3
z = float(3)  # z will be 3.0</div>
        `,
        code: `# Create variables
x = 5
y = "John"
print(x)
print(y)

x = 4       # x is of type int
x = "Sally" # x is now of type str
print(x)`
    },
    "1.2": {
        title: "Variable Naming Rules",
        content: `
            <h1>Variable Naming Rules</h1>
            <p>A variable can have a short name (like x and y) or a more descriptive name (age, carname, total_volume). Rules for Python variables:</p>
            <ul>
                <li>A variable name must start with a letter or the underscore character</li>
                <li>A variable name cannot start with a number</li>
                <li>A variable name can only contain alpha-numeric characters and underscores (A-z, 0-9, and _ )</li>
                <li>Variable names are case-sensitive (age, Age and AGE are three different variables)</li>
            </ul>
        `,
        code: `# Legal variable names:
myvar = "John"
my_var = "John"
_my_var = "John"
myVar = "John"
MYVAR = "John"
myvar2 = "John"

print(myvar2)`
    },
    "1.3": {
        title: "Integer Data Type",
        content: `
            <h1>Integer Data Type</h1>
            <p>Int, or integer, is a whole number, positive or negative, without decimals, of unlimited length.</p>
        `,
        code: `x = 1
y = 35656222554887711
z = -3255522

print(type(x))
print(type(y))
print(type(z))`
    },
    "1.4": {
        title: "Floating Point Data Type",
        content: `
            <h1>Floating Point Data Type</h1>
            <p>Float, or "floating point number" is a number, positive or negative, containing one or more decimals.</p>
        `,
        code: `x = 1.10
y = 1.0
z = -35.59

print(type(x))
print(type(y))
print(type(z))`
    },
    "1.5": {
        title: "String Data Type",
        content: `
            <h1>String Data Type</h1>
            <p>Strings in python are surrounded by either single quotation marks, or double quotation marks.</p>
            <p>'hello' is the same as "hello".</p>
        `,
        code: `print("Hello")
print('Hello')

a = "Hello"
print(a)`
    },
    "1.6": {
        title: "Boolean Data Type",
        content: `
            <h1>Boolean Data Type</h1>
            <p>Booleans represent one of two values: <code>True</code> or <code>False</code>.</p>
        `,
        code: `print(10 > 9)
print(10 == 9)
print(10 < 9)`
    },
    "1.7": {
        title: "Checking Data Types",
        content: `
            <h1>Checking Data Types</h1>
            <p>You can get the data type of any object by using the <code>type()</code> function.</p>
        `,
        code: `x = 5
print(type(x))

y = "Hello"
print(type(y))`
    },
    "1.8": {
        title: "Type Casting",
        content: `
            <h1>Type Casting</h1>
            <p>There may be times when you want to specify a type on to a variable. This can be done with casting.</p>
        `,
        code: `x = int(1)   # x will be 1
y = int(2.8) # y will be 2
z = int("3") # z will be 3

print(x)
print(y)
print(z)`
    },
    "1.9": {
        title: "Multiple Assignment",
        content: `
            <h1>Multiple Assignment</h1>
            <p>Python allows you to assign values to multiple variables in one line.</p>
        `,
        code: `x, y, z = "Orange", "Banana", "Cherry"
print(x)
print(y)
print(z)`
    },

    // MODULE 2: Input, Output & Formatting
    "2.1": {
        title: "Input Function",
        content: `<h1>Input Function</h1><p>Python allows for user input. That means we are able to ask the user for input.</p>`,
        code: `username = input("Enter username:")
print("Username is: " + username)`
    },
    "2.2": {
        title: "Type Conversion with Input",
        content: `<h1>Type Conversion with Input</h1><p>The input function returns a string by default. Convert it if you need numbers.</p>`,
        code: `num = int(input("Enter a number: "))
print(num + 10)`
    },
    "2.3": { title: "Output using print()", content: "<h1>Output using print()</h1>", code: `print("Hello World")` },
    "2.4": { title: "Printing Multiple Values", content: "<h1>Printing Multiple Values</h1>", code: `print("Hello", "World")` },
    "2.5": { title: "sep and end Parameters", content: "<h1>sep and end Parameters</h1>", code: `print("Hello", "World", sep="-", end="!")` },
    "2.6": { title: "Escape Characters", content: "<h1>Escape Characters</h1>", code: `print("Line 1\\nLine 2")` },
    "2.7": { title: "f-Strings", content: "<h1>f-Strings</h1>", code: `name = "John"\nprint(f"Hello {name}")` },
    "2.8": { title: "Number Formatting", content: "<h1>Number Formatting</h1>", code: `pi = 3.14159\nprint(f"{pi:.2f}")` },

    // MODULE 3: Operators
    "3.1": { title: "Arithmetic Operators", content: "<h1>Arithmetic Operators</h1>", code: `print(10 + 5)\nprint(10 - 5)\nprint(10 * 5)\nprint(10 / 5)` },
    "3.2": { title: "Relational Operators", content: "<h1>Relational Operators</h1>", code: `print(10 > 5)\nprint(10 == 5)` },
    "3.3": { title: "Logical Operators", content: "<h1>Logical Operators</h1>", code: `print(True and False)\nprint(True or False)` },
    "3.4": { title: "Assignment Operators", content: "<h1>Assignment Operators</h1>", code: `x = 5\nx += 3\nprint(x)` },
    "3.5": { title: "Operator Precedence", content: "<h1>Operator Precedence</h1>", code: `print((10 + 5) * 2)` },

    // MODULE 4: Conditional Statements
    "4.1": { title: "if Statement", content: "<h1>if Statement</h1>", code: `if 5 > 2:\n    print("Five is greater than two!")` },
    "4.2": { title: "if–else Statement", content: "<h1>if–else Statement</h1>", code: `a = 33\nb = 200\nif b > a:\n  print("b is greater than a")` },
    "4.3": { title: "if–elif–else Ladder", content: "<h1>if–elif–else Ladder</h1>", code: `a = 33\nb = 33\nif b > a:\n  print("b is greater than a")\nelif a == b:\n  print("a and b are equal")` },
    "4.4": { title: "Nested if Statements", content: "<h1>Nested if Statements</h1>", code: `x = 41\nif x > 10:\n  print("Above ten,")\n  if x > 20:\n    print("and also above 20!")\n  else:\n    print("but not above 20.")` },

    // MODULE 5: Loops
    "5.1": { title: "while Loop", content: "<h1>while Loop</h1>", code: `i = 1\nwhile i < 6:\n  print(i)\n  i += 1` },
    "5.2": { title: "for Loop", content: "<h1>for Loop</h1>", code: `fruits = ["apple", "banana", "cherry"]\nfor x in fruits:\n  print(x)` },
    "5.3": { title: "range() Function", content: "<h1>range() Function</h1>", code: `for x in range(6):\n  print(x)` },
    "5.4": { title: "Nested Loops", content: "<h1>Nested Loops</h1>", code: `adj = ["red", "big", "tasty"]\nfruits = ["apple", "banana", "cherry"]\nfor x in adj:\n  for y in fruits:\n    print(x, y)` },
    "5.5": { title: "break Statement", content: "<h1>break Statement</h1>", code: `i = 1\nwhile i < 6:\n  print(i)\n  if i == 3:\n    break\n  i += 1` },
    "5.6": { title: "continue Statement", content: "<h1>continue Statement</h1>", code: `i = 0\nwhile i < 6:\n  i += 1\n  if i == 3:\n    continue\n  print(i)` },
    "5.7": { title: "pass Statement", content: "<h1>pass Statement</h1>", code: `for x in [0, 1, 2]:\n  pass` },

    // MODULE 6: Strings
    "6.1": { title: "String Creation", content: "<h1>String Creation</h1>", code: `print("Hello")` },
    "6.2": { title: "String Indexing", content: "<h1>String Indexing</h1>", code: `a = "Hello, World!"\nprint(a[1])` },
    "6.3": { title: "String Slicing", content: "<h1>String Slicing</h1>", code: `b = "Hello, World!"\nprint(b[2:5])` },
    "6.4": { title: "String Methods", content: "<h1>String Methods</h1>", code: `a = " Hello, World! "\nprint(a.strip())` },
    "6.5": { title: "String Immutability", content: "<h1>String Immutability</h1>", code: `a = "Hello"\n# a[0] = 'h'  # This would raise an error\nprint(a)` },
    "6.6": { title: "String Formatting", content: "<h1>String Formatting</h1>", code: `age = 36\ntxt = f"My name is John, I am {age}"\nprint(txt)` },

    // MODULE 7: Lists
    "7.1": { title: "Creating Lists", content: "<h1>Creating Lists</h1>", code: `thislist = ["apple", "banana", "cherry"]\nprint(thislist)` },
    "7.2": { title: "Accessing List Elements", content: "<h1>Accessing List Elements</h1>", code: `thislist = ["apple", "banana", "cherry"]\nprint(thislist[1])` },
    "7.3": { title: "List Methods", content: "<h1>List Methods</h1>", code: `thislist = ["apple", "banana", "cherry"]\nthislist.append("orange")\nprint(thislist)` },
    "7.4": { title: "List Slicing", content: "<h1>List Slicing</h1>", code: `thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]\nprint(thislist[2:5])` },
    "7.5": { title: "Nested Lists", content: "<h1>Nested Lists</h1>", code: `matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\nprint(matrix[0][1])` },

    // MODULE 8: Tuples & Sets
    "8.1": { title: "Tuples", content: "<h1>Tuples</h1>", code: `thistuple = ("apple", "banana", "cherry")\nprint(thistuple)` },
    "8.2": { title: "Tuple Methods", content: "<h1>Tuple Methods</h1>", code: `thistuple = (1, 3, 7, 8, 7, 5, 4, 6, 8, 5)\nx = thistuple.count(5)\nprint(x)` },
    "8.3": { title: "Sets", content: "<h1>Sets</h1>", code: `thisset = {"apple", "banana", "cherry"}\nprint(thisset)` },
    "8.4": { title: "Set Operations", content: "<h1>Set Operations</h1>", code: `set1 = {"a", "b" , "c"}\nset2 = {1, 2, 3}\nset3 = set1.union(set2)\nprint(set3)` },

    // MODULE 9: Dictionaries
    "9.1": { title: "Dictionary Basics", content: "<h1>Dictionary Basics</h1>", code: `thisdict = {"brand": "Ford", "model": "Mustang", "year": 1964}\nprint(thisdict)` },
    "9.2": { title: "Accessing Dictionary Values", content: "<h1>Accessing Dictionary Values</h1>", code: `thisdict = {"brand": "Ford", "model": "Mustang", "year": 1964}\nx = thisdict["model"]\nprint(x)` },
    "9.3": { title: "Updating Dictionary", content: "<h1>Updating Dictionary</h1>", code: `thisdict = {"brand": "Ford", "model": "Mustang", "year": 1964}\nthisdict["year"] = 2018\nprint(thisdict)` },
    "9.4": { title: "Dictionary Methods", content: "<h1>Dictionary Methods</h1>", code: `thisdict = {"brand": "Ford", "model": "Mustang", "year": 1964}\nthisdict.pop("model")\nprint(thisdict)` },
    "9.5": { title: "Nested Dictionaries", content: "<h1>Nested Dictionaries</h1>", code: `myfamily = {"child1" : {"name" : "Emil", "year" : 2004}, "child2" : {"name" : "Tobias", "year" : 2007}}` },

    // MODULE 10: Functions
    "10.1": { title: "Defining Functions", content: "<h1>Defining Functions</h1>", code: `def my_function():\n  print("Hello from a function")\n\nmy_function()` },
    "10.2": { title: "Function Parameters", content: "<h1>Function Parameters</h1>", code: `def my_function(fname):\n  print(fname + " Refsnes")\n\nmy_function("Emil")` },
    "10.3": { title: "Return Statement", content: "<h1>Return Statement</h1>", code: `def my_function(x):\n  return 5 * x\n\nprint(my_function(3))` },
    "10.4": { title: "Default Arguments", content: "<h1>Default Arguments</h1>", code: `def my_function(country = "Norway"):\n  print("I am from " + country)\n\nmy_function()` },
    "10.5": { title: "Keyword Arguments", content: "<h1>Keyword Arguments</h1>", code: `def my_function(child3, child2, child1):\n  print("The youngest child is " + child3)\n\nmy_function(child1 = "Emil", child2 = "Tobias", child3 = "Linus")` },
    "10.6": { title: "Lambda Functions", content: "<h1>Lambda Functions</h1>", code: `x = lambda a : a + 10\nprint(x(5))` },

    // MODULE 11: Recursion
    "11.1": { title: "Introduction to Recursion", content: "<h1>Introduction to Recursion</h1>", code: `def tri_recursion(k):\n  if(k > 0):\n    result = k + tri_recursion(k - 1)\n    print(result)\n  else:\n    result = 0\n  return result\n\nprint("Recursion Example Results")\ntri_recursion(6)` },
    "11.2": { title: "Base Case", content: "<h1>Base Case</h1>", code: `# See example above` },
    "11.3": { title: "Recursive Function Flow", content: "<h1>Recursive Function Flow</h1>", code: `# See example above` },

    // MODULE 12: File Handling
    "12.1": { title: "Opening Files", content: "<h1>Opening Files</h1>", code: `try:\n    f = open("demofile.txt", "r")\n    print(f.read())\nexcept:\n    print("File not found (expected)")` },
    "12.2": { title: "Reading Files", content: "<h1>Reading Files</h1>", code: `# f.read()` },
    "12.3": { title: "Writing Files", content: "<h1>Writing Files</h1>", code: `# f.write("Now the file has more content!")` },
    "12.4": { title: "Appending Files", content: "<h1>Appending Files</h1>", code: `# f = open("demofile2.txt", "a")` },
    "12.5": { title: "with Statement", content: "<h1>with Statement</h1>", code: `with open("demofile.txt", "w") as f:\n    f.write("Hello World")` },

    // MODULE 13: Exception Handling
    "13.1": { title: "Types of Errors", content: "<h1>Types of Errors</h1>", code: `# SyntaxError, TypeError, NameError etc.` },
    "13.2": { title: "try–except", content: "<h1>try–except</h1>", code: `try:\n  print(x)\nexcept:\n  print("An exception occurred")` },
    "13.3": { title: "else and finally", content: "<h1>else and finally</h1>", code: `try:\n  print("Hello")\nexcept:\n  print("Something went wrong")\nelse:\n  print("Nothing went wrong")\nfinally:\n  print("The 'try except' is finished")` },
    "13.4": { title: "Raising Exceptions", content: "<h1>Raising Exceptions</h1>", code: `x = -1\nif x < 0:\n  raise Exception("Sorry, no numbers below zero")` },

    // MODULE 14: Object Oriented Programming
    "14.1": { title: "Classes & Objects", content: "<h1>Classes & Objects</h1>", code: `class MyClass:\n  x = 5\n\np1 = MyClass()\nprint(p1.x)` },
    "14.2": { title: "Constructors", content: "<h1>Constructors</h1>", code: `class Person:\n  def __init__(self, name, age):\n    self.name = name\n    self.age = age\n\np1 = Person("John", 36)\nprint(p1.name)` },
    "14.3": { title: "Instance Variables", content: "<h1>Instance Variables</h1>", code: `# self.name and self.age in previous example` },
    "14.4": { title: "Inheritance", content: "<h1>Inheritance</h1>", code: `class Student(Person):\n  pass` },
    "14.5": { title: "Polymorphism", content: "<h1>Polymorphism</h1>", code: `class Car:\n  def move(self):\n    print("Drive!")\n\nclass Boat:\n  def move(self):\n    print("Sail!")\n\nclass Plane:\n  def move(self):\n    print("Fly!")\n\ncar1 = Car()\nboat1 = Boat()\nplane1 = Plane()\n\nfor x in (car1, boat1, plane1):\n  x.move()` },
    "14.6": { title: "Encapsulation", content: "<h1>Encapsulation</h1>", code: `class Car:\n    def __init__(self):\n        self.__updateSoftware()\n\n    def drive(self):\n        print('driving')\n\n    def __updateSoftware(self):\n        print('updating software')` },

    // MODULE 15: Modules & Packages
    "15.1": { title: "Importing Modules", content: "<h1>Importing Modules</h1>", code: `import platform\nprint(platform.system())` },
    "15.2": { title: "Built-in Modules", content: "<h1>Built-in Modules</h1>", code: `import math\nprint(math.pi)` },
    "15.3": { title: "Creating Custom Modules", content: "<h1>Creating Custom Modules</h1>", code: `# Save code in a file named mymodule.py` },
    "15.4": { title: "pip & Packages", content: "<h1>pip & Packages</h1>", code: `# pip install camelcase` },

    // MODULE 16: Advanced Python
    "16.1": { title: "List Comprehension", content: "<h1>List Comprehension</h1>", code: `fruits = ["apple", "banana", "cherry", "kiwi", "mango"]\nnewlist = [x for x in fruits if "a" in x]\nprint(newlist)` },
    "16.2": { title: "Dictionary Comprehension", content: "<h1>Dictionary Comprehension</h1>", code: `dict1 = {'a': 1, 'b': 2, 'c': 3, 'd': 4}\nkeys = [k for k, v in dict1.items() if v > 2]\nprint(keys)` },
    "16.3": { title: "Iterators", content: "<h1>Iterators</h1>", code: `mytuple = ("apple", "banana", "cherry")\nmyit = iter(mytuple)\nprint(next(myit))` },
    "16.4": { title: "Generators", content: "<h1>Generators</h1>", code: `def my_generator():\n  yield 1\n  yield 2\n  yield 3\n\nfor val in my_generator():\n  print(val)` },
    "16.5": { title: "Decorators", content: "<h1>Decorators</h1>", code: `def my_decorator(func):\n    def wrapper():\n        print("Something is happening before the function is called.")\n        func()\n        print("Something is happening after the function is called.")\n    return wrapper\n\n@my_decorator\ndef say_whee():\n    print("Whee!")\n\nsay_whee()` },
    "16.6": { title: "*args & **kwargs", content: "<h1>*args & **kwargs</h1>", code: `def my_function(*kids):\n  print("The youngest child is " + kids[2])\n\nmy_function("Emil", "Tobias", "Linus")` },

    // MODULE 17: Data Structures using Python
    "17.1": { title: "Stack Implementation", content: "<h1>Stack Implementation</h1>", code: `stack = []\nstack.append('a')\nstack.append('b')\nprint(stack.pop())` },
    "17.2": { title: "Queue Implementation", content: "<h1>Queue Implementation</h1>", code: `queue = []\nqueue.append('a')\nqueue.append('b')\nprint(queue.pop(0))` },
    "17.3": { title: "Searching Techniques", content: "<h1>Searching Techniques</h1>", code: `def linear_search(arr, x):\n    for i in range(len(arr)):\n        if arr[i] == x:\n            return i\n    return -1` },
    "17.4": { title: "Sorting Techniques", content: "<h1>Sorting Techniques</h1>", code: `arr = [64, 34, 25, 12, 22, 11, 90]\narr.sort()\nprint(arr)` },

    // MODULE 18: Mini Projects (Simplified for example)
    "18.1": { title: "Calculator", content: "<h1>Calculator</h1><p>A simple calculator project.</p>", code: `def add(x, y):\n    return x + y\nprint(add(5, 3))` },
    "18.2": { title: "Number Guessing Game", content: "<h1>Number Guessing Game</h1>", code: `import random\nprint(random.randrange(1, 10))` },
    "18.3": { title: "Student Management System", content: "<h1>Student Management System</h1>", code: `# Class implementations` },
    "18.4": { title: "Quiz Application", content: "<h1>Quiz Application</h1>", code: `# Quiz logic` },
    "18.5": { title: "To-Do List (CLI)", content: "<h1>To-Do List (CLI)</h1>", code: `# CLI loop` },

    // MODULE 19: Coding Challenges
    "19.1": { title: "Beginner Challenges", content: "<h1>Beginner Challenges</h1>", code: `# Solution here` },
    "19.2": { title: "Loop-Based Challenges", content: "<h1>Loop-Based Challenges</h1>", code: `# Solution here` },
    "19.3": { title: "String Challenges", content: "<h1>String Challenges</h1>", code: `# Solution here` },
    "19.4": { title: "Array Challenges", content: "<h1>Array Challenges</h1>", code: `# Solution here` },
    "19.5": { title: "Timed Challenges", content: "<h1>Timed Challenges</h1>", code: `# Solution here` }
};
