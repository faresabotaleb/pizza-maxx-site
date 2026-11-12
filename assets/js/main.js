/* =====================================================================
   PIZZA MAXX — interactions
   Menu data below is the REAL menu (pizza-maxx-web-14-3-2026.pdf):
   names, sizes (وسط/كبير), prices and descriptions are authentic.
   `img` fields reuse the available photography — swap per item later.
   ===================================================================== */
(function () {
  "use strict";

  /* size helpers */
  const P  = (m, l) => ([{ l:'وسط', s:'28سم', p:m }, { l:'كبير', s:'32سم', p:l }]); // pizza
  const PP = (m, l) => ([{ l:'وسط', s:'', p:m }, { l:'كبير', s:'', p:l }]);          // pasta

  /* ---------- Real menu ---------- */
  const MENU = [
    /* ===== بيتزا (وسط 28سم / كبيرة 32سم) ===== */
    { id:'dream',        name:'ماكس دريم',            cat:'pizza', img:'m-dream.jpg',       spice:2, tags:['new','best'], sizes:P(190,250), desc:'ستريس بارد + شيدر طبيعي + رومي مدخن + فلفل ألوان + صوص (شيلي + سيراتشا + رانش).' },
    { id:'chickncheese', name:'تشيكن آند تشيز',        cat:'pizza', img:'m-chickncheese.jpg',    spice:0, tags:[],             sizes:P(190,250), desc:'بدون صلصة طماطم — فراخ مشوية + رومي مدخن + مكس جبن طبيعي (شيدر - موزاريلا).' },
    { id:'chili-cranchy',name:'تشيلي كرانشي تشيكن',    cat:'pizza', img:'m-chili-cranchy.jpg',      spice:3, tags:[],             sizes:P(190,250), desc:'صلصة طماطم + طماطم + جبنة + قطع ستريس حار + هالابينو + صوص شيدر وتشيلي.' },
    { id:'chili-chicken',name:'تشيلي تشيكن',           cat:'pizza', img:'placeholder.jpg',  spice:3, tags:[],             sizes:P(190,250), desc:'تشيلي صوص + رانش صوص + دجاج مشوي + بيف بقري مدخن + فلفل ألوان.' },
    { id:'siracha',      name:'سيراتشا تشيكن',         cat:'pizza', img:'m-siracha.jpg', spice:3, tags:['best'],       sizes:P(190,250), desc:'صلصة طماطم + سيراتشا حار + بيبروني + رومي مدخن + مشروم + فلفل ألوان + صوص السيراتشا الحار.' },
    { id:'bigtasty',     name:'ماكس بيج تيستي',        cat:'pizza', img:'m-bigtasty.jpg',  spice:0, tags:[],             sizes:P(190,250), desc:'صلصة طماطم + تشيكن تندر + بيبروني + رومي مدخن + فلفل ألوان + بيج تيستي صوص.' },
    { id:'ranchbbq',     name:'رانش باربيكيو',         cat:'pizza', img:'m-ranchbbq.jpg',      spice:0, tags:[],             sizes:P(190,250), desc:'صلصة باربيكيو + فراخ مشوية + لحمة مفرومة + بيبروني + بيف بيكون + صوص رانش.' },
    { id:'chicken-ranch',name:'تشيكن رانش',            cat:'pizza', img:'m-chicken-ranch.jpg',      spice:0, tags:['best'],       sizes:P(190,250), desc:'صلصة طماطم + فراخ + فلفل ألوان + جبنة + صوص الرانش.' },
    { id:'spicy-ranch',  name:'سبايسي تشكن رانش',      cat:'pizza', img:'placeholder.jpg',      spice:2, tags:[],             sizes:P(190,250), desc:'صلصة طماطم + فراخ سترس + فلفل هالابينو + جبنة + صوص رانش.' },
    { id:'smoky-chicken',name:'سموكي تشيكن',           cat:'pizza', img:'m-smoky-chicken.jpg',    spice:0, tags:[],             sizes:P(190,250), desc:'دجاج مشوي + رومي مدخن + فلفل ألوان + جبنة + سموكي باربيكيو صوص.' },
    { id:'smoky-meat',   name:'سموكي ميكس لحوم',       cat:'pizza', img:'m-smoky-meat.jpg', spice:0, tags:[],             sizes:P(190,250), desc:'كفتة مشوية + هوت دوج + بيبروني + فلفل ألوان + سموكي باربيكيو صوص.' },
    { id:'chicken-bacon',name:'تشيكن & بيكون',         cat:'pizza', img:'m-chicken-bacon.jpg',    spice:0, tags:[],             sizes:P(190,250), desc:'صدور دجاج مشوي + بيف بيكون + رومي مدخن + مشروم + فلفل ألوان + باقلو وشيدر صوص.' },
    { id:'spicy-bacon',  name:'سبايسي تشيكن & بيكون',  cat:'pizza', img:'placeholder.jpg',  spice:2, tags:[],             sizes:P(190,250), desc:'تشيكن ستريس حار + بيف بيكون + رومي مدخن + مشروم + هالابينو + باقلو وشيدر صوص.' },
    { id:'oriental',     name:'توب أورينتال',          cat:'pizza', img:'m-oriental.jpg',    spice:0, tags:[],             sizes:P(190,250), desc:'دجاج مشوي + رومي مدخن + طماطم + فلفل + زيتون + صلصة تومية.' },
    { id:'bbq-chicken',  name:'باربيكيو تشيكن',        cat:'pizza', img:'m-bbq-chicken.jpg',    spice:0, tags:[],             sizes:P(190,250), desc:'صلصة باربيكيو + فراخ + طماطم + فلفل + بصل.' },
    { id:'margherita',   name:'مارجريتا',              cat:'pizza', img:'m-margherita.jpg',    spice:0, tags:[],             sizes:P(130,200), desc:'صلصة طماطم + جبنة موزاريلا.' },
    { id:'pepperoni',    name:'بيبروني',               cat:'pizza', img:'m-pepperoni.jpg',  spice:1, tags:[],             sizes:P(170,230), desc:'صلصة طماطم + جبنة موزاريلا + بيبروني.' },
    { id:'tuna',         name:'تونة',                  cat:'pizza', img:'m-tuna.jpg',       spice:0, tags:[],             sizes:P(190,250), desc:'صلصة طماطم + جبنة + تونة قطع + بصل + زيتون + فلفل.' },
    { id:'seafood',      name:'سكامبي سي فود',         cat:'pizza', img:'m-seafood.jpg',       spice:0, tags:['new'],        sizes:P(215,280), desc:'جمبري + كاليماري + كابوريا + طماطم + فلفل + زيتون + صوص رانش.' },
    { id:'mixcheese',    name:'ميكس جبن',              cat:'pizza', img:'m-mixcheese.jpg',    spice:0, tags:[],             sizes:P(170,230), desc:'صلصة طماطم + مكس جبن أربع أنواع + فلفل + زيتون.' },
    { id:'mixmeat',      name:'ميكس لحوم',             cat:'pizza', img:'m-mixmeat.jpg', spice:0, tags:[],             sizes:P(190,250), desc:'صلصة طماطم + كفتة مشوية + لحمة مفرومة + هوت دوج + بيبروني + طماطم + فلفل + زيتون.' },
    { id:'mixchicken',   name:'ميكس فراخ',             cat:'pizza', img:'m-mixchicken.jpg',    spice:0, tags:[],             sizes:P(190,250), desc:'صلصة طماطم + فراخ + بانية + ستربس + طماطم + فلفل + زيتون.' },
    { id:'biriberi',     name:'بيري بيري تشيكن',       cat:'pizza', img:'placeholder.jpg',      spice:3, tags:['new'],        sizes:P(190,250), desc:'دجاج مشوي بالكريمة والمشروم والكاري + صوص بيري بيري + باقلو موزاريلا + فلفل ألوان.' },
    { id:'sicilia',      name:'سيسيليا',               cat:'pizza', img:'placeholder.jpg',  spice:0, tags:['new'],        sizes:P(190,250), desc:'سجق إيطالي + بيبروني + فلفل ألوان + زيتون + باقلو موزاريلا.' },

    /* ===== مكرونة (وسط / كبير) ===== */
    { id:'pasta-dream',        name:'مكرونة ماكس دريم',        cat:'pasta', img:'m-pasta-dream.jpg',   spice:2, tags:['new','best'], sizes:PP(125,160), desc:'مكرونة فرن + شيدر طبيعي + صلصة بيضاء + ستريس بارد + رومي مدخن + فلفل ألوان + صوص (شيلي + سيراتشا + رانش).' },
    { id:'pasta-chickncheese', name:'مكرونة تشيكن آند تشيز',   cat:'pasta', img:'placeholder.jpg',  spice:0, tags:[],             sizes:PP(125,160), desc:'فراخ مشوية + رومي مدخن + مكس جبن طبيعي (شيدر - موزاريلا).' },
    { id:'pasta-topgrill',     name:'مكرونة توب جريل',         cat:'pasta', img:'m-pasta-topgrill.jpg',  spice:0, tags:['best'],       sizes:PP(125,160), desc:'مكرونة بصلصة نابولي مع جبنة ودجاج مشوي (أوراك) بتتبيلة شرقية.' },
    { id:'pasta-chili-cranchy',name:'مكرونة تشيلي كرانشي',     cat:'pasta', img:'m-pasta-chili-cranchy.jpg',   spice:3, tags:[],             sizes:PP(125,160), desc:'صلصة بيضاء وطماطم + قطع ستريس حار + هالابينو + صوص تشيلي وشيدر في الفرن.' },
    { id:'pasta-chili',        name:'مكرونة تشيلي تشيكن',      cat:'pasta', img:'m-pasta-chili.jpg',   spice:3, tags:[],             sizes:PP(125,160), desc:'صلصة بيضاء + دجاج مشوي + بيف مدخن + صوص شيلي ورانش + فلفل ألوان + جبنة.' },
    { id:'pasta-siracha',      name:'مكرونة سيراتشا تشيكن',    cat:'pasta', img:'m-pasta-siracha.jpg',   spice:3, tags:['best'],       sizes:PP(125,160), desc:'صلصة بيضاء + ستريس حار + بيبروني + رومي مدخن + مشروم + فلفل ألوان + جبنة + صوص سيراتشا حار.' },
    { id:'pasta-bigtasty',     name:'مكرونة ماكس بيج تيستي',   cat:'pasta', img:'m-pasta-bigtasty.jpg',  spice:0, tags:[],             sizes:PP(125,160), desc:'صلصة بيضاء + نابولي + تندر تشيكن + بيبروني + رومي مدخن + بيج تيستي صوص.' },
    { id:'pasta-smoky',        name:'مكرونة سموكي تشيكن',      cat:'pasta', img:'placeholder.jpg',  spice:0, tags:[],             sizes:PP(125,160), desc:'صلصة بيضاء + دجاج مشوي + رومي مدخن + فلفل ألوان + صوص سموكي باربيكيو + جبنة في الفرن.' },
    { id:'pasta-smokymeat',    name:'مكرونة سموكي ميكس لحوم',  cat:'pasta', img:'m-pasta-smokymeat.jpg',  spice:0, tags:[],             sizes:PP(125,160), desc:'صلصة بيضاء + كفتة مشوية + هوت دوج + بيبروني + فلفل ألوان + سموكي باربيكيو + جبنة في الفرن.' },
    { id:'pasta-chicken-bacon',name:'مكرونة تشيكن & بيكون',    cat:'pasta', img:'m-pasta-chicken-bacon.jpg',  spice:0, tags:[],             sizes:PP(125,160), desc:'صلصة بيضاء + صدور مشوي + بيف بيكون + مشروم + فلفل + باقلو وشيدر صوص مع الجبنة في الفرن.' },
    { id:'pasta-spicy-bacon',  name:'مكرونة سبايسي & بيكون',   cat:'pasta', img:'placeholder.jpg',   spice:2, tags:[],             sizes:PP(125,160), desc:'صلصة بيضاء + ستريس حار + بيف بيكون + مشروم + هالابينو + باقلو وشيدر صوص في الفرن.' },
    { id:'pasta-diavolo',      name:'مكرونة ديافلو',          cat:'pasta', img:'m-pasta-diavolo.jpg',   spice:3, tags:[],             sizes:PP(125,160), desc:'صلصة بيضاء + ستريس حار + رومي مدخن + هالابينو + باقلو صوص مع الجبنة في الفرن.' },
    { id:'pasta-oriental',     name:'مكرونة توب أورينتال',     cat:'pasta', img:'m-pasta-oriental.jpg',  spice:0, tags:[],             sizes:PP(125,160), desc:'صلصة حمراء + دجاج مشوي + رومي مدخن + طماطم + فلفل + زيتون + تومية في الفرن.' },
    { id:'pasta-mixmeat',      name:'مكرونة ميكس لحوم',        cat:'pasta', img:'m-pasta-mixmeat.jpg',  spice:0, tags:[],             sizes:PP(120,150), desc:'بدون خضار — صلصة بيضاء + لحمة مفرومة + كفتة مشوية + هوت دوج + بيبروني في الفرن.' },
    { id:'pasta-mixchicken',   name:'مكرونة ميكس فراخ',        cat:'pasta', img:'placeholder.jpg',  spice:0, tags:[],             sizes:PP(120,150), desc:'بدون خضار — صلصة بيضاء + صدور دجاج + بانيه + ستريس حار + رومي مدخن في الفرن.' },
    { id:'pasta-negresco',     name:'مكرونة نجرسكو',          cat:'pasta', img:'placeholder.jpg',  spice:0, tags:[],             sizes:PP(120,150), desc:'صلصة بيضاء + دجاج + خضروات مشكلة مع الجبنة في الفرن.' },
    { id:'pasta-bechamel',     name:'مكرونة بشاميل',          cat:'pasta', img:'placeholder.jpg',  spice:0, tags:[],             sizes:PP(120,150), desc:'صلصة بيضاء + لحمة مفرومة مع الجبنة في الفرن.' },
    { id:'pasta-seafood',      name:'مكرونة ماكس سكامبي سي فود',cat:'pasta',img:'placeholder.jpg',   spice:0, tags:['new'],        sizes:PP(160,190), desc:'صلصة بيضاء (جمبري + كاليماري + كابوريا) + ثوم + خضار مع الجبنة في الفرن.' },
    { id:'pasta-biriberi', name:'مكرونة بيري بيري تشيكن', cat:'pasta', img:'m-pasta-biriberi.jpg',  spice:3, tags:['new'],        sizes:PP(125,160), desc:'مكرونة فرن + صلصة بيضاء + دجاج مشوي بالكريمة والمشروم والكاري + صوص بيري بيري + باقلو موزاريلا.' },
    { id:'pasta-sicilia',  name:'مكرونة سيسيليا',        cat:'pasta', img:'placeholder.jpg',  spice:0, tags:['new'],        sizes:PP(125,160), desc:'مكرونة فرن + صلصة بيضاء + سجق إيطالي + بيبروني + فلفل شيلي + زيتون + باقلو موزاريلا.' },

    /* ===== ساندوتش (سعر ثابت) ===== */
    { id:'sw-shish',      name:'شيش وراك مشوي',           cat:'sandwich', img:'m-sw-shish.jpg', spice:0, tags:[],       price:115, desc:'شيش وراك مشوي مع تومية.' },
    { id:'sw-tender',     name:'تندر فيليه دجاج كرانشي',  cat:'sandwich', img:'placeholder.jpg', spice:0, tags:['best'], price:115, desc:'تندر فيليه دجاج كرانشي مع تومية ورانش.' },
    { id:'sw-super',      name:'سوبر كرانشي',             cat:'sandwich', img:'m-sw-super.jpg', spice:2, tags:[],       price:115, desc:'سوبر كرانشي مع صوص سيراتشا.' },
    { id:'sw-cordon',     name:'كوردن بلو',               cat:'sandwich', img:'placeholder.jpg', spice:0, tags:[],       price:115, desc:'كوردن بلو مع صوص شيدر.' },
    { id:'sw-grilled',    name:'صدور دجاج مشوي',          cat:'sandwich', img:'m-sw-grilled.jpg', spice:0, tags:[],       price:115, desc:'صدور دجاج مشوي مع تومية.' },
    { id:'sw-grilled-hot',name:'صدور دجاج مشوي حار',      cat:'sandwich', img:'placeholder.jpg', spice:2, tags:[],       price:115, desc:'صدور دجاج مشوي حار (مشروم + هالابينو) مع تومية.' },
    { id:'sw-biriberi',    name:'بيري بيري تشيكن',       cat:'sandwich', img:'m-sw-biriberi.jpg', spice:3, tags:['new'], price:120, desc:'دجاج مشوي بالكريمة + باقلو موزاريلا + صوص بيري بيري.' },
    { id:'sw-ranch-cranchy-s',name:'رانش بيري تشكن',  cat:'sandwich', img:'placeholder.jpg', spice:3, tags:['new'], price:120, desc:'تندر تشيكن + باقلو موزاريلا + صوص رانش.' },

    /* ===== برجر (سعر ثابت) ===== */
    { id:'bg-bigtasty',        name:'بيج تيستي برجر',           cat:'burger', img:'placeholder.jpg', spice:0, tags:[], price:115, desc:'بيج تيستي برجر — ١٥٠ جرام.' },
    { id:'bg-ranch-cranchy',   name:'رانش كرانشي تشيكن برجر',   cat:'burger', img:'placeholder.jpg', spice:2, tags:[], price:115, desc:'رانش كرانشي تشيكن برجر.' },
    { id:'bg-bigtasty-chicken',name:'بيج تيستي تشيكن برجر',     cat:'burger', img:'placeholder.jpg', spice:0, tags:[], price:115, desc:'بيج تيستي تشيكن برجر.' },
    { id:'bg-bacon',           name:'بيكون تشيز برجر',          cat:'burger', img:'placeholder.jpg', spice:0, tags:[], price:115, desc:'بيكون تشيز برجر — ١٥٠ جرام.' },
    { id:'bg-cheese',          name:'تشيز برجر',                cat:'burger', img:'placeholder.jpg', spice:0, tags:[], price:110, desc:'تشيز برجر — ١٥٠ جرام.' },

    /* ===== وجبات المكرونة VIP (سعر ثابت 195) ===== */
    { id:'meal-topgrill',     name:'وجبة توب جريل',          cat:'meal', img:'m-meal-topgrill.jpg', spice:0, tags:['new'], price:200, desc:'مكرونة توب جريل + دجاج مشوي وراك خلطة شرقية + ٢ قطعة سمبوسة بالفراخ والجبنة + بطاطس فرسكاس.' },
    { id:'meal-bigtasty',     name:'وجبة ماكس بيج تيستي',    cat:'meal', img:'placeholder.jpg', spice:0, tags:['new'], price:200, desc:'مكرونة بيج تيستي + تشيكن تندر + ٢ قطعة سمبوسة بالفراخ والجبنة + بطاطس فرسكاس.' },
    { id:'meal-chicken-bacon',name:'وجبة تشيكن & بيكون',     cat:'meal', img:'m-meal-chicken-bacon.jpg', spice:0, tags:['new'], price:200, desc:'مكرونة تشيكن & بيكون + صدور مشوي + ٢ قطعة سمبوسة بالفراخ والجبنة + بطاطس فرسكاس.' },
    { id:'meal-diavolo',      name:'وجبة ديافلو',            cat:'meal', img:'m-meal-diavolo.jpg', spice:3, tags:['new'], price:200, desc:'مكرونة ديافلو + ٣ قطع ستريس + ٢ قطعة سمبوسة بالفراخ والجبنة + بطاطس فرسكاس.' },
    { id:'meal-smoky',        name:'وجبة سموكي تشيكن',       cat:'meal', img:'m-meal-smoky.jpg', spice:0, tags:['new'], price:200, desc:'مكرونة سموكي تشيكن + قطعتين كوردن بلو + ٢ قطعة سمبوسة بالفراخ والجبنة + بطاطس فرسكاس.' },

    /* ===== أطباق جانبية (سعر ثابت) ===== */
    { id:'sd-caesar',    name:'سلطة تشيكن سيزر',      cat:'sides', img:'placeholder.jpg',     spice:0, tags:['new'], price:85,  desc:'خس + طماطم + بصل + فلفل + ذرة + ريموﻻد صوص + بطاطس + مكعبات فراخ مشوية + توست محمص.' },
    { id:'sd-sambosa',   name:'سمبوسة بالفراخ والجبنة',cat:'sides', img:'m-sambosa.jpg',  spice:0, tags:[],       price:85,  desc:'٦ قطع سمبوسة محشية فراخ وجبنة، مقرمشة على الآخر.' },
    { id:'sd-strips',    name:'ستربس + بطاطس فرسكاس',  cat:'sides', img:'placeholder.jpg',     spice:0, tags:[],       price:115, desc:'٣ قطع ستربس + بطاطس فرسكاس — ١٨٠ جم.' },
    { id:'sd-tender',    name:'تندر تشيكن + بطاطس',    cat:'sides', img:'placeholder.jpg',     spice:0, tags:[],       price:110, desc:'تندر تشيكن + بطاطس فرسكاس — ١٨٠ جم.' },
    { id:'sd-wings',     name:'ماكس تشيكن وينجز',      cat:'sides', img:'m-wings.jpg', spice:2, tags:['new'],  price:100, desc:'٨ قطع أجنحة دجاج بصوص (رانش + باقلو + سيراتشا).' },
    { id:'sd-chili-fries',name:'تشيلي كرانشي فرايز',   cat:'sides', img:'m-chili-fries.jpg',     spice:3, tags:[],       price:100, desc:'بطاطس كرينكل + قطع ستريس حار ١٢٠جم + هالابينو + صوص شيلي وشيدر.' },
    { id:'sd-max-fries', name:'ماكس فرايز',            cat:'sides', img:'placeholder.jpg',     spice:0, tags:[],       price:85,  desc:'بطاطس كرينكل + بيف بيكون + رومي مدخن + مشروم + صوص شيدر.' },
    { id:'sd-ranch-fries',name:'رانش فرايز',           cat:'sides', img:'placeholder.jpg',     spice:0, tags:[],       price:85,  desc:'بطاطس كرينكل + مدخنات (بيكون + بيبروني + رومي + بيف) + صوص رانش.' },
    { id:'sd-freskas',   name:'بطاطس فرسكاس',          cat:'sides', img:'placeholder.jpg',     spice:0, tags:[],       price:50,  desc:'بطاطس فرسكاس مقرمشة.' },
    { id:'sd-fries',     name:'بطاطس فرنش فرايز',      cat:'sides', img:'m-fries.jpg',     spice:0, tags:[],       price:40,  desc:'بطاطس فرنش فرايز.' },
    { id:'sd-coleslaw',  name:'سلطة كول سلو',          cat:'sides', img:'placeholder.jpg',     spice:0, tags:[],       price:40,  desc:'سلطة كول سلو كريمية منعشة.' },

    /* ===== مشروبات ===== */
    { id:'dr-cola-lt', name:'مياه غازية ١ لتر', cat:'drinks', img:'m-drink-cola.jpg', spice:0, tags:[], price:35, desc:'مشروب غازي ١ لتر.' },
    { id:'dr-can',     name:'مشروب غازي كانز',  cat:'drinks', img:'placeholder.jpg', spice:0, tags:[], price:25, desc:'مشروب غازي كانز.' },
    { id:'dr-water-l', name:'مياه معدنية كبيرة', cat:'drinks', img:'placeholder.jpg', spice:0, tags:[], price:15, desc:'مياه معدنية كبيرة.' },
    { id:'dr-water-s', name:'مياه معدنية صغيرة', cat:'drinks', img:'placeholder.jpg', spice:0, tags:[], price:10, desc:'مياه معدنية صغيرة.' },

    /* ===== عروض التوفير (تنضاف للسلة، مش في الجريد) ===== */
    { id:'offer-pizza',    name:'عرض ٢ بيتزا وسط من اختيارك',      cat:'offer', img:'offer-pizza.jpg',    spice:0, tags:[], price:330, old:380, desc:'٢ بيتزا وسط من اختيارك (عدا السي فود).' },
    { id:'offer-pasta',    name:'عرض ٣ مكرونة وسط من اختيارك',     cat:'offer', img:'offer-pasta.jpg',    spice:0, tags:[], price:330, old:375, desc:'٣ مكرونة وسط من اختيارك (عدا السي فود).' },
    { id:'offer-sandwich', name:'عرض ٣ ساندوتش أو برجر من اختيارك', cat:'offer', img:'offer-sandwich.jpg', spice:0, tags:[], price:300, old:345, desc:'٣ ساندوتش أو برجر من اختيارك.' },
  ];

  const BEST_IDS = ['dream','pasta-bigtasty','siracha','chicken-ranch','seafood','sd-wings'];

  /* عروض التوفير: كام صنف لازم يختار، ومن انهي فئات، وأي أصناف مستثناة (سي فود) */
  const OFFER_CONFIG = {
    'offer-pizza':    { count: 2, sources: ['pizza'],              excludeIds: ['seafood'] },
    'offer-pasta':    { count: 3, sources: ['pasta'],              excludeIds: ['pasta-seafood'] },
    'offer-sandwich': { count: 3, sources: ['sandwich','burger'],  excludeIds: [] },
  };

  const REVIEWS = [
    { name:'محمود عبد الله', city:'المنصورة', color:'#FF3B2E', text:'أحلى بيتزا دقتها في حياتي! العجينة طازة والطعم خرافي. ماكس دريم مفيش زيها.' },
    { name:'سارة إبراهيم', city:'طلخا', color:'#4CC66A', text:'التوصيل كان سريع جداً والأكل وصل سخن. مكرونة سيراتشا أحلى مكرونة في المنصورة فعلاً.' },
    { name:'أحمد رضا', city:'الجامعة', color:'#FFC42E', text:'أسعار ممتازة وجودة عالية. بطلب منهم كل أسبوع مع أصحابي والكل بيحب الطعم.' },
    { name:'مريم حسن', city:'المنصورة', color:'#FF3B2E', text:'الساندويتشات والأجنحة مستوى تاني. النظافة والتغليف محترمين جداً. تسلم إيديكم.' },
    { name:'كريم سامي', city:'وسط البلد', color:'#4CC66A', text:'خدمة عملاء راقية وطعم ثابت في كل مرة. عروض التوفير أوفر حاجة للعيلة.' },
    { name:'نورهان علي', city:'طلخا', color:'#FFC42E', text:'بجد طعم الفرحة بيتكلم! البيبروني حارّة بالظبط زي ما بحب. ماكس بقى مطعمي المفضّل.' },
  ];

  const GALLERY = ['m-chicken-ranch.jpg','m-wings.jpg','m-pepperoni.jpg','m-pasta-siracha.jpg','m-meal-topgrill.jpg','m-chili-fries.jpg','m-mixmeat.jpg','m-siracha.jpg','m-pasta-diavolo.jpg','m-meal-smoky.jpg','m-oriental.jpg','m-sw-shish.jpg'];

  const IMG = '/assets/img/';
  const $  = (s, c=document) => c.querySelector(s);
  const $$ = (s, c=document) => Array.from(c.querySelectorAll(s));
  const AR = n => n.toLocaleString('ar-EG');

  const byId    = id => MENU.find(x => x.id === id);
  const minPrice = m => m.sizes ? m.sizes[0].p : m.price;   // وسط / السعر الأساسي

  /* ---------- Render menu cards ---------- */
  function spiceHtml(level) {
    let s = '<span class="spice" title="مستوى الحرارة">';
    for (let i=0;i<3;i++) s += `<svg class="${i<level?'on':''}" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c1 3-1 4-1 6a3 3 0 0 0 6 0c0-1 0-2-.5-3 2 1.5 3.5 4 3.5 7a7 7 0 1 1-14 0c0-4 3-6 4-10 1 1 2 .5 2 0z"/></svg>`;
    return s + '</span>';
  }
  function tagHtml(tags) {
    const map = { best:['tag-best','الأكثر طلباً'], new:['tag-new','جديد'], hot:['tag-hot','حار'] };
    return (tags||[]).map(t => `<span class="tag ${map[t][0]}">${map[t][1]}</span>`).join('');
  }
  function priceDisplay(p) { return `${AR(p)} <small>ج</small>`; }

  function cardHtml(m) {
    const sized = !!m.sizes;
    const first = sized ? m.sizes[0].p : m.price;
    const sizeSelect = sized
      ? `<div class="size-select" role="group" aria-label="اختر الحجم">${m.sizes.map((s,i)=>
          `<button class="size-opt${i===0?' active':''}" data-size="${i}">${s.l}${s.s?` <i>${s.s}</i>`:''}</button>`).join('')}</div>`
      : '';
    const priceHtml = m.old
      ? `<div class="price" data-price>${AR(m.price)} <small>ج</small> <s>${AR(m.old)} ج</s></div>`
      : `<div class="price" data-price>${priceDisplay(first)}</div>`;
    return `<article class="card reveal" data-cat="${m.cat}" data-id="${m.id}">
      <div class="card-media">
        <div class="card-tags">${tagHtml(m.tags)}</div>
        <button class="fav" data-fav="${m.id}" aria-label="أضف للمفضلة"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 1 0-7.8 7.8l1.1 1L12 21l7.7-7.6 1.1-1a5.5 5.5 0 0 0 0-7.8z"/></svg></button>
        <img src="${IMG}${m.img}" alt="${m.name}" loading="lazy">
      </div>
      <div class="card-body">
        <h3 class="card-title">${m.name}${m.spice ? ' ' + spiceHtml(m.spice) : ''}</h3>
        <p class="card-desc">${m.desc}</p>
        ${sizeSelect}
        <div class="card-foot">
          ${priceHtml}
          <button class="add" data-add="${m.id}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg>
            أضف
          </button>
        </div>
      </div>
    </article>`;
  }
  // family offers are surfaced in the Offers section, not in the grid
  $('#menuGrid').innerHTML = MENU.filter(m => m.cat !== 'family' && m.cat !== 'offer').map(cardHtml).join('');

  /* ---------- Best sellers carousel ---------- */
  const carousel = $('#carousel');
  carousel.innerHTML = BEST_IDS.map((id, i) => {
    const m = byId(id); if (!m) return '';
    const priceLabel = m.sizes ? `من ${AR(minPrice(m))} ج` : `${AR(m.price)} ج`;
    return `<div class="slide"><div class="slide-inner" data-tilt>
      <span class="slide-rank">${i+1}#</span>
      <img src="${IMG}${m.img}" alt="${m.name}" loading="lazy">
      <div class="slide-caption">
        <h3>${m.name}</h3>
        <div class="meta"><span class="price">${priceLabel}</span></div>
      </div>
    </div></div>`;
  }).join('');

  const scrollAmt = () => Math.min(382, window.innerWidth * 0.85);
  $('#carNext').addEventListener('click', () => carousel.scrollBy({ left: -scrollAmt(), behavior:'smooth' })); // RTL
  $('#carPrev').addEventListener('click', () => carousel.scrollBy({ left:  scrollAmt(), behavior:'smooth' }));

  /* 3D tilt on slides */
  $$('[data-tilt]').forEach(el => {
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - .5;
      const py = (e.clientY - r.top) / r.height - .5;
      el.style.transform = `rotateY(${px*10}deg) rotateX(${-py*10}deg) translateY(-6px)`;
    });
    el.addEventListener('mouseleave', () => el.style.transform = '');
  });

  /* ---------- Reviews ---------- */
  const stars = '<div class="stars">' + Array(5).fill('<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.3 6.9.6-5.2 4.6 1.6 6.8L12 17.3 5.8 20.9l1.6-6.8L2.2 8.9l6.9-.6z"/></svg>').join('') + '</div>';
  $('#reviewsGrid').innerHTML = REVIEWS.map((r,i) => `<div class="review reveal" data-d="${i%3}">
    ${stars}
    <p>“${r.text}”</p>
    <div class="review-person">
      <div class="avatar" style="background:${r.color}">${r.name.charAt(0)}</div>
      <div><b>${r.name}</b><span>${r.city}</span></div>
    </div>
  </div>`).join('');

  /* ---------- Gallery ---------- */
  $('#masonry').innerHTML = GALLERY.map(g => `<div class="masonry-item"><img src="${IMG}${g}" alt="من أطباق بيتزا ماكس" loading="lazy"></div>`).join('');

  /* ---------- Filter ---------- */
  $('#filterBar').addEventListener('click', e => {
    const btn = e.target.closest('.filter-chip'); if (!btn) return;
    $$('.filter-chip').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    $$('#menuGrid .card').forEach(c => {
      c.style.display = (f === 'all' || c.dataset.cat === f) ? '' : 'none';
    });
  });

  /* ---------- Favorites ---------- */
  document.addEventListener('click', e => {
    const fav = e.target.closest('[data-fav]'); if (!fav) return;
    fav.classList.toggle('on');
  });

  /* ---------- Cart (size-aware) ---------- */
  const cart = new Map();  // key -> { id, name, img, sizeLabel, price, qty } | offer entries add { selections, needed }
  const drawer = $('#drawer'), overlay = $('#drawerOverlay');
  const openDrawer  = () => { drawer.classList.add('open'); overlay.classList.add('open'); };
  const closeDrawer = () => { drawer.classList.remove('open'); overlay.classList.remove('open'); };

  /* ---------- Offer selection mode ---------- */
  let selectionMode = null; // { offerId, cfg }
  const offerBanner = $('#offerBanner'), obTitle = $('#obTitle'), obProgress = $('#obProgress');

  function offerSourceLabel(cfg) {
    const map = { pizza:'البيتزا', pasta:'المكرونة', sandwich:'الساندوتش', burger:'البرجر' };
    return cfg.sources.map(s => map[s] || s).join(' أو ');
  }

  function enterSelectionMode(offerId) {
    const entry = cart.get(offerId); if (!entry) return;
    const cfg = OFFER_CONFIG[offerId]; if (!cfg) return;
    selectionMode = { offerId, cfg };

    $('#filterBar').style.display = 'none';

    $$('#menuGrid .card').forEach(card => {
      const eligible = cfg.sources.includes(card.dataset.cat) && !(cfg.excludeIds||[]).includes(card.dataset.id);
      card.style.display = '';
      card.classList.toggle('offer-disabled', !eligible);
      card.classList.toggle('offer-eligible', eligible);
      if (!eligible) return;
      const m = byId(card.dataset.id);
      const sizeSelect = card.querySelector('.size-select');
      if (sizeSelect) {
        sizeSelect.style.display = 'none';
        card.querySelector('[data-price]').innerHTML = priceDisplay(m.sizes[0].p);
      }
      const addBtn = card.querySelector('.add');
      addBtn.classList.add('picking');
      addBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg> اختار للعرض';
    });

    obTitle.textContent = `اختار ${AR(cfg.count)} من ${offerSourceLabel(cfg)} للعرض`;
    obProgress.textContent = `${AR(entry.selections.length)} / ${AR(cfg.count)}`;
    offerBanner.hidden = false;
    document.getElementById('menu')?.scrollIntoView({ behavior:'smooth' });
  }

  function exitSelectionMode(finished) {
    if (!selectionMode) return;
    $('#filterBar').style.display = '';
    $$('#menuGrid .card').forEach(card => {
      card.classList.remove('offer-disabled', 'offer-eligible');
      card.style.display = '';
      const m = byId(card.dataset.id);
      const sizeSelect = card.querySelector('.size-select');
      if (sizeSelect) {
        sizeSelect.style.display = '';
        const active = sizeSelect.querySelector('.size-opt.active') || sizeSelect.querySelector('.size-opt');
        card.querySelector('[data-price]').innerHTML = priceDisplay(m.sizes[+ (active?.dataset.size || 0)].p);
      }
      const addBtn = card.querySelector('.add');
      addBtn.classList.remove('picking');
      addBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg> أضف';
    });
    offerBanner.hidden = true;
    if (finished) toast('تم اختيار أصناف العرض ✅');
    selectionMode = null;
  }

  function pickForOffer(itemId) {
    if (!selectionMode) return;
    const entry = cart.get(selectionMode.offerId); if (!entry) return;
    const m = byId(itemId); if (!m) return;
    entry.selections.push(m.name + (m.sizes ? ' (وسط)' : ''));
    renderCart();
    if (entry.selections.length >= selectionMode.cfg.count) {
      exitSelectionMode(true);
    } else {
      obProgress.textContent = `${AR(entry.selections.length)} / ${AR(selectionMode.cfg.count)}`;
    }
  }

  function startOffer(offerId) {
    const cfg = OFFER_CONFIG[offerId]; if (!cfg) return;
    let entry = cart.get(offerId);
    if (!entry) {
      const m = byId(offerId); if (!m) return;
      entry = { id:offerId, name:m.name, img:m.img, price:m.price, qty:1, selections:[], needed:cfg.count };
      cart.set(offerId, entry);
      renderCart();
    }
    if (entry.selections.length >= entry.needed) {
      toast('العرض ده متضاف بالفعل بكل اختياراته ✅');
      openDrawer();
      return;
    }
    closeDrawer();
    enterSelectionMode(offerId);
  }

  function addToCart(id, sizeIdx) {
    const m = byId(id); if (!m) return;
    const sized = !!m.sizes;
    const idx   = sized ? (sizeIdx || 0) : -1;
    const key   = sized ? `${id}__${idx}` : id;
    const price = sized ? m.sizes[idx].p : m.price;
    const sizeLabel = sized ? m.sizes[idx].l : '';
    const e = cart.get(key) || { id, name:m.name, img:m.img, sizeLabel, price, qty:0 };
    e.qty++; cart.set(key, e);
    renderCart();
    toast(`تمت إضافة «${m.name}${sizeLabel ? ' — ' + sizeLabel : ''}» للسلة`);
  }
  function changeQty(key, d) {
    const e = cart.get(key); if (!e) return;
    e.qty += d;
    if (e.qty <= 0) cart.delete(key); else cart.set(key, e);
    renderCart();
  }
  const DELIVERY_FEE = 35;  // رسوم توصيل ثابتة
  function cartTotal() { return [...cart.values()].reduce((s,e) => s + e.price*e.qty, 0); }

  function renderCart() {
    const count = [...cart.values()].reduce((a,e)=>a+e.qty,0);
    const cc = $('#cartCount');
    cc.textContent = AR(count); cc.hidden = count === 0;
    drawer.classList.toggle('is-empty', cart.size === 0);
    $('#cartCountLabel').textContent = count ? `· ${AR(count)} ${count === 1 ? 'صنف' : 'أصناف'}` : '';

    const lines = $('#cartLines');
    if (cart.size === 0) {
      lines.innerHTML = `<div class="cart-empty">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>
        <p>سلتك لسه فاضية<br><span>ضيف أطباقك المفضلة وابدأ طلبك 🍕</span></p>
        <button type="button" class="btn btn-cheese btn-sm" id="browseMenu">شوف المنيو</button>
      </div>`;
    } else {
      lines.innerHTML = [...cart.entries()].map(([key,e]) => {
        if (e.selections) {
          const done = e.selections.length >= e.needed;
          return `<div class="cart-line offer-line">
              <img src="${IMG}${e.img}" alt="${e.name}">
              <div class="info">
                <b>${e.name}</b>
                <span>${AR(e.price)} ج</span>
                ${e.selections.length ? `<ul class="offer-picks">${e.selections.map(s=>`<li>${s}</li>`).join('')}</ul>` : ''}
                ${!done ? `<button type="button" class="offer-resume" data-resume="${key}">أكمل اختيارك (${AR(e.selections.length)}/${AR(e.needed)})</button>` : ''}
              </div>
              <button type="button" class="cart-del" data-del="${key}" aria-label="حذف">🗑</button>
            </div>`;
        }
        return `<div class="cart-line">
          <img src="${IMG}${e.img}" alt="${e.name}">
          <div class="info">
            <b>${e.name}${e.sizeLabel ? ` <em>${e.sizeLabel}</em>` : ''}</b>
            <span>${AR(e.price)} ج × ${AR(e.qty)} = <strong>${AR(e.price*e.qty)} ج</strong></span>
          </div>
          <div class="qty">
            <button data-q="${key}" data-d="1" aria-label="زيادة">+</button>
            <b>${AR(e.qty)}</b>
            <button data-q="${key}" data-d="-1" aria-label="${e.qty === 1 ? 'حذف' : 'إنقاص'}">${e.qty === 1 ? '🗑' : '−'}</button>
          </div>
        </div>`;
      }).join('');
    }
    const _sub = cartTotal();
    if ($('#cartSubtotal')) $('#cartSubtotal').textContent = AR(_sub) + ' ج';
    if ($('#cartDelivery')) $('#cartDelivery').textContent = AR(DELIVERY_FEE) + ' ج';
    $('#cartTotal').textContent = AR(_sub + DELIVERY_FEE) + ' ج';
  }
  // empty-state: browse menu closes the drawer to reveal the menu
  document.addEventListener('click', e => {
    if (e.target.closest('#browseMenu')) { closeDrawer(); document.getElementById('menu')?.scrollIntoView({ behavior:'smooth' }); }
  });

  document.addEventListener('click', e => {
    // size switch inside a card
    const sizeBtn = e.target.closest('.size-opt');
    if (sizeBtn) {
      const card = sizeBtn.closest('.card'); const m = byId(card.dataset.id);
      card.querySelectorAll('.size-opt').forEach(b => b.classList.remove('active'));
      sizeBtn.classList.add('active');
      card.querySelector('[data-price]').innerHTML = priceDisplay(m.sizes[+sizeBtn.dataset.size].p);
      return;
    }
    // trigger an offer: adds the bundle to cart + starts item selection from the menu
    const offerBtn = e.target.closest('[data-offer]');
    if (offerBtn) { startOffer(offerBtn.dataset.offer); return; }

    // add to cart (cards) — during an active offer selection, eligible cards pick for the offer instead
    const add = e.target.closest('[data-add]');
    if (add) {
      if (selectionMode && add.classList.contains('picking')) { pickForOffer(add.dataset.add); return; }
      const card = add.closest('.card');
      let sizeIdx = 0;
      if (card) { const a = card.querySelector('.size-opt.active'); if (a) sizeIdx = +a.dataset.size; }
      addToCart(add.dataset.add, sizeIdx);
      if (add.classList.contains('add')) {
        add.classList.add('added'); add.innerHTML = '✓ اتضاف';
        setTimeout(()=>{ add.classList.remove('added'); add.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg> أضف'; }, 1400);
      }
      return;
    }
    // resume an incomplete offer selection from the cart
    const resume = e.target.closest('[data-resume]');
    if (resume) { closeDrawer(); enterSelectionMode(resume.dataset.resume); return; }

    // delete a cart line entirely (offers)
    const del = e.target.closest('[data-del]');
    if (del) { cart.delete(del.dataset.del); renderCart(); return; }

    // qty stepper
    const q = e.target.closest('[data-q]');
    if (q) { changeQty(q.dataset.q, +q.dataset.d); return; }
  });

  $('#obCancel')?.addEventListener('click', () => exitSelectionMode(false));

  $('#cartToggle').addEventListener('click', openDrawer);
  $('#drawerClose').addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });
  renderCart();

  /* ---------- WhatsApp checkout ---------- */
  const WHATSAPP_NUMBER = '201070336868';        // international format, no + / spaces (01070336868)
  const money = n => n.toLocaleString('en-US');  // 1,945  (WhatsApp-safe digits)

  const val = id => ($('#' + id)?.value || '').trim();

  // read customer details + cart + notes and build a clean order message
  function buildOrderMessage() {
    const DIV = '———————————';
    const lines = ['🍕 *طلب جديد من الموقع*', DIV];

    // customer details
    lines.push(`👤 *الاسم:* ${val('custName')}`);
    lines.push(`📱 *الموبايل:* ${val('custPhone')}`);
    const phone2 = val('custPhone2');
    if (phone2) lines.push(`📱 *رقم إضافي:* ${phone2}`);
    lines.push(`📍 *العنوان:* ${val('custAddr')}`);
    lines.push(`💳 *وسيلة الدفع:* ${val('payMethod')}`);
    lines.push(DIV);

    // order items
    let total = 0;
    for (const [, e] of cart) {
      const lineTotal = e.price * e.qty;
      total += lineTotal;
      lines.push(`• ${e.name}${e.sizeLabel ? ` (${e.sizeLabel})` : ''}`);
      if (e.selections && e.selections.length) e.selections.forEach(s => lines.push(`   - ${s}`));
      lines.push(`   ${e.qty} × ${money(e.price)} = ${money(lineTotal)} ج`);
    }
    lines.push(DIV);
    lines.push(`المجموع الفرعي: ${money(total)} ج`);
    lines.push(`رسوم التوصيل: ${money(DELIVERY_FEE)} ج`);
    lines.push(`*الإجمالي: ${money(total + DELIVERY_FEE)} ج*`);

    const notes = val('orderNotes');
    if (notes) { lines.push(DIV); lines.push(`📝 *ملاحظات:* ${notes}`); }
    return lines.join('\n');   // real newlines — encoded below
  }

  function buildWhatsAppUrl() {
    // encodeURIComponent turns "\n" -> %0A and " " -> %20
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildOrderMessage())}`;
  }

  $('#checkoutBtn').addEventListener('click', e => {
    e.preventDefault();
    if (cart.size === 0) { toast('سلتك فاضية — ضيف أصناف الأول 🍕'); return; }

    // block checkout while an offer still needs item selections
    for (const [key, en] of cart) {
      if (en.selections && en.selections.length < en.needed) {
        toast('كمّل اختيار أصناف العرض الأول 🍕');
        enterSelectionMode(en.id);
        return;
      }
    }

    // required customer fields
    const required = [
      { id:'custName',  label:'الاسم' },
      { id:'custPhone', label:'رقم الموبايل' },
      { id:'custAddr',  label:'العنوان' },
    ];
    required.forEach(f => $('#' + f.id).classList.remove('invalid'));
    for (const f of required) {
      if (!val(f.id)) {
        const el = $('#' + f.id);
        el.classList.add('invalid'); el.focus();
        toast(`من فضلك اكتب ${f.label}`);
        return;
      }
    }
    // basic phone check (min 8 digits)
    if (val('custPhone').replace(/\D/g, '').length < 8) {
      const el = $('#custPhone'); el.classList.add('invalid'); el.focus();
      toast('رقم الموبايل غير صحيح');
      return;
    }
    window.open(buildWhatsAppUrl(), '_blank', 'noopener,noreferrer');
  });

  // clear the invalid highlight as the user types
  ['custName','custPhone','custAddr'].forEach(id => {
    const el = $('#' + id);
    el?.addEventListener('input', () => el.classList.remove('invalid'));
  });

  /* ---------- Toast ---------- */
  let toastTimer;
  function toast(msg) {
    const t = $('#toast'); $('#toastMsg').textContent = msg;
    t.classList.add('show'); clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
  }

  /* ---------- Copy coupon ---------- */
  $('#copyCoupon')?.addEventListener('click', () => {
    const code = $('#couponCode').textContent.trim();
    navigator.clipboard?.writeText(code).then(() => toast('تم نسخ الكود ' + code)).catch(()=> toast('الكود: ' + code));
  });

  /* ---------- Countdown ---------- */
  (function countdown() {
    const el = $('#countdown'); if (!el) return;
    let end = Date.now() + (+el.dataset.hours) * 3600 * 1000;
    const pad = n => String(n).padStart(2,'0');
    function tick() {
      let diff = Math.max(0, end - Date.now());
      const h = Math.floor(diff/3.6e6), m = Math.floor(diff%3.6e6/6e4), s = Math.floor(diff%6e4/1000);
      el.querySelector('[data-cd="h"]').textContent = pad(h);
      el.querySelector('[data-cd="m"]').textContent = pad(m);
      el.querySelector('[data-cd="s"]').textContent = pad(s);
      if (diff === 0) end = Date.now() + 26*3600*1000;
    }
    tick(); setInterval(tick, 1000);
  })();

  /* ---------- Nav scroll state + progress ---------- */
  const nav = $('#nav'), progress = $('#scrollProgress');
  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 30);
    const h = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = `scaleX(${h > 0 ? window.scrollY/h : 0})`;
  }
  onScroll(); window.addEventListener('scroll', onScroll, { passive:true });

  /* ---------- Mobile nav ---------- */
  $('#navToggle').addEventListener('click', () => nav.classList.toggle('open'));
  $$('#navLinks a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

  /* ---------- Hero parallax ---------- */
  const heroBg = $('.hero-bg img');
  if (heroBg && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y < window.innerHeight) heroBg.style.transform = `scale(1.08) translateY(${y*0.18}px)`;
    }, { passive:true });
  }

  /* ---------- Reveal on scroll ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  $$('.reveal').forEach(el => io.observe(el));

  /* ---------- Count-up stats ---------- */
  const countUp = el => {
    const target = +el.dataset.count, suffix = el.dataset.suffix || '', dur = 1400;
    const t0 = performance.now();
    const step = now => {
      const p = Math.min(1, (now - t0) / dur);
      el.textContent = AR(Math.floor((1 - Math.pow(1-p,3)) * target)) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const co = new IntersectionObserver((entries) => {
    entries.forEach(en => { if (en.isIntersecting) { countUp(en.target); co.unobserve(en.target); } });
  }, { threshold: 0.5 });
  $$('[data-count]').forEach(el => co.observe(el));

  /* ---------- Year ---------- */
  $('#year').textContent = new Date().getFullYear();
})();
