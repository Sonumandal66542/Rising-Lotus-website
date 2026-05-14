import { existsSync, rmSync, renameSync, copyFileSync, mkdirSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const root = process.cwd();
const distClient = resolve(root, 'dist/client');
const distServer = resolve(root, 'dist/server');

// Remove the auto-generated wrangler.json (it's invalid for Pages)
const badWrangler = resolve(distClient, 'wrangler.json');
if (existsSync(badWrangler)) {
  rmSync(badWrangler);
  console.log('✓ Removed dist/client/wrangler.json');
}

// Remove the .wrangler deploy redirect cache
const wranglerDir = resolve(root, '.wrangler');
if (existsSync(wranglerDir)) {
  rmSync(wranglerDir, { recursive: true });
  console.log('✓ Removed .wrangler/');
}

// The Cloudflare plugin (when cloudflare: true) outputs the worker-entry
// file inside dist/server as a proper Cloudflare Worker.
// Move it into dist/client/_worker.js (as a directory with index.js entry).
const workerDir = resolve(distClient, '_worker.js');
if (existsSync(distServer) && !existsSync(workerDir)) {
  renameSync(distServer, workerDir);

  // Cloudflare Pages expects the entry to be index.js in _worker.js dir
  const serverEntry = resolve(workerDir, 'server.js');
  const indexEntry = resolve(workerDir, 'index.js');
  if (existsSync(serverEntry) && !existsSync(indexEntry)) {
    copyFileSync(serverEntry, indexEntry);
    console.log('✓ Copied server.js → _worker.js/index.js');
  }
  console.log('✓ Moved dist/server → dist/client/_worker.js');
}

// Create _routes.json so /assets/* is served directly as static files
// instead of going through the SSR worker (which caused 404s)
const routesJson = {
  version: 1,
  include: ['/*'],
  exclude: ['/assets/*']
};
writeFileSync(
  resolve(distClient, '_routes.json'),
  JSON.stringify(routesJson, null, 2)
);
console.log('✓ Created _routes.json (assets served statically)');

console.log('✓ Cloudflare Pages build ready!');
