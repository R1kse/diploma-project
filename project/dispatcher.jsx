/* global React, Icon, I, Plate, MiniMap */
// Dispatcher web app

const WebWindow = ({ children, w = 1280, h = 820, label = 'paidaly.kz/dispatcher' }) => (
  <div style={{
    width: w, height: h, borderRadius: 16, overflow: 'hidden',
    boxShadow: '0 40px 80px -30px rgba(27,58,45,0.25), 0 0 0 1px rgba(27,58,45,0.08)',
    background:'#F7FAF5', fontFamily:'Nunito, sans-serif', color:'#1B3A2D',
  }}>
    {/* chrome */}
    <div style={{ height: 36, background:'#E3ECE1', display:'flex', alignItems:'center', padding:'0 14px', gap: 8 }}>
      <div style={{ display:'flex', gap: 6 }}>
        {['#E07070','#F9C74F','#8BC34A'].map((c,i)=>(
          <div key={i} style={{ width: 12, height: 12, borderRadius:'50%', background: c }}/>
        ))}
      </div>
      <div style={{ flex: 1, textAlign:'center', fontSize: 12, color:'#6B8F71', fontWeight: 700 }}>{label}</div>
    </div>
    <div style={{ display:'flex', height:'calc(100% - 36px)' }}>{children}</div>
  </div>
);

const Sidebar = ({ active }) => {
  const items = [
    { k:'dash', ico:I.home, lbl:'Дашборд' },
    { k:'orders', ico:I.list, lbl:'Заказы', badge: 24 },
    { k:'couriers', ico:I.bike, lbl:'Курьеры' },
    { k:'menu', ico:I.grid, lbl:'Меню' },
    { k:'clients', ico:I.user, lbl:'Клиенты' },
    { k:'chart', ico:I.chart, lbl:'Аналитика' },
  ];
  return (
    <div style={{ width: 236, background:'#1B3A2D', color:'#E8F3EC', padding:'20px 14px', display:'flex', flexDirection:'column', gap: 6 }}>
      <div style={{ display:'flex', alignItems:'center', gap: 10, padding:'4px 8px 14px' }}>
        <div style={{ width: 32, height: 32, borderRadius: 10, background:'linear-gradient(135deg,#3A9E5F,#8BC34A)', display:'grid', placeItems:'center' }}>
          <Icon d={I.leaf} size={18} stroke="#fff" sw={2.2}/>
        </div>
        <div className="h-title" style={{ fontWeight: 800, fontSize: 17 }}>paidaly</div>
      </div>
      <div style={{ fontSize: 10, color:'rgba(232,243,236,0.45)', fontWeight: 800, letterSpacing: 0.8, padding:'8px 10px 4px' }}>НАВИГАЦИЯ</div>
      {items.map(it => (
        <div key={it.k} style={{
          display:'flex', alignItems:'center', gap: 12, padding:'10px 12px', borderRadius: 10, cursor:'pointer',
          background: active === it.k ? 'rgba(139,195,74,0.18)' : 'transparent',
          color: active === it.k ? '#8BC34A' : '#E8F3EC',
          fontWeight: active === it.k ? 800 : 600, fontSize: 13,
        }}>
          <Icon d={it.ico} size={18}/>
          <span style={{ flex: 1 }}>{it.lbl}</span>
          {it.badge && <span style={{ padding:'1px 8px', borderRadius: 999, background:'#F9C74F', color:'#1B3A2D', fontSize: 10, fontWeight: 800 }}>{it.badge}</span>}
        </div>
      ))}
      <div style={{ marginTop:'auto', padding: 12, background:'rgba(255,255,255,0.04)', borderRadius: 12, display:'flex', gap: 10, alignItems:'center' }}>
        <div style={{ width: 36, height: 36, borderRadius:'50%', background:'linear-gradient(135deg,#8BC34A,#3A9E5F)', display:'grid', placeItems:'center', fontWeight:800, fontSize: 13 }}>ОК</div>
        <div style={{ flex: 1, fontSize: 12 }}>
          <div style={{ fontWeight: 800 }}>Олжас К.</div>
          <div style={{ color:'rgba(232,243,236,0.6)', fontSize: 10 }}>Старший диспетчер</div>
        </div>
      </div>
    </div>
  );
};

const Topbar = ({ title, subtitle }) => (
  <div style={{ padding:'18px 24px', display:'flex', justifyContent:'space-between', alignItems:'center', background:'#F7FAF5', borderBottom:'1px solid #E3ECE1' }}>
    <div>
      <h1 className="h-title" style={{ fontSize: 24, margin: 0, fontWeight: 700 }}>{title}</h1>
      <div style={{ fontSize: 12, color:'#6B8F71', marginTop: 2 }}>{subtitle}</div>
    </div>
    <div style={{ display:'flex', gap: 10, alignItems:'center' }}>
      <div style={{ display:'flex', alignItems:'center', gap: 8, background:'#fff', border:'1px solid #E3ECE1', borderRadius: 10, padding:'8px 12px', width: 280 }}>
        <Icon d={I.search} size={14} stroke="#6B8F71"/>
        <span style={{ color:'#6B8F71', fontSize: 13 }}>Поиск по заказам, клиентам…</span>
      </div>
      <div style={{ width: 38, height: 38, borderRadius: 10, background:'#fff', border:'1px solid #E3ECE1', display:'grid', placeItems:'center', position:'relative' }}>
        <Icon d={I.bell} size={16}/>
        <div style={{ position:'absolute', top: 8, right: 10, width: 7, height: 7, borderRadius:'50%', background:'#E07070', border:'2px solid #fff' }}/>
      </div>
      <button className="btn-primary" style={{ padding:'9px 14px', fontSize: 13 }}>+ Новый заказ</button>
    </div>
  </div>
);

// ─── DASHBOARD ───
const DispatcherDashboard = () => (
  <WebWindow>
    <Sidebar active="dash"/>
    <div style={{ flex: 1, overflow:'auto' }}>
      <Topbar title="Дашборд" subtitle="Обзор за сегодня · 23 апреля 2026"/>
      <div style={{ padding: 24 }}>
        {/* KPIs */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap: 14 }}>
          {[
            { l:'Заказов', v:'147', d:'↑ 12% vs вчера', c:'#3A9E5F', sp:[10,20,15,28,22,35,40] },
            { l:'Выручка', v:'582 400₸', d:'↑ 8%', c:'#8BC34A', sp:[40,30,50,45,55,60,70] },
            { l:'Ср. чек', v:'3 960₸', d:'↑ 2%', c:'#4ABDE8', sp:[20,25,22,28,30,26,30] },
            { l:'Ср. время', v:'32 мин', d:'↓ −3 мин', c:'#F9C74F', sp:[40,35,30,32,28,30,27] },
          ].map(k => (
            <div key={k.l} style={{ background:'#fff', borderRadius: 16, padding: 18, boxShadow:'0 4px 14px -10px rgba(27,58,45,0.1)' }}>
              <div style={{ fontSize: 11, color:'#6B8F71', fontWeight: 800, letterSpacing: 0.5 }}>{k.l.toUpperCase()}</div>
              <div className="h-title" style={{ fontSize: 26, fontWeight: 700, marginTop: 8 }}>{k.v}</div>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginTop: 10 }}>
                <span style={{ fontSize: 11, color: k.c, fontWeight: 800 }}>{k.d}</span>
                <svg width="80" height="24" viewBox="0 0 80 24">
                  <polyline fill="none" stroke={k.c} strokeWidth="2" points={k.sp.map((v,i)=>`${i*13},${24-v*0.3}`).join(' ')} strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* two-col */}
        <div style={{ display:'grid', gridTemplateColumns:'1.4fr 1fr', gap: 14, marginTop: 14 }}>
          {/* orders flow chart */}
          <div style={{ background:'#fff', borderRadius: 16, padding: 20 }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
              <div>
                <h3 className="h-title" style={{ fontSize: 16, margin: 0, fontWeight: 700 }}>Поток заказов</h3>
                <div style={{ fontSize: 11, color:'#6B8F71', marginTop: 2 }}>по часам · сегодня</div>
              </div>
              <div style={{ display:'flex', gap: 6 }}>
                {['День','Неделя','Месяц'].map((t,i) => (
                  <span key={t} style={{ padding:'5px 10px', borderRadius: 8, fontSize: 11, fontWeight: 800, background: i===0?'#EEF6EC':'transparent', color: i===0?'#3A9E5F':'#6B8F71' }}>{t}</span>
                ))}
              </div>
            </div>
            <div style={{ marginTop: 18, display:'flex', alignItems:'flex-end', gap: 8, height: 180 }}>
              {[18,22,15,28,35,48,60,70,85,65,55,42,30,25,40,55,75,90,68,45,32,20,12,8].map((h,i) => (
                <div key={i} style={{ flex: 1, display:'flex', flexDirection:'column', alignItems:'center', gap: 4 }}>
                  <div style={{ width:'100%', height: `${h}%`, background: i === 17 ? 'linear-gradient(180deg,#3A9E5F,#8BC34A)' : 'rgba(139,195,74,0.35)', borderRadius:'4px 4px 0 0' }}/>
                </div>
              ))}
            </div>
            <div style={{ display:'flex', justifyContent:'space-between', marginTop: 8, fontSize: 10, color:'#6B8F71' }}>
              <span>0</span><span>4</span><span>8</span><span>12</span><span>16</span><span>20</span><span>24</span>
            </div>
          </div>

          {/* statuses donut */}
          <div style={{ background:'#fff', borderRadius: 16, padding: 20 }}>
            <h3 className="h-title" style={{ fontSize: 16, margin: 0, fontWeight: 700 }}>Статусы заказов</h3>
            <div style={{ fontSize: 11, color:'#6B8F71', marginTop: 2 }}>активных: 42</div>
            <div style={{ display:'flex', alignItems:'center', gap: 16, marginTop: 14 }}>
              <svg width="140" height="140" viewBox="0 0 40 40">
                <circle cx="20" cy="20" r="16" fill="none" stroke="#EEF6EC" strokeWidth="6"/>
                <circle cx="20" cy="20" r="16" fill="none" stroke="#F9C74F" strokeWidth="6" strokeDasharray="30 100" strokeDashoffset="0" transform="rotate(-90 20 20)"/>
                <circle cx="20" cy="20" r="16" fill="none" stroke="#4ABDE8" strokeWidth="6" strokeDasharray="40 100" strokeDashoffset="-30" transform="rotate(-90 20 20)"/>
                <circle cx="20" cy="20" r="16" fill="none" stroke="#3A9E5F" strokeWidth="6" strokeDasharray="25 100" strokeDashoffset="-70" transform="rotate(-90 20 20)"/>
                <text x="20" y="20" textAnchor="middle" fontSize="7" fontWeight="800" fill="#1B3A2D">42</text>
                <text x="20" y="26" textAnchor="middle" fontSize="3" fill="#6B8F71">заказов</text>
              </svg>
              <div style={{ flex: 1 }}>
                {[
                  { l:'Готовится', v: 13, c:'#F9C74F' },
                  { l:'В пути', v: 17, c:'#4ABDE8' },
                  { l:'Доставлен', v: 11, c:'#3A9E5F' },
                  { l:'Отменён', v: 1, c:'#E07070' },
                ].map(s => (
                  <div key={s.l} style={{ display:'flex', alignItems:'center', gap: 10, marginBottom: 8, fontSize: 12 }}>
                    <div style={{ width: 10, height: 10, borderRadius:'50%', background: s.c }}/>
                    <span style={{ flex: 1, fontWeight: 700, color:'#1B3A2D' }}>{s.l}</span>
                    <span style={{ fontWeight: 800 }}>{s.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* two-col 2 */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 14, marginTop: 14 }}>
          <div style={{ background:'#fff', borderRadius: 16, padding: 20 }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
              <h3 className="h-title" style={{ fontSize: 16, margin: 0, fontWeight: 700 }}>Топ блюд недели</h3>
              <span style={{ fontSize: 11, color:'#3A9E5F', fontWeight: 800 }}>Подробнее →</span>
            </div>
            <div style={{ marginTop: 14 }}>
              {[
                { n:'Поке с лососем', v:'bowl', o:128, r:'+18%' },
                { n:'Фитнес-салат', v:'salad', o:112, r:'+6%' },
                { n:'Авокадо-тост', v:'toast', o:94, r:'−2%' },
                { n:'Ягодный смузи', v:'smoothie', o:82, r:'+11%' },
              ].map((d,i) => (
                <div key={i} style={{ display:'flex', alignItems:'center', gap: 12, padding:'8px 0', borderBottom: i<3?'1px solid #EEF6EC':'none' }}>
                  <span style={{ fontSize: 11, color:'#6B8F71', fontWeight: 800, width: 16 }}>{i+1}</span>
                  <div style={{ width: 40, height: 40, borderRadius: 10, overflow:'hidden' }}>
                    <Plate variant={d.v} size="100%"/>
                  </div>
                  <div style={{ flex: 1, fontSize: 13, fontWeight: 700 }}>{d.n}</div>
                  <div style={{ fontSize: 12, fontWeight: 800 }}>{d.o}</div>
                  <div style={{ fontSize: 11, color: d.r.startsWith('+')?'#3A9E5F':'#E07070', fontWeight: 800, width: 40, textAlign:'right' }}>{d.r}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background:'#fff', borderRadius: 16, padding: 20 }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
              <h3 className="h-title" style={{ fontSize: 16, margin: 0, fontWeight: 700 }}>Курьеры на линии</h3>
              <span style={{ padding:'3px 9px', background:'rgba(139,195,74,0.15)', color:'#3A9E5F', borderRadius: 999, fontSize: 11, fontWeight: 800 }}>● 12 онлайн</span>
            </div>
            <div style={{ marginTop: 14 }}>
              {[
                { n:'Асхат Н.', orders: 6, rating: 4.9, st:'way' },
                { n:'Айгерим С.', orders: 4, rating: 4.8, st:'cook' },
                { n:'Тимур Б.', orders: 7, rating: 5.0, st:'way' },
                { n:'Ерлан М.', orders: 3, rating: 4.7, st:'done' },
              ].map((c, i) => (
                <div key={i} style={{ display:'flex', alignItems:'center', gap: 12, padding:'8px 0', borderBottom: i<3?'1px solid #EEF6EC':'none' }}>
                  <div style={{ width: 36, height: 36, borderRadius:'50%', background:'linear-gradient(135deg,#8BC34A,#3A9E5F)', color:'#fff', display:'grid', placeItems:'center', fontWeight: 800, fontSize: 12 }}>{c.n.split(' ').map(s=>s[0]).join('')}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 800, fontSize: 13 }}>{c.n}</div>
                    <div style={{ fontSize: 11, color:'#6B8F71' }}>{c.orders} заказа · ⭐ {c.rating}</div>
                  </div>
                  <span className={`pill-status s-${c.st}`} style={{ fontSize: 10 }}>{c.st==='way'?'В пути':c.st==='cook'?'Забирает':'Свободен'}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </WebWindow>
);

// ─── ORDERS TABLE ───
const DispatcherOrders = () => {
  const rows = [
    { id:4821, client:'Диана А.', items:3, addr:'Абая 150, кв. 24', courier:'Асхат Н.', st:'way', stl:'В пути', total:5010, time:'35 мин' },
    { id:4820, client:'Рустем К.', items:2, addr:'Сейфуллина 498', courier:'Айгерим С.', st:'cook', stl:'Готовится', total:2780, time:'12 мин' },
    { id:4819, client:'Алия М.', items:5, addr:'Жарокова 217', courier:'Тимур Б.', st:'way', stl:'В пути', total:7290, time:'40 мин' },
    { id:4818, client:'Дастан С.', items:1, addr:'Розыбакиева 119', courier:'—', st:'cook', stl:'Готовится', total:1190, time:'6 мин' },
    { id:4817, client:'Мадина О.', items:4, addr:'Наурызбай 87', courier:'Ерлан М.', st:'done', stl:'Доставлен', total:4600, time:'28 мин' },
    { id:4816, client:'Ильяс Т.', items:2, addr:'Толе Би 155', courier:'Нурлан Р.', st:'done', stl:'Доставлен', total:2890, time:'31 мин' },
    { id:4815, client:'Галия Н.', items:3, addr:'Достык 91', courier:'Асхат Н.', st:'cxl', stl:'Отменён', total:3400, time:'—' },
    { id:4814, client:'Сабина К.', items:2, addr:'Фурманова 45', courier:'Айгерим С.', st:'done', stl:'Доставлен', total:2190, time:'25 мин' },
  ];
  return (
    <WebWindow>
      <Sidebar active="orders"/>
      <div style={{ flex: 1, overflow:'auto' }}>
        <Topbar title="Заказы" subtitle="Все заказы · 147 сегодня · 42 активных"/>
        <div style={{ padding:'20px 24px' }}>
          {/* filter row */}
          <div style={{ display:'flex', gap: 8, marginBottom: 16, flexWrap:'wrap' }}>
            {[
              { l:'Все', v: 147, active: true },
              { l:'Новые', v: 4, c:'#F9C74F' },
              { l:'Готовятся', v: 13, c:'#F9C74F' },
              { l:'В пути', v: 17, c:'#4ABDE8' },
              { l:'Доставлены', v: 111, c:'#3A9E5F' },
              { l:'Отменены', v: 2, c:'#E07070' },
            ].map(f => (
              <div key={f.l} style={{
                padding:'8px 14px', borderRadius: 10, fontSize: 12, fontWeight: 800,
                background: f.active?'#1B3A2D':'#fff', color: f.active?'#fff':'#1B3A2D', border: f.active?'none':'1px solid #E3ECE1',
                display:'flex', alignItems:'center', gap: 6,
              }}>
                {f.l}
                <span style={{ padding:'1px 7px', borderRadius: 999, background: f.active?'rgba(255,255,255,0.15)':'#EEF6EC', fontSize: 10, color: f.active?'#fff':'#3A9E5F' }}>{f.v}</span>
              </div>
            ))}
            <div style={{ flex: 1 }}/>
            <div style={{ padding:'8px 14px', borderRadius: 10, background:'#fff', border:'1px solid #E3ECE1', fontSize: 12, fontWeight: 800, display:'flex', alignItems:'center', gap: 8 }}>
              <Icon d={I.filter} size={14}/> Фильтры
            </div>
          </div>

          {/* table */}
          <div style={{ background:'#fff', borderRadius: 14, overflow:'hidden', border:'1px solid #E3ECE1' }}>
            <div style={{ display:'grid', gridTemplateColumns:'80px 1fr 1.4fr 1fr 120px 90px 100px', padding:'12px 16px', background:'#F7FAF5', fontSize: 11, color:'#6B8F71', fontWeight: 800, letterSpacing: 0.5, textTransform:'uppercase', borderBottom:'1px solid #E3ECE1' }}>
              <span>№</span><span>Клиент</span><span>Адрес</span><span>Курьер</span><span>Статус</span><span>Время</span><span style={{ textAlign:'right' }}>Сумма</span>
            </div>
            {rows.map((r, i) => (
              <div key={r.id} style={{ display:'grid', gridTemplateColumns:'80px 1fr 1.4fr 1fr 120px 90px 100px', padding:'14px 16px', alignItems:'center', fontSize: 13, borderBottom: i<rows.length-1?'1px solid #EEF6EC':'none' }}>
                <span style={{ fontWeight: 800, color:'#3A9E5F' }}>#{r.id}</span>
                <div>
                  <div style={{ fontWeight: 700 }}>{r.client}</div>
                  <div style={{ fontSize: 11, color:'#6B8F71' }}>{r.items} поз.</div>
                </div>
                <span style={{ color:'#1B3A2D' }}>{r.addr}</span>
                <span style={{ color: r.courier === '—' ? '#E07070' : '#1B3A2D', fontWeight: r.courier==='—'?800:600 }}>{r.courier}</span>
                <span className={`pill-status s-${r.st}`} style={{ width:'fit-content' }}>{r.stl}</span>
                <span style={{ color:'#6B8F71', fontSize: 12 }}>{r.time}</span>
                <span style={{ textAlign:'right', fontWeight: 800 }}>{r.total.toLocaleString('ru')}₸</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </WebWindow>
  );
};

// ─── COURIERS MAP ───
const DispatcherMap = () => (
  <WebWindow>
    <Sidebar active="couriers"/>
    <div style={{ flex: 1, display:'flex', flexDirection:'column' }}>
      <Topbar title="Карта курьеров" subtitle="12 на линии · 4 свободны · 8 на заказе"/>
      <div style={{ flex: 1, display:'flex', padding: 16, gap: 14, overflow:'hidden' }}>
        {/* map */}
        <div style={{ flex: 1, borderRadius: 16, overflow:'hidden', position:'relative', background:'#EAF2DF' }}>
          <MiniMap h="100%"/>
          {/* extra courier pins */}
          {[
            { x: 28, y: 32, c:'#3A9E5F', label:'АН' },
            { x: 65, y: 45, c:'#8BC34A', label:'АС' },
            { x: 48, y: 18, c:'#3A9E5F', label:'ТБ' },
            { x: 18, y: 62, c:'#F9C74F', label:'ЕМ' },
            { x: 78, y: 28, c:'#8BC34A', label:'НР' },
            { x: 38, y: 72, c:'#3A9E5F', label:'СД' },
          ].map((p, i) => (
            <div key={i} style={{ position:'absolute', left:`${p.x}%`, top:`${p.y}%`, transform:'translate(-50%,-100%)' }}>
              <div style={{ padding:'5px 9px', borderRadius: 999, background: p.c, color:'#fff', fontWeight: 800, fontSize: 11, boxShadow:'0 4px 10px -4px rgba(0,0,0,0.3)', whiteSpace:'nowrap' }}>🚴 {p.label}</div>
              <div style={{ width: 10, height: 10, background: p.c, transform:'rotate(45deg) translateX(-5px)', margin:'-5px auto 0' }}/>
            </div>
          ))}
          {/* legend */}
          <div style={{ position:'absolute', bottom: 14, left: 14, background:'#fff', borderRadius: 12, padding: 12, boxShadow:'0 8px 20px -12px rgba(0,0,0,0.2)' }}>
            <div style={{ fontSize: 11, fontWeight: 800, color:'#6B8F71', marginBottom: 8 }}>ЛЕГЕНДА</div>
            {[{c:'#3A9E5F',l:'В пути'},{c:'#8BC34A',l:'Свободен'},{c:'#F9C74F',l:'На точке'}].map(l => (
              <div key={l.l} style={{ display:'flex', gap: 8, alignItems:'center', marginBottom: 4, fontSize: 12 }}>
                <div style={{ width: 10, height: 10, borderRadius:'50%', background: l.c }}/>
                <span>{l.l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* courier list */}
        <div style={{ width: 320, background:'#fff', borderRadius: 16, padding: 16, overflow:'auto' }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom: 12 }}>
            <h3 className="h-title" style={{ fontSize: 15, margin: 0, fontWeight: 700 }}>Курьеры</h3>
            <span style={{ fontSize: 11, color:'#3A9E5F', fontWeight: 800 }}>⇅ Сортировать</span>
          </div>
          {[
            { n:'Асхат Н.', i:'АН', orders:6, dist:'3.2 км', st:'way', stl:'В пути', ord: '#4821' },
            { n:'Айгерим С.', i:'АС', orders:4, dist:'1.1 км', st:'cook', stl:'Забирает', ord: '#4820' },
            { n:'Тимур Б.', i:'ТБ', orders:7, dist:'—', st:'done', stl:'Свободен', ord: '' },
            { n:'Ерлан М.', i:'ЕМ', orders:3, dist:'2.4 км', st:'way', stl:'В пути', ord:'#4817' },
            { n:'Нурлан Р.', i:'НР', orders:5, dist:'—', st:'done', stl:'Свободен', ord:'' },
            { n:'Сабина Д.', i:'СД', orders:2, dist:'0.8 км', st:'way', stl:'В пути', ord:'#4819' },
          ].map((c,i,a) => (
            <div key={i} style={{ display:'flex', gap: 10, padding:'10px 0', borderBottom: i<a.length-1?'1px solid #EEF6EC':'none' }}>
              <div style={{ width: 36, height: 36, borderRadius:'50%', background:'linear-gradient(135deg,#8BC34A,#3A9E5F)', color:'#fff', display:'grid', placeItems:'center', fontWeight: 800, fontSize: 12, flexShrink: 0 }}>{c.i}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
                  <div style={{ fontWeight: 800, fontSize: 13 }}>{c.n}</div>
                  <span className={`pill-status s-${c.st}`} style={{ fontSize: 9 }}>{c.stl}</span>
                </div>
                <div style={{ fontSize: 11, color:'#6B8F71', marginTop: 3 }}>{c.orders} заказа сегодня · {c.dist}</div>
                {c.ord && <div style={{ fontSize: 11, color:'#3A9E5F', fontWeight: 800, marginTop: 3 }}>Активно: {c.ord}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </WebWindow>
);

// ─── ORDER DETAILS (drawer-style) ───
const DispatcherOrderDetail = () => (
  <WebWindow>
    <Sidebar active="orders"/>
    <div style={{ flex: 1, overflow:'auto', background:'#F7FAF5' }}>
      <Topbar title="Заказ #4821" subtitle="Создан 12:05 · Диана А. · +7 707 123 45 67"/>
      <div style={{ padding: 24, display:'grid', gridTemplateColumns:'1.4fr 1fr', gap: 20 }}>
        {/* left column */}
        <div>
          {/* status strip */}
          <div style={{ background:'#fff', borderRadius: 14, padding:'14px 18px', marginBottom: 16, display:'flex', justifyContent:'space-between', alignItems:'center' }}>
            <div>
              <div style={{ fontSize: 11, color:'#6B8F71', fontWeight: 800 }}>ТЕКУЩИЙ СТАТУС</div>
              <div style={{ display:'flex', alignItems:'center', gap: 10, marginTop: 6 }}>
                <span className="pill-status s-way">В пути</span>
                <span style={{ fontSize: 13, color:'#6B8F71' }}>· осталось ~12 мин</span>
              </div>
            </div>
            <div style={{ display:'flex', gap: 8 }}>
              <button className="btn-ghost" style={{ padding:'10px 14px', fontSize: 13 }}>Связаться</button>
              <button className="btn-primary" style={{ padding:'10px 16px', fontSize: 13 }}>Переназначить курьера</button>
            </div>
          </div>

          {/* timeline horizontal */}
          <div style={{ background:'#fff', borderRadius: 14, padding: 22, marginBottom: 16 }}>
            <h3 className="h-title" style={{ fontSize: 15, margin:'0 0 18px', fontWeight: 700 }}>Таймлайн</h3>
            <div style={{ display:'flex', alignItems:'center', position:'relative' }}>
              {[
                { t:'Принят', d:'12:05', on: true },
                { t:'Готовится', d:'12:12', on: true },
                { t:'Забран', d:'12:28', on: true },
                { t:'В пути', d:'12:32', cur: true },
                { t:'Доставлен', d:'~12:45', on: false },
              ].map((s, i, a) => (
                <Fragment key={i}>
                  <div style={{ display:'flex', flexDirection:'column', alignItems:'center', minWidth: 80, zIndex: 1 }}>
                    <div style={{
                      width: 28, height: 28, borderRadius:'50%',
                      background: s.cur?'#fff':(s.on?'#3A9E5F':'#E3ECE1'),
                      border: s.cur?'3px solid #3A9E5F':'none',
                      display:'grid', placeItems:'center',
                      boxShadow: s.cur?'0 0 0 6px rgba(58,158,95,0.2)':'none',
                    }}>
                      {s.on && !s.cur && <Icon d={I.check} size={14} stroke="#fff" sw={3}/>}
                    </div>
                    <div style={{ fontSize: 12, fontWeight: s.cur?800:700, marginTop: 8, color: s.on?'#1B3A2D':'#8FA69A' }}>{s.t}</div>
                    <div style={{ fontSize: 10, color:'#6B8F71', marginTop: 2 }}>{s.d}</div>
                  </div>
                  {i < a.length - 1 && <div style={{ flex: 1, height: 2, background: s.on?'#3A9E5F':'#E3ECE1', margin:'-34px -4px 0' }}/>}
                </Fragment>
              ))}
            </div>
          </div>

          {/* items */}
          <div style={{ background:'#fff', borderRadius: 14, padding: 22 }}>
            <h3 className="h-title" style={{ fontSize: 15, margin:'0 0 14px', fontWeight: 700 }}>Состав заказа</h3>
            {[
              { n:'Поке с лососем', s:'+ двойная порция', p:1940, q:1, v:'bowl', k: 640 },
              { n:'Фитнес-салат', s:'Без лука', p:1190, q:2, v:'salad', k: 320 },
              { n:'Ягодный смузи', s:'Малина, банан', p:690, q:1, v:'smoothie', k: 280 },
            ].map((it, i, a) => (
              <div key={i} style={{ display:'flex', gap: 14, padding:'12px 0', borderBottom: i<a.length-1?'1px solid #EEF6EC':'none', alignItems:'center' }}>
                <div style={{ width: 56, height: 56, borderRadius: 12, overflow:'hidden' }}>
                  <Plate variant={it.v} size="100%"/>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 800, fontSize: 14 }}>{it.n} <span style={{ color:'#6B8F71', fontWeight: 700, fontSize: 12 }}>× {it.q}</span></div>
                  <div style={{ fontSize: 11, color:'#6B8F71', marginTop: 2 }}>{it.s}</div>
                  <div style={{ display:'flex', gap: 6, marginTop: 4 }}>
                    <span className="pill-kcal" style={{ fontSize: 10 }}>🔥 {it.k} ккал</span>
                  </div>
                </div>
                <div style={{ fontWeight: 800, fontSize: 14 }}>{(it.p*it.q).toLocaleString('ru')}₸</div>
              </div>
            ))}
            <div style={{ marginTop: 14, padding:'12px 14px', background:'#F7FAF5', borderRadius: 12 }}>
              {[['Подытог','5 210₸'],['Доставка','Бесплатно'],['Бонусы','−200₸'],['Итого','5 010₸']].map(([l,v],i) => (
                <div key={l} style={{ display:'flex', justifyContent:'space-between', padding:'4px 0', fontSize: 13, fontWeight: i===3?800:600, color: i===3?'#3A9E5F':'#1B3A2D' }}>
                  <span>{l}</span><span>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* right column */}
        <div>
          <div style={{ background:'#fff', borderRadius: 14, padding: 22, marginBottom: 16 }}>
            <h3 className="h-title" style={{ fontSize: 15, margin:'0 0 14px', fontWeight: 700 }}>Клиент</h3>
            <div style={{ display:'flex', gap: 12, alignItems:'center' }}>
              <div style={{ width: 52, height: 52, borderRadius:'50%', background:'linear-gradient(135deg,#8BC34A,#3A9E5F)', color:'#fff', display:'grid', placeItems:'center', fontWeight:800, fontSize: 18 }}>ДА</div>
              <div>
                <div style={{ fontWeight: 800, fontSize: 15 }}>Диана А.</div>
                <div style={{ fontSize: 12, color:'#6B8F71' }}>+7 707 123 45 67 · 12 заказов</div>
                <div style={{ display:'flex', gap: 5, marginTop: 6 }}>
                  <span style={{ padding:'2px 8px', borderRadius: 999, background:'#1B3A2D', color:'#fff', fontSize: 10, fontWeight: 800 }}>Gold</span>
                </div>
              </div>
            </div>
            <div style={{ marginTop: 14, padding: 12, background:'#F7FAF5', borderRadius: 10 }}>
              <div style={{ fontSize: 11, color:'#6B8F71', fontWeight: 800, letterSpacing: 0.5 }}>АДРЕС</div>
              <div style={{ fontWeight: 700, fontSize: 13, marginTop: 4 }}>Абая 150, кв. 24</div>
              <div style={{ fontSize: 11, color:'#6B8F71', marginTop: 2 }}>Домофон 24К · Этаж 8</div>
            </div>
            <div style={{ marginTop: 10, padding: 10, background:'rgba(74,189,232,0.08)', borderRadius: 10, fontSize: 12, color:'#116B90' }}>
              💬 «Оставьте у двери, не звоните в звонок»
            </div>
          </div>

          <div style={{ background:'#fff', borderRadius: 14, padding: 22, marginBottom: 16 }}>
            <h3 className="h-title" style={{ fontSize: 15, margin:'0 0 14px', fontWeight: 700 }}>Курьер</h3>
            <div style={{ display:'flex', gap: 12, alignItems:'center' }}>
              <div style={{ width: 52, height: 52, borderRadius:'50%', background:'linear-gradient(135deg,#8BC34A,#3A9E5F)', color:'#fff', display:'grid', placeItems:'center', fontWeight:800, fontSize: 16 }}>АН</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 800, fontSize: 15 }}>Асхат Н.</div>
                <div style={{ fontSize: 12, color:'#6B8F71' }}>⭐ 4.9 · 6 заказов сегодня</div>
              </div>
              <div style={{ width: 36, height: 36, borderRadius: 10, background:'#EEF6EC', display:'grid', placeItems:'center' }}>
                <Icon d={I.phone} size={16} stroke="#3A9E5F"/>
              </div>
            </div>
          </div>

          <div style={{ background:'#fff', borderRadius: 14, padding: 16, marginBottom: 16 }}>
            <MiniMap h={220}/>
          </div>
        </div>
      </div>
    </div>
  </WebWindow>
);

// ─── ASSIGN COURIER (modal over table) ───
const DispatcherAssign = () => (
  <WebWindow>
    <Sidebar active="orders"/>
    <div style={{ flex: 1, overflow:'hidden', position:'relative' }}>
      <Topbar title="Назначить курьера" subtitle="Заказ #4818 · Дастан С. · Розыбакиева 119"/>
      <div style={{ padding: 24, background:'#F7FAF5', height:'calc(100% - 74px)', position:'relative' }}>
        {/* dim */}
        <div style={{ position:'absolute', inset: 0, background:'rgba(27,58,45,0.35)', backdropFilter:'blur(2px)' }}/>

        {/* modal */}
        <div style={{ position:'absolute', top: 30, left:'50%', transform:'translateX(-50%)', width: 860, maxHeight:'calc(100% - 60px)', background:'#fff', borderRadius: 20, padding: 24, boxShadow:'0 40px 80px -20px rgba(0,0,0,0.3)', overflow:'auto' }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom: 16 }}>
            <div>
              <h2 className="h-title" style={{ fontSize: 22, margin: 0, fontWeight: 700 }}>Назначить курьера</h2>
              <div style={{ fontSize: 12, color:'#6B8F71', marginTop: 4 }}>Заказ <b style={{ color:'#3A9E5F' }}>#4818</b> · Розыбакиева 119, кв. 45 · 1 блюдо · 1 190₸</div>
            </div>
            <div style={{ width: 32, height: 32, borderRadius:'50%', background:'#EEF6EC', display:'grid', placeItems:'center', cursor:'pointer' }}>
              <Icon d={I.close} size={16}/>
            </div>
          </div>

          {/* filter pills */}
          <div style={{ display:'flex', gap: 8, marginBottom: 14 }}>
            {['Все · 12','Рядом с рестораном · 5','Свободны · 4','Высокий рейтинг','Пешие','На велосипеде'].map((t,i) => (
              <div key={t} style={{ padding:'7px 12px', borderRadius: 999, fontSize: 12, fontWeight: 700, background: i===1?'#1B3A2D':'#F7FAF5', color: i===1?'#fff':'#1B3A2D' }}>{t}</div>
            ))}
          </div>

          {/* table */}
          <div style={{ border:'1px solid #E3ECE1', borderRadius: 12, overflow:'hidden' }}>
            <div style={{ display:'grid', gridTemplateColumns:'44px 2fr 120px 130px 130px 130px', padding:'12px 16px', background:'#F7FAF5', fontSize: 11, color:'#6B8F71', fontWeight: 800, letterSpacing: 0.5, textTransform:'uppercase' }}>
              <span></span><span>Курьер</span><span>Расстояние</span><span>Активные</span><span>Рейтинг</span><span style={{ textAlign:'right' }}></span>
            </div>
            {[
              { i:'ТБ', n:'Тимур Б.', dist:'0.4 км · 2 мин', active: 0, rating: 5.0, rec: true },
              { i:'НР', n:'Нурлан Р.', dist:'0.9 км · 4 мин', active: 0, rating: 4.8 },
              { i:'АН', n:'Асхат Н.', dist:'1.8 км · 7 мин', active: 1, rating: 4.9 },
              { i:'АС', n:'Айгерим С.', dist:'2.4 км · 10 мин', active: 2, rating: 4.8 },
              { i:'ЕМ', n:'Ерлан М.', dist:'3.1 км · 14 мин', active: 1, rating: 4.7 },
            ].map((c,i,a) => (
              <div key={i} style={{ display:'grid', gridTemplateColumns:'44px 2fr 120px 130px 130px 130px', padding:'14px 16px', alignItems:'center', fontSize: 13, borderBottom: i<a.length-1?'1px solid #EEF6EC':'none', background: c.rec?'rgba(139,195,74,0.06)':'#fff' }}>
                <input type="radio" name="c" defaultChecked={c.rec} style={{ accentColor:'#3A9E5F', width: 18, height: 18 }}/>
                <div style={{ display:'flex', gap: 10, alignItems:'center' }}>
                  <div style={{ width: 36, height: 36, borderRadius:'50%', background:'linear-gradient(135deg,#8BC34A,#3A9E5F)', color:'#fff', display:'grid', placeItems:'center', fontWeight: 800, fontSize: 12 }}>{c.i}</div>
                  <div>
                    <div style={{ fontWeight: 800 }}>{c.n} {c.rec && <span style={{ marginLeft: 6, padding:'1px 7px', borderRadius: 999, background:'#3A9E5F', color:'#fff', fontSize: 10, fontWeight: 800 }}>РЕКОМЕНД.</span>}</div>
                    <div style={{ fontSize: 11, color:'#6B8F71' }}>На велосипеде · 48 заказов</div>
                  </div>
                </div>
                <span style={{ fontWeight: 700 }}>{c.dist}</span>
                <span style={{ color: c.active===0?'#3A9E5F':'#1B3A2D', fontWeight: c.active===0?800:700 }}>{c.active === 0 ? 'Свободен' : `${c.active} заказ${c.active>1?'а':''}`}</span>
                <span style={{ fontWeight: 800 }}>⭐ {c.rating}</span>
                <div style={{ textAlign:'right' }}>
                  <span style={{ fontSize: 12, color:'#3A9E5F', fontWeight: 800 }}>Посмотреть →</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginTop: 18 }}>
            <div style={{ fontSize: 12, color:'#6B8F71' }}>Авто-назначение сработает через <b style={{ color:'#F9C74F' }}>1:24</b> если не выбрать вручную</div>
            <div style={{ display:'flex', gap: 8 }}>
              <button className="btn-ghost" style={{ padding:'11px 18px', fontSize: 13 }}>Отмена</button>
              <button className="btn-primary" style={{ padding:'11px 18px', fontSize: 13 }}>Назначить Тимура Б. →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </WebWindow>
);

Object.assign(window, { DispatcherDashboard, DispatcherOrders, DispatcherMap, DispatcherOrderDetail, DispatcherAssign });
