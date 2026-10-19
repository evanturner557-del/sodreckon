(function(){var f=document.getElementById('calc'),o=document.getElementById('result');if(!f)return;
function run(){var v={};f.querySelectorAll('input[data-k]').forEach(function(i){var n=parseFloat(i.value);v[i.getAttribute('data-k')]=isNaN(n)?0:n;});
o.innerHTML=(function(v){var a=v.l*v.w;var rolls=Math.ceil(a*1.05/Math.max(v.roll,0.1));var soil=a*v.depth/1000;return 'Lawn area <strong>'+a.toFixed(1)+' m²</strong>. Order about <strong>'+rolls+' rolls</strong> of turf and <strong>'+soil.toFixed(2)+' m³</strong> of topsoil.';})(v);}
f.addEventListener('input',run);f.addEventListener('submit',function(ev){ev.preventDefault();run();});run();})();
