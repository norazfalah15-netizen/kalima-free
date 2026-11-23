/* A1 episode 1 — what is drawn while each sentence is spoken */
(function(){
/* One recipe per spoken line. bg = mood. seq = pictures shown while the line plays; each entry starts at `at`
   (seconds, or 'w:word' = when that word is spoken) and stays until the next entry. */
const it=(p,o,dec,x,y,s)=>({p,o:o||{},dec,x,y,s});
const X={c:[330,340,1.55],l:[172,340,1.15],r:[488,340,1.15]};
const c=(p,o,dec)=>it(p,o,dec,...X.c), L=(p,o,dec)=>it(p,o,dec,...X.l), R=(p,o,dec)=>it(p,o,dec,...X.r);
const T3=(a,b,d)=>[a,b,d].map((q,i)=>({...q,x:[120,330,540][i],y:340,s:.95}));
const T4=(a,b,d,e)=>[a,b,d,e].map((q,i)=>({...q,x:[84,248,412,576][i],y:340,s:.72}));
const T5=(a,b,d,e,g)=>{const s=[a,b,d,e,g],xy=[[118,250],[330,250],[542,250],[222,470],[438,470]];return s.map((q,i)=>({...q,x:xy[i][0],y:xy[i][1],s:.74}))};
const E=(at,...items)=>({at,items:items.flat()});
const pair=(a,b)=>[{...a,x:172,y:340,s:1.15},{...b,x:488,y:340,s:1.15}];
const mini=(p,o,dec,x,y,s)=>it(p,o,dec,x,y,s);

const BG=['neutral','neutral','day','day','neutral','day','day','day','cold','day','hot','cold','cold','cold','warm','cold','hot','hot','hot','day',
 'day','day','day','warm','warm','warm','warm','cold','cold','cold','day','day','day','day','day','cold','night','day','day','day',
 'day','day','day','day','cold','cold','cold','cold','cold','cold','neutral','neutral','rain','rain','dusk','day','dusk','cold','day','day',
 'day','day','dusk','warm','warm','warm','warm','cold','day','day','hot','warm','warm','day','warm','hot','neutral','day','neutral','hot',
 'neutral','warm','cold','cold','day','day','neutral','neutral','neutral'];

const SC=[
/*0*/ [E(0,c('logo'),it('sparkle',{},0,330,340,1.55))],
/*1*/ [E(0,pair({p:'logo'},{p:'q'}))],
/*2*/ [E(0,it('sun',{},0,200,230,1.05),it('cloud',{},0,430,300,1.05),it('wind',{},0,420,150,.5))],
/*3*/ [E(0,it('sun',{},0,330,230,.8),it('cloud',{},0,380,290,.85)), E('w:bus',c('bus')), E('w:work',c('brief')), E('w:home',c('house')), E('w:every',c('globe'))],
/*4*/ [E(0,pair({p:'bubble',o:{side:'L',icon:'bulb',is:.5}},{p:'bubble',o:{side:'R',icon:'bulb',is:.5}})), E('w:together',c('heart')), E('w:friends',pair({p:'heart',o:{}},{p:'heart',o:{}}))],
/*5*/ [E(0,T5(it('sun'),it('rain'),it('snow'),it('thermo',{level:.92}),it('thermo',{level:.1})))],
/*6*/ [E(0,c('radio')), E('w:weather',pair({p:'radio'},{p:'sun'}))],
/*7*/ [E(0,c('radio')), E('w:car',c('car')), E('w:cold',pair({p:'thermo',o:{level:.1}},{p:'snow'})), E('w:week',c('calendar',{week:'all'}))],
/*8*/ [E(0,c('thermo',{level:.1},'q')), E('w:coat',c('coat',{},'check'))],
/*9*/ [E(0,c('calendar',{label:'FEW DAYS',marks:[10,11,12]})), E('w:warm',c('sun')), E('w:hot',pair({p:'thermo',o:{level:.92}},{p:'thermo',o:{level:.1}})), E('w:like',c('q'))],
/*10*/ [E(0,c('sun')), E('w:hot',c('thermo',{level:.95},'cross'))],
/*11*/ [E(0,c('q')), E('w:sure',c('check')), E('w:cold',c('snow')), E('w:winter',c('snow',{},'heart'))],
/*12*/ [E(0,c('snow',{},'heart'))],
/*13*/ [E(0,c('snow')), E('w:air',c('wind',{c:'#7FB6D6'})), E('w:coat',c('coat')), E('w:tea',c('tea')), E('w:garden',c('tree',{v:'snow'}))],
/*14*/ [E(0,c('tea')), E('w:nice',c('heart')), E('w:house',c('window',{warm:true}))],
/*15*/ [E(0,c('thermo',{level:.4})), E('w:cold',c('snow')), E('w:january',c('calendar',{label:'JANUARY',marks:[3,4,5]})), E('w:february',c('calendar',{label:'FEBRUARY',marks:[16,17]}))],
/*16*/ [E(0,c('calendar',{label:'FEW DAYS',marks:[10,11,12]},'q')), E('w:cold',c('snow')), E('w:summer',c('sun',{hot:true})), E('w:hot',c('thermo',{level:.95}))],
/*17*/ [E(0,c('sun',{hot:true})), E('w:thirsty',c('bottle',{level:.05,drops:false})), E('w:ten',c('clock',{mode:'ten'})), E('w:thirsty#2',c('bottle',{level:.05}))],
/*18*/ [E(0,c('sun',{hot:true})), E('w:station',c('train')), E('w:july',c('calendar',{label:'JULY',marks:[8,9,10,11]})), E('w:thirsty',c('bottle',{level:.05})), E('w:advice',c('bulb')), E('w:water',c('bottle',{level:.85},'check'))],
/*19*/ [E(0,c('bulb',{},'check')), E('w:cold',pair({p:'thermo',o:{level:.1}},{p:'coat'})), E('w:hot',pair({p:'thermo',o:{level:.92}},{p:'bottle',o:{level:.85}})), E('w:easy',c('check')), E('w:where',T3(it('phone'),it('news'),it('radio')))],
/*20*/ [E(0,c('phone')), E('w:morning',c('sunrise')), E('w:look',c('phone')), E('w:house',c('door'))],
/*21*/ [E(0,c('sunrise')), E('w:sure',c('q')), E('w:friday',c('calendar',{week:'one',day:5}))],
/*22*/ [E(0,c('check')), E('w:phone',pair({p:'phone'},{p:'clock',o:{mode:'second'}})), E('w:hot',T4(it('thermo',{level:.92}),it('thermo',{level:.1}),it('rain'),it('sun'))), E('w:easy',c('check'))],
/*23*/ [E(0,c('house',{},'heart')), E('w:don\'t',c('phone',{},'cross')), E('w:paper',c('news'))],
/*24*/ [E(0,c('news',{},'q'))],
/*25*/ [E(0,c('news')), E('w:morning',c('sunrise')), E('w:radio',c('radio'))],
/*26*/ [E(0,c('heart')), E('w:paper',pair({p:'news'},{p:'tea'})), E('w:parents',c('house',{},'heart'))],
/*27*/ [E(0,c('house',{},'heart')), E('w:tell',c('bubble',{side:'L',icon:'thermo',io:{level:.2},is:.62,w:130})), E('w:coat',c('bubble',{side:'L',icon:'coat',is:.5,w:130}))],
/*28*/ [E(0,c('bubble',{side:'L',icon:'coat',is:.5,w:130})), E('w:winter',pair({p:'snow'},{p:'bubble',o:{side:'R',icon:'coat',is:.5,w:130}})), E('w:do',c('q'))],
/*29*/ [E(0,c('bubble',{side:'L',icon:'coat',is:.5,w:130})), E('w:forget',c('coat',{},'q'))],
/*30*/ [E(0,c('mag')), E('w:travel',c('mag')), E('w:mountains',pair({p:'mag'},{p:'mountain'}))],
/*31*/ [E(0,c('mag')), E('w:paper',c('mag',{},'check')), E('w:phone',c('phone'))],
/*32*/ [E(0,c('mag')), E('w:love',c('heart')), E('w:month',c('calendar',{label:'MONTHLY',marks:[0,7,14,21,28]})), E('w:train',c('train'))],
/*33*/ [E(0,c('mag')), E('w:idea',c('bulb'))],
/*34*/ [E(0,c('bulb')), E('w:mountains',c('mountain')), E('w:cool',pair({p:'mountain'},{p:'thermo',o:{level:.4}})), E('w:summer',pair({p:'sun'},{p:'thermo',o:{level:.4}}))],
/*35*/ [E(0,c('mountain',{},'check')), E('w:up',pair({p:'mountain'},{p:'arrow',o:{dir:'up'}})), E('w:cold',pair({p:'mountain',o:{snow:true}},{p:'thermo',o:{level:.1}}))],
/*36*/ [E(0,c('moon')), E('w:cold',pair({p:'moon'},{p:'thermo',o:{level:.1}})), E('w:coat',c('coat')), E('w:summer',pair({p:'coat'},{p:'sun'}))],
/*37*/ [E(0,c('mountain')), E('w:down',pair({p:'mountain'},{p:'arrow',o:{dir:'down'}})), E('w:hot',pair({p:'mountain'},{p:'thermo',o:{level:.92}})), E('w:love',c('heart'))],
/*38*/ [E(0,c('mag')), E('w:best',c('star')), E('w:april',c('calendar',{label:'APRIL',marks:[8,9,10]}))],
/*39*/ [E(0,c('calendar',{label:'APRIL',marks:[8,9,10]},'q')), E('w:june',c('calendar',{label:'JUNE',marks:[2,3]})), E('w:august',c('calendar',{label:'AUGUST',marks:[5,6]}))],
/*40*/ [E(0,c('calendar',{label:'APRIL',marks:[8,9,10]})), E('w:trees',c('tree')), E('w:weather',pair({p:'sun'},{p:'thermo',o:{level:.5}}))],
/*41*/ [E(0,c('tree')), E('w:april',pair({p:'tree'},{p:'calendar',o:{label:'APRIL',marks:[8,9,10]}})), E('w:main',c('star'))],
/*42*/ [E(0,c('heart')), E('w:green',c('tree')), E('w:april',pair({p:'tree'},{p:'sparkle'})), E('w:winter',pair({p:'tree',o:{v:'snow'}},{p:'snow'})), E('w:details',c('article')), E('w:interesting',c('star'))],
/*43*/ [E(0,c('article',{},'q')), E('w:interested',c('star'))],
/*44*/ [E(0,c('badge',{n:1})), E('w:mountains',c('mountain')), E('w:weather',c('wx'))],
/*45*/ [E(0,c('wx',{},'q')), E('w:mountain',pair({p:'wx'},{p:'mountain'})), E('w:interesting',c('star')), E('w:who',c('brief',{},'q'))],
/*46*/ [E(0,c('badge',{n:2})), E('w:work',c('brief')), E('w:machines',c('wx')), E('w:hour',c('clock',{mode:'hour'})), E('w:use',c('info'))],
/*47*/ [E(0,c('clock',{mode:'hour'})), E('w:information',c('info')), E('w:want',c('brief',{},'star'))],
/*48*/ [E(0,c('mountain',{snow:true})), E('w:far',pair({p:'mountain',o:{snow:true}},{p:'city'})), E('w:sure',c('q'))],
/*49*/ [E(0,c('check')), E('w:winter',c('snow',{},'heart')), E('w:mountains',c('mountain',{},'heart')), E('w:information',c('info',{},'heart')), E('w:perfect',c('brief',{},'star'))],
/*50*/ [E(0,c('logo')), E('w:listen',pair({p:'phones'},{p:'logo'}))],
/*51*/ [E(0,c('badge',{n:2})), E('w:hear',c('phones'))],
/*52*/ [E(0,c('window',{rain:true,heavy:true})), E('w:strong',c('window',{rain:true,heavy:true}))],
/*53*/ [E(0,c('window',{rain:true})), E('w:six',c('clock',{mode:'six'})), E('w:second',c('badge',{n:2}))],
/*54*/ [E(0,c('badge',{n:2})), E('w:mountains',c('mountain')), E('w:coats',pair({p:'coat'},{p:'sunrise',o:{set:true}}))],
/*55*/ [E(0,pair({p:'coat'},{p:'sun'})), E('w:park',c('tree')), E('w:never',c('coat',{},'cross'))],
/*56*/ [E(0,c('mag')), E('w:hotel',c('hotel')), E('w:milk',c('milk')), E('w:evening',c('moon'))],
/*57*/ [E(0,pair({p:'milk'},{p:'mountain',o:{snow:true}})), E('w:perfect',c('star')), E('w:question',c('q')), E('w:rich',pair({p:'coins'},{p:'sun'}))],
/*58*/ [E(0,c('q')), E('w:think',c('bulb'))],
/*59*/ [E(0,c('sun')), E('w:rich',c('coins')), E('w:money',c('coins',{},'cross')), E('w:nice',pair({p:'sun'},{p:'tree'}))],
/*60*/ [E(0,c('check')), E('w:trees',c('tree')), E('w:sun',c('sun')), E('w:rain',c('rain')), E('w:rich#2',pair({p:'coins'},{p:'coins',o:{},dec:'cross'}))],
/*61*/ [E(0,c('path')), E('w:trees',pair({p:'path'},{p:'tree'})), E('w:rich',c('coins'))],
/*62*/ [E(0,c('check')), E('w:hours',c('clock',{mode:'hours'})), E('w:sun',c('sunrise',{set:true})), E('w:favourite',c('q')), E('w:winter',c('snow'))],
/*63*/ [E(0,pair({p:'house'},{p:'mountain'})), E('w:cats',c('cats')), E('w:warm',pair({p:'cats'},{p:'fire'}))],
/*64*/ [E(0,c('cats')), E('w:sleep',pair({p:'cats'},{p:'zzz'}))],
/*65*/ [E(0,pair({p:'fire'},{p:'cats'})), E('w:never',pair({p:'door'},{p:'snow'})), E('w:happy',c('cats',{},'heart'))],
/*66*/ [E(0,c('bubble',{side:'L',icon:'sun',is:.5,w:130})), E('w:grandparents',pair({p:'house'},{p:'bubble',o:{side:'R',icon:'cloud',is:.5,w:130}}))],
/*67*/ [E(0,pair({p:'bubble',o:{side:'L',icon:'cloud',is:.5,w:130}},{p:'bubble',o:{side:'R',icon:'sun',is:.5,w:130}})), E('w:mountain',c('mountain',{snow:true})), E('w:morning',c('sunrise')), E('w:cold',pair({p:'mountain',o:{snow:true}},{p:'thermo',o:{level:.1}}))],
/*68*/ [E(0,c('star')), E('w:right',c('check'))],
/*69*/ [E(0,c('check')), E('w:birds',pair({p:'tree'},{p:'birds'})), E('w:phone',c('phone',{},'cross'))],
/*70*/ [E(0,c('phones')), E('w:next',c('calendar',{week:'all'})), E('w:hot',c('sun',{hot:true},'q'))],
/*71*/ [E(0,c('library')), E('w:cool',pair({p:'library'},{p:'wind',o:{c:'#7FB6D6'}})), E('w:magazine',c('mag')), E('w:hours',c('clock',{mode:'hours'}))],
/*72*/ [E(0,c('bulb')), E('w:library',pair({p:'library'},{p:'mag'})), E('w:garden',pair({p:'tree'},{p:'moon'}))],
/*73*/ [E(0,c('check')), E('w:summer',pair({p:'sun'},{p:'thermo',o:{level:.4}})), E('w:sit',pair({p:'bench'},{p:'tree'}))],
/*74*/ [E(0,c('bulb')), E('w:rich',c('coins')), E('w:library',c('library',{},'check'))],
/*75*/ [E(0,c('q')), E('w:hot',c('sun',{hot:true})), E('w:water',c('bottle',{level:.85}))],
/*76*/ [E(0,c('bottle',{level:.85},'check')), E('w:long',c('clock',{mode:'hours'})), E('w:show',c('logo')), E('w:live',c('house',{},'q')), E('w:weather',pair({p:'sun'},{p:'cloud'}))],
/*77*/ [E(0,c('thermo',{level:.92},'q')), E('w:cold',c('thermo',{level:.1},'q')), E('w:trees',c('tree',{},'q')), E('w:house',c('house',{},'q')), E('w:where',c('q'))],
/*78*/ [E(0,c('bubble',{side:'L',text:'English',fs:40,w:150})), E('w:hot',pair({p:'sun',o:{hot:true}},{p:'house'})), E('w:winter',pair({p:'snow'},{p:'thermo',o:{level:.4}})), E('w:questions',c('q')), E('w:first',c('badge',{n:1})), E('w:thirsty',pair({p:'badge',o:{n:1}},{p:'bottle',o:{level:.05}}))],
/*79*/ [E(0,c('bottle',{level:.05},'q')), E('w:water',c('bottle',{level:.85},'check'))],
/*80*/ [E(0,c('badge',{n:2})), E('w:parents',pair({p:'house'},{p:'q'})), E('w:find',T3(it('phone'),it('news'),it('radio')))],
/*81*/ [E(0,c('news',{},'check'))],
/*82*/ [E(0,c('badge',{n:3})), E('w:mountain',pair({p:'mountain'},{p:'q'}))],
/*83*/ [E(0,pair({p:'mountain',o:{snow:true}},{p:'thermo',o:{level:.1}})), E('w:cold',pair({p:'thermo',o:{level:.1}},{p:'check'}))],
/*84*/ [E(0,c('badge',{n:4})), E('w:best',c('star')), E('w:month',pair({p:'calendar',o:{label:'?'}},{p:'mountain'}))],
/*85*/ [E(0,c('calendar',{label:'APRIL',marks:[8,9,10]},'check')), E('w:trees',c('tree')), E('w:weather',pair({p:'sun'},{p:'thermo',o:{level:.5}}))],
/*86*/ [E(0,c('star')), E('w:look',c('phone')), E('w:say',c('bubble',{side:'L',text:'English',fs:40,w:150}))],
/*87*/ [E(0,c('bubble',{side:'L',text:'Today is hot.',fs:30,w:190})), E('w:hot',pair({p:'sun',o:{hot:true}},{p:'thermo',o:{level:.92}})), E('w:cold',pair({p:'bubble',o:{side:'R',text:'Today is cold.',fs:26,w:190}},{p:'thermo',o:{level:.1}})), E('w:thank',c('phones')), E('w:see',c('logo'))],
/*88*/ [E(0,c('logo'),it('sparkle',{},0,330,340,1.55))]
];

;(window.KALIMA_SCENES=window.KALIMA_SCENES||{})["a1-01"]={BG:BG,SC:SC};
})();
