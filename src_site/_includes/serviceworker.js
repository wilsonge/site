const a=`dGrammatiko-${VERSION}`;self.addEventListener("install",(a=>{self.skipWaiting()})),self.addEventListener("activate",(t=>{t.waitUntil(async function(){await clients.claim();const t=await caches.keys();await Promise.all(t.filter((t=>a!==t)).map((a=>caches.delete(a))))}())}));
