const rooms=[
 ['entrance','Entrance','المدخل','Shell-inlaid walnut drawers, a round bronze-framed mirror and alternating dark and pale stone mark the entrance to the salon.','أدراج جوز مطعّمة بالصدف ومرآة مستديرة وإطار من الحجر الفاتح والداكن عند مدخل الصالون.'],
 ['reception','Guest salon','صالون الضيوف','An octagonal ceiling rose, painted timber and shell-inlaid sconces frame the stone wall and the existing salon suite.','زخرفة سقفية مثمّنة وخشب ملوّن وأبليكات مطعّمة بالصدف حول الجدار الحجري وطقم الصالون.'],
 ['family','Living room','غرفة المعيشة','Twin walnut bookcases flank the television. A copper coffee service sits on the family dining table.','مكتبتان من الجوز على جانبي التلفاز وطقم قهوة نحاسي على طاولة العائلة.'],
 ['kitchen','Kitchen','المطبخ','Spun copper pendants light the fluted island. A plaster hood and a cobalt-tiled walnut dresser finish the working kitchen.','مصابيح نحاسية فوق الجزيرة المخدّدة وغطاء جصّي للموقد ورفوف جوز ببلاط أزرق مزخرف.'],
 ['hall','Hall','الموزّع','Framed ceramic panels, walnut wainscoting and an inlaid portal connect the public rooms.','ألواح خزفية مؤطّرة وتكسيات من الجوز وبوابة مطعّمة تصل بين غرف الاستقبال.'],
 ['private-hall','Private hall','الممرّ الخاص','Shallow wall panels, alabaster sconces and timber ceiling members give rhythm to the passage to the bedrooms.','تكسيات جدارية رقيقة ومصابيح بلون المرمر وعوارض خشبية ترسم إيقاع الممرّ إلى غرف النوم.'],
 ['master','Main bedroom','غرفة النوم الرئيسية','An open pointed walnut arch reveals the selected stone above an indigo headboard. A madder runner finishes the layered cotton bedding.','قوس جوز مدبّب يُظهر الحجر المختار فوق لوح السرير النيلي، ومفرش قرمزي فوق طبقات القطن.'],
 ['bedroom','Second bedroom','غرفة النوم الثانية','A woven headboard, bedside book shelves and a linen Roman blind accompany indigo-striped bedding.','لوح سرير منسوج ورفوف للكتب وستارة كتّانية مطويّة مع مفرش مخطّط بالنيلي.'],
 ['bathroom','Main bathroom','الحمّام الرئيسي','A rounded mirror reflects the actual room above a fluted walnut vanity, an oval ceramic basin and a curved bronze tap.','مرآة مقوّسة تعكس الحمّام فوق خزانة جوز مخدّدة وحوض خزفي بيضوي وحنفية برونزية منحنية.'],
 ['guest-bath','Guest bathroom','حمّام الضيوف','Hand-drawn cobalt floral tiles line the side wall beside a faceted mirror, a ribbed washbowl and a folded cotton towel.','بلاط بزخارف نباتية زرقاء مرسومة على الجدار الجانبي مع مرآة مشطوفة وحوض مضلّع ومنشفة قطنية.'],
 ['balcony','Balcony','الشرفة','A timber canopy and open lattice give shade to the loggia. Jasmine grows from the existing terracotta pot.','مظلّة وشبك من الخشب على الشرفة وياسمينة في الأصيص الفخّاري.']
];
const copy={house:['Hammami Residence','دار حمّامي'],comparison:['Before and after','قبل وبعد'],visit:['Walk through this room','ادخل إلى هذه الغرفة'],rooms:['Choose a room','اختر غرفة'],pair:['Side by side','جنباً إلى جنب'],wipe:['Wipe','فاصل متحرّك'],before:['Before','قبل'],after:['After','بعد'],matched:['Matched camera position, lens and daylight.','نفس موضع الكاميرا والعدسة والإضاءة النهارية.'],original:['Open original capture','افتح الصورة الأصلية'],finished:['Open redesigned capture','افتح صورة التصميم الجديد'],slide:['Move the divider between the original and redesigned room','حرّك الفاصل بين صورة الغرفة الأصلية والتصميم الجديد']};
const layoutNotes={
 entrance:['The guest bathroom door slides into the partition, clearing the route between the front door and the salon.','ينزلق باب حمام الضيوف داخل الجدار، فيبقى الطريق بين باب الشقة والصالون مفتوحاً.'],
 reception:['The gap between paired armchairs grew from 10 to 43 cm. Both rows now sit within 37 cm of the coffee table.','ازدادت المسافة بين كل كرسيين متجاورين من ١٠ إلى ٤٣ سم. وأصبح كلا الصفّين على مسافة لا تتجاوز ٣٧ سم من طاولة الضيافة.'],
 family:['Two dining chairs sit on each long side and one at each end. The nearest chair clears the sofa by 39.5 cm.','كرسيّان على كل جانب طويل وكرسي عند كل رأس للطاولة. تفصل أقرب كرسي عن الأريكة مسافة ٣٩٫٥ سم.'],
 kitchen:['Moving the stools to the ends widened the passage behind the island from 48 to 102 cm. The stone supports are recessed for knee space.','أدّى نقل الكرسيين إلى طرفَي الجزيرة إلى توسيع الممر خلفها من ٤٨ إلى ١٠٢ سم. وتترك الدعامات الحجرية المرتدّة فسحة للركبتين.'],
 hall:['The kitchen and private-wing doors slide into the walls. The narrowest point beside the kitchen doorway widened from 20 to 95 cm.','ينزلق باب المطبخ وباب جناح النوم داخل الجدارين. واتّسع أضيق موضع بجانب مدخل المطبخ من ٢٠ إلى ٩٥ سم.'],
 'private-hall':['Flush sliding doors clear the approaches to both bedrooms and the main bathroom.','تنسحب أبواب غرفتي النوم والحمام الرئيسي داخل الجدار لتبقى مداخل الغرف سالكة.'],
 master:['There is now 8 cm between each bedside chest and the headboard. The brass lanterns rest on the chests, and the door slides clear of the bed.','تفصل الآن ٨ سم بين كل كومودينة وظهر السرير. يستقرّ الفانوسان النحاسيان على الكومودينتين، وينزلق الباب بعيداً عن السرير.'],
 bedroom:['The headboard and bedside tables now have 12.5 cm between them, up from 2.5 cm. The brass vase rests on the right-hand table.','اتّسع الفراغ بين ظهر السرير والطاولتين الجانبيتين من ٢٫٥ إلى ١٢٫٥ سم. وتستقرّ المزهرية النحاسية على الطاولة اليمنى.'],
 bathroom:['The door clears the vanity. The gap between the toilet and shower screen grew from 28 to 78 cm, with the towel on the dry side.','ابتعد الباب عن المغسلة واتّسع الفراغ بين المرحاض وحاجز الدش من ٢٨ إلى ٧٨ سم. وعُلّقت المنشفة خارج الحاجز الزجاجي.'],
 'guest-bath':['The toilet now meets the back wall. The sliding door leaves a direct approach from the entrance to the basin.','استقرّ المرحاض عند الجدار الخلفي، وأتاح الباب المنزلق طريقاً مباشراً من المدخل إلى المغسلة.'],
 balcony:['The nearest chair clears the table by 19 cm. Moving the set towards the railing widened the passage beside it from 38 to 78 cm.','تفصل أقرب كرسي عن الطاولة مسافة ١٩ سم. واتّسع الممر بجانب الجلسة من ٣٨ إلى ٧٨ سم بعد تقريبها من الدرابزين.']
};
const params=new URLSearchParams(location.search),clearance=params.get('study')==='clearance';
const spacious=params.get('study')==='spacious';
const living=params.get('study')==='living';
const courtyard=params.get('study')==='courtyard';
const courtViews=[
 ['site','Where the gallery sits','موقع المعرض','The earlier pavilion stood beside the delivery vehicles. The new gallery occupies the display terrace behind the sawmill. Clients enter through the opening in the retaining wall.','كان الجناح السابق بجوار مركبات التسليم. يشغل المعرض الجديد شرفة العرض خلف المنشرة، ويدخل الزوار من الفتحة القائمة في الجدار الاستنادي.'],
 ['working','The delivery yard','ساحة التسليم','The same view across the stock racks shows the former garden footprint and the reopened delivery apron.','تُظهر زاوية التصوير نفسها عبر حوامل الألواح مكان الفناء السابق ومساحة التسليم بعد إخلائها.'],
 ['slabs','The full collection','المجموعة كاملة','All 30 catalogued stones have permanent, labelled mounts. Sixteen line the rear arcade, nine line the east arcade and five face the citrus garden. Select any stone in the live gallery to stand directly in front of it.','لكل من الأحجار الثلاثين في المجموعة موضع ثابت وبطاقة تعريف. في الرواق الخلفي ١٦ لوحاً وفي الشرقي ٩ ألواح ومقابل حديقة الحمضيات ٥ ألواح. اختر أي حجر في المعرض التفاعلي لتقف أمامه.'],
 ['arrival','Through the terrace gate','من بوابة الشرفة','The sales-side path reaches the existing gate. Continue towards the rear specimens or turn left along the inlaid paving to the garden and material table.','يصل الممر من جهة المبيعات إلى البوابة القائمة. تابع إلى الألواح الخلفية أو اتجه يساراً عبر الرصف المطعّم إلى الحديقة وطاولة الحجر.'],
 ['rear','Rear arcade · 16 slabs','الرواق الخلفي · ١٦ لوحاً','The long rear wall brings Honey Onyx, Panda White, Peacock and Calacatta Viola into the same sightline, each on its own named plinth.','يجمع الجدار الخلفي الطويل هاني أونيكس وباندا وايت وبيكوك وكالاكاتا فيولا في مجال رؤية واحد، ولكل لوح قاعدة تحمل اسمه.'],
 ['east','East arcade · 9 slabs','الرواق الشرقي · ٩ ألواح','The east return groups travertines and warm-toned stones. Each slab can be opened from its fixed position to see the original photograph.','يجمع الرواق الشرقي الترافرتين والأحجار ذات الألوان الدافئة. يمكن فتح الصورة الأصلية لكل لوح من موضعه الثابت.'],
 ['west','Garden arcade · 5 slabs','رواق الحديقة · ٥ ألواح','Five slabs beside the garden complete the perimeter. Visitors can walk alongside them to compare the veins at full height.','تُكمل خمسة ألواح بمحاذاة الحديقة محيط المعرض. يستطيع الزائر أن يتجوّل أمامها ويقارن حركة العروق على كامل ارتفاعها.'],
 ['entry','Fountain and iwan','البحرة والإيوان','The court opens towards the gallery. Crema Marfil paving, a Mugla Marble fountain rim and the shaded iwan demonstrate how stone is cut and installed.','ينفتح الفناء باتجاه المعرض. ويُظهر رصف كريما مارفيل وحافة البحرة من رخام موغلا والإيوان المظلّل طريقة قص الحجر وتركيبه.'],
 ['studio','Bookmatch studio','جناح تناظر العروق','Two mirrored leaves of Honey Onyx show how its veins meet at a joint. The other 30 exhibits retain their positions around the terrace.','يوضح لوحان متناظران من هاني أونيكس التقاء العروق عند الوصلة، وتبقى ألواح العرض الثلاثون في مواضعها حول الشرفة.'],
 ['table','The folded stone table','طاولة الحجر المطوي','Follow the Honey Onyx vein from the tabletop down its mitred edge. In the live room, select another slab to see how the same detail changes.','تتبّع عروق هاني أونيكس من سطح الطاولة إلى حافّتها المشطوفة. اختر لوحاً آخر في المعرض التفاعلي لترى التفصيل نفسه بحجر مختلف.'],
 ['elevated','Across the stone garden','إطلالة على الحديقة الحجرية','The shallow rill and Mugla Marble benches run beside the paved route to the iwan. The full-height perimeter displays remain in view from the court.','يمتد المجرى المائي الضحل ومقاعد رخام موغلا إلى جانب الممر المؤدي إلى الإيوان، وتبقى ألواح العرض بكامل ارتفاعها مرئية من الفناء.'],
 ['plan','The terrace plan','مخطط الشرفة','The garden is set against the back of the sawmill. The entrance, three display walls and consultation room meet within one terrace behind the stock yard.','تستند الحديقة إلى الجهة الخلفية للمنشرة. وتجتمع البوابة وأروقة العرض الثلاثة وجناح الاستشارة على شرفة واحدة خلف ساحة المخزون.']
];
if(courtyard)Object.assign(copy,{house:['The Hammami courtyard','فناء حمامي'],visit:['Enter the courtyard','ادخل الفناء'],rooms:['Choose a viewpoint','اختر زاوية العرض']});
const livingViews=[
 ['family','Living and dining room','غرفة المعيشة والطعام','The six-seat dining table now runs along the left side of the room beside its serving cabinet. The sofa and armchair form a separate seating area.','تتوزع الكراسي الستة حول طاولة الطعام في الجهة اليسرى إلى جانب خزانة التقديم، وتشكّل الأريكة والكرسي جلسة مستقلة.'],
 ['sofa','TV from the sofa','التلفاز من الأريكة','The screen moved 93 cm along the wall. Its centre is now directly opposite the middle seat, 1.18 m above the floor.','انتقل التلفاز ٩٣ سم على طول الجدار، وأصبح مركز الشاشة مقابل المقعد الأوسط مباشرةً، على ارتفاع ١٫١٨ م عن الأرض.'],
 ['private-hall','Private hall niche','حنية الممر الخاص','A fluted walnut linen cabinet, a Crema Travertine shelf and a cobalt vase give the hall a finished end beside the main bedroom.','في نهاية الممر بجوار غرفة النوم الرئيسية خزانة بياضات من الجوز المخدّد تعلوها رفّة من ترافرتين كريما ومزهرية زرقاء.'],
 ['plan','Living room plan','مخطط المعيشة','The west wall moved 2.20 m. The room grew from 30.40 to 44.48 m², with its full-size dining chairs, lounge seating and a clear route to the balcony.','انتقل الجدار الغربي ٢٫٢٠ م فازدادت مساحة الغرفة من ٣٠٫٤٠ إلى ٤٤٫٤٨ م². بقيت الكراسي بحجمها الكامل مع ممر إلى الشرفة.']
];
const availableRooms=courtyard?courtViews:living?livingViews:spacious?[['apartment','Whole apartment','الشقة كاملة'],...rooms]:rooms;
const spaceDimensions={apartment:[[14.35,10.40],[18.15,12.50]],family:[[4.75,5.35],[6.95,6.40]],master:[[3.50,4.05],[5.10,5.10]],bedroom:[[3.50,3.95],[5.10,5.00]]};
const spaceNotes={
 apartment:['The larger plan measures 18.15 by 12.50 m inside the outer walls. The guest wing moves west to make room for family dining. Each bedroom keeps its own door.','أبعاد المخطط الأوسع داخل الجدران الخارجية ١٨٫١٥ × ١٢٫٥٠ م. تحرّك جناح الضيوف غرباً لإفساح المجال لطاولة الطعام، واحتفظت كل غرفة نوم ببابها المستقل.'],
 master:['The main bedroom grows from 14.2 to 26.0 m². The same 1.80 m bed now has a low walnut headboard, with a reading chair beside a 2.64 m window.','اتّسعت غرفة النوم الرئيسية من ١٤٫٢ إلى ٢٦٫٠ م². بقي عرض السرير ١٫٨٠ م وأضيف خلفه مسند جوز منخفض وكرسي للقراءة بجوار نافذة بعرض ٢٫٦٤ م.'],
 bedroom:['The second bedroom grows from 13.8 to 25.5 m². The bed keeps its size, with space for a writing desk at the 2.48 m window and a separate path to the balcony.','اتّسعت غرفة النوم الثانية من ١٣٫٨ إلى ٢٥٫٥ م². حافظ السرير على حجمه وأضيف مكتب بجوار النافذة بعرض ٢٫٤٨ م مع ممرّ مستقل إلى الشرفة.'],
 kitchen:['The kitchen is 4.60 m deep, up from 3.55 m. The working counter follows the rear wall and the island sits between that counter and the hall.','ازداد عمق المطبخ من ٣٫٥٥ إلى ٤٫٦٠ م. تمتد طاولة العمل بمحاذاة الجدار الخلفي وتتوسّط الجزيرة المسافة بينها وبين الممر.'],
 family:['The larger room is 6.95 m wide. Six full-size chairs surround a 1.88 m table in the west dining bay. The sofa faces the television from the adjoining seating area.','أصبح عرض المعيشة ٦٫٩٥ م. في الجهة الغربية ستة كراسٍ حول طاولة بطول ١٫٨٨ م، وفي الجلسة المجاورة تتجه الأريكة نحو التلفاز.'],
 reception:['The guest salon keeps its 4.45 m width as it moves west. The entrance and guest washroom move with it, preserving the separate guest route.','حافظ صالون الضيوف على عرضه البالغ ٤٫٤٥ م وانتقل غرباً مع المدخل وحمام الضيوف وبقي مسار الضيوف مستقلاً.'],
 entrance:['Moving the outer wall gives the entrance more depth. The walnut console and the direct route into the guest salon stay together.','أعطى تحريك الجدار الخارجي المدخل عمقاً أكبر مع استمرار الطريق المباشر بجوار كونسول الجوز إلى صالون الضيوف.'],
 hall:['The cross hall extends to the relocated guest salon. The kitchen, family room and private hall keep their door positions.','امتد الموزّع حتى صالون الضيوف في موقعه الجديد، وبقيت أبواب المطبخ والمعيشة والممر الخاص في أماكنها.'],
 'private-hall':['An arched linen cabinet and a photographed Crema Travertine ledge finish the quiet end of the hall. Both bedrooms keep their own doors.','في نهاية الممر خزانة بياضات بقوس ورف من ترافرتين كريما من المجموعة المصوّرة، ولكل غرفة نوم بابها الخاص.'],
 bathroom:['The main bathroom becomes 5.10 m wide. The shower moves to the new outer wall and the vanity stays near its entrance.','أصبح عرض الحمام الرئيسي ٥٫١٠ م، وانتقل الدوش إلى الجدار الخارجي الجديد مع بقاء المغسلة قرب المدخل.'],
 'guest-bath':['The guest washroom gains 1.05 m in depth. The basin and mirror sit on the new rear wall.','زاد عمق حمام الضيوف ١٫٠٥ م وانتقلت المغسلة والمرآة إلى الجدار الخلفي الجديد.'],
 balcony:['The loggia is 1.80 m deep and 18.15 m long. The sliding doors open onto a continuous balcony from both sitting rooms.','عمق الشرفة المسقوفة ١٫٨٠ م وطولها ١٨٫١٥ م، وتفتح عليها الأبواب المنزلقة من الصالون وغرفة المعيشة.']
};
Object.assign(copy,{angle:['Camera angle','زاوية العرض'],overhead:['From above','من الأعلى'],eye:['Room view','من داخل الغرفة'],clearance:['Furniture and circulation','الأثاث ومسارات الحركة'],interiors:['Interior redesign','التصميم الداخلي']});
const get=id=>document.getElementById(id),nav=document.querySelector('.sequence'),modeButtons=[...document.querySelectorAll('[data-mode]')];
let ar=new URLSearchParams(location.search).get('lang')==='ar',mode='pair';
function strings(){document.documentElement.lang=ar?'ar':'en';document.documentElement.dir=ar?'rtl':'ltr';document.querySelectorAll('[data-i18n]').forEach(el=>el.textContent=copy[el.dataset.i18n][Number(ar)]);get('language').textContent=ar?'English':'عربي';nav.setAttribute('aria-label',ar?'غرف الشقة':'Apartment rooms');document.querySelector('.modes').setAttribute('aria-label',ar?'طريقة المقارنة':'Comparison view');}
function display(){
 const id=location.hash.slice(1),room=availableRooms.find(r=>r[0]===id)||availableRooms.find(r=>r[0]===(courtyard?'site':living?'family':spacious?'apartment':'kitchen')),name=room[ar?2:1];
 const sofa=living&&room[0]==='sofa',roomId=sofa?'family':room[0];
 const savedAngle=new URL(location).searchParams.get('angle');
 const angle=savedAngle==='room'||savedAngle==='plan'?savedAngle:(sofa?'room':'plan');
 const showPlan=['apartment','plan'].includes(roomId)||(sofa&&angle==='plan');
 get('title').textContent=name;
 get('description').textContent=spacious?spaceNotes[room[0]][+ar]:clearance?layoutNotes[room[0]][+ar]:room[ar?4:3];
 document.querySelector('.section').textContent=sofa?(ar?'غرفة المعيشة':'Family living room'):living?(ar?'التوسعة الغربية':'West extension'):spacious?(ar?'الشقة العائلية الأوسع':'Larger family apartment'):copy[clearance?'clearance':'comparison'][+ar];
 const next=new URL(location);next.searchParams.delete('angle');
 if(clearance)next.searchParams.delete('study');else next.searchParams.set('study','clearance');
 next.hash=roomId==='plan'?'family':roomId==='apartment'?'master':roomId;get('study-link').href=next;get('study-link').textContent=copy[clearance?'interiors':'clearance'][+ar];
 const sizes=new URL(location);sizes.searchParams.set('study','spacious');sizes.searchParams.delete('angle');sizes.hash=roomId==='plan'?'apartment':roomId;
 get('size-study').href=sizes;get('size-study').hidden=spacious;get('size-study').textContent=ar?'مقارنة مساحة الشقة':'Compare apartment sizes';
 const livingLink=get('living-study');livingLink.hidden=living;
 const companion=new URL(location);companion.searchParams.set('study','living');companion.searchParams.delete('angle');companion.hash=room[0]==='private-hall'?'private-hall':'family';livingLink.href=companion;
 livingLink.textContent=ar?'توسعة المعيشة وحنية الممر':'Living room extension and hall niche';
 get('comparison').dataset.spacious=String(spacious||living||courtyard);
 const relocated=spacious&&['entrance','reception','guest-bath'].includes(room[0]);
 get('caption').textContent=relocated?(ar?'نفس زاوية التصوير بالنسبة إلى الغرفة والعدسة وضوء النهار.':'Matched camera position within each room, lens and daylight.'):copy.matched[+ar];
 get('angle-choice').hidden=!(clearance||sofa);get('angle').value=angle;
 get('comparison').dataset.overhead=String((clearance||sofa)&&angle==='plan');
 document.title=name+' · Hammami';
 get('comparison').setAttribute('aria-label',name+' · '+copy.comparison[+ar]);
 get('rooms').replaceChildren(...availableRooms.map(r=>new Option(r[ar?2:1],r[0])));get('rooms').value=room[0];
 nav.replaceChildren(...availableRooms.map(r=>{const a=document.createElement('a');a.href='#'+r[0];a.textContent=r[ar?2:1];if(r===room)a.setAttribute('aria-current','page');return a;}));
 const number=new Intl.NumberFormat(ar?'ar-SY':'en',{minimumFractionDigits:2,maximumFractionDigits:2});
 for(const phase of ['before','after']){
  const img=get(phase+'-image');
  const dims=living&&room[0]==='family'?[phase==='before'?4.75:6.95,6.40]:spacious&&spaceDimensions[room[0]]?.[phase==='before'?0:1];
  const position=sofa?(phase==='before'?(ar?'٩٣ سم إلى اليسار':'93 cm left'):(ar?'مقابل المنتصف':'Centred')):'';
  const label=copy[phase][+ar]+(dims?' · '+dims.map(number.format).join(' × ')+(ar?' م':' m'):position?' · '+position:'');
  img.closest('figure').querySelector('figcaption').textContent=label;
  let prefix='./images/';
  if(courtyard)prefix+='courtyard/';else if(living)prefix+=sofa&&angle==='plan'?'living/plan-':'living/';else if(spacious)prefix+='spacious/';
  else if(clearance&&angle==='plan')prefix+='clearance/plan-';
  else if(clearance&&phase==='before')prefix+='clearance/';
  const url=prefix+phase+'-'+room[0]+'.webp';
  img.src=url;img.alt=name+' · '+copy[phase][+ar];get('full-'+phase).href=url;
 }
 const live=new URL('/design',location.origin);
 const destination=showPlan?(living?'family':'master'):roomId;
 for(const [key,v] of Object.entries({view:showPlan?'plan':'walk',room:destination,surface:destination+'.floor',present:'1'}))live.searchParams.set(key,v);
 if(spacious||living)live.searchParams.set('layout','spacious');
 if(ar)live.searchParams.set('lang','ar');
 get('visit').querySelector('span').textContent=showPlan?(ar?'افتح مخطط الشقة':'Open the floor plan'):copy.visit[+ar];
 if(room[0]==='reception')live.searchParams.set('camera','salon');get('visit').href=live;
 if(courtyard){
  const destination=new URL('/gallery?view=courtyard&present=1',location.origin);
  const cam=room[0]==='entry'?'garden':room[0]==='slabs'?'collection':room[0];
  if(cam)destination.searchParams.set('camera',cam);
  if(cam==='studio')destination.searchParams.set('pairing','book');
  if(ar)destination.searchParams.set('lang','ar');
  get('visit').href=destination;get('visit').querySelector('span').textContent=copy.visit[+ar];document.querySelector('.brand').href=destination;
  get('living-study').hidden=true;get('size-study').hidden=true;
  destination.searchParams.set('view','yard');destination.searchParams.delete('camera');get('study-link').href=destination;get('study-link').textContent=ar?'ساحة الألواح':'Visit the slab yard';
  nav.setAttribute('aria-label',ar?'زوايا الفناء':'Courtyard viewpoints');
 }
}
function setMode(next){mode=next;get('comparison').className=mode==='pair'?'pair':mode==='wipe'?'wipe':'single';get('older').hidden=mode==='after';get('newer').hidden=mode==='before';get('wipe-control').hidden=mode!=='wipe';modeButtons.forEach(b=>b.setAttribute('aria-pressed',b.dataset.mode===mode));}
get('after-image').addEventListener('load',e=>{
 const image=e.currentTarget;
 get('comparison').style.setProperty('--plan-ratio',String(Math.min(4,Math.max(1,image.naturalWidth/image.naturalHeight))));
});
get('angle').addEventListener('change',e=>{
 const url=new URL(location),defaultAngle=living&&url.hash==='#sofa'?'room':'plan';
 if(e.target.value===defaultAngle)url.searchParams.delete('angle');else url.searchParams.set('angle',e.target.value);
 history.replaceState(null,'',url);display();
});
get('rooms').addEventListener('change',e=>location.hash=e.target.value);window.addEventListener('hashchange',display);
modeButtons.forEach(b=>b.addEventListener('click',()=>setMode(b.dataset.mode)));
get('split').addEventListener('input',e=>get('comparison').style.setProperty('--split',e.target.value+'%'));
get('language').addEventListener('click',()=>{ar=!ar;const url=new URL(location);if(ar)url.searchParams.set('lang','ar');else url.searchParams.delete('lang');history.replaceState(null,'',url);strings();display();});
strings();display();setMode('pair');
