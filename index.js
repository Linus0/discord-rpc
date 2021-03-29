var rpc = require("discord-rpc")
const client = new rpc.Client({
    transport: 'ipc'
})
client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: "🧞View My Website",
            assets: {
                large_image: "large2",
                large_text: "💻Coding Discord Bots"
            },
            buttons: [{
                label: "Discord",
                url: "https://discord.gg/wetxR93SFZ"
            }, {
                label: "Website",
                url: "https://www.gwopdevelopment.com/"
            }]
        }
    })
})
client.login({
    clientId: "817003264524288010"
}).catch(console.error);