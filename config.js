//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "directkpo@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vani1Mn5fM5WnZHzrK0T";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vani1Mn5fM5WnZHzrK0T";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349129338499";
global.owner = process.env.OWNER_NUMBER || "2349129338499";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0JEcVZLSS91dGc0N0FBS3prdmM0cXpmWjJDRUhybFNqUjJXZGtqcmNVVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVGZNZER5bkJKZEUySFV4dTVOSWM4NmpSbDAvdjNvc3NYWStDcDlFSmlSND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZT3hwV3pFMjVjbDE1ZC9jUWN2VVAwaklWcUxUekNPNHFXN0xUTU9qMEdFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZTW1HU1VhRkFTczUzQUVyaGlnYVZJSVdkalEwNytmR1pia012cGZCY1drPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndOSUVJOThkSTF1SFUveHdJdkRjVXBiVURHeit3TUNzY3FaemQzY3NVSGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBTaWg3Zy9xZG9LTGttM016Q3krQlhlZSs1bm1CbFJLUFpFTE91N050SGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0IvcmlEUFdwNDJxZ0g3UWRUSUp6Y05ZbVQ5UnpVbU91TUd6Rmp2SmNHUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZDFuSDdBZndXQk5za1FYWEJiOGtvUjZsdjZBdit4aDFkNGtOaVg5WENuUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZjdnp2bHNKMDR0Zm9PK2tyaytoN2ZNUVJmTC9vYUh1bUVUamIrZFd0NTlWUzJtdDZmQUVQTS9vcDlmMGhnQjFqT2IzSWJyZmRicHJQakV6eEdnakRnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc1LCJhZHZTZWNyZXRLZXkiOiJZWHUyMmFNczB2MmwyUUdCcUtEQ3JUK3RFQllLYTFWQmowUHFSRTNjWVFNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJLdTlEZjlsM1RCNmFzMWo1dGlYclNnIiwicGhvbmVJZCI6ImNmM2E5YTIyLWMwMDAtNDk2Ni1iYzlkLTc4Y2U0NjFiOGExNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5M1FDUWswMy9uS0tYU2E5TG5qUVV0a3g1WGc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieURrM3FwVS9OYXBmM1E5RVhxd2t1c1BzbUVzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IktQNzc4SDZTIiwibWUiOnsiaWQiOiIyMzQ5MTI5MzM4NDk5OjEwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IktQTyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSzJtazdZRUVMV2Y0YnNHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZ2J3ZWlYeXhjdDI5NXk3RGtxbnJqQXRMKzVwMXUwRWlCbTMyMW9WVXRXND0iLCJhY2NvdW50U2lnbmF0dXJlIjoieUx1Q1JyZldPNVNtQU0wOHNVZDB4b0V1d0hCU2ViZDNnM2ZWYmhLTDN4dDhpcG42bnppZGppQUJwTWV6cEZPMHFsclQzTmFJbTFlQXVKS1U5dnlCQUE9PSIsImRldmljZVNpZ25hdHVyZSI6ImNZcWVpOTBpajZxUGpMK3hxNnNCZHc2Y29iaHRYWStCTm1TUlgrR01zUnJYQk5acnFWWVdYQVZwd1ZBZ3dxcHdUQ2RqTFVpUDduaC90bEhhQUtoQ0NRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTEyOTMzODQ5OToxMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZRzhIb2w4c1hMZHZlY3V3NUtwNjR3TFMvdWFkYnRCSWdadDl0YUZWTFZ1In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM1OTM3OTg3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUY2SiJ9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "KPO-BOT™`",
  author: process.env.PACK_AUTHER || " _■ ░K░P░O░ ■_",
  packname: process.env.PACK_NAME || "KPO",
  botname: process.env.BOT_NAME || "KPO-BOT",
  ownername: process.env.OWNER_NAME || " _■ ░K░P░O░ ■_",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
