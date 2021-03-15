var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Coding some shit...",
assets : {
large_image : "large2",
large_text : "Coding some bots..." // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "Discord" , url : "https://discord.gg/wetxR93SFZ"},{label : "Website",url : "https://developmentsitegwop.netlify.app/"}]
}
})
})
client.login({ clientId : "817003264524288010" }).catch(console.error);