/* A1 episode 2 — Never Late Again! What is drawn while each sentence is spoken */
(function(){
const it=(p,o,dec,x,y,s)=>({p,o:o||{},dec,x,y,s});
const X={c:[330,340,1.55]};
const c=(p,o,dec)=>it(p,o,dec,...X.c);
const T3=(a,b,d)=>[a,b,d].map((q,i)=>({...q,x:[120,330,540][i],y:340,s:.95}));
const T5=(a,b,d,e,g)=>{const s=[a,b,d,e,g],xy=[[118,250],[330,250],[542,250],[222,470],[438,470]];return s.map((q,i)=>({...q,x:xy[i][0],y:xy[i][1],s:.74}))};
const E=(at,...items)=>({at,items:items.flat()});
const pair=(a,b)=>[{...a,x:172,y:340,s:1.15},{...b,x:488,y:340,s:1.15}];
const AD={c:'#4DA3D8',hair:'short',hc:'#222'},MY={c:'#E2B653',hair:'bun',hc:'#2A1D18'},MUM={c:'#D96C8B',hair:'long',hc:'#3A2A22'},TE={c:'#4F7A5A',hair:'long',hc:'#2A1D18'},MAN={c:'#8E6BB5',hair:'short',hc:'#222'},SARA={c:'#F2994A',hair:'bun',hc:'#6A3F26'};
const person=(o)=>c('person',o);
const sorry=c('bubble',{side:'L',text:'Sorry!',fs:36,w:130});
const dots=c('bubble',{side:'L',text:'...',fs:56,w:110});
const eng=c('board',{t:'English',fs:42});
const shoeDoor=pair({p:'shoe'},{p:'door'});
const early=(h,m)=>c('clk',{h:h==null?8:h,m:m==null?50:m},'check');
const late=c('alarm',{ring:1,h:9,m:10});
const cal1=c('calendar',{week:'one',day:1});
const BG=['neutral', 'neutral', 'day', 'day', 'day', 'day', 'day', 'day', 'day', 'day', 'day', 'day', 'warm', 'warm', 'warm', 'day', 'neutral', 'neutral', 'neutral', 'warm', 'warm', 'warm', 'warm', 'warm', 'night', 'night', 'night', 'night', 'night', 'night', 'night', 'night', 'night', 'night', 'warm', 'warm', 'warm', 'day', 'day', 'day', 'day', 'day', 'warm', 'warm', 'warm', 'dusk', 'dusk', 'day', 'day', 'day', 'day', 'day', 'day', 'day', 'day', 'day', 'day', 'day', 'dusk', 'night', 'warm', 'warm', 'warm', 'day', 'day', 'day', 'day', 'day', 'day', 'day', 'day', 'day', 'day', 'warm', 'warm', 'warm', 'day', 'day', 'day', 'day', 'day', 'day', 'day', 'warm', 'neutral', 'neutral', 'neutral', 'neutral', 'neutral', 'neutral', 'neutral', 'neutral', 'neutral', 'neutral', 'neutral'];
const SC=[
/*0*/ [E(0,c('logo'),it('sparkle',{},0,330,340,1.55))],
/*1*/ [E(0,person(AD)), E('w:question',c('q')), E('w:late',late)],
/*2*/ [E(0,c('check')), E('w:adam',person(AD))],
/*3*/ [E(0,late), E('w:once',cal1), E('w:week',c('calendar',{week:'all'})), E('w:talk',c('bubble',{side:'L',icon:'alarm',is:.5,w:130})), E('w:again',c('clk',{h:9,m:0},'check'))],
/*4*/ [E(0,c('bulb')), E('w:yesterday',c('calendar',{label:'YESTERDAY',marks:[11]})), E('w:late',late), E('w:english',eng)],
/*5*/ [E(0,c('q')), E('w:late',late), E('w:time',c('clk',{h:9,m:0},'q')), E('w:lesson',eng)],
/*6*/ [E(0,c('board',{t:'9:00',fs:70})), E('w:nine',c('clk',{h:9,m:0})), E('w:arrived',c('clk',{h:9,m:10})), E('w:teacher',person(TE)), E('w:word',dots)],
/*7*/ [E(0,dots), E('w:difficult',c('q')), E('w:many',pair({p:'bubble',o:{side:'L',text:'Hi!',fs:40,w:110}},{p:'bubble',o:{side:'R',text:'Hello!',fs:34,w:120}}))],
/*8*/ [E(0,c('check')), E('w:early',early(8,50)), E('w:happy',c('heart')), E('w:once',c('calendar',{week:'one',day:1},'q'))],
/*9*/ [E(0,cal1), E('w:always',late)],
/*10*/ [E(0,c('calendar',{week:'all'})), E('w:fifty',c('badge',{n:50}))],
/*11*/ [E(0,c('check')), E('w:maya',person(MY)), E('w:school',c('board',{t:'School',fs:50}))],
/*12*/ [E(0,c('clk',{h:7,m:30})), E('w:school',pair({p:'board',o:{t:'School',fs:50}},{p:'house'})), E('w:kilometre',pair({p:'sign',o:{t:'1 km'}},{p:'path'})), E('w:park',c('tree')), E('w:mum',person(MUM)), E('w:six',c('alarm',{ring:1,h:6,m:0}))],
/*13*/ [E(0,person(MUM)), E('w:room',c('bed')), E('w:up',c('arrow',{dir:'up'})), E('w:bus',c('bus')), E('w:wait',c('clk',{h:8,m:0}))],
/*14*/ [E(0,person(MUM)), E('w:kilometre',c('sign',{t:'1 km'})), E('w:foot',c('feet')), E('w:fifteen',c('clk',{h:7,m:0,run:15})), E('w:early',early(7,15))],
/*15*/ [E(0,early(7,15)), E('w:good',c('star'))],
/*16*/ [E(0,person(AD)), E('w:why',c('q')), E('w:late',late)],
/*17*/ [E(0,c('q')), E('w:easy',late)],
/*18*/ [E(0,c('check')), E('w:talk',c('bubble',{side:'L',text:'Talk!',fs:42,w:120})), E('w:why',c('q'))],
/*19*/ [E(0,c('star')), E('w:morning',c('sunrise')), E('w:find',c('q')), E('w:keys',c('keys')), E('w:phone',c('cellphone')), E('w:shoes',c('shoe'))],
/*20*/ [E(0,c('sunrise')), E('w:find',c('q')), E('w:them',T3(it('keys'),it('cellphone'),it('shoe')))],
/*21*/ [E(0,c('sunrise')), E('w:monday',cal1), E('w:phone',c('cellphone')), E('w:chocolate',pair({p:'cellphone'},{p:'choc'})), E('w:shoe',c('shoe',{one:1})), E('w:bed',pair({p:'shoe',o:{one:1}},{p:'bed'})), E('w:other',c('shoe',{one:1},'q'))],
/*22*/ [E(0,c('check')), E('w:many',c('crowd',{n:6})), E('w:morning',c('sunrise')), E('w:tired',c('bed')), E('w:forget',c('q'))],
/*23*/ [E(0,c('heart')), E('w:many',c('crowd',{n:6})), E('w:keys',c('keys')), E('w:shoes',c('shoe')), E('w:nobody',c('q'))],
/*24*/ [E(0,c('bulb')), E('w:prepare',c('bag')), E('w:night',c('moon'))],
/*25*/ [E(0,c('moon')), E('w:bag',c('bag')), E('w:shoes',c('shoe'))],
/*26*/ [E(0,c('bag')), E('w:night',c('moon')), E('w:books',c('mag')), E('w:phone',c('cellphone')), E('w:keys',c('keys')), E('w:ten',c('clk',{h:9,m:0,run:10})), E('w:ready',c('bag',{},'check')), E('w:shoes',shoeDoor), E('w:morning',c('sunrise'))],
/*27*/ [E(0,shoeDoor), E('w:hope',c('check'))],
/*28*/ [E(0,c('badge',{n:2})), E('w:list',c('list',{n:0})), E('w:night',c('moon')), E('w:day',c('sunrise'))],
/*29*/ [E(0,c('list',{n:0},'q')), E('w:paper',c('list',{n:0})), E('w:phone',c('cellphone'))],
/*30*/ [E(0,c('list',{n:0})), E('w:phone',c('cellphone',{},'check')), E('w:write',c('list',{n:2})), E('w:bed',pair({p:'list',o:{n:2,still:1}},{p:'bed'})), E('w:five',c('badge',{n:5}))],
/*31*/ [E(0,c('badge',{n:5})), E('w:easy',c('check')), E('w:write',c('list',{n:4})), E('w:minute',c('clk',{h:12,m:59,run:1}))],
/*32*/ [E(0,person(MUM)), E('w:prepare',c('bag')), E('w:sleep',pair({p:'bed'},{p:'zzz'})), E('w:never',c('clk',{h:9,m:0},'check'))],
/*33*/ [E(0,pair({p:'person',o:MUM},{p:'clk',o:{h:9,m:0}})), E('w:good',c('heart'))],
/*34*/ [E(0,person(MUM)), E('w:ideas',c('bulb')), E('w:up',c('arrow',{dir:'up'})), E('w:fifteen',c('alarm',{ring:1,h:6,m:45}))],
/*35*/ [E(0,c('alarm',{h:6,m:45})), E('w:lot',c('q'))],
/*36*/ [E(0,c('clk',{h:7,m:0,run:15})), E('w:enough',c('check')), E('w:breakfast',pair({p:'bread'},{p:'coffee'})), E('w:out',c('door',{},'cross'))],
/*37*/ [E(0,c('check')), E('w:eat',c('bread')), E('w:bus',c('bus',{},'cross')), E('w:bag',pair({p:'bread'},{p:'bag'}))],
/*38*/ [E(0,c('q'))],
/*39*/ [E(0,c('bread',{bite:1})), E('w:bag',c('bag')), E('w:phone',c('cellphone')), E('w:man',person(MAN)), E('w:bus',c('bus')), E('w:long',c('clk',{h:9,m:0,run:50}))],
/*40*/ [E(0,c('bread',{bite:1})), E('w:man',person(MAN))],
/*41*/ [E(0,c('bread')), E('w:kitchen',c('bread',{},'check')), E('w:bus',c('bus',{},'cross')), E('w:advice',c('bulb')), E('w:fifth',c('tower',{floor:4})), E('w:late',late), E('w:downstairs',c('stairs',{dir:'down'})), E('w:foot',c('feet')), E('w:good',c('heart'))],
/*42*/ [E(0,c('tower',{floor:4})), E('w:morning',c('sunrise')), E('w:many',c('crowd',{n:6})), E('w:leave',c('door'))],
/*43*/ [E(0,c('crowd',{n:6})), E('w:door',c('door')), E('w:eight',c('clk',{h:8,m:0}))],
/*44*/ [E(0,c('crowd',{n:6})), E('w:bags',c('bag')), E('w:late',late)],
/*45*/ [E(0,c('q')), E('w:home',c('house')), E('w:morning',pair({p:'stairs',o:{dir:'down'}},{p:'sunrise'})), E('w:evening',pair({p:'stairs',o:{dir:'up'}},{p:'moon'})), E('w:building',c('tower'))],
/*46*/ [E(0,c('stairs',{dir:'down'})), E('w:up',c('stairs',{dir:'up'})), E('w:good',c('heart')), E('w:exercise',c('star'))],
/*47*/ [E(0,c('q')), E('w:work',pair({p:'brief'},{p:'house'}))],
/*48*/ [E(0,c('sign',{t:'2 km'})), E('w:twentyfive',c('clk',{h:9,m:0,run:25})), E('w:foot',c('feet')), E('w:bus',c('bus')), E('w:five',c('clk',{h:9,m:0,run:5}))],
/*49*/ [E(0,c('sign',{t:'10 km'})), E('w:work',c('brief')), E('w:car',c('car')), E('w:forty',c('clk',{h:9,m:0,run:40})), E('w:different',c('q'))],
/*50*/ [E(0,c('sign',{t:'10 km'})), E('w:building',c('tower')), E('w:third',c('badge',{n:3})), E('w:leave',c('door')), E('w:idea',c('bulb'))],
/*51*/ [E(0,late), E('w:what',c('q'))],
/*52*/ [E(0,c('msg')), E('w:ten',c('clk',{h:9,m:0,run:10}))],
/*53*/ [E(0,sorry), E('w:message',c('msg')), E('w:monday',cal1)],
/*54*/ [E(0,cal1), E('w:message',c('msg')), E('w:friends',pair({p:'person',o:{c:'#4F7A5A',hair:'long',hc:'#222'}},{p:'person',o:{c:'#F2994A',hair:'short',hc:'#3A2A22'}}))],
/*55*/ [E(0,pair({p:'person',o:SARA},{p:'msg'})), E('w:monday',c('calendar',{week:'one',day:1},'q'))],
/*56*/ [E(0,c('star')), E('w:write',c('msg',{},'cross')), E('w:drive',pair({p:'car'},{p:'cellphone',dec:'cross'})), E('w:important',c('star'))],
/*57*/ [E(0,c('check')), E('w:stop',c('car')), E('w:write',c('msg')), E('w:advice',c('bulb')), E('w:tomorrow',c('sunrise'))],
/*58*/ [E(0,c('q')), E('w:work',c('brief'))],
/*59*/ [E(0,c('list',{n:0})), E('w:tonight',c('moon')), E('w:bag',c('bag')), E('w:shoes',shoeDoor), E('w:list',c('list',{n:3}))],
/*60*/ [E(0,c('sunrise'))],
/*61*/ [E(0,c('sunrise')), E('w:fifteen',c('alarm',{ring:1,h:6,m:45})), E('w:work',c('brief',{},'check')), E('w:weeks',c('calendar',{week:'all'})), E('w:month',c('calendar',{label:'MONTH',marks:[0,7,14,21,28]})), E('w:monday',c('calendar',{week:'one',day:1},'check'))],
/*62*/ [E(0,c('heart')), E('w:early',early(8,50)), E('w:get',c('q'))],
/*63*/ [E(0,c('q')), E('w:chocolate',c('choc')), E('w:thank',c('heart'))],
/*64*/ [E(0,c('choc')), E('w:morning',c('sunrise')), E('w:mum',person(MUM)), E('w:lunch',c('choc',{},'check')), E('w:breakfast',c('bread',{},'cross'))],
/*65*/ [E(0,person(MUM)), E('w:sorry',sorry), E('w:chocolate',c('choc',{piece:1}))],
/*66*/ [E(0,c('bread',{},'cross')), E('w:chocolate',c('choc')), E('w:idea',c('bulb')), E('w:plant',c('tree'))],
/*67*/ [E(0,c('bread',{},'check')), E('w:plant',c('tree')), E('w:chocolate',c('choc')), E('w:good',c('heart'))],
/*68*/ [E(0,c('choc',{piece:1})), E('w:lunch',c('clk',{h:1,m:0})), E('w:hour',c('clk',{h:9,m:0,run:60},'cross'))],
/*69*/ [E(0,c('choc',{piece:1})), E('w:question',c('q')), E('w:friend',person({c:'#4F7A5A',hair:'short',hc:'#222'})), E('w:late',late)],
/*70*/ [E(0,c('clk',{h:9,m:0,run:10})), E('w:write',c('msg')), E('w:where',c('q'))],
/*71*/ [E(0,person(AD))],
/*72*/ [E(0,c('clk',{h:9,m:0,run:20})), E('w:chocolate',c('choc')), E('w:buy',c('coins'))],
/*73*/ [E(0,c('check')), E('w:downstairs',c('stairs',{dir:'down'})), E('w:coffee',c('coffee'))],
/*74*/ [E(0,c('coffee')), E('w:window',c('window',{warm:true})), E('w:arrive',person(AD)), E('w:late',late)],
/*75*/ [E(0,c('sunrise')), E('w:early',early(8,50))],
/*76*/ [E(0,eng), E('w:story',c('mag'))],
/*77*/ [E(0,c('q')), E('w:lesson',eng)],
/*78*/ [E(0,eng), E('w:teacher',person(TE)), E('w:sorry',sorry), E('w:early',early(8,50))],
/*79*/ [E(0,person(TE)), E('w:say',c('bubble',{side:'L',text:'?',fs:60,w:110}))],
/*80*/ [E(0,person(TE)), E('w:prepare',c('bag')), E('w:late',c('alarm',{ring:1,h:9,m:10},'cross')), E('w:homework',c('list',{n:4})), E('w:good',c('heart'))],
/*81*/ [E(0,person(TE)), E('w:lesson',eng), E('w:building',c('tower'))],
/*82*/ [E(0,c('tower')), E('w:city',c('city')), E('w:fifth',c('tower',{floor:4})), E('w:coffee',c('coffee')), E('w:downstairs',c('stairs',{dir:'down'}))],
/*83*/ [E(0,c('coffee')), E('w:cake',c('cake')), E('w:chocolate',c('choc')), E('w:late',late)],
/*84*/ [E(0,c('coffee',{},'cross')), E('w:after',pair({p:'board',o:{t:'English',fs:40}},{p:'coffee'})), E('w:questions',c('q')), E('w:first',c('badge',{n:1})), E('w:morning',c('sunrise'))],
/*85*/ [E(0,c('badge',{n:1})), E('w:keys',c('keys')), E('w:phone',c('cellphone')), E('w:shoes',c('shoe'))],
/*86*/ [E(0,c('badge',{n:2})), E('w:shoes',c('shoe')), E('w:night',c('moon'))],
/*87*/ [E(0,shoeDoor)],
/*88*/ [E(0,c('badge',{n:3})), E('w:late',late)],
/*89*/ [E(0,c('msg'))],
/*90*/ [E(0,c('badge',{n:4})), E('w:minutes',c('clk',{h:7,m:0,run:15})), E('w:up',c('alarm',{ring:1,h:6,m:45}))],
/*91*/ [E(0,c('alarm',{ring:1,h:6,m:45}))],
/*92*/ [E(0,c('star')), E('w:english',c('bubble',{side:'L',text:'English',fs:40,w:150})), E('w:tonight',c('moon')), E('w:tomorrow',c('sunrise')), E('w:list',c('list',{n:0}))],
/*93*/ [E(0,c('list',{n:0})), E('w:bag',T5(it('bag'),it('shoe'),it('keys'),it('cellphone'),it('bottle',{level:.85}))), E('w:listening',c('phones')), E('w:late',c('alarm',{ring:1,h:9,m:10},'cross')), E('w:kalima',c('logo'))],
/*94*/ [E(0,c('logo'),it('sparkle',{},0,330,340,1.55))]
];
;(window.KALIMA_SCENES=window.KALIMA_SCENES||{})["a1-02"]={BG:BG,SC:SC};
})();
