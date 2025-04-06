const corn = require("cron");
const https = require("https");

const job = new corn.CronJob("*/14 * * * *", () => {
    https.get(process.env.API_URL, (res) => {
        if (res.statusCode === 200) {
            console.log("Get request sent successfully");
        } else {
            console.log("Get request failed", res.statusCode);
        }
    }).on("error", (e) => console.log("Error while sending request.", e));
})

export default job;