
const SECT=[
{id:"A",t:"Identitas dan lokasi",s:"Data dai dan tempat tugas",b:[{f:[
["tanggal","Tanggal kunjungan","date"],["petugas","Nama petugas Safari Dakwah","text"],
["nama","Nama dai","text"],["kontak","Nomor kontak","tel"],
["lokasi","Lokasi tugas / wilayah dakwah","text"],["masjid","Nama masjid / lembaga binaan","text"],
["lama","Lama bertugas","text","mis. 2 tahun"],["jml","Jumlah masjid / wilayah binaan","number"]]}]},
{id:"B",t:"Evaluasi dan perkembangan dai",s:"Kegiatan, capaian, kebutuhan, dan kendala dai",b:[
{h:"Kondisi dan aktivitas dakwah saat ini",f:[["kegiatan","Kegiatan rutin","area"],["kajian","Jumlah kajian / ceramah per bulan","number"],["jemaah","Jumlah jemaah / peserta binaan","number"],["pembinaan","Program pembinaan yang berjalan","area"]]},
{h:"Perkembangan dan capaian dakwah",f:[["pJemaah","Perkembangan jumlah jemaah","area"],["pBina","Perkembangan pembinaan masyarakat","area"],["pMasjid","Perkembangan masjid / lembaga binaan","area"],["pLain","Capaian dakwah lainnya","area"]]},
{h:"Kebutuhan dan dukungan untuk dai",f:[["kKapasitas","Pembinaan dan peningkatan kapasitas","area"],["kSarana","Sarana dan fasilitas dakwah","area"],["kOps","Dukungan operasional","area"],["kLain","Kebutuhan lainnya","area"]]},
{h:"Kendala yang dihadapi dai",f:[["kendalaDai","Pilih semua yang sesuai","chk",["Keterbatasan sumber daya manusia","Keterbatasan dana operasional","Sarana dan prasarana","Tantangan sosial dan budaya masyarakat","Kurangnya dukungan lingkungan","Kendala transportasi dan akses wilayah"]]]}]},
{id:"C",t:"Kondisi dan perkembangan masyarakat",s:"Gambaran masyarakat di wilayah binaan",b:[
{h:"Kondisi masyarakat",f:[["penduduk","Jumlah penduduk / jemaah","text"],["agama","Kondisi keagamaan dan pemahaman Islam","area"],["pendidikan","Kondisi pendidikan","area"],["sosek","Kondisi sosial dan ekonomi","area"],["kelompok","Kelompok yang membutuhkan pembinaan","area"]]},
{h:"Perkembangan masyarakat",f:[["antusias","Antusiasme mengikuti kegiatan dakwah","area"],["partisipasi","Partisipasi dalam kegiatan masjid","area"],["quran","Perkembangan pendidikan Al-Qur’an","area"],["pemuda","Keterlibatan pemuda dan kaum perempuan","area"],["perubahan","Perubahan positif yang terlihat","area"]]},
{h:"Permasalahan dan kendala masyarakat",f:[["masalahMasy","Pilih semua yang sesuai","chk",["Minimnya pemahaman agama","Rendahnya partisipasi dalam kegiatan dakwah","Keterbatasan akses pendidikan","Permasalahan ekonomi dan kesejahteraan","Kurangnya pembinaan generasi muda","Permasalahan keluarga dan sosial"]]]}]},
{id:"D",t:"Pemetaan peluang program",s:"Centang program yang berpeluang dikembangkan",b:[
{h:"Bidang dakwah",f:[["dDakwah","","chk",["Penempatan atau penambahan dai","Kajian dan ceramah rutin","Pembinaan anak-anak dan pemuda","Pembinaan keluarga dan kaum perempuan","Rumah Al-Qur’an","Pembinaan mualaf","Pelatihan dan peningkatan kapasitas dai","Penyediaan Al-Qur’an dan buku dakwah","Dakwah digital dan media informasi"]]]},
{h:"Bidang pendidikan",f:[["dDidik","","chk",["Pendirian atau pengembangan lembaga pendidikan","Taman Pendidikan Al-Qur’an","Beasiswa pendidikan","Pembinaan guru dan tenaga pendidik","Pendidikan anak yatim dan dhuafa","Pelatihan keterampilan masyarakat","Sarana dan prasarana pendidikan"]]]},
{h:"Bidang sosial dan kemanusiaan",f:[["dSosial","","chk",["Bantuan masyarakat miskin dan dhuafa","Santunan anak yatim","Bantuan pangan dan kebutuhan pokok","Bantuan kesehatan","Pembangunan sumur dan akses air bersih","Bantuan bencana kemanusiaan","Pemberdayaan ekonomi masyarakat","Pembangunan atau renovasi masjid"]]]}]},
{id:"E",t:"Peluang dan kemitraan",s:"Tokoh, lembaga, dan dukungan setempat",b:[{f:[["tokoh","Potensi tokoh masyarakat dan mitra lokal","area"],["mitra","Masjid, sekolah, pesantren, atau lembaga calon mitra","area"],["kerjasama","Bentuk kerja sama yang memungkinkan","area"],["prioritasMasy","Program prioritas yang dibutuhkan masyarakat","area"],["dukungan","Dukungan / kontribusi pihak setempat","area"]]}]},
{id:"F",t:"Penilaian dan prioritas",s:"Penilaian petugas terhadap tindak lanjut",b:[{f:[
["urgensi","Tingkat kebutuhan program","rad",["Sangat mendesak","Mendesak","Jangka panjang"]],
["manfaat","Potensi manfaat","rad",["Tinggi","Sedang","Rendah"]],
["kesiapan","Kesiapan masyarakat dan mitra","rad",["Siap","Perlu pendampingan","Belum siap"]],
["bidang","Bidang prioritas","chk",["Dakwah","Pendidikan","Sosial dan kemanusiaan","Sarana dan prasarana"]],
["rekom","Rekomendasi petugas","area"]]}]},
{id:"G",t:"Rencana tindak lanjut",s:"Langkah setelah kunjungan",b:[{f:[["program","Program yang direkomendasikan","area"],["langkah","Langkah tindak lanjut","area"],["pj","Pihak yang bertanggung jawab","text"],["mitraLibat","Mitra yang perlu dilibatkan","text"],["target","Target waktu pelaksanaan","text"],["dokumen","Dokumen / data pendukung","text"]]}]},
{id:"H",t:"Catatan dan kesimpulan",s:"Ringkasan akhir kunjungan",b:[{f:[["catatan","Catatan dan kesimpulan kunjungan","area"],["tempat","Tempat penandatanganan","text"]]}]}
];
const $=s=>document.querySelector(s);
const esc=s=>String(s==null?"":s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const KEY="arrisalah-safari-v1";let mem=[];
const load=()=>{try{return JSON.parse(localStorage.getItem(KEY)||"[]")}catch(e){return mem}};
const persist=()=>{mem=recs;try{localStorage.setItem(KEY,JSON.stringify(recs))}catch(e){toast("Penyimpanan peramban tidak tersedia")}};
let recs=load(),cur=null,step=0,q="";
const today=()=>new Date().toISOString().slice(0,10);
const fmt=d=>{if(!d)return"–";const[y,m,t]=d.split("-");return t+"/"+m+"/"+y};
function toast(m){const t=document.createElement("div");t.className="toast";t.textContent=m;document.body.appendChild(t);setTimeout(()=>t.remove(),2200)}

function fld(f,d){const[k,l,t,o]=f;let h="";
 if(t==="chk"){h=`<div class="fld full">${l?`<label>${l}</label>`:""}<div class="chips">${o.map(x=>`<label class="chip"><input type="checkbox" data-c="${k}" value="${esc(x)}" ${(d[k]||[]).includes(x)?"checked":""}><span>${x}</span></label>`).join("")}</div><input class="lain" data-k="${k}Lain" placeholder="Lainnya (sebutkan jika ada)" value="${esc(d[k+"Lain"])}"></div>`}
 else if(t==="rad"){h=`<div class="fld full rads"><label>${l}</label><div class="chips">${o.map(x=>`<label class="chip"><input type="radio" name="${k}" data-r="${k}" value="${esc(x)}" ${d[k]===x?"checked":""}><span>${x}</span></label>`).join("")}</div></div>`}
 else if(t==="area"){h=`<div class="fld full"><label>${l}</label><textarea data-k="${k}" rows="2">${esc(d[k])}</textarea></div>`}
 else{h=`<div class="fld"><label>${l}</label><input type="${t}" ${t==="number"?'inputmode="numeric" min="0"':""} data-k="${k}" placeholder="${esc(o||"")}" value="${esc(d[k])}"></div>`}
 return h}

function sections(){return SECT}
function urg(r){return r.urgensi==="Sangat mendesak"?"u1":r.urgensi==="Mendesak"?"u2":""}

function viewList(){
 cur=null;setNav('home');const n=recs.length,dai=new Set(recs.map(r=>(r.nama||"").trim().toLowerCase()).filter(Boolean)).size,
 hot=recs.filter(r=>r.urgensi==="Sangat mendesak").length,loc=new Set(recs.map(r=>(r.lokasi||"").trim().toLowerCase()).filter(Boolean)).size;
 const list=recs.filter(r=>(r.nama+" "+r.lokasi+" "+r.masjid).toLowerCase().includes(q.toLowerCase())).sort((a,b)=>(b.tanggal||"").localeCompare(a.tanggal||""));
 $("#app").innerHTML=`<div class="hero"><img src="icon-192.png" alt=""><div><h2>Assalamu’alaikum, selamat bertugas</h2><p>Catat setiap kunjungan roadshow dai di sini. Data tersimpan otomatis di perangkat ini.</p></div></div><div class="stats"><div class="stat"><b>${n}</b><span>Kunjungan tercatat</span></div><div class="stat"><b>${dai}</b><span>Dai dikunjungi</span></div><div class="stat"><b>${loc}</b><span>Wilayah</span></div><div class="stat warn"><b>${hot}</b><span>Sangat mendesak</span></div></div>
 <div class="bar"><input id="q" type="search" placeholder="Cari nama dai, lokasi, atau masjid…" value="${esc(q)}"><button class="ghost" data-a="csv">Ekspor Excel (CSV)</button><button class="ghost" data-a="json">Cadangan data</button><button class="ghost" data-a="imp">Pulihkan data</button></div>
 ${list.length?list.map(r=>`<div class="rec ${urg(r)}"><h3>${esc(r.nama||"(Tanpa nama)")}</h3><p>${esc(r.masjid||"–")} · ${esc(r.lokasi||"–")} · ${fmt(r.tanggal)}</p>
 <div class="badges">${r.urgensi?`<span class="badge ${r.urgensi==="Sangat mendesak"?"r":r.urgensi==="Mendesak"?"g":"b"}">${r.urgensi}</span>`:""}${r.manfaat?`<span class="badge">Manfaat ${r.manfaat.toLowerCase()}</span>`:""}${r.kesiapan?`<span class="badge b">${r.kesiapan}</span>`:""}${(r.bidang||[]).map(b=>`<span class="badge g">${b}</span>`).join("")}</div>
 <div class="acts"><button data-a="view" data-id="${r.id}">Lihat</button><button class="ghost" data-a="edit" data-id="${r.id}">Ubah</button><button class="danger" data-a="del" data-id="${r.id}">Hapus</button></div></div>`).join(""):
 `<div class="empty"><div class="big">📋</div><p><b>${n?"Tidak ada hasil":"Belum ada kunjungan"}</b></p><p>${n?"Coba kata kunci lain.":"Tekan “+ Kunjungan baru” untuk mencatat roadshow pertama."}</p></div>`}`;
 $("#q").oninput=e=>{q=e.target.value;const p=e.target.selectionStart;viewList();const i=$("#q");i.focus();i.setSelectionRange(p,p)}}

function viewForm(){setNav('');
 const S=SECT[step],pct=Math.round((step+1)/SECT.length*100);
 $("#app").innerHTML=`<div class="steps">${SECT.map((s,i)=>`<button class="${i===step?"on":i<step?"done":""}" data-a="go" data-i="${i}" aria-label="Bagian ${s.id}: ${s.t}">${s.id}</button>`).join("")}</div><div class="prog"><i style="width:${pct}%"></i></div>
 <section class="sec"><h2>${S.id}. ${S.t}</h2><p class="sub">${S.s} · Bagian ${step+1} dari ${SECT.length}</p>
 ${S.b.map(b=>`<div class="blk">${b.h?`<h4>${b.h}</h4>`:""}<div class="grid">${b.f.map(f=>fld(f,cur)).join("")}</div></div>`).join("")}</section>
 <div class="nav"><div>${step>0?`<button class="ghost" data-a="prev">Kembali</button>`:""}<button class="ghost" data-a="save">Simpan</button>${step<SECT.length-1?`<button class="sp" data-a="next">Lanjut</button>`:`<button class="sp" data-a="finish">Simpan selesai</button>`}</div></div>`;
 window.scrollTo(0,0)}

function viewDetail(r){setNav('');
 $("#app").innerHTML=`<div class="acts" style="margin-bottom:12px"><button class="ghost" data-a="list">Kembali</button><button data-a="print">Cetak / simpan PDF</button><button class="ghost" data-a="edit" data-id="${r.id}">Ubah</button></div>
 <section class="sec det"><img class="plogo" src="logo-horizontal.png" alt=""><h2 style="margin-top:0;font-size:22px;color:var(--ink)">Laporan kunjungan: ${esc(r.nama||"–")}</h2>
 ${SECT.map(S=>{const rows=S.b.map(b=>b.f.map(f=>{const v=r[f[0]],lain=r[f[0]+"Lain"];let s=Array.isArray(v)?v.join(", "):v;if(lain)s=(s?s+", ":"")+lain;return s?`<dt>${f[1]||b.h}</dt><dd>${esc(s)}</dd>`:""}).join("")).join("");return rows?`<h2>${S.id}. ${S.t}</h2><dl>${rows}</dl>`:""}).join("")}
 <div class="sig"><p>${esc(r.tempat||"")}, ${fmt(r.tanggal)}</p><p>Petugas Safari Dakwah,</p><br><br><p>( ${esc(r.petugas||"..............................")} )</p></div></section>`;window.scrollTo(0,0)}

function save(done){
 if(!(cur.nama||"").trim()||!(cur.lokasi||"").trim()){step=0;viewForm();toast("Isi nama dai dan lokasi dulu");return false}
 const i=recs.findIndex(r=>r.id===cur.id);i<0?recs.push(cur):recs[i]=cur;persist();
 if(done){toast("Tersimpan");viewList()}else toast("Tersimpan");return true}

function csv(){
 const F=SECT.flatMap(S=>S.b.flatMap(b=>b.f));const c=v=>'"'+String(Array.isArray(v)?v.join("; "):v==null?"":v).replace(/"/g,'""')+'"';
 const rows=[F.map(f=>c(f[1]||f[0])).join(",")].concat(recs.map(r=>F.map(f=>c((Array.isArray(r[f[0]])?r[f[0]].concat(r[f[0]+"Lain"]||[]):r[f[0]])||"")).join(",")));
 dl("\ufeff"+rows.join("\n"),"text/csv","kunjungan-safari-dakwah.csv")}
function dl(t,m,n){const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([t],{type:m+";charset=utf-8"}));a.download=n;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),2000)}

function startNew(){cur={id:Date.now().toString(36),tanggal:today()};step=0;viewForm()}
$("#newBtn").onclick=startNew;
document.addEventListener("input",e=>{const t=e.target;if(cur&&t.dataset.k)cur[t.dataset.k]=t.value});
document.addEventListener("change",e=>{const t=e.target;if(!cur)return;
 if(t.dataset.c){const k=t.dataset.c,a=cur[k]||[];cur[k]=t.checked?a.concat(t.value):a.filter(x=>x!==t.value)}
 if(t.dataset.r)cur[t.dataset.r]=t.value});
document.addEventListener("click",e=>{const b=e.target.closest("button[data-a]");if(!b)return;const a=b.dataset.a,id=b.dataset.id,r=recs.find(x=>x.id===id);
 if(a==="view")viewDetail(r);
 else if(a==="edit"){cur=JSON.parse(JSON.stringify(r));step=0;viewForm()}
 else if(a==="del"){if(confirm("Hapus kunjungan ini? Data tidak bisa dikembalikan.")){recs=recs.filter(x=>x.id!==id);persist();viewList()}}
 else if(a==="go"){step=+b.dataset.i;viewForm()}
 else if(a==="next"){step++;viewForm()}
 else if(a==="prev"){step--;viewForm()}
 else if(a==="save")save(false);
 else if(a==="finish")save(true);
 else if(a==="list")viewList();
 else if(a==="tab"){b.dataset.t==="rekap"?viewRekap():viewList()}
 else if(a==="imp")$("#imp").click();
 else if(a==="csvr")recs.length?csvRekap():toast("Belum ada data");
 else if(a==="print")window.print();
 else if(a==="csv")recs.length?csv():toast("Belum ada data");
 else if(a==="json")recs.length?dl(JSON.stringify(recs,null,1),"application/json","cadangan-safari-dakwah.json"):toast("Belum ada data")});

const CL={"Sangat mendesak":"r","Mendesak":"g","Jangka panjang":"b","Siap":"","Perlu pendampingan":"g","Belum siap":"r","Tinggi":"","Sedang":"g","Rendah":"b"};
const bg=v=>v?`<span class="badge ${CL[v]||""}">${esc(v)}</span>`:"–";
const byDate=()=>recs.slice().sort((a,b)=>(a.tanggal||"").localeCompare(b.tanggal||""));
const sum=k=>recs.reduce((s,r)=>s+(+r[k]||0),0);
function setNav(n){document.querySelectorAll(".tabs [data-t]").forEach(b=>b.classList.toggle("on",b.dataset.t===n))}
function tally(keys,fixed){const m={};recs.forEach(r=>[].concat(keys).forEach(k=>[].concat(r[k]||[]).forEach(x=>{m[x]=(m[x]||0)+1})));return fixed?fixed.map(x=>[x,m[x]||0]):Object.entries(m).sort((a,b)=>b[1]-a[1])}
function bars(t,rows,cls){const n=recs.length||1;return `<div class="card"><h3>${t}</h3>${rows.length?rows.map(([l,v],i)=>`<div class="bar-row ${cls?cls[i]||"":""}"><span>${esc(l)}</span><div class="tr"><i style="width:${Math.round(v/n*100)}%"></i></div><b>${v}</b></div>`).join(""):`<p style="color:var(--mut);margin:0">Belum ada data.</p>`}</div>`}
function viewRekap(){cur=null;setNav("rekap");const rows=byDate();
 const top=(k,n)=>tally(k).slice(0,n);
 $("#app").innerHTML=`<img class="plogo" src="logo-horizontal.png" alt=""><div class="acts" style="margin-bottom:12px"><button data-a="print">Cetak rekap</button><button class="ghost" data-a="csvr">Ekspor rekap (CSV)</button></div>
 <div class="stats"><div class="stat"><b>${recs.length}</b><span>Kunjungan</span></div><div class="stat"><b>${sum("jemaah").toLocaleString("id-ID")}</b><span>Jemaah binaan</span></div><div class="stat"><b>${sum("kajian").toLocaleString("id-ID")}</b><span>Kajian per bulan</span></div><div class="stat warn"><b>${recs.filter(r=>r.urgensi==="Sangat mendesak").length}</b><span>Sangat mendesak</span></div></div>
 <div class="cols">${bars("Tingkat kebutuhan program",tally("urgensi",["Sangat mendesak","Mendesak","Jangka panjang"]),["r","g","b"])}${bars("Kesiapan masyarakat dan mitra",tally("kesiapan",["Siap","Perlu pendampingan","Belum siap"]),["","g","r"])}</div>
 <div class="cols">${bars("Bidang prioritas",tally("bidang",["Dakwah","Pendidikan","Sosial dan kemanusiaan","Sarana dan prasarana"]))}${bars("Potensi manfaat",tally("manfaat",["Tinggi","Sedang","Rendah"]),["","g","b"])}</div>
 ${bars("Peluang program paling banyak dipilih",top(["dDakwah","dDidik","dSosial"],8),[])}
 <div class="cols">${bars("Kendala dai terbanyak",top("kendalaDai",5),Array(5).fill("g"))}${bars("Permasalahan masyarakat terbanyak",top("masalahMasy",5),Array(5).fill("r"))}</div>
 <div class="card"><h3>Tabel rekap kunjungan</h3>${rows.length?`<div class="tw"><table><thead><tr><th>No</th><th>Tanggal</th><th>Dai</th><th>Masjid / lokasi</th><th class="num">Jemaah</th><th class="num nop">Kajian/bln</th><th>Kebutuhan</th><th>Manfaat</th><th>Kesiapan</th><th>Bidang prioritas</th><th class="nop">Program direkomendasikan</th></tr></thead><tbody>${rows.map((r,i)=>`<tr><td>${i+1}</td><td>${fmt(r.tanggal)}</td><td><b>${esc(r.nama)}</b><small>${esc(r.kontak)}</small></td><td>${esc(r.masjid||"–")}<small>${esc(r.lokasi)}</small></td><td class="num">${esc(r.jemaah||"–")}</td><td class="num nop">${esc(r.kajian||"–")}</td><td>${bg(r.urgensi)}</td><td>${bg(r.manfaat)}</td><td>${bg(r.kesiapan)}</td><td>${esc((r.bidang||[]).join(", ")||"–")}</td><td class="nop">${esc(r.program||"–")}</td></tr>`).join("")}</tbody></table></div>`:`<div class="empty"><div class="big">📊</div><p>Rekap akan muncul setelah ada kunjungan yang disimpan.</p></div>`}</div>`;window.scrollTo(0,0)}
function csvRekap(){const c=v=>'"'+String(v==null?"":v).replace(/"/g,'""')+'"';
 const H=["No","Tanggal","Nama dai","Kontak","Masjid/lembaga","Lokasi","Jemaah binaan","Kajian per bulan","Tingkat kebutuhan","Potensi manfaat","Kesiapan","Bidang prioritas","Program direkomendasikan","Petugas"];
 const R=byDate().map((r,i)=>[i+1,fmt(r.tanggal),r.nama,r.kontak,r.masjid,r.lokasi,r.jemaah,r.kajian,r.urgensi,r.manfaat,r.kesiapan,(r.bidang||[]).join("; "),r.program,r.petugas]);
 dl("\ufeff"+[H].concat(R).map(x=>x.map(c).join(",")).join("\n"),"text/csv","rekap-safari-dakwah.csv")}
$("#imp").onchange=e=>{const f=e.target.files[0];if(!f)return;f.text().then(t=>{try{const a=JSON.parse(t);if(!Array.isArray(a))throw 0;const ids=new Set(recs.map(r=>r.id));let n=0;a.forEach(r=>{if(r&&r.id&&!ids.has(r.id)){recs.push(r);n++}});persist();viewList();toast(n+" kunjungan ditambahkan")}catch(x){toast("File cadangan tidak valid")}});e.target.value=""};
if("serviceWorker" in navigator)addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));
viewList();
