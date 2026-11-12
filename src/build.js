const fs=require('fs');const nm='node_modules/';
let h=fs.readFileSync('src/app.html','utf8');
const rep={
 FONT_REGULAR:fs.readFileSync('fonts/THSarabunPSK-Regular.ttf').toString('base64'),
 FONT_BOLD:fs.readFileSync('fonts/THSarabunPSK-Bold.ttf').toString('base64'),
 LIB_DOCX:fs.readFileSync(nm+'docx/dist/index.iife.js','utf8'),
 LIB_JSPDF:fs.readFileSync(nm+'jspdf/dist/jspdf.umd.min.js','utf8'),
 LIB_H2C:fs.readFileSync(nm+'html2canvas/dist/html2canvas.min.js','utf8'),
};
for(const k in rep){ if(/<\/script/i.test(rep[k])) rep[k]=rep[k].replace(/<\/script/gi,'<\\/script'); h=h.split('{{'+k+'}}').join(rep[k]); }
fs.mkdirSync('out',{recursive:true});fs.writeFileSync('out/โปรแกรมการเงินโรงเรียน.html',h);console.log(h.length);
