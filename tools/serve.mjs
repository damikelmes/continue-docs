import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=fs.realpathSync(path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../dist'));
const port=Number(process.env.PORT||4173);
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.json':'application/json; charset=utf-8','.png':'image/png','.woff2':'font/woff2','.txt':'text/plain; charset=utf-8'};
const server=http.createServer((req,res)=>{try{const name=decodeURIComponent(new URL(req.url,'http://localhost').pathname);const target=path.resolve(root,'.'+(name==='/'?'/index.html':name));
  if(target!==root&&!target.startsWith(root+path.sep)){res.writeHead(403).end();return;}
  if(!fs.existsSync(target)||!fs.statSync(target).isFile()||!fs.realpathSync(target).startsWith(root+path.sep)){res.writeHead(404).end('Não encontrado');return;}
  res.writeHead(200,{'Content-Type':types[path.extname(target)]||'application/octet-stream','Cache-Control':'no-store','X-Content-Type-Options':'nosniff','Content-Security-Policy':"default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'none'; frame-ancestors 'none'"});if(req.method==='HEAD')res.end();else fs.createReadStream(target).pipe(res);
}catch{res.writeHead(400).end('Endereço inválido');}});
server.listen(port,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:'+port));
for(const signal of ['SIGINT','SIGTERM'])process.on(signal,()=>server.close(()=>process.exit(0)));
