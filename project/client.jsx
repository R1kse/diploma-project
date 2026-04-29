/* global React, Icon, I, Plate, Blob, MiniMap */
const { Fragment } = React;

// ─── Phone frame (lightweight, no iOS chrome) ───
const Phone = ({ children, dark = false, label, width = 360, height = 740 }) => (
  <div style={{
    width, height, borderRadius: 44, overflow: 'hidden', position: 'relative',
    background: dark ? '#0E1814' : '#F7FAF5',
    boxShadow: '0 30px 60px -20px rgba(27,58,45,0.25), 0 0 0 10px #1B3A2D, 0 0 0 11px #28473A',
    fontFamily: 'Nunito, sans-serif',
    color: dark ? '#E8F3EC' : '#1B3A2D',
  }}>
    {/* status bar */}
    <div style={{
      height: 36, display:'flex', alignItems:'center', justifyContent:'space-between',
      padding: '10px 24px 0', fontSize: 13, fontWeight: 800, position: 'relative', zIndex: 5,
      color: dark ? '#E8F3EC' : '#1B3A2D',
    }}>
      <span>9:41</span>
      <div style={{ display:'flex', gap: 5, alignItems:'center' }}>
        <svg width="16" height="10" viewBox="0 0 16 10"><path d="M1 8h2v1H1zm3-2h2v3H4zm3-2h2v5H7zm3-3h2v8h-2z" fill="currentColor"/></svg>
        <svg width="14" height="10" viewBox="0 0 14 10"><path d="M1 4 Q7 -1 13 4 M3 6 Q7 2 11 6 M5 8 Q7 6 9 8" stroke="currentColor" fill="none" strokeWidth="1.2" strokeLinecap="round"/></svg>
        <svg width="22" height="11" viewBox="0 0 22 11"><rect x="0.5" y="0.5" width="18" height="10" rx="2.5" stroke="currentColor" fill="none"/><rect x="2" y="2" width="14" height="7" rx="1" fill="currentColor"/><rect x="19" y="4" width="2" height="3" fill="currentColor" opacity="0.5"/></svg>
      </div>
    </div>
    {/* notch */}
    <div style={{
      position:'absolute', top: 8, left: '50%', transform:'translateX(-50%)',
      width: 110, height: 28, borderRadius: 16, background: '#0B100E', zIndex: 4,
    }}/>
    <div style={{ height: 'calc(100% - 36px)', overflow: 'hidden', position: 'relative' }}>
      {children}
    </div>
  </div>
);

const TabBar = ({ active = 'home', dark = false }) => {
  const tabs = [
    { k:'home', ico:I.home, lbl:'Главная' },
    { k:'menu', ico:I.grid, lbl:'Меню' },
    { k:'bag', ico:I.bag, lbl:'Корзина' },
    { k:'usr', ico:I.user, lbl:'Профиль' },
  ];
  return (
    <div style={{
      position:'absolute', bottom: 0, left: 0, right: 0,
      background: dark ? 'rgba(14,24,20,0.95)' : 'rgba(255,255,255,0.95)',
      backdropFilter: 'blur(12px)',
      borderTop: `1px solid ${dark ? 'rgba(255,255,255,0.06)' : '#E3ECE1'}`,
      padding: '10px 8px 20px', display:'flex', justifyContent:'space-around',
    }}>
      {tabs.map(t => (
        <div key={t.k} style={{
          display:'flex', flexDirection:'column', alignItems:'center', gap: 3,
          color: active === t.k ? '#3A9E5F' : (dark ? '#8FA69A' : '#6B8F71'),
          fontWeight: active === t.k ? 800 : 600, fontSize: 10,
        }}>
          <Icon d={t.ico} size={22} sw={active === t.k ? 2 : 1.8}/>
          {t.lbl}
        </div>
      ))}
    </div>
  );
};

// ─── ONBOARDING ───
const ClientOnboarding = () => (
  <Phone label="Онбординг">
    <div style={{ position:'relative', height:'100%', overflow:'hidden' }}>
      {/* hero blob bg */}
      <div style={{
        position:'absolute', inset: 0, background:
          'radial-gradient(circle at 20% 10%, #D4E9C4 0%, transparent 50%), radial-gradient(circle at 90% 0%, #E4F0D0 0%, transparent 45%), #F7FAF5',
      }}/>
      <div style={{ position:'absolute', top: 50, right: -40 }}>
        <Blob color="#CFE4C5" style={{ width: 220, height: 220, opacity: 0.8 }}/>
      </div>
      <div style={{ position:'relative', height:'100%', padding: '24px 24px 24px', display:'flex', flexDirection:'column' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <div style={{ display:'flex', gap: 8, alignItems:'center' }}>
            <div style={{ width: 36, height: 36, borderRadius: 12, background:'linear-gradient(135deg,#3A9E5F,#8BC34A)', display:'grid', placeItems:'center' }}>
              <Icon d={I.leaf} size={20} stroke="#fff" sw={2.2}/>
            </div>
            <span className="h-title" style={{ fontSize: 18, fontWeight: 800 }}>paidaly</span>
          </div>
          <span style={{ fontSize: 13, color: '#6B8F71', fontWeight: 700 }}>Пропустить</span>
        </div>

        <div style={{ marginTop: 40, flex: 1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center' }}>
          <div style={{ width: 240, height: 240, borderRadius: '50%', background:'#fff', display:'grid', placeItems:'center', boxShadow:'0 20px 50px -20px rgba(58,158,95,0.35)' }}>
            <Plate variant="salad" size={200}/>
          </div>
          <div style={{ display:'flex', gap: 6, marginTop: 28 }}>
            <div style={{ width: 22, height: 6, borderRadius: 3, background:'#3A9E5F' }}/>
            <div style={{ width: 6, height: 6, borderRadius: 3, background:'#D1E3C4' }}/>
            <div style={{ width: 6, height: 6, borderRadius: 3, background:'#D1E3C4' }}/>
          </div>
          <h2 className="h-title" style={{ fontSize: 26, margin: '22px 0 8px', textAlign:'center', lineHeight: 1.15 }}>
            Еда, <span style={{ color:'#3A9E5F' }}>которая питает</span> тебя
          </h2>
          <p style={{ fontSize: 14, color:'#6B8F71', textAlign:'center', margin: 0, lineHeight: 1.5, maxWidth: 280 }}>
            Свежие сезонные ингредиенты. Рассчитанные БЖУ. Доставка за 40 минут.
          </p>
        </div>

        <button className="btn-primary" style={{ width:'100%', fontSize: 16, padding: '16px' }}>
          Начать <span style={{ marginLeft: 6 }}>→</span>
        </button>
        <div style={{ textAlign:'center', marginTop: 14, fontSize: 13, color:'#6B8F71' }}>
          Есть аккаунт? <span style={{ color:'#3A9E5F', fontWeight: 700 }}>Войти</span>
        </div>
      </div>
    </div>
  </Phone>
);

// ─── HOME ───
const CATEGORIES = [
  { e:'🥗', t:'Салаты', c:'#E0F1E6' },
  { e:'🍲', t:'Супы', c:'#FFF6DF' },
  { e:'🥩', t:'Белки', c:'#FBE4E4' },
  { e:'🥤', t:'Смузи', c:'#F0E1F0' },
  { e:'🥣', t:'Каши', c:'#FDF1E3' },
  { e:'🍞', t:'Тосты', c:'#F4EAD8' },
];

const DISHES = [
  { id:1, n:'Поке с лососем', s:'Рис, лосось, эдамаме', p:1490, k:520, v:'bowl', t:'Популярное' },
  { id:2, n:'Фитнес-салат', s:'Куриное филе, авокадо', p:1190, k:320, v:'salad', t:'Хит' },
  { id:3, n:'Тыквенный крем', s:'Крем-суп с имбирём', p:890, k:240, v:'soup' },
  { id:4, n:'Ягодный смузи', s:'Малина, банан, протеин', p:690, k:280, v:'smoothie' },
  { id:5, n:'Авокадо-тост', s:'Хлеб на закваске, яйцо', p:790, k:380, v:'toast' },
  { id:6, n:'Курица с овощами', s:'Гриль, брокколи', p:1290, k:410, v:'chicken' },
  { id:7, n:'Овсянка с ягодами', s:'Миндальное молоко', p:590, k:310, v:'oats' },
];

const ClientHome = () => (
  <Phone label="Главная">
    <div style={{ height:'100%', overflow:'auto', paddingBottom: 80 }} className="no-sb">
      {/* header */}
      <div style={{ padding: '14px 20px 10px' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
          <div>
            <div style={{ fontSize: 11, color:'#6B8F71', fontWeight: 700, letterSpacing: 0.6, textTransform:'uppercase' }}>Доставка в</div>
            <div style={{ display:'flex', alignItems:'center', gap: 4, marginTop: 2 }}>
              <Icon d={I.pin} size={16} stroke="#3A9E5F"/>
              <span style={{ fontWeight: 800, fontSize: 15 }}>Абая 150, кв. 24</span>
              <Icon d={I.chevD} size={14} stroke="#6B8F71"/>
            </div>
          </div>
          <div style={{ display:'flex', gap: 8 }}>
            <div style={{ width: 38, height: 38, borderRadius: 12, background:'#fff', display:'grid', placeItems:'center', boxShadow:'0 4px 10px -6px rgba(27,58,45,0.2)', position:'relative' }}>
              <Icon d={I.bell} size={18}/>
              <div style={{ position:'absolute', top: 8, right: 9, width: 7, height: 7, borderRadius:'50%', background:'#E07070', border:'2px solid #fff' }}/>
            </div>
          </div>
        </div>

        {/* search */}
        <div style={{ marginTop: 14, background:'#fff', borderRadius: 16, padding:'12px 14px', display:'flex', alignItems:'center', gap: 10, boxShadow:'0 6px 14px -10px rgba(27,58,45,0.2)' }}>
          <Icon d={I.search} size={18} stroke="#6B8F71"/>
          <span style={{ color:'#6B8F71', fontSize: 14, flex: 1 }}>Поиск блюда, ингредиента…</span>
          <div style={{ width: 1, height: 16, background:'#E3ECE1' }}/>
          <Icon d={I.filter} size={18} stroke="#3A9E5F"/>
        </div>
      </div>

      {/* hero banner */}
      <div style={{ margin: '6px 20px 16px', borderRadius: 20, padding: '16px 18px', background:'linear-gradient(135deg,#3A9E5F,#8BC34A)', color:'#fff', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', right: -30, top: -20 }}>
          <svg width="140" height="140" viewBox="0 0 100 100"><path fill="rgba(255,255,255,0.12)" d="M50,0 C70,10 100,30 90,60 C80,90 50,100 25,90 C0,80 -10,40 15,20 C30,10 40,0 50,0Z"/></svg>
        </div>
        <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1, opacity: 0.85 }}>МЕНЮ НЕДЕЛИ</div>
        <div className="h-title" style={{ fontSize: 20, fontWeight: 700, marginTop: 4, lineHeight: 1.15 }}>−20% на<br/>программу «Детокс»</div>
        <button style={{ marginTop: 10, background:'#fff', color:'#1B3A2D', border:0, borderRadius: 10, padding:'8px 14px', fontWeight: 800, fontSize: 13, fontFamily:'inherit' }}>Смотреть →</button>
      </div>

      {/* categories */}
      <div style={{ padding:'0 20px' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom: 10 }}>
          <h3 className="h-title" style={{ fontSize: 17, margin: 0, fontWeight: 700 }}>Категории</h3>
          <span style={{ fontSize: 12, color:'#3A9E5F', fontWeight: 700 }}>Все →</span>
        </div>
      </div>
      <div style={{ display:'flex', gap: 10, padding:'0 20px 14px', overflowX:'auto' }} className="no-sb">
        {CATEGORIES.map((c,i) => (
          <div key={i} style={{
            minWidth: 82, background: c.c, borderRadius: 16, padding: '14px 10px',
            display:'flex', flexDirection:'column', alignItems:'center', gap: 6,
            border: i === 0 ? '2px solid #3A9E5F' : '2px solid transparent',
          }}>
            <div style={{ fontSize: 28 }}>{c.e}</div>
            <div style={{ fontSize: 11, fontWeight: 800 }}>{c.t}</div>
          </div>
        ))}
      </div>

      {/* popular */}
      <div style={{ padding:'0 20px', marginTop: 4 }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom: 12 }}>
          <h3 className="h-title" style={{ fontSize: 17, margin: 0, fontWeight: 700 }}>Популярное сегодня</h3>
          <span style={{ fontSize: 12, color:'#3A9E5F', fontWeight: 700 }}>Все →</span>
        </div>
      </div>
      <div style={{ display:'flex', gap: 12, padding:'0 20px 12px', overflowX:'auto' }} className="no-sb">
        {DISHES.slice(0,4).map(d => (
          <div key={d.id} style={{ minWidth: 180, background:'#fff', borderRadius: 20, overflow:'hidden', boxShadow:'0 8px 20px -14px rgba(27,58,45,0.22)' }}>
            <div style={{ position:'relative' }}>
              <Plate variant={d.v} size="100%"/>
              {d.t && <div style={{ position:'absolute', top: 10, left: 10, background:'#1B3A2D', color:'#fff', fontSize: 10, fontWeight: 800, padding:'4px 8px', borderRadius: 999 }}>{d.t}</div>}
              <div style={{ position:'absolute', top: 10, right: 10, width: 30, height: 30, borderRadius:'50%', background:'rgba(255,255,255,0.9)', display:'grid', placeItems:'center' }}>
                <Icon d={I.heart} size={14} stroke="#3A9E5F"/>
              </div>
            </div>
            <div style={{ padding: 12 }}>
              <div style={{ fontWeight: 800, fontSize: 14, lineHeight: 1.2 }}>{d.n}</div>
              <div style={{ fontSize: 11, color:'#6B8F71', marginTop: 2 }}>{d.s}</div>
              <div style={{ display:'flex', gap: 4, marginTop: 8 }}>
                <span className="pill-kcal">🔥 {d.k} ккал</span>
              </div>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginTop: 10 }}>
                <span style={{ fontWeight: 800, fontSize: 15 }}>{d.p}₸</span>
                <button style={{ width: 30, height: 30, borderRadius: 10, background:'linear-gradient(135deg,#3A9E5F,#8BC34A)', border: 0, color:'#fff', display:'grid', placeItems:'center' }}>
                  <Icon d={I.plus} size={16} stroke="#fff" sw={2.5}/>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* новинки list */}
      <div style={{ padding: '16px 20px 0' }}>
        <h3 className="h-title" style={{ fontSize: 17, margin: '0 0 12px', fontWeight: 700 }}>Новинки</h3>
        {DISHES.slice(4,6).map(d => (
          <div key={d.id} style={{ display:'flex', gap: 12, background:'#fff', borderRadius: 18, padding: 10, marginBottom: 10, boxShadow:'0 4px 14px -12px rgba(27,58,45,0.2)' }}>
            <div style={{ width: 68, height: 68, borderRadius: 14, overflow:'hidden' }}>
              <Plate variant={d.v} size="100%"/>
            </div>
            <div style={{ flex: 1, display:'flex', flexDirection:'column', justifyContent:'center' }}>
              <div style={{ fontWeight: 800, fontSize: 14 }}>{d.n}</div>
              <div style={{ fontSize: 11, color:'#6B8F71', marginTop: 1 }}>{d.s}</div>
              <div style={{ display:'flex', gap: 4, marginTop: 4 }}>
                <span className="pill-kcal" style={{ fontSize: 10 }}>🔥 {d.k} ккал</span>
              </div>
            </div>
            <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-end', justifyContent:'space-between' }}>
              <span style={{ fontWeight: 800, fontSize: 14 }}>{d.p}₸</span>
              <button style={{ width: 30, height: 30, borderRadius: 10, background:'linear-gradient(135deg,#3A9E5F,#8BC34A)', border:0, color:'#fff', display:'grid', placeItems:'center' }}>
                <Icon d={I.plus} size={16} stroke="#fff" sw={2.5}/>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <TabBar active="home"/>
  </Phone>
);

// ─── MENU (category view) ───
const ClientMenu = () => (
  <Phone label="Меню">
    <div style={{ height:'100%', overflow:'auto', paddingBottom: 80 }} className="no-sb">
      <div style={{ padding: '14px 20px 8px', background:'#F7FAF5', position:'sticky', top:0, zIndex:2 }}>
        <div style={{ display:'flex', alignItems:'center', gap: 12 }}>
          <div style={{ width: 38, height: 38, borderRadius: 12, background:'#fff', display:'grid', placeItems:'center', boxShadow:'0 4px 10px -8px rgba(0,0,0,.2)' }}>
            <Icon d={I.chevL} size={18}/>
          </div>
          <h2 className="h-title" style={{ fontSize: 22, margin: 0, fontWeight: 700 }}>Меню</h2>
        </div>
        <div style={{ marginTop: 12, background:'#fff', borderRadius: 14, padding:'10px 12px', display:'flex', alignItems:'center', gap: 8 }}>
          <Icon d={I.search} size={16} stroke="#6B8F71"/>
          <span style={{ color:'#6B8F71', fontSize: 13 }}>Найти блюдо…</span>
        </div>
        <div style={{ display:'flex', gap: 8, overflowX:'auto', marginTop: 12, paddingBottom: 4 }} className="no-sb">
          {['Все','Завтрак','Обед','Ужин','Смузи','Детокс'].map((t,i) => (
            <div key={t} style={{
              padding:'8px 14px', borderRadius: 999, fontSize: 12, fontWeight: 800, whiteSpace:'nowrap',
              background: i === 0 ? '#1B3A2D' : '#fff',
              color: i === 0 ? '#fff' : '#1B3A2D',
              border: i === 0 ? 'none' : '1px solid #E3ECE1',
            }}>{t}</div>
          ))}
        </div>
      </div>

      {/* filter row */}
      <div style={{ display:'flex', gap: 8, padding:'10px 20px', flexWrap:'wrap' }}>
        {['До 400 ккал','Веган','Без глютена','Высокий белок'].map(t => (
          <span key={t} style={{ padding:'6px 10px', borderRadius: 999, background:'#EEF6EC', fontSize: 11, fontWeight: 700, color:'#2E7D4C' }}>✓ {t}</span>
        ))}
      </div>

      {/* grid */}
      <div style={{ padding:'4px 20px', display:'grid', gridTemplateColumns:'1fr 1fr', gap: 12 }}>
        {DISHES.map(d => (
          <div key={d.id} style={{ background:'#fff', borderRadius: 18, overflow:'hidden', boxShadow:'0 6px 16px -14px rgba(27,58,45,0.25)' }}>
            <div style={{ position:'relative' }}>
              <Plate variant={d.v} size="100%"/>
              <div style={{ position:'absolute', top: 8, left: 8 }}>
                <span className="pill-kcal" style={{ background:'#1B3A2D', color:'#fff', fontSize: 10 }}>🔥 {d.k}</span>
              </div>
            </div>
            <div style={{ padding: 10 }}>
              <div style={{ fontWeight: 800, fontSize: 13, lineHeight: 1.2 }}>{d.n}</div>
              <div style={{ fontSize: 10.5, color:'#6B8F71', marginTop: 2, minHeight: 13 }}>{d.s}</div>
              <div style={{ display:'flex', gap: 4, marginTop: 5, flexWrap:'wrap' }}>
                <span style={{ fontSize: 9, fontWeight: 800, padding:'2px 5px', borderRadius: 5, background:'rgba(58,158,95,0.1)', color:'#1B3A2D' }}>🔥 {d.k}</span>
                <span style={{ fontSize: 9, fontWeight: 700, padding:'2px 5px', borderRadius: 5, background:'rgba(74,189,232,0.12)', color:'#116B90' }}>Пр 24г</span>
                <span style={{ fontSize: 9, fontWeight: 700, padding:'2px 5px', borderRadius: 5, background:'rgba(249,199,79,0.15)', color:'#7A5C00' }}>Уг 38г</span>
              </div>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginTop: 8 }}>
                <span style={{ fontWeight: 800, fontSize: 14 }}>{d.p}₸</span>
                <button style={{ width: 28, height: 28, borderRadius: 9, background:'linear-gradient(135deg,#3A9E5F,#8BC34A)', border: 0, color:'#fff', display:'grid', placeItems:'center' }}>
                  <Icon d={I.plus} size={15} stroke="#fff" sw={2.5}/>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <TabBar active="menu"/>
  </Phone>
);

// ─── DISH DETAIL ───
const ClientDish = () => (
  <Phone label="Блюдо">
    <div style={{ height:'100%', overflow:'auto', paddingBottom: 100 }} className="no-sb">
      {/* photo area */}
      <div style={{ position:'relative' }}>
        <div style={{ height: 300, background:'linear-gradient(135deg,#E9F3DB,#CFE4C5)' }}>
          <Plate variant="bowl" size="100%"/>
        </div>
        <div style={{ position:'absolute', top: 16, left: 16, right: 16, display:'flex', justifyContent:'space-between' }}>
          <div style={{ width: 40, height: 40, borderRadius: 14, background:'rgba(255,255,255,0.9)', backdropFilter:'blur(8px)', display:'grid', placeItems:'center' }}>
            <Icon d={I.chevL} size={18}/>
          </div>
          <div style={{ width: 40, height: 40, borderRadius: 14, background:'rgba(255,255,255,0.9)', backdropFilter:'blur(8px)', display:'grid', placeItems:'center' }}>
            <Icon d={I.heart} size={18} stroke="#E07070" fill="#E07070"/>
          </div>
        </div>
      </div>

      <div style={{ background:'#F7FAF5', borderRadius:'32px 32px 0 0', marginTop: -24, padding: '22px 24px 24px', position:'relative' }}>
        <div style={{ display:'flex', gap: 6, marginBottom: 8 }}>
          <span className="chip">🥗 Поке</span>
          <span className="chip">🌾 Без глютена</span>
          <span className="chip" style={{ background:'#FFF6DF', color:'#8A6A00' }}>⭐ 4.9</span>
        </div>
        <h1 className="h-title" style={{ fontSize: 26, margin: '6px 0 2px', fontWeight: 700, lineHeight: 1.15 }}>Поке с лососем</h1>
        <p style={{ fontSize: 13, color:'#6B8F71', margin: '6px 0 16px', lineHeight: 1.5 }}>
          Свежий лосось холодного копчения, рис с кунжутом, эдамаме, авокадо, маринованная морковь. Соус — имбирный терияки.
        </p>

        {/* BJU */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr', gap: 8, background:'#fff', borderRadius: 18, padding: 14 }}>
          {[
            { v:520, l:'ккал', c:'#3A9E5F' },
            { v:'32г', l:'белки', c:'#4ABDE8' },
            { v:'45г', l:'углев.', c:'#F9C74F' },
            { v:'18г', l:'жиры', c:'#E07070' },
          ].map(b => (
            <div key={b.l} style={{ textAlign:'center' }}>
              <div style={{ fontWeight: 800, fontSize: 17, color: b.c }}>{b.v}</div>
              <div style={{ fontSize: 10, color:'#6B8F71', fontWeight: 700, textTransform:'uppercase', letterSpacing: 0.4, marginTop: 2 }}>{b.l}</div>
            </div>
          ))}
        </div>

        {/* ingredients */}
        <h3 className="h-title" style={{ fontSize: 15, margin: '20px 0 10px', fontWeight: 700 }}>Состав</h3>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 8 }}>
          {[
            { e:'🐟', n:'Лосось' },
            { e:'🍚', n:'Рис' },
            { e:'🥑', n:'Авокадо' },
            { e:'🫛', n:'Эдамаме' },
          ].map(i => (
            <div key={i.n} style={{ background:'#fff', borderRadius: 14, padding: '10px 6px', textAlign:'center' }}>
              <div style={{ fontSize: 22 }}>{i.e}</div>
              <div style={{ fontSize: 10, fontWeight: 700, marginTop: 2 }}>{i.n}</div>
            </div>
          ))}
        </div>

        {/* add-ons */}
        <h3 className="h-title" style={{ fontSize: 15, margin: '20px 0 10px', fontWeight: 700 }}>Добавить</h3>
        {[
          { n:'Двойная порция лосося', p:'+450₸', on:true },
          { n:'Авокадо', p:'+200₸' },
          { n:'Соус терияки', p:'+100₸' },
        ].map(a => (
          <div key={a.n} style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding: '12px 14px', background:'#fff', borderRadius: 14, marginBottom: 8 }}>
            <div style={{ display:'flex', alignItems:'center', gap: 10 }}>
              <div style={{ width: 20, height: 20, borderRadius: 6, border: `2px solid ${a.on ? '#3A9E5F' : '#D1E3C4'}`, background: a.on ? '#3A9E5F' : '#fff', display:'grid', placeItems:'center' }}>
                {a.on && <Icon d={I.check} size={12} stroke="#fff" sw={3}/>}
              </div>
              <span style={{ fontWeight: 700, fontSize: 13 }}>{a.n}</span>
            </div>
            <span style={{ fontWeight: 800, fontSize: 13, color:'#3A9E5F' }}>{a.p}</span>
          </div>
        ))}
      </div>

      {/* sticky CTA */}
      <div style={{ position:'absolute', bottom: 0, left: 0, right: 0, padding: '12px 20px 18px', background:'linear-gradient(to top, #F7FAF5 70%, rgba(247,250,245,0))' }}>
        <div style={{ display:'flex', gap: 10, alignItems:'center' }}>
          <div style={{ display:'flex', alignItems:'center', background:'#fff', borderRadius: 14, padding: 4, gap: 4 }}>
            <button style={{ width: 36, height: 36, borderRadius: 10, background:'#EEF6EC', border: 0, display:'grid', placeItems:'center' }}>
              <Icon d={I.minus} size={16} sw={2.5}/>
            </button>
            <span style={{ minWidth: 24, textAlign:'center', fontWeight: 800 }}>1</span>
            <button style={{ width: 36, height: 36, borderRadius: 10, background:'linear-gradient(135deg,#3A9E5F,#8BC34A)', border: 0, color:'#fff', display:'grid', placeItems:'center' }}>
              <Icon d={I.plus} size={16} stroke="#fff" sw={2.5}/>
            </button>
          </div>
          <button className="btn-primary" style={{ flex: 1, padding: 14, display:'flex', alignItems:'center', justifyContent:'space-between' }}>
            <span>Добавить в корзину</span>
            <span>1 940₸</span>
          </button>
        </div>
      </div>
    </div>
  </Phone>
);

// ─── CART ───
const ClientCart = () => {
  const items = [
    { n:'Поке с лососем', s:'+ двойная порция', p:1940, q:1, v:'bowl' },
    { n:'Фитнес-салат', s:'Без лука', p:1190, q:2, v:'salad' },
    { n:'Ягодный смузи', s:'Малина, банан', p:690, q:1, v:'smoothie' },
  ];
  const sub = items.reduce((a,b) => a + b.p*b.q, 0);
  return (
    <Phone label="Корзина">
      <div style={{ height:'100%', overflow:'auto', paddingBottom: 140 }} className="no-sb">
        <div style={{ padding: '14px 20px' }}>
          <div style={{ display:'flex', alignItems:'center', gap: 12 }}>
            <div style={{ width: 38, height: 38, borderRadius: 12, background:'#fff', display:'grid', placeItems:'center' }}>
              <Icon d={I.chevL} size={18}/>
            </div>
            <div>
              <h2 className="h-title" style={{ fontSize: 22, margin: 0, fontWeight: 700 }}>Корзина</h2>
              <div style={{ fontSize: 12, color:'#6B8F71', marginTop: 1 }}>{items.length} блюда · 1 200 ккал</div>
            </div>
          </div>
        </div>

        {/* delivery card */}
        <div style={{ margin: '0 20px 14px', background:'#fff', borderRadius: 18, padding: 14, display:'flex', alignItems:'center', gap: 12 }}>
          <div style={{ width: 40, height: 40, borderRadius: 12, background:'#EEF6EC', display:'grid', placeItems:'center' }}>
            <Icon d={I.pin} size={18} stroke="#3A9E5F"/>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, color:'#6B8F71', fontWeight: 700 }}>ДОСТАВКА</div>
            <div style={{ fontWeight: 800, fontSize: 13, marginTop: 2 }}>Абая 150, кв. 24 · ~35 мин</div>
          </div>
          <Icon d={I.chev} size={16} stroke="#6B8F71"/>
        </div>

        {/* items */}
        <div style={{ padding: '0 20px' }}>
          {items.map((it, i) => (
            <div key={i} style={{ background:'#fff', borderRadius: 18, padding: 12, marginBottom: 10, display:'flex', gap: 12, position:'relative' }}>
              <div style={{ width: 72, height: 72, borderRadius: 14, overflow:'hidden' }}>
                <Plate variant={it.v} size="100%"/>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 800, fontSize: 14 }}>{it.n}</div>
                <div style={{ fontSize: 11, color:'#6B8F71', marginTop: 2 }}>{it.s}</div>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginTop: 8 }}>
                  <span style={{ fontWeight: 800, fontSize: 14, color:'#1B3A2D' }}>{(it.p*it.q).toLocaleString('ru')}₸</span>
                  <div style={{ display:'flex', alignItems:'center', gap: 8, background:'#F7FAF5', borderRadius: 10, padding: 3 }}>
                    <button style={{ width: 24, height: 24, borderRadius: 7, background:'#fff', border: 0, display:'grid', placeItems:'center' }}>
                      <Icon d={I.minus} size={12} sw={2.5}/>
                    </button>
                    <span style={{ fontWeight: 800, fontSize: 13, minWidth: 14, textAlign:'center' }}>{it.q}</span>
                    <button style={{ width: 24, height: 24, borderRadius: 7, background:'#3A9E5F', border: 0, color:'#fff', display:'grid', placeItems:'center' }}>
                      <Icon d={I.plus} size={12} stroke="#fff" sw={2.5}/>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* promo */}
        <div style={{ margin: '8px 20px 0', padding: 14, background:'linear-gradient(135deg, rgba(58,158,95,0.08), rgba(139,195,74,0.08))', border:'1px dashed #8BC34A', borderRadius: 16, display:'flex', gap: 10, alignItems:'center' }}>
          <div style={{ fontSize: 22 }}>🎟</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 800, fontSize: 13 }}>Промокод</div>
            <div style={{ fontSize: 11, color:'#6B8F71' }}>Введите код — получите бонусы</div>
          </div>
          <span style={{ color:'#3A9E5F', fontWeight: 800, fontSize: 13 }}>Применить</span>
        </div>

        {/* totals */}
        <div style={{ margin: '14px 20px 0' }}>
          {[
            { l:'Подытог', v:`${sub.toLocaleString('ru')}₸` },
            { l:'Доставка', v:'Бесплатно', green: true },
            { l:'Бонусы', v:'−200₸', green: true },
          ].map(r => (
            <div key={r.l} style={{ display:'flex', justifyContent:'space-between', padding:'6px 0', fontSize: 13 }}>
              <span style={{ color:'#6B8F71' }}>{r.l}</span>
              <span style={{ fontWeight: 700, color: r.green ? '#3A9E5F' : '#1B3A2D' }}>{r.v}</span>
            </div>
          ))}
        </div>

        {/* cta */}
        <div style={{ position:'absolute', bottom: 0, left: 0, right: 0, padding: '12px 20px 18px', background:'#F7FAF5', borderTop:'1px solid #E3ECE1' }}>
          <button className="btn-primary" style={{ width:'100%', padding: 16, display:'flex', alignItems:'center', justifyContent:'space-between', fontSize: 15 }}>
            <span>Оформить заказ</span>
            <span>{(sub-200).toLocaleString('ru')}₸</span>
          </button>
        </div>
      </div>
    </Phone>
  );
};

// ─── CHECKOUT ───
const ClientCheckout = () => (
  <Phone label="Оформление">
    <div style={{ height:'100%', overflow:'auto', paddingBottom: 100 }} className="no-sb">
      <div style={{ padding: '14px 20px 6px' }}>
        <div style={{ display:'flex', alignItems:'center', gap: 12 }}>
          <div style={{ width: 38, height: 38, borderRadius: 12, background:'#fff', display:'grid', placeItems:'center' }}>
            <Icon d={I.chevL} size={18}/>
          </div>
          <h2 className="h-title" style={{ fontSize: 20, margin: 0, fontWeight: 700 }}>Оформление</h2>
        </div>
      </div>

      {/* address block */}
      <div style={{ padding: '12px 20px' }}>
        <div style={{ fontSize: 11, color:'#6B8F71', fontWeight: 800, letterSpacing: 0.6, textTransform:'uppercase', marginBottom: 8 }}>Адрес доставки</div>
        <div style={{ background:'#fff', borderRadius: 18, padding: 4, overflow:'hidden' }}>
          <MiniMap h={120}/>
          <div style={{ padding: 12, display:'flex', gap: 10 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background:'#EEF6EC', display:'grid', placeItems:'center' }}>
              <Icon d={I.pin} size={16} stroke="#3A9E5F"/>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, fontSize: 13 }}>Абая 150, кв. 24</div>
              <div style={{ fontSize: 11, color:'#6B8F71' }}>Домофон 24К · Этаж 8</div>
            </div>
            <span style={{ color:'#3A9E5F', fontWeight: 800, fontSize: 12, alignSelf:'center' }}>Изменить</span>
          </div>
        </div>
      </div>

      {/* delivery time */}
      <div style={{ padding: '4px 20px' }}>
        <div style={{ fontSize: 11, color:'#6B8F71', fontWeight: 800, letterSpacing: 0.6, textTransform:'uppercase', marginBottom: 8 }}>Время доставки</div>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 10 }}>
          <div style={{ background:'linear-gradient(135deg,#3A9E5F,#8BC34A)', color:'#fff', borderRadius: 16, padding: 14 }}>
            <div style={{ fontSize: 11, fontWeight: 700, opacity: 0.9 }}>КАК МОЖНО СКОРЕЕ</div>
            <div style={{ fontWeight: 800, fontSize: 18, marginTop: 4 }}>~35 мин</div>
          </div>
          <div style={{ background:'#fff', borderRadius: 16, padding: 14 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color:'#6B8F71' }}>КО ВРЕМЕНИ</div>
            <div style={{ fontWeight: 800, fontSize: 14, marginTop: 4, color:'#1B3A2D' }}>Выбрать время →</div>
          </div>
        </div>
      </div>

      {/* payment */}
      <div style={{ padding: '14px 20px 0' }}>
        <div style={{ fontSize: 11, color:'#6B8F71', fontWeight: 800, letterSpacing: 0.6, textTransform:'uppercase', marginBottom: 8 }}>Оплата</div>
        {[
          { ic:I.card, n:'Kaspi •• 4821', sub:'Основная карта', on:true },
          { ic:I.wallet, n:'Apple Pay', sub:'Быстрая оплата' },
          { ic:I.wallet, n:'Наличными курьеру', sub:'Только крупные купюры' },
        ].map((p,i) => (
          <div key={i} style={{ background:'#fff', borderRadius: 14, padding: 12, marginBottom: 8, display:'flex', alignItems:'center', gap: 12, border: p.on ? '2px solid #3A9E5F' : '2px solid transparent' }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background:'#EEF6EC', display:'grid', placeItems:'center' }}>
              <Icon d={p.ic} size={16} stroke="#3A9E5F"/>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, fontSize: 13 }}>{p.n}</div>
              <div style={{ fontSize: 11, color:'#6B8F71' }}>{p.sub}</div>
            </div>
            <div style={{ width: 20, height: 20, borderRadius:'50%', border: `2px solid ${p.on ? '#3A9E5F' : '#D1E3C4'}`, display:'grid', placeItems:'center' }}>
              {p.on && <div style={{ width: 10, height: 10, borderRadius:'50%', background:'#3A9E5F' }}/>}
            </div>
          </div>
        ))}
      </div>

      {/* note */}
      <div style={{ padding: '14px 20px 0' }}>
        <div style={{ fontSize: 11, color:'#6B8F71', fontWeight: 800, letterSpacing: 0.6, textTransform:'uppercase', marginBottom: 8 }}>Комментарий курьеру</div>
        <div style={{ background:'#fff', borderRadius: 14, padding: 12, fontSize: 13, color:'#6B8F71' }}>
          Оставьте у двери, не звоните в звонок
        </div>
      </div>

      {/* cta */}
      <div style={{ position:'absolute', bottom: 0, left: 0, right: 0, padding: '12px 20px 18px', background:'#F7FAF5', borderTop:'1px solid #E3ECE1' }}>
        <div style={{ display:'flex', justifyContent:'space-between', marginBottom: 10, fontSize: 13 }}>
          <span style={{ color:'#6B8F71' }}>К оплате</span>
          <span style={{ fontWeight: 800, fontSize: 16 }}>5 010₸</span>
        </div>
        <button className="btn-primary" style={{ width:'100%', padding: 16 }}>Оплатить и заказать</button>
      </div>
    </div>
  </Phone>
);

// ─── ORDER TRACKER ───
const ClientTracker = () => (
  <Phone label="Отслеживание">
    <div style={{ height:'100%', display:'flex', flexDirection:'column' }}>
      {/* map */}
      <div style={{ position:'relative', height: 300 }}>
        <MiniMap h={300}/>
        <div style={{ position:'absolute', top: 14, left: 14, right: 14, display:'flex', justifyContent:'space-between' }}>
          <div style={{ width: 40, height: 40, borderRadius: 14, background:'#fff', display:'grid', placeItems:'center', boxShadow:'0 4px 10px -4px rgba(0,0,0,0.2)' }}>
            <Icon d={I.chevL} size={18}/>
          </div>
          <div style={{ padding:'10px 14px', background:'#fff', borderRadius: 14, boxShadow:'0 4px 10px -4px rgba(0,0,0,0.2)', fontWeight:800, fontSize: 12 }}>
            📍 Карта
          </div>
        </div>
      </div>

      {/* card pull-up */}
      <div style={{ flex: 1, background:'#F7FAF5', borderRadius:'28px 28px 0 0', marginTop: -28, padding: 20, overflow:'auto' }} className="no-sb">
        <div style={{ width: 40, height: 4, borderRadius: 2, background:'#D1E3C4', margin: '0 auto 16px' }}/>

        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
          <div>
            <div style={{ fontSize: 11, color:'#6B8F71', fontWeight: 800, letterSpacing: 0.6, textTransform:'uppercase' }}>Заказ #4821</div>
            <h2 className="h-title" style={{ fontSize: 22, margin: '4px 0 0', fontWeight: 700 }}>В пути к вам</h2>
            <div style={{ fontSize: 13, color:'#6B8F71', marginTop: 4 }}>Прибытие ~12 мин</div>
          </div>
          <span className="pill-status s-way">В пути</span>
        </div>

        {/* progress vertical */}
        <div style={{ marginTop: 20, background:'#fff', borderRadius: 18, padding: 16 }}>
          {[
            { t:'Принят', d:'12:05', on: true },
            { t:'Готовится', d:'12:12', on: true },
            { t:'В пути', d:'Сейчас', cur: true },
            { t:'Доставлен', d:'~12:45', on: false },
          ].map((s, i, arr) => (
            <div key={i} style={{ display:'flex', gap: 14, position:'relative', paddingBottom: i === arr.length-1 ? 0 : 16 }}>
              {i < arr.length - 1 && (
                <div style={{ position:'absolute', left: 9, top: 22, bottom: 0, width: 2, background: s.on ? '#3A9E5F' : '#E3ECE1' }}/>
              )}
              <div style={{
                width: 20, height: 20, borderRadius:'50%',
                background: s.cur ? '#fff' : (s.on ? '#3A9E5F' : '#E3ECE1'),
                border: s.cur ? '3px solid #3A9E5F' : 'none',
                display:'grid', placeItems:'center', flexShrink: 0,
                boxShadow: s.cur ? '0 0 0 5px rgba(58,158,95,0.2)' : 'none',
              }}>
                {s.on && !s.cur && <Icon d={I.check} size={12} stroke="#fff" sw={3}/>}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: s.cur ? 800 : 700, fontSize: 14, color: s.on ? '#1B3A2D' : '#8FA69A' }}>{s.t}</div>
                <div style={{ fontSize: 11, color:'#6B8F71', marginTop: 1 }}>{s.d}</div>
              </div>
            </div>
          ))}
        </div>

        {/* courier */}
        <div style={{ marginTop: 14, background:'#fff', borderRadius: 18, padding: 14, display:'flex', alignItems:'center', gap: 12 }}>
          <div style={{ width: 48, height: 48, borderRadius:'50%', background:'linear-gradient(135deg,#8BC34A,#3A9E5F)', display:'grid', placeItems:'center', color:'#fff', fontWeight:800, fontSize: 18 }}>АН</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, color:'#6B8F71', fontWeight: 700 }}>ВАШ КУРЬЕР</div>
            <div style={{ fontWeight: 800, fontSize: 14 }}>Асхат Н. · ⭐ 4.9</div>
          </div>
          <div style={{ width: 44, height: 44, borderRadius: 14, background:'#EEF6EC', display:'grid', placeItems:'center' }}>
            <Icon d={I.phone} size={18} stroke="#3A9E5F"/>
          </div>
        </div>
      </div>
    </div>
  </Phone>
);

// ─── ORDER HISTORY ───
const ClientHistory = () => {
  const hist = [
    { id:4821, d:'Сегодня · 12:05', st:'way', stl:'В пути', total:5010, items:'Поке, Салат, Смузи', v:'bowl' },
    { id:4798, d:'Вчера · 19:40', st:'done', stl:'Доставлен', total:3180, items:'Фитнес-салат ×2', v:'salad' },
    { id:4755, d:'24 апр · 13:20', st:'done', stl:'Доставлен', total:1890, items:'Овсянка, Смузи', v:'oats' },
    { id:4712, d:'22 апр · 18:00', st:'cxl', stl:'Отменён', total:2400, items:'Курица с овощами', v:'chicken' },
    { id:4689, d:'20 апр · 12:15', st:'done', stl:'Доставлен', total:4100, items:'Тост, Суп, Смузи', v:'toast' },
  ];
  return (
    <Phone label="История">
      <div style={{ height:'100%', overflow:'auto', paddingBottom: 80 }} className="no-sb">
        <div style={{ padding: '14px 20px 10px' }}>
          <div style={{ display:'flex', alignItems:'center', gap: 12 }}>
            <div style={{ width: 38, height: 38, borderRadius: 12, background:'#fff', display:'grid', placeItems:'center' }}>
              <Icon d={I.chevL} size={18}/>
            </div>
            <h2 className="h-title" style={{ fontSize: 22, margin: 0, fontWeight: 700 }}>Мои заказы</h2>
          </div>
        </div>

        {/* stats */}
        <div style={{ padding:'10px 20px' }}>
          <div style={{ background:'linear-gradient(135deg,#1B3A2D,#2E5A40)', borderRadius: 20, padding: 18, color:'#fff', position:'relative', overflow:'hidden' }}>
            <div style={{ position:'absolute', right: -30, top: -30, width: 140, height: 140, borderRadius:'50%', background:'rgba(139,195,74,0.2)' }}/>
            <div style={{ fontSize: 11, opacity: 0.7, fontWeight: 700, letterSpacing: 1 }}>СТАТИСТИКА ЗА МЕСЯЦ</div>
            <div style={{ display:'flex', gap: 24, marginTop: 12, position:'relative' }}>
              <div>
                <div className="h-title" style={{ fontSize: 26, fontWeight: 700 }}>12</div>
                <div style={{ fontSize: 11, opacity: 0.7, marginTop: 2 }}>заказов</div>
              </div>
              <div>
                <div className="h-title" style={{ fontSize: 26, fontWeight: 700 }}>42 100₸</div>
                <div style={{ fontSize: 11, opacity: 0.7, marginTop: 2 }}>потрачено</div>
              </div>
              <div>
                <div className="h-title" style={{ fontSize: 26, fontWeight: 700, color:'#8BC34A' }}>−2.1</div>
                <div style={{ fontSize: 11, opacity: 0.7, marginTop: 2 }}>кг · цель</div>
              </div>
            </div>
          </div>
        </div>

        {/* filters */}
        <div style={{ display:'flex', gap: 8, padding:'10px 20px', overflowX:'auto' }} className="no-sb">
          {['Все','Активные','Доставленные','Отменённые'].map((t,i) => (
            <div key={t} style={{ padding:'7px 12px', borderRadius: 999, fontSize: 12, fontWeight: 800, background: i===0?'#1B3A2D':'#fff', color: i===0?'#fff':'#1B3A2D', border: i===0?'none':'1px solid #E3ECE1', whiteSpace:'nowrap' }}>{t}</div>
          ))}
        </div>

        {/* list */}
        <div style={{ padding:'4px 20px' }}>
          {hist.map(h => (
            <div key={h.id} style={{ background:'#fff', borderRadius: 18, padding: 14, marginBottom: 10, display:'flex', gap: 12 }}>
              <div style={{ width: 60, height: 60, borderRadius: 14, overflow:'hidden' }}>
                <Plate variant={h.v} size="100%"/>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 13 }}>Заказ #{h.id}</div>
                    <div style={{ fontSize: 11, color:'#6B8F71', marginTop: 1 }}>{h.d}</div>
                  </div>
                  <span className={`pill-status s-${h.st}`}>{h.stl}</span>
                </div>
                <div style={{ fontSize: 12, color:'#1B3A2D', marginTop: 6 }}>{h.items}</div>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginTop: 8 }}>
                  <span style={{ fontWeight: 800, fontSize: 14 }}>{h.total.toLocaleString('ru')}₸</span>
                  <span style={{ fontSize: 12, fontWeight: 800, color:'#3A9E5F' }}>Повторить →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Phone>
  );
};

// ─── PROFILE ───
const ClientProfile = () => (
  <Phone label="Профиль">
    <div style={{ height:'100%', overflow:'auto', paddingBottom: 80 }} className="no-sb">
      <div style={{ position:'relative', padding:'16px 20px 60px', background:'linear-gradient(160deg,#EEF6EC 0%,#F7FAF5 100%)' }}>
        <div style={{ position:'absolute', top: -20, right: -40 }}>
          <Blob color="#CFE4C5" style={{ width: 180, height: 180, opacity: 0.6 }}/>
        </div>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', position:'relative' }}>
          <h2 className="h-title" style={{ fontSize: 22, margin: 0, fontWeight: 700 }}>Профиль</h2>
          <div style={{ width: 38, height: 38, borderRadius: 12, background:'#fff', display:'grid', placeItems:'center' }}>
            <Icon d={I.set} size={18}/>
          </div>
        </div>

        <div style={{ display:'flex', alignItems:'center', gap: 14, marginTop: 18, position:'relative' }}>
          <div style={{ width: 72, height: 72, borderRadius:'50%', background:'linear-gradient(135deg,#8BC34A,#3A9E5F)', display:'grid', placeItems:'center', color:'#fff', fontWeight:800, fontSize: 26, border:'4px solid #fff' }}>ДА</div>
          <div>
            <div className="h-title" style={{ fontSize: 20, fontWeight: 700 }}>Диана А.</div>
            <div style={{ fontSize: 12, color:'#6B8F71', marginTop: 2 }}>+7 707 123 45 67</div>
            <div style={{ display:'flex', gap: 5, marginTop: 6 }}>
              <span style={{ padding:'3px 8px', borderRadius: 999, background:'#1B3A2D', color:'#fff', fontSize: 10, fontWeight: 800 }}>⭐ Gold</span>
              <span style={{ padding:'3px 8px', borderRadius: 999, background:'#fff', color:'#3A9E5F', fontSize: 10, fontWeight: 800 }}>820 ₿</span>
            </div>
          </div>
        </div>
      </div>

      {/* goal card */}
      <div style={{ margin: '-40px 20px 0', background:'#fff', borderRadius: 18, padding: 16, boxShadow:'0 10px 24px -16px rgba(27,58,45,0.2)' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <div style={{ fontSize: 11, color:'#6B8F71', fontWeight: 800, letterSpacing: 0.5, textTransform:'uppercase' }}>Цель: похудение</div>
          <span style={{ fontSize: 12, color:'#3A9E5F', fontWeight: 800 }}>Изменить</span>
        </div>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginTop: 8 }}>
          <div className="h-title" style={{ fontSize: 22, fontWeight: 700 }}>1 720 <span style={{ fontSize: 12, color:'#6B8F71', fontWeight: 700 }}>/ 1 800 ккал</span></div>
          <div style={{ fontSize: 11, color:'#6B8F71', fontWeight: 700 }}>Сегодня</div>
        </div>
        <div style={{ marginTop: 8, height: 8, borderRadius: 4, background:'#EEF6EC', overflow:'hidden' }}>
          <div style={{ width:'95%', height:'100%', background:'linear-gradient(90deg,#3A9E5F,#8BC34A)', borderRadius: 4 }}/>
        </div>
        <div style={{ display:'flex', gap: 14, marginTop: 12 }}>
          {[
            { l:'Белки', v:'88г', max:'/100', c:'#4ABDE8' },
            { l:'Углев.', v:'180г', max:'/220', c:'#F9C74F' },
            { l:'Жиры', v:'55г', max:'/60', c:'#E07070' },
          ].map(m => (
            <div key={m.l} style={{ flex: 1 }}>
              <div style={{ fontSize: 10, color:'#6B8F71', fontWeight: 700 }}>{m.l}</div>
              <div style={{ fontWeight: 800, fontSize: 12, marginTop: 2 }}>{m.v}<span style={{ color:'#6B8F71', fontWeight: 600 }}>{m.max}</span></div>
              <div style={{ marginTop: 4, height: 4, borderRadius: 2, background:'#EEF6EC' }}>
                <div style={{ width:'80%', height:'100%', background: m.c, borderRadius: 2 }}/>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* menu */}
      <div style={{ margin: '16px 20px 0', background:'#fff', borderRadius: 18, overflow:'hidden' }}>
        {[
          { ic:I.pin, t:'Адреса', s:'3 сохранённых' },
          { ic:I.card, t:'Способы оплаты', s:'2 карты' },
          { ic:I.heart, t:'Избранные блюда', s:'12' },
          { ic:I.bell, t:'Уведомления', s:'Push, SMS' },
          { ic:I.star, t:'Пригласить друга', s:'500₸ бонус' },
        ].map((r, i, arr) => (
          <div key={i} style={{ display:'flex', alignItems:'center', gap: 12, padding: 14, borderBottom: i === arr.length-1 ? 'none' : '1px solid #EEF6EC' }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background:'#EEF6EC', display:'grid', placeItems:'center' }}>
              <Icon d={r.ic} size={16} stroke="#3A9E5F"/>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, fontSize: 13 }}>{r.t}</div>
              <div style={{ fontSize: 11, color:'#6B8F71' }}>{r.s}</div>
            </div>
            <Icon d={I.chev} size={16} stroke="#6B8F71"/>
          </div>
        ))}
      </div>
    </div>
    <TabBar active="usr"/>
  </Phone>
);

// ─── LOGIN ───
const ClientLogin = () => (
  <Phone label="Вход">
    <div style={{ height:'100%', overflow:'auto', padding:'44px 24px 28px' }} className="no-sb">
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom: 6 }}>
        <h1 className="h-title" style={{ fontSize: 32, margin: 0, fontWeight: 700 }}>Вход</h1>
        <div style={{ width: 36, height: 36, borderRadius:'50%', background:'#E5E7EB', display:'grid', placeItems:'center', cursor:'pointer' }}>
          <Icon d={I.close} size={16} stroke="#6B7280"/>
        </div>
      </div>
      <div style={{ fontSize: 13, color:'#6B8F71', marginBottom: 22 }}>
        У вас еще нету аккаунта?{' '}
        <span style={{ color:'#3A9E5F', fontWeight: 800, textDecoration:'underline' }}>Зарегистрируйтесь</span>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 10, marginBottom: 22 }}>
        <button style={{ display:'flex', alignItems:'center', justifyContent:'center', gap: 8, padding: 14, background:'#EA4335', borderRadius: 14, border: 0, color:'#fff', fontWeight: 800, fontSize: 14, fontFamily:'inherit', cursor:'pointer' }}>
          <span style={{ fontWeight: 900, fontSize: 16 }}>G</span> Google
        </button>
        <button style={{ display:'flex', alignItems:'center', justifyContent:'center', gap: 8, padding: 14, background:'#1877F2', borderRadius: 14, border: 0, color:'#fff', fontWeight: 800, fontSize: 14, fontFamily:'inherit', cursor:'pointer' }}>
          <span style={{ fontWeight: 900, fontSize: 16 }}>f</span> Facebook
        </button>
      </div>

      {[
        { ph:'Введите e-mail', req: false },
        { ph:'Введите пароль', req: true },
      ].map((f, i) => (
        <div key={i} style={{ background:'#F3F4F6', borderRadius: 14, padding:'15px 16px', marginBottom: 10, fontSize: 14, color:'#9CA3AF', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <span>{f.ph}</span>
          {f.req && <span style={{ color:'#E07070', fontWeight: 800 }}>*</span>}
        </div>
      ))}

      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', margin:'6px 0 24px' }}>
        <div style={{ display:'flex', alignItems:'center', gap: 8, fontSize: 13, color:'#1B3A2D' }}>
          <div style={{ width: 20, height: 20, borderRadius: 5, background:'#3A9E5F', display:'grid', placeItems:'center' }}>
            <Icon d={I.check} size={12} stroke="#fff" sw={3}/>
          </div>
          Запомнить меня
        </div>
        <span style={{ fontSize: 13, color:'#8A6A00', fontWeight: 700, textDecoration:'underline', cursor:'pointer' }}>Забыли пароль?</span>
      </div>

      <button className="btn-primary" style={{ width:'100%', padding: 16, fontSize: 15, letterSpacing: 0.8 }}>ВОЙТИ</button>
    </div>
  </Phone>
);

// ─── REGISTER ───
const ClientRegister = () => (
  <Phone label="Регистрация">
    <div style={{ height:'100%', overflow:'auto', padding:'44px 24px 28px' }} className="no-sb">
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom: 6 }}>
        <h1 className="h-title" style={{ fontSize: 28, margin: 0, fontWeight: 700 }}>Регистрация</h1>
        <div style={{ width: 36, height: 36, borderRadius:'50%', background:'#E5E7EB', display:'grid', placeItems:'center', cursor:'pointer' }}>
          <Icon d={I.close} size={16} stroke="#6B7280"/>
        </div>
      </div>
      <div style={{ fontSize: 13, color:'#6B8F71', marginBottom: 18 }}>
        У вас уже есть аккаунт?{' '}
        <span style={{ color:'#3A9E5F', fontWeight: 800, textDecoration:'underline' }}>Войдите</span>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 10, marginBottom: 16 }}>
        <button style={{ display:'flex', alignItems:'center', justifyContent:'center', gap: 8, padding: 13, background:'#EA4335', borderRadius: 14, border: 0, color:'#fff', fontWeight: 800, fontSize: 13, fontFamily:'inherit', cursor:'pointer' }}>
          <span style={{ fontWeight: 900 }}>G</span> Google
        </button>
        <button style={{ display:'flex', alignItems:'center', justifyContent:'center', gap: 8, padding: 13, background:'#1877F2', borderRadius: 14, border: 0, color:'#fff', fontWeight: 800, fontSize: 13, fontFamily:'inherit', cursor:'pointer' }}>
          <span style={{ fontWeight: 900 }}>f</span> Facebook
        </button>
      </div>

      {[
        { ph:'Имя фамилия', req: false },
        { ph:'E-mail / Логин', req: true },
        { ph:'Номер телефона', req: true },
        { ph:'Пароль', req: true },
        { ph:'Повторить пароль', req: true },
      ].map((f, i) => (
        <div key={i} style={{ background:'#F3F4F6', borderRadius: 14, padding:'13px 16px', marginBottom: 8, fontSize: 13, color:'#9CA3AF', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <span>{f.ph}</span>
          {f.req && <span style={{ color:'#E07070', fontWeight: 800 }}>*</span>}
        </div>
      ))}

      <div style={{ display:'flex', alignItems:'flex-start', gap: 8, fontSize: 12, color:'#1B3A2D', margin:'10px 0 20px' }}>
        <div style={{ width: 20, height: 20, borderRadius: 5, background:'#3A9E5F', display:'grid', placeItems:'center', flexShrink: 0, marginTop: 1 }}>
          <Icon d={I.check} size={12} stroke="#fff" sw={3}/>
        </div>
        <span>согласен с публичным договором предоставления услуг</span>
      </div>

      <button className="btn-primary" style={{ width:'100%', padding: 16, fontSize: 15, letterSpacing: 0.8 }}>РЕГИСТРАЦИЯ</button>
    </div>
  </Phone>
);

Object.assign(window, {
  Phone, TabBar,
  ClientOnboarding, ClientHome, ClientMenu, ClientDish, ClientCart, ClientCheckout, ClientTracker, ClientHistory, ClientProfile,
  ClientLogin, ClientRegister,
});
