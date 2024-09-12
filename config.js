//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/8297735823 , https://wa.me/8297735823";
global.sudo = process.env.SUDO || "8297735829";
global.owner = process.env.OWNER_NUMBER || "8297735829";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-session-2c65.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUJKMVVYNGEyMHB1NW9LRE8vYThhM2EzTnZWOGV2ay9GN3NEdGNaUmxsWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaWxEZy9Ha25MK3JGV1U1Z2tBTFRWS081TmZOL2wrNFpNenBnVmhFRmRoWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwTW5rNlVYdjl2dmFrL04vS0NVcU9NTW5KMkhCQWRBNnBtazMrU01uR1h3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvVkJyekpTbVduYmVNdEtQNzZ5UUN2bXBWMDNBcFhWSlVycFYrTEdSSmswPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFCSWZFM3pKb211dklVVnBNejdoK0hTMU1OQXVlUk05UlNDM0cwalgxbTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imo5N1drWlFBTEIvcHdxaFNBbEVLeUYyaC9hdkR6a0VWZXA0cit1SVRwWFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0VzTm56TW96WW12ZnVlaEt5YUdmZnM0Z3RMc0RIRjBSUklOVzFhc2lVVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSGhYUlBQNUJiTVRhR1pWaW13STVJMmtzTWlLMjQzRTg5Z1NhWFF1TGRsUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlQwWXJWRWpRRURLZDZReDdrc3lveklndkdSbnVuTWZhWngwaW9oajRpYVV3MFQ1WGhheXZDbzBXRFRNMzZhb0h4TU03N2Z3SUFtL2gwdWpBL2p2VkFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTQsImFkdlNlY3JldEtleSI6IkhmZitWV1dmbWFSVzE5dDJqb0dUWHFmRVlSdm0ySDBYRzBoaElZL3hCUlE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMTgyOTc3MzU4MjNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0FGOTdDRDg1MTg0RjVBNzlDNTQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNTkxNDIwNX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMTgyOTc3MzU4MjNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0FEQzYzOEM3MzVBMjU0NDYyODgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNTkxNDIwN31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoicjZpVlMyYUhUWmFYcUtNcUt5cUo2ZyIsInBob25lSWQiOiIzOTE1MTA1OS1jMmNjLTQ0N2MtYWIyMy0wZmYwZDlhN2U1NTIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSzFEL0lCNkluS2UxNGRQRFl0RHVjSS90czdjPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZUWWtqeEUvQXhsTW9waE5ySzZSbGFqVnIwST0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJXNldNR1JFTiIsIm1lIjp7ImlkIjoiMTgyOTc3MzU4MjM6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJKZXNzaWNhIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNYW41U3NRejdqOXRnWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJyT29KRy9zdHl0VkpzcE1YT09aTk5CZVJybFdMTEZxbFFKKzh4dGFDNVRJPSIsImFjY291bnRTaWduYXR1cmUiOiIyQjhKR0ZmWmlnU0ZFMXFqb0ljb2pKa2pPUkxlWlg2V0lMZ2diZ29Ud0pHQVJ5ejRaKzFmWXppNGJqSmxGWjZyYU9tN2lLdGk0RnowMXdoUUhXSmRndz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiN0J5K0tSTVgzL2N0aDBEbHVtVFhteFJHM1RURGtoeGlNcTdydWM4WHRmSlljZHhUdUpVMnFWVjcxOHRwTlRtQlJNNGJoZy9XWWlYZVpDRzJGSUJxRFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxODI5NzczNTgyMzoyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmF6cUNSdjdMY3JWU2JLVEZ6am1UVFFYa2E1Vml5eGFwVUNmdk1iV2d1VXkifX1dLCJwbGF0Zm9ybSI6InNtYmkiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjU5MTQyMDMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUDB5In0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "•",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ the copy ninja☜`",
  author: process.env.PACK_AUTHER || "ASHBOTIP",
  packname: process.env.PACK_NAME || "ASHBOTIP-MD-V2",
  botname: process.env.BOT_NAME || "the copy ninja-MD-V2",
  ownername: process.env.OWNER_NAME || "☞⌜ ASHBOTIP☜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "KERM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
