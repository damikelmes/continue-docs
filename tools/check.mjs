import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const dist=path.join(root,'dist');
const read=name=>fs.readFileSync(path.join(dist,name),'utf8');
const context={window:{}};
for(const name of ['reference','icons','guides','behaviors','examples']){
  const source=read(name+'.js');
  new vm.Script(source,{filename:name+'.js'}).runInNewContext(context,{timeout:2000});
}
const {CONTINUE_REFERENCE:r,CONTINUE_ICONS:icons,CONTINUE_GUIDES:guides,CONTINUE_BEHAVIOR_DETAILS:behaviors,CONTINUE_NODE_EXAMPLES:examples,CONTINUE_MATH_EXAMPLES:math}=context.window;
const ids=items=>new Set(items.map(item=>item.id));
for(const [name,items] of Object.entries({nodes:r.nodes,behaviors:r.behaviors,expressions:r.expressions,guides})){
  assert.equal(ids(items).size,items.length,'Identificadores repetidos: '+name);
  for(const item of items){assert.ok(item.title?.trim(),name+': título vazio');assert.ok(item.description?.trim(),name+': descrição vazia');assert.ok(icons[item.icon],name+': ícone ausente '+item.icon);}
}
assert.equal(r.nodes.length,r.counts.nodes);
assert.equal(r.behaviors.length,r.counts.behaviors);
assert.equal(r.expressions.length,r.counts.staticExpressions+r.counts.dynamicExpressions);
const nodeIds=ids(r.nodes),guideIds=ids(guides),expressionIds=ids(r.expressions);
for(const n of r.nodes)assert.ok(r.categories.some(c=>c.id===n.category),'Categoria de nó ausente: '+n.id);
for(const e of r.expressions)assert.ok(r.expressionCategories.some(c=>c.id===e.category),'Categoria de expressão ausente: '+e.id);
for(const b of r.behaviors){assert.ok(behaviors[b.id],'Explicação de comportamento ausente: '+b.id);assert.ok(behaviors[b.id].fields.length&&behaviors[b.id].rules.length,'Comportamento incompleto: '+b.id);}
for(const [id,value] of Object.entries(examples)){assert.ok(nodeIds.has(id),'Exemplo sem nó: '+id);assert.ok(nodeIds.has(value[2]),'Conexão de exemplo sem nó: '+id+' → '+value[2]);}
for(const [id,items] of Object.entries(math)){assert.ok(expressionIds.has(id),'Exemplo matemático sem expressão: '+id);assert.ok(items.length>=2,'Expressão precisa de dois exemplos: '+id);}
for(const page of [...guides,...Object.values(behaviors)])for(const id of page.related||[])assert.ok(guideIds.has(id),'Guia relacionado ausente: '+id);
for(const g of guides){assert.ok(g.sections.length,'Guia vazio: '+g.id);const sections=new Set();for(const s of g.sections){assert.ok(!sections.has(s.title),'Seção repetida: '+g.id);sections.add(s.title);for(const id of s.flow||[])assert.ok(nodeIds.has(id),'Fluxo aponta para nó ausente: '+id);}}
for(const [key,value] of Object.entries(icons)){assert.ok(Number.isFinite(value.viewport)&&value.viewport>0,'Viewport inválido: '+key);assert.ok(value.strokes.length,'Ícone vazio: '+key);for(const stroke of value.strokes){assert.ok(stroke.d?.length,'Caminho vazio: '+key);assert.ok(!/[<>]/.test(stroke.d),'Caminho inválido: '+key);}}

const html=read('index.html');
assert.equal([...html.matchAll(/data-theme-button/g)].length,1,'Tema deve aparecer somente no topo');
assert.ok(!/Feita para quem cria|sidebar-bottom/.test(html),'Rodapé lateral antigo reapareceu');
assert.ok(!/article-toc|Nesta página/.test(read('app.js')),'Índice lateral não deve ser renderizado');
for(const m of html.matchAll(/(?:src|href)="\.\/([^"]+)"/g))assert.ok(fs.existsSync(path.join(dist,m[1])),'Arquivo público ausente: '+m[1]);
assert.ok(!/(?:src|href)="https?:/i.test(html),'Dependência de rede no HTML');
assert.ok(!/<table[\s>]/i.test(html),'Tabelas não são o padrão deste site');
const routes=new Set(['/',...guides.map(g=>'/guia/'+g.id),...r.behaviors.map(b=>'/comportamento/'+b.id),...r.nodes.map(n=>'/no/'+n.id),...r.expressions.map(e=>'/expressao/'+e.id),'/comportamentos','/acoes','/condicoes','/expressoes']);
// Exercise every route with the real renderer and data, separately from visual QA.
const elements=new Map(),callbacks={};
function element(id){if(!elements.has(id))elements.set(id,{innerHTML:'',style:{},classList:{add(){},remove(){},contains(){return false;}},setAttribute(){},removeAttribute(){},addEventListener(){},querySelectorAll(){return [];},focus(){}});return elements.get(id);}
const document={querySelector:element,querySelectorAll(){return [];},addEventListener(){},documentElement:{style:{}},body:element('body')};
const smoke={...context,document,location:{hash:''},scrollY:0,requestAnimationFrame:fn=>fn(),matchMedia:()=>({matches:false,addEventListener(){}}),setTimeout,clearTimeout};
smoke.window={...context.window,addEventListener:(type,fn)=>callbacks[type]=fn,scrollTo(){}};
new vm.Script(read('app.js'),{filename:'app.js'}).runInNewContext(smoke,{timeout:3000});
for(const route of routes){smoke.location.hash='#'+route;callbacks.hashchange();const page=element('#main').innerHTML;assert.ok(page.includes('<h1>'),'Rota sem título: '+route);assert.ok(!/undefined|\[object Object\]|Página não encontrada|Não foi possível abrir/.test(page),'Rota incompleta: '+route);for(const m of page.matchAll(/href="#(\/[^"<>]*)"/g))assert.ok(routes.has(m[1]),'Link renderizado desconhecido: '+m[1]);}
for(const file of ['index.html','app.js','guides.js','behaviors.js','examples.js']){
  const body=read(file);
  assert.ok(!/C:\\Users|Downloads[\\/]|expo\s+go|react\s+native|ui-icons\.json|runtime-shared/i.test(body),'Detalhe interno indevido no arquivo público: '+file);
  for(const m of body.matchAll(/["']#(\/[^"']*)["']/g))assert.ok(routes.has(m[1]),'Link desconhecido: '+m[1]);
  for(const m of body.matchAll(/["']([a-z][a-z0-9-]+\/[a-z0-9/-]+)["']/g))if(m[1]!=='font/woff2')assert.ok(icons[m[1]],'Ícone não incluído: '+m[1]);
}
assert.ok(read('app.css').includes("url('./assets/inter-latin.woff2')"),'Fonte local ausente no estilo');
assert.ok(fs.existsSync(path.join(dist,'assets/Inter-LICENSE.txt')),'Licença da fonte ausente');
for(const name of fs.readdirSync(dist).filter(f=>f.endsWith('.js'))){const result=spawnSync(process.execPath,['--check',path.join(dist,name)],{encoding:'utf8'});assert.equal(result.status,0,result.stderr);}
for(const name of ['serve.mjs','sync-reference.mjs']){const result=spawnSync(process.execPath,['--check',path.join(root,'tools',name)],{encoding:'utf8'});assert.equal(result.status,0,result.stderr);}
function files(folder){return fs.readdirSync(folder,{withFileTypes:true}).flatMap(entry=>entry.isDirectory()?files(path.join(folder,entry.name)):[path.join(folder,entry.name)]);}
const publicFiles=files(dist),bytes=publicFiles.reduce((sum,file)=>sum+fs.statSync(file).size,0);
assert.ok(bytes<2*1024*1024,'Revise o tamanho dos arquivos públicos');
console.log(JSON.stringify({status:'OK',guides:guides.length,nodes:r.nodes.length,behaviors:r.behaviors.length,expressions:r.expressions.length,icons:Object.keys(icons).length,routes:routes.size,publicFiles:publicFiles.length,publicKB:Math.round(bytes/1024)},null,2));
