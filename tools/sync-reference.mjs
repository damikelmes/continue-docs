import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const source=fs.realpathSync(process.argv[2]||path.join(root,'..','Continue-Native'));
if(source===root||!fs.existsSync(path.join(source,'editor-shared/include/continue_editor/behavior_catalog.hpp')))throw Error('Informe a pasta Continue-Native atual.');
const read=file=>fs.readFileSync(path.join(source,file),'utf8');
const header='editor-shared/include/continue_editor/';
function rows(body,name){const marker=name+'[]={',start=body.indexOf(marker);if(start<0)throw Error('Catálogo ausente: '+name);const end=body.indexOf('\n};',start);if(end<0)throw Error('Fim ausente: '+name);
  return body.slice(start+marker.length,end).split(/\r?\n/).filter(line=>/^\s*\{/.test(line)).map(line=>{const value=line.trim().replace(/,$/,'');return JSON.parse('['+value.slice(1,-1)+']');});}
const nodeHeader=read(header+'script_node_labels.hpp');
const nodes=rows(nodeHeader,'script_node_labels').map(([id,title,description,color,label,icon,category,search,restricted])=>({id,title,description,color,icon,category,search,restricted,kind:id.startsWith('condition-')?'condition':'action'}));
const categories=rows(nodeHeader,'script_node_sections').map(([id,title,description,color,icon,behavior,,search,actionOrder,conditionOrder])=>({id,title,description,color,icon:behavior?'behavior/'+behavior:icon,search,actionOrder,conditionOrder}));
const behaviors=rows(read(header+'behavior_catalog.hpp'),'behavior_choices').map(([id,title,description,color,category])=>({id,title,description,color,category,icon:'behavior/'+id}));
const expressions=rows(read(header+'expression_catalog_data.hpp'),'expression_options').map(([id,title,description,token,property,objectVariable,sharedVariable,icon])=>({id,title,description,token,property,objectVariable,sharedVariable,icon:icon||'expression/'+id,category:exprCategory(id)}));
const expressionCategories=rows(read(header+'expression_catalog.hpp'),'expression_sections').map(([id,title,description,icon,color])=>({id,title,description,icon,color}));
function exprCategory(id){if(id.includes('variable'))return 'variables';if(/^(object|shape|sprite)-/.test(id))return 'objects';if(id.startsWith('camera-'))return 'camera';if(id.startsWith('text-'))return 'text';if(/^(render|system)-/.test(id))return 'screen';if(id.startsWith('time-')||id==='game-fps')return 'time';if(id.startsWith('touch-'))return 'touch';if(id.startsWith('math-'))return 'math';if(id.startsWith('random-'))return 'random';return 'other';}
const staticExpressions=expressions.length;
for(const [key,title,description] of [['hit','Raio está detectando','Retorna 1 ao detectar e 0 quando o raio está livre.'],['x','Posição X detectada','Posição horizontal do ponto detectado.'],['y','Posição Y detectada','Posição vertical do ponto detectado.'],['distance','Distância detectada','Distância entre a origem e a colisão detectada.'],['instance','Instância detectada','Número da instância atingida, ou 0 quando não há detecção.'],['normal_x','Normal X da superfície','Componente horizontal da normal da superfície encontrada.'],['normal_y','Normal Y da superfície','Componente vertical da normal da superfície encontrada.']])expressions.push({id:'ray-'+key,title,description,token:'personagem.ray.chao.'+key,property:'',icon:'behavior/raycast',category:'rays',dynamic:'ray'});
for(const scope of ['sound','channel'])for(const [key,title,description] of [['position','Posição de reprodução','Posição atual da reprodução em segundos.'],['duration','Duração do som','Duração do som em segundos.'],['volume','Volume do som','Volume atual da reprodução.'],['speed','Velocidade do som','Velocidade atual da reprodução.']])expressions.push({id:scope+'-'+key,title:title+(scope==='channel'?' do canal':''),description,token:scope+'.'+(scope==='sound'?'trilha':'1')+'.'+key,property:'',icon:'common/sound',category:'sounds',dynamic:scope});
const allIcons=JSON.parse(read('editor-shared/resources/ui-icons.json')).icons;
const aliases=Object.fromEntries([...read(header+'editor_icon_aliases.hpp').matchAll(/return key=="([^"]+)"\?"([^"]+)":key/g)].map(m=>[m[1],m[2]]));
const webAliases={'editor/play':'common/play','action/add-object':'common/add','project-resource/images':'common/project-images','export/android':'common/android','export/apk':'android-setting/apk','export/aab':'android-setting/aab','android-setting/universal':'common/android','property/z-index':'script-node/action-set-object-z-index','behavior/light-emitter':'common/light','behavior/object-variables':'expression/object-variable'};
const icons={};const missing=[];
function resolve(key){const seen=new Set();while((aliases[key]||webAliases[key])&&!seen.has(key)){seen.add(key);key=aliases[key]||webAliases[key];}return key;}
function keep(key){if(icons[key])return;const resolved=resolve(key),definition=allIcons[resolved];if(!definition){missing.push(key);return;}icons[key]={viewport:definition.viewport||24,color:definition.color||'#A78BFA',strokes:definition.strokes.map(s=>({d:s.d,fill:s.fill===true,width:s.width??2,opacity:s.opacity??1,...s.color?{color:s.color}:{}}))};}
// The editor builds this behavior symbol from a swatch and the light vector.
keep('common/light');
icons['behavior/light-blocker']={viewport:24,color:'#94A3B8',strokes:[{d:'M5 0h14a5 5 0 0 1 5 5v14a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5V5a5 5 0 0 1 5-5Z',fill:true,width:0,opacity:1},...icons['common/light'].strokes.map(s=>({...s,color:'#4B5563',transform:'translate(4.08 4.08) scale(.66)'}))]};
for(const n of nodes){n.icon=allIcons['script-node/'+n.id]?'script-node/'+n.id:n.icon;keep(n.icon);}
for(const item of [...categories,...behaviors,...expressions,...expressionCategories])keep(item.icon);
const sourceRoot=path.join(root,'dist');
for(const file of ['guides.js','behaviors.js','examples.js','app.js','index.html']){const body=fs.readFileSync(path.join(sourceRoot,file),'utf8');for(const m of body.matchAll(/["']([a-z][a-z0-9-]+\/[a-z0-9/-]+)["']/g))if(m[1]!=='font/woff2')keep(m[1]);}
for(const key of ['app-page/brand','common/search','common/chevron','common/arrow-right','common/close','common/check','common/menu','common/link','common/flow','common/object','common/calculator','common/sound','app-page/settings','theme/dark','theme/light','theme/rose','theme/gray','theme/midnight','instance/all','app-page/documentation'])keep(key);
// Website-only navigation glyphs, not replacements for engine artwork.
const navigation={
 'common/menu':[{d:'M4 6h16M4 12h16M4 18h16',width:2.1}],
 'common/chevron':[{d:'m9 5 7 7-7 7',width:2}],
 'common/arrow-right':[{d:'M4 12h15m-6-6 6 6-6 6',width:2.1}],
 'common/link':[{d:'m10 14 4-4M9 16l-2 2a3.5 3.5 0 0 1-5-5l4-4a3.5 3.5 0 0 1 5 0m2-1 2-2a3.5 3.5 0 0 1 5 5l-4 4a3.5 3.5 0 0 1-5 0',width:1.9}]
};
for(const [key,strokes] of Object.entries(navigation))if(!icons[key])icons[key]={viewport:24,color:'#9CA3B1',strokes:strokes.map(s=>({...s,fill:false,opacity:1}))};
const unresolved=[...new Set(missing)].filter(key=>!icons[key]);if(unresolved.length)throw Error('Ícones precisam de revisão: '+unresolved.join(', '));
const data={version:1,counts:{nodes:nodes.length,behaviors:behaviors.length,staticExpressions,dynamicExpressions:expressions.length-staticExpressions},nodes,categories,behaviors,expressions,expressionCategories};
function output(name,value){const target=path.resolve(sourceRoot,name);if(path.dirname(target)!==sourceRoot||!['reference.js','icons.js'].includes(name))throw Error('Saída fora do catálogo');fs.writeFileSync(target,value,'utf8');}
output('reference.js','// Metadados públicos do catálogo atual. Sem implementações da engine.\nwindow.CONTINUE_REFERENCE = '+JSON.stringify(data)+';\n');
output('icons.js','// Apenas vetores usados neste site. Sem fontes de ícones ou dependências externas.\nwindow.CONTINUE_ICONS = '+JSON.stringify(icons)+';\n');
console.log(JSON.stringify({nodes:nodes.length,behaviors:behaviors.length,staticExpressions,dynamicExpressions:expressions.length-staticExpressions,icons:Object.keys(icons).length}));
