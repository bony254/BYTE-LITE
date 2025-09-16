const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0ZYZHJRMVVTT3h5VnBwd3dTcW5IOVRHV3VtMHkray94TXpzeUpoZVpFaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYzI2cGhIRUxJWFJyTEVyNUtvQVY5NGZyU3QyM3o1VFJWellxSkRCclRoQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtSEZldE43MmJrQ09HdW4wcEtqb0lhanBJSHRCcytGc0lBa0VBcWJ1UVZZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvWnhyZlp1YTh3bXZRejFlQ2g4aitHMmRIK1VtSkNNQVNLZ1E0SVpyUm04PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJESlovOTJxemppN3JvZmhnVkIzN2krMkpsK0k0K3ZjOENWeDhHU291SGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNtVWZmWFFlejlvaEExMngwcWxubnJXN0wzYW9kdHB3WTZGQVRadEJ0bEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkZvajRMMmQvRGZlRkVaMDhrbWlJRHFscWt6L3hSRW93WmtsYUR4RG9saz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSlNmcUQrSnJ4d0pJd2JhMXVVZUdQUjhIUGRFUHNIUTAwT2VZRTBFamYwaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRQOUVjOExyUWxGWGxkelVmeUhFYXNRb0xUdDZBcjlDNVV4VFJZVVNVODZZalJKVnNlU2VmcHNxK3k5SWF1Uk5rcHZnRWR2Rmc5ZmhKRTZSRU9JdmhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA3LCJhZHZTZWNyZXRLZXkiOiIwazJLNjZsSjR6Z0lnekExVEVmRStBMjg5bmpaNm96VGlaM0lJYUFpbjBVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDEwNDcwMTAwNkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJENTQxQUIzRUFCNkUxMjYxQzU1QTBFMTE1OEIyRTQxMyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU4MDUzMDU4fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQxMDQ3MDEwMDZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNTk2RDM1MEI2QzBEMzk1RTc5QkVGMERFQzk3MTJFMDAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1ODA1MzA1OH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0MTA0NzAxMDA2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjZFMkU3MEY0QTdBQzRFQkIyQTBBQjk5MDYzOTQyMjA4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTgwNTMwNjB9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IlRONzlFNkIxIiwibWUiOnsiaWQiOiIyNTQxMDQ3MDEwMDY6MUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE5NDk4Nzg5MTM5NjYyMToxQGxpZCIsIm5hbWUiOiJtYW5kZXkifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05HUjFlZ0ZFTEtGcDhZR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlIxRHV3aGxzdVVOeWVEVzhDblFHalBUSDJCSzVlZzBuOVZ3M3BoOTdCMDA9IiwiYWNjb3VudFNpZ25hdHVyZSI6InlRSUdjZUJqRVNna05ZR3NXQ2VCc2p0RmZpM1J4ME5zOEo5cEpzUHlUc1pLclBjeld4b2k2Y2E0ZkFSOVZoMXdzc2svZ1NuNllOa1lKYU40UTdQY0NnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJXZUFGc2haNmV6R0laMXF4V0xyUkp4Z043SjZIN3FhUTUvcDRiUTVrdzZHL3FGZE12anh6UmtyNW9uOENyUVpRS1gyL0VBVnp2bUUzbzIwS2JaWDhpdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDEwNDcwMTAwNjoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVkUTdzSVpiTGxEY25nMXZBcDBCb3oweDlnU3VYb05KL1ZjTjZZZmV3ZE4ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1ODA1MzA1NiwibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUUvZCJ9",
    CAPTION: process.env.CAPTION || "*ᴘᴏᴡᴅᴇʀᴇᴅ ʙʏ ᴛᴀʟᴋᴅʀᴏᴠᴇ*",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    READ_MESSAGE: process.env.READ_MESSAGE || "false", // Added auto-read configuration
    AUTO_TYPING: process.env.AUTO_TYPING || "true",
    CURRENT_STATUS: process.env.CURRENT_STATUS || "false",
    MODE: process.env.MODE || "public",
    AUTO_VOICE: process.env.AUTO_VOICE || "false",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://i.imgur.com/UfzyhWN.jpeg",
    ALIVE_MSG: process.env.ALIVE_MSG || "HII DEAR IM ONLINE I'M BYTE-LITE WHATSAPP BOT 😊♻️",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
    AUTO_REACT: process.env.AUTO_REACT || "true",
    HEART_REACT: process.env.HEART_REACT || "false",
    OWNER_REACT: process.env.OWNER_REACT || "false",
    BOT_NAME: process.env.BOT_NAME || "ʙʏᴛᴇ-ʟɪᴛᴇ",
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
    AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "`𝒚𝒐𝒖𝒓 𝒔𝒕𝒂𝒕𝒖𝒔 𝒔𝒆𝒆𝒏 𝒋𝒖𝒔𝒕 𝒏𝒐𝒘 𝒃𝒚 𝒃𝒚𝒕𝒆-𝒍𝒊𝒕𝒆`",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
