const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'mastergame.aternos.me',
    port: 25565,
    username: 'MasterGuard_AFK'
  });

  bot.on('spawn', () => {
    console.log('Bot MasterGame sunucusuna bağlandı!');
    // 30 saniyede bir zıplayarak AFK kick yemeyi önler
    setInterval(() => {
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 500);
    }, 30000);
  });

  bot.on('end', () => {
    console.log('Bot düştü, 5 saniye sonra tekrar bağlanıyor...');
    setTimeout(createBot, 5000);
  });

  bot.on('error', (err) => console.log('Hata:', err));
}

createBot();
