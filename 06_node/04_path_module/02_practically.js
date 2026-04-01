// Import path module
const path = require("path")

console.log("============== NODE PATH MODULE DEMO ==============\n")

// Example path
const filePath = "D:/nodejs/html/js/app.js"

console.log("Original Path:", filePath)


// --------------------------------------------------
// basename()
// --------------------------------------------------
console.log("\n1. basename()")
console.log("File Name:", path.basename(filePath))
console.log("File Name without extension:", path.basename(filePath, ".js"))


// --------------------------------------------------
// dirname()
// --------------------------------------------------
console.log("\n2. dirname()")
console.log("Directory:", path.dirname(filePath))


// --------------------------------------------------
// extname()
// --------------------------------------------------
console.log("\n3. extname()")
console.log("Extension:", path.extname(filePath))


// --------------------------------------------------
// parse()
// --------------------------------------------------
console.log("\n4. parse()")
console.log("Parsed Object:", path.parse(filePath))


// --------------------------------------------------
// format()
// --------------------------------------------------
console.log("\n5. format()")

const pathObj = {
  dir: "D:/nodejs/html/js",
  base: "app.js"
}

console.log("Formatted Path:", path.format(pathObj))


// --------------------------------------------------
// join()
// --------------------------------------------------
console.log("\n6. join()")
const joinedPath = path.join("users", "nodejs", "app.js")
console.log("Joined Path:", joinedPath)


// --------------------------------------------------
// normalize()
// --------------------------------------------------
console.log("\n7. normalize()")

const messyPath = "/users/nodejs/../app.js"
console.log("Before:", messyPath)
console.log("After:", path.normalize(messyPath))

