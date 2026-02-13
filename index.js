const { Telegraf, Markup } = require("telegraf");

const BOT_TOKEN = process.env.BOT_TOKEN;

if (!BOT_TOKEN) {
  throw new Error("BOT_TOKEN is missing");
}

const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply(
    "SalonFlow — Telegram CRM для салонов 🚀\n\nВыберите действие:",
    Markup.keyboard([
      ["🔥 Посмотреть как работает", "💰 Тарифы"],
      ["🚀 Подключить салон", "❓ Вопросы"]
    ]).resize()
  );
});

bot.launch();

console.log("Sales bot started");
