const http = require("http")
const url = require("url")

/*
Creating HTTP server
*/
const server = http.createServer((req, res) => {

    console.log("Request received")
    console.log("Method:", req.method)
    console.log("URL:", req.url)


    /*
    Parsing URL and query parameters
    */
    const parsedUrl = url.parse(req.url, true)
    const path = parsedUrl.pathname
    const query = parsedUrl.query


    /*
    ROUTE: HOME PAGE
    */
    if (path === "/" && req.method === "GET") {

        res.statusCode = 200
        res.setHeader("Content-Type", "text/html")

        res.end(`
            <h1>Welcome to Node HTTP Server</h1>
            <p>This is the home page</p>
        `)
    }



    /*
    ROUTE: JSON RESPONSE
    */
    else if (path === "/api/user" && req.method === "GET") {

        const user = {
            name: "Vikash",
            role: "Full Stack Developer"
        }

        res.statusCode = 200
        res.setHeader("Content-Type", "application/json")

        res.end(JSON.stringify(user))
    }



    /*
    ROUTE: QUERY PARAMETERS
    Example:
    /search?name=vikash
    */
    else if (path === "/search" && req.method === "GET") {

        const name = query.name || "Guest"

        res.statusCode = 200
        res.setHeader("Content-Type", "text/plain")

        res.end(`Hello ${name}`)
    }



    /*
    ROUTE: URL PARAMETERS
    Example:
    /product?id=10
    */
    else if (path === "/product" && req.method === "GET") {

        const id = query.id

        res.statusCode = 200
        res.setHeader("Content-Type", "text/plain")

        res.end(`Product ID: ${id}`)
    }



    /*
    ROUTE: POST REQUEST
    */
    else if (path === "/login" && req.method === "POST") {

        let body = ""

        req.on("data", (chunk) => {
            body += chunk
        })

        req.on("end", () => {

            console.log("Received POST Data:", body)

            res.statusCode = 200
            res.setHeader("Content-Type", "application/json")

            res.end(JSON.stringify({
                message: "Login data received",
                data: body
            }))
        })
    }



    /*
    ROUTE: 404 NOT FOUND
    */
    else {

        res.statusCode = 404
        res.setHeader("Content-Type", "text/plain")

        res.end("404 Page Not Found")
    }

})



/*
Starting server
*/
server.listen(3000, () => {
    console.log("Server running on http://localhost:3000")
})

