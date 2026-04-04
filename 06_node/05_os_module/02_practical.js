const os = require("os")


console.log("Operating System Platform:", os.platform())

console.log("\nCPU Architecture:", os.arch())

console.log("\nCPU Information:")
console.log(os.cpus())

console.log("\nTotal Memory:", os.totalmem())

console.log("\nFree Memory:", os.freemem())

console.log("\nHostname:", os.hostname())

console.log("\nHome Directory:", os.homedir())

console.log("\nSystem Uptime (seconds):", os.uptime())

console.log("\nUser Info:")
console.log(os.userInfo())

console.log("\nTemporary Directory:", os.tmpdir())

console.log("\nNetwork Interfaces:")
console.log(os.networkInterfaces())

console.log("free memory is ",os.freemem)