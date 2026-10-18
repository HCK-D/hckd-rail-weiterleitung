/* hckd-rail.ch ist jetzt railbase.ch.
   Ersetzt den alten Service Worker der App: löscht den Offline-Speicher, meldet sich ab und lädt
   offene Fenster neu, damit sie zur Weiterleitung auf railbase.ch kommen. */
'use strict';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil((async () => {
  for (const k of await caches.keys()) await caches.delete(k);
  await self.registration.unregister();
  for (const c of await self.clients.matchAll({ type: 'window' })) c.navigate(c.url);
})()));
