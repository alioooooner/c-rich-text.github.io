/*
 * @Author: your name
 * @Date: 2022-02-22 16:49:35
 * @LastEditTime: 2022-02-23 12:55:38
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /c-rich-text/src/sw/sw.js
 */
importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.1.1/workbox-sw.js'
);
const VERSION = 'v7';
const CACHE_NAME = 'service-worker-demo' + VERSION;

console.log('begin');

this.addEventListener('install', function (event) {
  console.log('安装 sw.js');
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(['./', 'js', 'css', 'index.html']);
    })
  );
});

this.addEventListener('activate', function (event) {
  console.log('激活 sw.js，可以开始处理 fetch 请求。');
  event.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(
        keyList.map(function (key) {
          if (CACHE_NAME.indexOf(key) === -1) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

this.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (resp) {
      console.log(resp);
      if (
        !resp ||
        (resp && resp.type === 'cors' && resp.url.indexOf('find') !== -1)
      ) {
        console.log(
          new Date(),
          'fetch ',
          event.request.url,
          '没有缓存，网络获取'
        );
        return fetch(event.request).then(function (response) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(function (cache) {
            cache.put(event.request, responseClone);
          })
          return response;
        });
      } else {
        return resp;
      }
    })
  );
});
console.log('end');
