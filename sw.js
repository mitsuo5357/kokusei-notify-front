// sw.js

console.log('サービスワーカーが起動しました');

// 'push'イベントを待ち受ける
self.addEventListener('push', event => {
  console.log('[Service Worker] Push Received.');

  // 通知で表示するデータを取得（サーバーから送られてくる）
  const data = event.data.json();
  const title = data.title;
  const options = {
    body: data.body,
    icon: '/icon.png', // 通知に表示するアイコン
  };

  // 通知を表示！
  event.waitUntil(self.registration.showNotification(title, options));
});