/* global React, Icon, I, Plate, MiniMap, Phone */
// Dark-mode courier screens

const CourierPhone = ({ children, label }) => (
  <div style={{
    width: 360, height: 740, borderRadius: 44, overflow: 'hidden', position: 'relative',
    background: '#0E1814', color: '#E8F3EC',
    boxShadow: '0 30px 60px -20px rgba(0,0,0,0.5), 0 0 0 10px #0B100E, 0 0 0 11px #1A2620',
    fontFamily: 'Nunito, sans-serif',
  }}>
    <div style={{ height: 36, display:'flex', alignItems:'center', justifyContent:'space-between', padding:'10px 24px 0', fontSize: 13, fontWeight: 800, position:'relative', zIndex: 5 }}>
      <span>9:41</span>
      <div style={{ display:'flex', gap: 5, alignItems:'center' }}>
        <svg width="16" height="10" viewBox="0 0 16 10"><path d="M1 8h2v1H1zm3-2h2v3H4zm3-2h2v5H7zm3-3h2v8h-2z" fill="currentColor"/></svg>
        <svg width="22" height="11" viewBox="0 0 22 11"><rect x="0.5" y="0.5" width="18" height="10" rx="2.5" stroke="currentColor" fill="none"/><rect x="2" y="2" width="14" height="7" rx="1" fill="#8BC34A"/></svg>
      </div>
    </div>
    <div style={{ position:'absolute', top: 8, left: '50%', transform:'translateX(-50%)', width: 110, height: 28, borderRadius: 16, background: '#000', zIndex: 4 }}/>
    <div style={{ height:'calc(100% - 36px)', overflow:'hidden', position:'relative' }}>{children}</div>
  </div>
);

const CourierTabs = ({ active='orders' }) => {
  const tabs = [
    { k:'orders', ico:I.list, lbl:'Заказы' },
    { k:'map', ico:I.map, lbl:'Карта' },
    { k:'stats', ico:I.chart, lbl:'Смена' },
    { k:'usr', ico:I.user, lbl:'Профиль' },
  ];
  return (
    <div style={{ position:'absolute', bottom: 0, left: 0, right: 0, background:'rgba(14,24,20,0.95)', backdropFilter:'blur(12px)', borderTop:'1px solid rgba(255,255,255,0.06)', padding:'10px 8px 20px', display:'flex', justifyContent:'space-around' }}>
      {tabs.map(t => (
        <div key={t.k} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap: 3, color: active===t.k?'#8BC34A':'#8FA69A', fontWeight: active===t.k?800:600, fontSize: 10 }}>
          <Icon d={t.ico} size={22}/>
          {t.lbl}
        </div>
      ))}
    </div>
  );
};

// Courier orders list
const CourierList = () => (
  <CourierPhone>
    <div style={{ height:'100%', overflow:'auto', paddingBottom: 80 }} className="no-sb">
      <div style={{ padding:'14px 20px 10px' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
          <div>
            <div style={{ fontSize: 11, color:'#8FA69A', fontWeight: 700, letterSpacing: 0.6, textTransform:'uppercase' }}>Смена</div>
            <div className="h-title" style={{ fontSize: 22, fontWeight: 700, marginTop: 2 }}>Привет, Асхат</div>
          </div>
          <div style={{ display:'flex', alignItems:'center', gap: 8, padding:'6px 10px 6px 8px', background:'rgba(139,195,74,0.15)', borderRadius: 999 }}>
            <span style={{ width: 8, height: 8, borderRadius:'50%', background:'#8BC34A' }}/>
            <span style={{ fontSize: 11, fontWeight: 800, color:'#8BC34A' }}>НА ЛИНИИ</span>
          </div>
        </div>

        {/* stats tiles */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap: 8, marginTop: 14 }}>
          {[{v:'6',l:'заказов'},{v:'12 800₸',l:'заработок'},{v:'48км',l:'пробег'}].map((s,i)=>(
            <div key={i} style={{ background:'#172521', borderRadius: 14, padding: '10px 12px' }}>
              <div className="h-title" style={{ fontSize: 17, fontWeight: 700 }}>{s.v}</div>
              <div style={{ fontSize: 10, color:'#8FA69A', marginTop: 2, fontWeight: 700 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* active */}
      <div style={{ padding:'4px 20px' }}>
        <div style={{ fontSize: 11, color:'#8FA69A', fontWeight: 800, letterSpacing: 0.6, textTransform:'uppercase', margin: '8px 0' }}>Активный заказ</div>
        <div style={{ background:'linear-gradient(135deg,#3A9E5F,#8BC34A)', borderRadius: 20, padding: 16, color:'#fff', position:'relative', overflow:'hidden' }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 800, opacity: 0.85 }}>ЗАКАЗ #4821</div>
              <div className="h-title" style={{ fontSize: 20, fontWeight: 700, marginTop: 4 }}>3.2 км · 12 мин</div>
            </div>
            <span style={{ padding:'4px 10px', background:'rgba(255,255,255,0.2)', borderRadius: 999, fontSize: 10, fontWeight: 800 }}>В ПУТИ</span>
          </div>
          <div style={{ marginTop: 12, padding: 10, background:'rgba(0,0,0,0.15)', borderRadius: 12, display:'flex', alignItems:'flex-start', gap: 10 }}>
            <Icon d={I.pin} size={16} stroke="#fff"/>
            <div style={{ fontSize: 12, fontWeight: 700, lineHeight: 1.4 }}>Абая 150, кв. 24<br/><span style={{ opacity: 0.7, fontWeight: 500 }}>Домофон 24К, этаж 8</span></div>
          </div>
          <button style={{ width:'100%', marginTop: 12, padding: 14, border: 0, borderRadius: 14, background:'#fff', color:'#1B3A2D', fontWeight: 800, fontSize: 14, fontFamily:'inherit' }}>Я прибыл →</button>
        </div>
      </div>

      {/* queue */}
      <div style={{ padding:'14px 20px 0' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom: 10 }}>
          <div style={{ fontSize: 11, color:'#8FA69A', fontWeight: 800, letterSpacing: 0.6, textTransform:'uppercase' }}>Очередь · 3</div>
          <span style={{ fontSize: 12, color:'#8BC34A', fontWeight: 800 }}>Сортировка ⇅</span>
        </div>
        {[
          { id:4822, dist:'1.8 км', addr:'Сейфуллина 498', time:'~18 мин', items:2, bonus:0 },
          { id:4823, dist:'3.4 км', addr:'Жарокова 217', time:'~26 мин', items:3, bonus:300 },
          { id:4824, dist:'2.1 км', addr:'Розыбакиева 119', time:'~20 мин', items:1, bonus:0 },
        ].map(o => (
          <div key={o.id} style={{ background:'#172521', borderRadius: 16, padding: 14, marginBottom: 10, border:'1px solid rgba(255,255,255,0.04)' }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
              <div>
                <div style={{ fontSize: 11, color:'#8FA69A', fontWeight: 700 }}>ЗАКАЗ #{o.id}</div>
                <div style={{ fontWeight: 800, fontSize: 14, marginTop: 3 }}>{o.addr}</div>
              </div>
              {o.bonus > 0 && <span style={{ padding:'3px 8px', background:'rgba(249,199,79,0.15)', color:'#F9C74F', borderRadius: 999, fontSize: 10, fontWeight: 800 }}>+{o.bonus}₸</span>}
            </div>
            <div style={{ display:'flex', gap: 16, marginTop: 8 }}>
              <div style={{ fontSize: 11, color:'#8FA69A', display:'flex', alignItems:'center', gap: 4 }}><Icon d={I.route} size={12} stroke="#8BC34A"/>{o.dist}</div>
              <div style={{ fontSize: 11, color:'#8FA69A', display:'flex', alignItems:'center', gap: 4 }}><Icon d={I.clock} size={12} stroke="#8BC34A"/>{o.time}</div>
              <div style={{ fontSize: 11, color:'#8FA69A', display:'flex', alignItems:'center', gap: 4 }}><Icon d={I.bag} size={12} stroke="#8BC34A"/>{o.items} поз.</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <CourierTabs active="orders"/>
  </CourierPhone>
);

// Courier order details
const CourierDetails = () => (
  <CourierPhone>
    <div style={{ height:'100%', overflow:'auto', paddingBottom: 120 }} className="no-sb">
      <div style={{ padding:'14px 20px 10px' }}>
        <div style={{ display:'flex', alignItems:'center', gap: 12 }}>
          <div style={{ width: 38, height: 38, borderRadius: 12, background:'#172521', display:'grid', placeItems:'center' }}>
            <Icon d={I.chevL} size={18} stroke="#E8F3EC"/>
          </div>
          <div>
            <div style={{ fontSize: 11, color:'#8FA69A', fontWeight: 800 }}>ЗАКАЗ #4821</div>
            <div className="h-title" style={{ fontSize: 20, fontWeight: 700 }}>Детали</div>
          </div>
        </div>
      </div>

      {/* pickup */}
      <div style={{ padding:'10px 20px' }}>
        <div style={{ fontSize: 11, color:'#8FA69A', fontWeight: 800, letterSpacing: 0.6, textTransform:'uppercase', marginBottom: 8 }}>Забрать</div>
        <div style={{ background:'#172521', borderRadius: 16, padding: 14, display:'flex', gap: 12, alignItems:'center' }}>
          <div style={{ width: 44, height: 44, borderRadius: 12, background:'rgba(139,195,74,0.15)', display:'grid', placeItems:'center' }}>
            <span style={{ fontSize: 22 }}>🏬</span>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 800, fontSize: 14 }}>Кухня Paidaly · Достык</div>
            <div style={{ fontSize: 11, color:'#8FA69A', marginTop: 2 }}>ул. Достык 91, 1 этаж · 1.2 км</div>
          </div>
          <div style={{ width: 36, height: 36, borderRadius: 10, background:'rgba(139,195,74,0.15)', display:'grid', placeItems:'center' }}>
            <Icon d={I.phone} size={16} stroke="#8BC34A"/>
          </div>
        </div>
      </div>

      {/* items */}
      <div style={{ padding:'10px 20px' }}>
        <div style={{ fontSize: 11, color:'#8FA69A', fontWeight: 800, letterSpacing: 0.6, textTransform:'uppercase', marginBottom: 8 }}>Состав · 3 блюда</div>
        <div style={{ background:'#172521', borderRadius: 16, padding: 4 }}>
          {[
            { n:'Поке с лососем', q:1, v:'bowl' },
            { n:'Фитнес-салат', q:2, v:'salad' },
            { n:'Ягодный смузи', q:1, v:'smoothie' },
          ].map((it, i, a) => (
            <div key={i} style={{ display:'flex', alignItems:'center', gap: 10, padding:'10px 12px', borderBottom: i<a.length-1?'1px solid rgba(255,255,255,0.04)':'none' }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, overflow:'hidden' }}>
                <Plate variant={it.v} size="100%"/>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 13 }}>{it.n}</div>
                <div style={{ fontSize: 11, color:'#8FA69A', marginTop: 2 }}>×{it.q}</div>
              </div>
              <div style={{ width: 22, height: 22, borderRadius: 6, background:'#3A9E5F', display:'grid', placeItems:'center' }}>
                <Icon d={I.check} size={12} stroke="#fff" sw={3}/>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* deliver */}
      <div style={{ padding:'10px 20px' }}>
        <div style={{ fontSize: 11, color:'#8FA69A', fontWeight: 800, letterSpacing: 0.6, textTransform:'uppercase', marginBottom: 8 }}>Доставить</div>
        <div style={{ background:'#172521', borderRadius: 16, padding: 14 }}>
          <div style={{ display:'flex', gap: 12, alignItems:'center' }}>
            <div style={{ width: 44, height: 44, borderRadius:'50%', background:'linear-gradient(135deg,#8BC34A,#3A9E5F)', display:'grid', placeItems:'center', fontWeight:800, color:'#fff' }}>ДА</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, fontSize: 14 }}>Диана А.</div>
              <div style={{ fontSize: 11, color:'#8FA69A' }}>+7 707 123 45 67</div>
            </div>
            <div style={{ width: 36, height: 36, borderRadius: 10, background:'rgba(139,195,74,0.15)', display:'grid', placeItems:'center' }}>
              <Icon d={I.phone} size={16} stroke="#8BC34A"/>
            </div>
          </div>
          <div style={{ marginTop: 12, padding: 10, background:'rgba(74,189,232,0.08)', borderRadius: 12, fontSize: 12, color:'#B4DCEC', lineHeight: 1.4 }}>
            💬 «Оставьте у двери, не звоните в звонок»
          </div>
          <div style={{ marginTop: 10, padding: 10, borderRadius: 12, border:'1px dashed rgba(139,195,74,0.3)' }}>
            <div style={{ fontSize: 11, color:'#8FA69A', fontWeight: 700 }}>АДРЕС</div>
            <div style={{ fontWeight: 800, fontSize: 14, marginTop: 2 }}>Абая 150, кв. 24</div>
            <div style={{ fontSize: 11, color:'#8FA69A', marginTop: 2 }}>Домофон 24К · Этаж 8 · 3.2 км</div>
          </div>
        </div>
      </div>

      {/* actions */}
      <div style={{ position:'absolute', bottom: 0, left: 0, right: 0, padding:'12px 20px 18px', background:'linear-gradient(to top,#0E1814 70%,transparent)' }}>
        <button style={{ width:'100%', padding: 16, border: 0, borderRadius: 14, background:'linear-gradient(135deg,#3A9E5F,#8BC34A)', color:'#fff', fontWeight: 800, fontSize: 15, fontFamily:'inherit', marginBottom: 8 }}>
          ✓ Я забрал из ресторана
        </button>
        <button style={{ width:'100%', padding: 12, border:'1px solid rgba(255,255,255,0.1)', borderRadius: 14, background:'transparent', color:'#8FA69A', fontWeight: 700, fontSize: 13, fontFamily:'inherit' }}>
          Связаться с диспетчером
        </button>
      </div>
    </div>
  </CourierPhone>
);

// Courier route map
const CourierRoute = () => (
  <CourierPhone>
    <div style={{ height:'100%', position:'relative' }}>
      <MiniMap h={740} dark/>
      {/* top overlay */}
      <div style={{ position:'absolute', top: 14, left: 14, right: 14, display:'flex', gap: 10 }}>
        <div style={{ width: 40, height: 40, borderRadius: 14, background:'#172521', display:'grid', placeItems:'center', border:'1px solid rgba(255,255,255,0.06)' }}>
          <Icon d={I.chevL} size={18} stroke="#E8F3EC"/>
        </div>
        <div style={{ flex: 1, background:'#172521', borderRadius: 14, padding:'10px 14px', border:'1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ fontSize: 10, color:'#8FA69A', fontWeight: 800 }}>СЛЕДУЮЩАЯ ТОЧКА</div>
          <div style={{ fontWeight: 800, fontSize: 13, marginTop: 2 }}>Абая 150 · 3.2 км · 12 мин</div>
        </div>
      </div>

      {/* nav card */}
      <div style={{ position:'absolute', top: 72, left: 14, right: 14, background:'linear-gradient(135deg,#3A9E5F,#8BC34A)', borderRadius: 20, padding: 16, color:'#fff', display:'flex', alignItems:'center', gap: 14 }}>
        <div style={{ width: 52, height: 52, borderRadius:'50%', background:'rgba(255,255,255,0.2)', display:'grid', placeItems:'center', fontSize: 28 }}>↰</div>
        <div style={{ flex: 1 }}>
          <div className="h-title" style={{ fontSize: 24, fontWeight: 700 }}>350 м</div>
          <div style={{ fontSize: 12, fontWeight: 700, opacity: 0.9 }}>Поворот налево на Толе Би</div>
        </div>
      </div>

      {/* speed / controls floating */}
      <div style={{ position:'absolute', right: 14, top: 200, display:'flex', flexDirection:'column', gap: 8 }}>
        {[I.plus, I.minus].map((d, i) => (
          <div key={i} style={{ width: 40, height: 40, borderRadius: 12, background:'#172521', display:'grid', placeItems:'center', border:'1px solid rgba(255,255,255,0.06)' }}>
            <Icon d={d} size={16} stroke="#E8F3EC" sw={2.5}/>
          </div>
        ))}
        <div style={{ width: 40, height: 40, borderRadius: 12, background:'#3A9E5F', display:'grid', placeItems:'center' }}>
          <Icon d={I.pin} size={16} stroke="#fff"/>
        </div>
      </div>

      {/* bottom card */}
      <div style={{ position:'absolute', bottom: 0, left: 0, right: 0, background:'#172521', borderRadius:'24px 24px 0 0', padding: 16, borderTop:'1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ width: 40, height: 4, borderRadius: 2, background:'rgba(255,255,255,0.15)', margin:'0 auto 14px' }}/>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <div>
            <div style={{ fontSize: 11, color:'#8FA69A', fontWeight: 800 }}>ЗАКАЗ #4821 · ДИАНА А.</div>
            <div className="h-title" style={{ fontSize: 18, fontWeight: 700, marginTop: 2 }}>~12 мин до клиента</div>
          </div>
          <div style={{ width: 40, height: 40, borderRadius:'50%', background:'rgba(139,195,74,0.15)', display:'grid', placeItems:'center' }}>
            <Icon d={I.phone} size={16} stroke="#8BC34A"/>
          </div>
        </div>
        <div style={{ display:'flex', gap: 8, marginTop: 14 }}>
          <button style={{ flex: 1, padding: 14, border: 0, borderRadius: 14, background:'linear-gradient(135deg,#3A9E5F,#8BC34A)', color:'#fff', fontWeight: 800, fontSize: 14, fontFamily:'inherit' }}>
            ✓ Доставил
          </button>
          <button style={{ padding:'0 16px', border:'1px solid rgba(224,112,112,0.3)', borderRadius: 14, background:'transparent', color:'#E07070', fontWeight: 800, fontSize: 13, fontFamily:'inherit' }}>
            Проблема
          </button>
        </div>
      </div>
    </div>
  </CourierPhone>
);

// Courier shift stats
const CourierStats = () => (
  <CourierPhone>
    <div style={{ height:'100%', overflow:'auto', paddingBottom: 80 }} className="no-sb">
      <div style={{ padding:'14px 20px 0' }}>
        <h2 className="h-title" style={{ fontSize: 22, margin: 0, fontWeight: 700 }}>Статистика смены</h2>
        <div style={{ fontSize: 12, color:'#8FA69A', marginTop: 2 }}>23 апреля · с 10:00</div>
      </div>

      {/* hero earnings */}
      <div style={{ margin:'14px 20px', background:'linear-gradient(135deg,#1A2620,#0E1814)', borderRadius: 24, padding: 20, border:'1px solid rgba(139,195,74,0.15)', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', right: -40, top: -40, width: 160, height: 160, borderRadius:'50%', background:'radial-gradient(circle, rgba(139,195,74,0.25), transparent 70%)' }}/>
        <div style={{ fontSize: 11, color:'#8FA69A', fontWeight: 800, letterSpacing: 1 }}>ЗАРАБОТАНО СЕГОДНЯ</div>
        <div className="h-title" style={{ fontSize: 42, fontWeight: 700, marginTop: 6, background:'linear-gradient(135deg,#8BC34A,#3A9E5F)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>12 800₸</div>
        <div style={{ display:'flex', gap: 6, marginTop: 8, alignItems:'center' }}>
          <span style={{ padding:'3px 8px', borderRadius: 999, background:'rgba(139,195,74,0.15)', color:'#8BC34A', fontSize: 11, fontWeight: 800 }}>↑ 18%</span>
          <span style={{ fontSize: 11, color:'#8FA69A' }}>vs вчера</span>
        </div>
        {/* bar chart */}
        <div style={{ marginTop: 18, display:'flex', alignItems:'flex-end', gap: 6, height: 72 }}>
          {[35,55,40,70,45,85,100,60].map((h,i) => (
            <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 6 ? 'linear-gradient(180deg,#8BC34A,#3A9E5F)' : 'rgba(139,195,74,0.25)', borderRadius: 4 }}/>
          ))}
        </div>
        <div style={{ display:'flex', justifyContent:'space-between', marginTop: 6, fontSize: 10, color:'#8FA69A' }}>
          <span>10</span><span>12</span><span>14</span><span>16</span><span>18</span><span>20</span>
        </div>
      </div>

      {/* metrics grid */}
      <div style={{ padding:'0 20px', display:'grid', gridTemplateColumns:'1fr 1fr', gap: 10 }}>
        {[
          { l:'Заказов', v:'6', d:'+2 к цели', c:'#8BC34A' },
          { l:'Пробег', v:'48 км', d:'2.4 л топлива', c:'#4ABDE8' },
          { l:'Ср. время', v:'28 мин', d:'−4 мин', c:'#F9C74F' },
          { l:'Рейтинг', v:'4.9 ⭐', d:'5 отзывов', c:'#E8F3EC' },
        ].map(m => (
          <div key={m.l} style={{ background:'#172521', borderRadius: 16, padding: 14 }}>
            <div style={{ fontSize: 10, color:'#8FA69A', fontWeight: 800, letterSpacing: 0.5 }}>{m.l.toUpperCase()}</div>
            <div className="h-title" style={{ fontSize: 22, fontWeight: 700, marginTop: 6, color: m.c }}>{m.v}</div>
            <div style={{ fontSize: 10.5, color:'#8FA69A', marginTop: 4 }}>{m.d}</div>
          </div>
        ))}
      </div>

      {/* goals */}
      <div style={{ padding:'16px 20px 0' }}>
        <div style={{ fontSize: 11, color:'#8FA69A', fontWeight: 800, letterSpacing: 0.6, textTransform:'uppercase', marginBottom: 8 }}>Цели смены</div>
        <div style={{ background:'#172521', borderRadius: 16, padding: 14 }}>
          {[
            { l:'10 заказов до 20:00', p: 60, v:'6/10' },
            { l:'Заработать 20 000₸', p: 64, v:'12 800₸' },
            { l:'Держать рейтинг 4.9+', p: 100, v:'4.9 ✓', done: true },
          ].map((g, i, a) => (
            <div key={i} style={{ marginBottom: i<a.length-1 ? 14 : 0 }}>
              <div style={{ display:'flex', justifyContent:'space-between', marginBottom: 6 }}>
                <span style={{ fontSize: 13, fontWeight: 700 }}>{g.l}</span>
                <span style={{ fontSize: 12, fontWeight: 800, color: g.done?'#8BC34A':'#E8F3EC' }}>{g.v}</span>
              </div>
              <div style={{ height: 6, borderRadius: 3, background:'rgba(255,255,255,0.06)' }}>
                <div style={{ width: `${g.p}%`, height:'100%', borderRadius: 3, background:'linear-gradient(90deg,#3A9E5F,#8BC34A)' }}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <CourierTabs active="stats"/>
  </CourierPhone>
);

Object.assign(window, { CourierPhone, CourierList, CourierDetails, CourierRoute, CourierStats });
