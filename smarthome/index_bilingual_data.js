// Bilingual Lecture Data for index.html
// Due to extreme size, creating as separate file to preserve context budget
// User requested: "Tüm HTML content'leri manuel çevirmek"

const lectureDataBilingual = {
    tr: [
        // Chapter 1 - TURKISH
        {
            id: 1,
            module: "Bölüm 1",
            title: "Enerji Yönetimine Giriş ve Temel Kavramlar",
            testUrl: "test1.html",
            content: `
                <div class="space-y-6">
                    <div><h4 class="text-lg font-bold text-blue-800 mb-2">1. Enerji Yönetimi: Tanım ve Amaçlar</h4><p class="mb-2">En basit tanımıyla enerji yönetimi, "kârı maksimize etmek (maliyetleri en aza indirmek) ve rekabetçi konumu geliştirmek için enerjinin akılcı ve etkin kullanılmasıdır".</p><p class="mb-2">Birincil hedef her zaman maliyetleri düşürmek veya kârı artırmaktır.</p><p class="font-semibold mb-1">Alt Hedeflerimiz:</p><ul class="list-disc list-inside pl-4 space-y-1 text-gray-700 marker:text-blue-500"><li>Enerji verimliliğini artırmak ve enerji kullanımını azaltmak</li><li>Akıllıca enerji kullanımı için etkili izleme, raporlama ve yönetim stratejileri geliştirmek</li><li>Ar-Ge yoluyla enerji yatırımlarından elde edilen getiriyi artırmanın yeni yollarını bulmak</li><li>Enerji tedariğindeki kesintilerin (brownout vb.) etkilerini azaltmak</li></ul></div>
                    <div><h4 class="text-lg font-bold text-blue-800 mb-2">2. Neden Enerji Yönetimine İhtiyacımız Var? (İtici Güçler)</h4><p class="mb-2">Enerji yönetimini zorunlu kılan temel faktörler:</p><ul class="list-disc list-inside pl-4 space-y-2 text-gray-700 marker:text-blue-500"><li><strong>İklim Değişikliği:</strong> Küresel ısınma nedeniyle fosil yakıt tüketimini azaltmak için acil bir ihtiyaç var. Binaların ısıtılması, soğutulması ve aydınlatılması, toplam enerji tüketimi ve CO<sub>2</sub> emisyonunun %50'sini oluşturuyor.</li><li><strong>Politik Hedefler (AB 20-20-20):</strong> Sera gazı emisyonlarında %20 azalma, yenilenebilir enerjinin payının %20'ye çıkarılması, enerji verimliliğinde %20 iyileşme.</li><li><strong>Ekonomik Baskı:</strong> Petrol ve gaz fiyatlarındaki genel artış eğilimi ve pahalı yakıt ithalatına olan bağımlılığı azaltma gerekliliği.</li><li><strong>Toplumsal Farkındalık:</strong> Çevresel konular hakkında artan kamu bilinci.</li></ul></div>
                    <div><h4 class="text-lg font-bold text-blue-800 mb-2">3. Enerji Yönetiminin Değeri</h4><p class="mb-2">Enerji yönetimi sadece para tasarrufu sağlamaz, aynı zamanda ciddi çevresel ve operasyonel faydalar sunar:</p><div class="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500 mb-3"><p class="font-semibold mb-1">Çevresel Değer:</p><p class="text-sm">Ticari ve endüstriyel enerji kullanımı, fosil yakıtlardan salınan CO<sub>2</sub>'nin yaklaşık %45'inden ve SO<sub>2</sub> (asit yağmuruna neden olan) emisyonlarının %70'inden sorumludur. Enerji yönetimi bu yükü doğrudan azaltır.</p></div><div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mb-3"><p class="font-semibold mb-2">Ekonomik Değer - Tasarruf Potansiyelleri:</p><ul class="list-none space-y-1 text-sm"><li>🔹 Düşük maliyetli faaliyetler (ilk 1-2 yıl): <strong>%5 - %15</strong></li><li>🔹 Orta maliyetli çabalar (3-5 yıl): <strong>%15 - %30</strong></li><li>🔹 Uzun vadeli, yüksek mühendislik gerektiren projeler: <strong>%30 - %50</strong></li></ul></div><p class="text-sm"><strong>Verimlilik:</strong> Yeni enerji verimliliği teknolojileri ve malzemeleri, şirketlerin verimliliğini ve ürün kalitesini de artırmaktadır.</p></div>
                    <div><h4 class="text-lg font-bold text-blue-800 mb-2">4. Küresel ve Türkiye'deki Mevcut Enerji Durumu</h4><div class="mb-3"><p class="font-semibold text-gray-800 mb-1">Küresel Durum:</p><ul class="list-disc list-inside pl-4 space-y-1 text-sm text-gray-700 marker:text-gray-500"><li>Dünyanın birincil enerji arzı 1990'dan 2011'e %49 artmıştır</li><li>2011 itibarıyla küresel enerjinin %82'si hala fosil yakıtlardan geliyordu</li><li>Küresel elektrik talebinde en büyük pay %45 ile motorlara aittir, bunu %20 ile ev aletleri ve %15 ile aydınlatma takip eder</li></ul></div><div><p class="font-semibold text-gray-800 mb-1">Türkiye Özelinde Durum:</p><ul class="list-disc list-inside pl-4 space-y-1 text-sm text-gray-700 marker:text-gray-500"><li><strong>Tüketim Artışı:</strong> Türkiye, 1990-2011 arasında birincil enerji arzında %117'lik bir artışla Çin ve Hindistan'dan sonra en hızlı büyüyen ülkelerden biri olmuştur. Elektrik tüketimimiz 1973'ten 2016'ya sürekli ve güçlü bir artış göstermiştir.</li><li><strong>Kaynak Bağımlılığı (2014):</strong> Enerjimizin büyük bir kısmı Doğal Gaz (%33.4) ve Kömür (%32.1) kaynaklıdır. Enerjinin en çok tüketildiği sektör ise %43.8 ile Elektrik Enerjisi üretimidir.</li><li><strong>Kişi Başı Tüketim (2015):</strong> Türkiye'nin kişi başı enerji tüketimi (1.6 toe), OECD ortalamasının (4.2 toe) çok altındadır. Benzer şekilde, kişi başı net elektrik tüketimimiz (2,971 kWh) de OECD ortalamasının (7,822 kWh) oldukça gerisindedir.</li><li><strong>Kurulu Güç (2016):</strong> 2016 sonu itibarıyla kurulu gücümüzün %34.1'i Hidroelektrik ve %34.1'i Doğal Gazdır.</li><li><strong>Yenilenebilir Enerji:</strong> 2005'ten sonra yenilenebilir enerji kurulu gücünde hızlı bir artış görmekteyiz. Devletin özellikle Güneş (Fotovoltaik ve CSP) ve Biyokütle için sunduğu baz ve yerel ekipman teşvikleri (Feed-in Tariff) bu büyümede etkilidir.</li><li><strong>Enerji Yoğunluğu:</strong> "Bir ülkenin ekonomisinin enerji verimliliğinin bir ölçüsüdür" (GSYİH birimi başına düşen enerji birimi). Yüksek yoğunluk, enerjiyi GSYİH'ye dönüştürmenin maliyetli (verimsiz) olduğunu gösterir. 2010 verilerine göre Türkiye, GSYİH seviyesine göre nispeten yüksek enerji yoğunluğuna sahip. Hedefimiz, daha az enerji ile daha fazla GSYİH üreten (Japonya, Almanya, İngiltere gibi) daha verimli bir noktaya (düşük enerji yoğunluğu) ilerlemektir.</li></ul></div></div>
                    <div class="mt-8 pt-6 border-t border-gray-200"><h4 class="text-xl font-bold text-blue-800 mb-4">📚 Örnek Soru Çözümleri</h4><div class="bg-slate-50 p-4 rounded-lg shadow-inner text-gray-600"><p>Bu bölümde (PDF 1) sayısal örnek soru bulunmamaktadır.</p></div></div>
                </div>
            `
        },
        {
            id: 2,
            module: "Bölüm 2",
            title: "Yük Karakteristikleri ve Analizi",
            testUrl: "test2.html",
            content: `
                <div class="space-y-6">
                    <div><h4 class="text-lg font-bold text-blue-800 mb-2">1. Elektrik Talebinin Değişkenliği Sorunu</h4><p class="mb-2">Elektrik üretimi ve dağıtımında karşılaşılan en büyük zorluk, talebin sürekli değişmesidir:</p><ul class="list-disc list-inside pl-4 space-y-1 text-gray-700 marker:text-blue-500"><li>Talep <strong>saat, gün ve mevsimlere</strong> göre değişir</li><li>Elektrik depo edilemediğinden, her an talebe uygun üretim yapılmalıdır</li><li>Bu nedenle, sistemin <strong>pik (tepe) talebe</strong> göre boyutlandırılması gerekir</li></ul><p class="mt-2">Ancak, sistemin çoğu zaman bu pik kapasitenin altında çalışması büyük kapasite israfı ve maliyetlere neden olur. Bu nedenle, enerji yönetiminin ilk adımı talebi düzleştirmektir: <strong>Pik Talep Yönetimi (Peak Demand Management)</strong>.</p></div>

                    <div><h4 class="text-lg font-bold text-blue-800 mb-2">2. Temel Tanımlar ve Kavramlar</h4>
                    
                    <div class="mb-4"><h5 class="font-bold text-gray-800 mb-1">2.1. Bağlı Yük (Connected Load / Installed Capacity)</h5><p class="text-sm text-gray-700 mb-2">Bir tesise bağlı tüm ekipmanların <strong>toplam güç değerlerinin toplamı</strong>dır (kW veya kVA cinsinden). Bu, tesiste kurulu olan maksimum kapasitenin ölçüsüdür.</p></div>

                    <div class="mb-4"><h5 class="font-bold text-gray-800 mb-1">2.2. Talep (Demand)</h5><p class="text-sm text-gray-700 mb-2"><strong>Belirli bir zaman aralığında (ör: 15, 30, 60 dakika) ortalama güç tüketimidir.</strong> Talep, bir "pencere" boyunca ölçülen ortalama yük olarak düşünülebilir.</p><div class="bg-yellow-50 p-3 rounded border-l-4 border-yellow-500 text-sm"><strong>Örnek:</strong> Talep periyodu 60 dakika olan bir tesiste, ilk yarım saatte 100 kW ve ikinci yarım saatte 200 kW güç kullanılırsa, o saatteki <strong>talep = (100 + 200) / 2 = 150 kW</strong> olur.</div></div>

                    <div class="mb-4"><h5 class="font-bold text-gray-800 mb-1">2.3. Pik (Tepe) Talep (Peak Demand / Maximum Demand)</h5><p class="text-sm text-gray-700 mb-2">Belirli bir dönemde (genellikle bir ay, yıl veya fatura dönemi) ölçülen <strong>en yüksek talep değeri</strong>dir. Enerji şirketleri, ücretlendirmeyi bu değere göre yapar.</p><div class="bg-red-50 p-3 rounded border-l-4 border-red-500 text-sm"><strong>Kritik Not:</strong> Enerji maliyetlerinin büyük kısmı pik talebe (Demand Charge) bağlıdır. <strong>Pik talebi düşürerek büyük tasarruf</strong> sağlanabilir!</div></div>

                    <div class="mb-4"><h5 class="font-bold text-gray-800 mb-1">2.4. Talep Faktörü (Demand Factor - DF)</h5><p class="text-sm text-gray-700 mb-2">Bir sistemin kurulu kapasitesinin ne kadarının gerçekten kullanıldığını gösterir:</p><div class="bg-blue-50 p-3 rounded text-center font-mono text-sm mb-2"><strong>DF = (Maksimum Talep) / (Bağlı Yük)</strong></div><p class="text-sm text-gray-600">Genellikle <strong>DF < 1</strong> olur, çünkü tüm cihazlar aynı anda tam kapasitede çalışmaz. Yüksek DF, kapasitenin verimli kullanıldığını gösterir.</p></div>

                    <div class="mb-4"><h5 class="font-bold text-gray-800 mb-1">2.5. Kapasite Faktörü (Capacity Factor - CF)</h5><p class="text-sm text-gray-700 mb-2">Bir santral veya cihazın, belirli bir sürede tam kapasiteyle çalıştığındaki enerji üretimine kıyasla <strong>gerçekte ürettiği enerji oranıdır</strong>:</p><div class="bg-blue-50 p-3 rounded text-center font-mono text-sm mb-2"><strong>CF = (Gerçek Enerji) / (Tam Kapasite ile Üretilebilecek Enerji)</strong></div><p class="text-sm text-gray-600">Örneğin, rüzgar santrallerinin CF'si genellikle %30-40'tır (rüzgarın sürekli esmemesi nedeniyle).</p></div>

                    <div class="mb-4"><h5 class="font-bold text-gray-800 mb-1">2.6. Yük Faktörü (Load Factor - LF)</h5><p class="text-sm text-gray-700 mb-2">Belirli bir zaman diliminde <strong>ortalama yükün, pik yüke oranı</strong>dır:</p><div class="bg-blue-50 p-3 rounded text-center font-mono text-sm mb-2"><strong>LF = (Ortalama Yük) / (Pik Yük)</strong><br>veya<br><strong>LF = (Toplam Enerji Kullanımı) / (Pik Talep × Periyot Süresi)</strong></div><ul class="list-disc list-inside pl-4 space-y-1 text-sm text-gray-700 marker:text-gray-500 mt-2"><li><strong>LF = 1 (veya %100):</strong> Yük hiç değişmiyor, ideal durum</li><li><strong>LF düşük:</strong> Büyük pik dalgalanmaları var, sistem verimsiz kullanılıyor</li><li><strong>Hedef:</strong> Yük faktörünü <strong>artırmak</strong> (yani, yükü düzleştirmek)</li></ul><div class="bg-green-50 p-3 rounded border-l-4 border-green-500 text-sm mt-3"><strong>💡 Altın Kural:</strong> Yük faktörü ne kadar <strong>yüksek</strong> olursa, enerji sistemi o kadar <strong>verimli ve ekonomik</strong> kullanılır. Pik talebi azaltarak LF'yi artırabilir ve büyük tasarruf sağlayabiliriz!</div></div>

                    <div><h5 class="font-bold text-gray-800 mb-1">2.7. Çeşitlilik Faktörü (Diversity Factor - DiF)</h5><p class="text-sm text-gray-700 mb-2">Birden fazla yükün bulunduğu sistemlerde, bireysel pik taleplerin toplamının, sistemin toplam pik talebine oranıdır:</p><div class="bg-blue-50 p-3 rounded text-center font-mono text-sm mb-2"><strong>DiF = (Bireysel Pik Taleplerin Toplamı) / (Toplam Pik Talep)</strong></div><p class="text-sm text-gray-600 mb-2">Genellikle <strong>DiF > 1</strong> olur, çünkü tüm cihazlar aynı anda pik yapmaz.</p><div class="bg-purple-50 p-3 rounded border-l-4 border-purple-500 text-sm"><strong>Örnek:</strong> 3 ofis binası olsun. A binası saat 10:00'da 50 kW, B binası 12:00'da 60 kW, C binası 14:00'da 40 kW pik yapar. Toplam bireysel pikler = 150 kW. Ancak, aynı anda sistem genelinde ölçülen pik sadece 100 kW ise, <strong>DiF = 150/100 = 1.5</strong> olur. Bu da sistemin tek bir büyük pik yerine dağıtılmış yüklerle daha verimli çalıştığını gösterir.</div></div>
                    </div>
                    
                    <div class="mt-8 pt-6 border-t border-gray-200">
                        <h4 class="text-xl font-bold text-blue-800 mb-4">📚 Örnek Soru Çözümleri (PDF 2)</h4>
                        
                        <details class="mb-4 bg-slate-50 p-4 rounded-lg shadow-inner">
                            <summary class="font-semibold text-blue-700 cursor-pointer">Örnek 2.1</summary>
                            <div class="mt-4 prose prose-sm max-w-none text-gray-700">
                                <blockquote class="border-l-4 border-gray-300 pl-4 italic text-gray-600">
                                    <strong>Soru:</strong> Bir güç istasyonundaki pik yük (maks. talep) 60 MW'tır. Santrale bağlı yüklerin maks. talepleri 30, 20, 15 ve 10 MW'tır. Santralin kapasitesi 80 MW ve yıllık Yük Faktörü (LF) 0.80'dir. Hesaplayınız: (a) ortalama yük, (b) yıllık üretilen enerji, (c) talep faktörü, (d) çeşitlilik faktörü, (e) kullanım faktörü, (f) santral kapasite faktörü.
                                </blockquote>
                                <p class="mt-4"><strong>Çözüm:</strong></p>
                                <ul>
                                    <li><strong>(a) Ortalama Yük (Average Load):</strong> Max Demand × LF = 60 MW × 0.80 = <strong>48 MW</strong></li>
                                    <li><strong>(b) Yıllık Enerji (Energy Supplied):</strong> Ortalama Yük × 8760 saat = 48 MW × 8760 h = <strong>420,480 MWh</strong></li>
                                    <li><strong>(c) Talep Faktörü (Demand Factor):</strong> Max Demand / Toplam Bağlı Yük = 60 MW / (30+20+15+10) MW = 60 / 75 = <strong>0.8</strong></li>
                                    <li><strong>(d) Çeşitlilik Faktörü (Diversity Factor):</strong> Bireysel Maks. Toplamı / İstasyon Maks. Talebi = 75 MW / 60 MW = <strong>1.25</strong></li>
                                    <li><strong>(e) Utilization Factor (Kullanım F.):</strong> Max Demand / Plant Capacity = 60 MW / 80 MW = <strong>0.75</strong></li>
                                    <li><strong>(f) Santral Kapasite Faktörü:</strong> Ortalama Yük / Santral Kapasitesi = 48 MW / 80 MW = <strong>0.6</strong></li>
                                </ul>
                            </div>
                        </details>

                        <details class="mb-4 bg-slate-50 p-4 rounded-lg shadow-inner">
                            <summary class="font-semibold text-blue-700 cursor-pointer">Örnek 2.2</summary>
                            <div class="mt-4 prose prose-sm max-w-none text-gray-700">
                                <blockquote class="border-l-4 border-gray-300 pl-4 italic text-gray-600">
                                    <strong>Soru:</strong> 150 MW'lık bir güç istasyonu günde 2 saat 150 MW, 8 saat 75 MW güç sağlıyor ve günün geri kalanında kapalıdır. Ayrıca yılda 50 gün bakım için kapalıdır. Yıllık Yük Faktörünü (LF) hesaplayınız.
                                </blockquote>
                                <p class="mt-4"><strong>Çözüm:</strong></p>
                                <ul>
                                    <li><strong>1. Çalışma Günü Sayısı:</strong> 365 - 50 = <strong>315 gün</strong></li>
                                    <li><strong>2. Günlük Üretilen Enerji:</strong> (150 MW × 2 sa) + (75 MW × 8 sa) = 300 + 600 = <strong>900 MWh/gün</strong></li>
                                    <li><strong>3. Yıllık Toplam Enerji:</strong> 900 MWh/gün × 315 gün = <strong>283,500 MWh</strong></li>
                                    <li><strong>4. Yıllık Ortalama Yük:</strong> Yıllık Enerji / Yıllık Saat = 283,500 MWh / 8760 sa = <strong>32.36 MW</strong></li>
                                    <li><strong>5. Maksimum Talep (Peak):</strong> Santralin ulaştığı zirve değer <strong>150 MW</strong>'tır.</li>
                                    <li><strong>6. Yıllık Yük Faktörü (LF):</strong> Ortalama Yük / Maks. Talep = 32.36 MW / 150 MW = <strong>0.2157 (veya %21.57)</strong></li>
                                </ul>
                            </div>
                        </details>

                        <details class="mb-4 bg-slate-50 p-4 rounded-lg shadow-inner">
                            <summary class="font-semibold text-blue-700 cursor-pointer">Örnek 2.3</summary>
                            <div class="mt-4 prose prose-sm max-w-none text-gray-700">
                                <blockquote class="border-l-4 border-gray-300 pl-4 italic text-gray-600">
                                    <strong>Soru:</strong> Bir güç istasyonunun maksimum talebi 20,000 kW'tır. Yıllık Yük Faktörü (LF) %40 ve Santral Kapasite Faktörü %35'tir. Santralin yedek kapasitesini belirleyiniz.
                                </blockquote>
                                <p class="mt-4"><strong>Çözüm:</strong></p>
                                <ul>
                                    <li><strong>1. Ortalama Yük:</strong> Maks. Talep × LF = 20,000 kW × 0.40 = <strong>8,000 kW</strong></li>
                                    <li><strong>2. Santral Kapasitesi:</strong> Ortalama Yük / Kapasite Faktörü = 8,000 kW / 0.35 = <strong>22,857.14 kW</strong></li>
                                    <li><strong>3. Yedek Kapasite:</strong> Santral Kapasitesi - Maks. Talep = 22,857.14 - 20,000 = <strong>2,857.14 kW</strong></li>
                                </ul>
                            </div>
                        </details>
                    </div>
                </div>
            `
        },
        {
            id: 3,
            module: "Bölüm 3",
            title: "Enerji Kaynakları ve Fatura Yapıları (Tarifeler)",
            testUrl: "test3.html",
            content: `
                <div class="space-y-6">
                    <div><h4 class="text-lg font-bold text-blue-800 mb-2">1. Enerji Kaynakları ve Fiyatları</h4><p class="mb-2">Enerji kaynaklarımız temelde <strong>kömür, doğal gaz, petrol ürünleri ve elektrik</strong>tir. Elektrik ise birincil kaynaklardan (fosil yakıtlar, nükleer) veya yenilenebilir kaynaklardan (hidro, jeotermal, rüzgar, güneş) üretilir.</p><p class="mb-2">Fiyatlara baktığımızda (1972-2006 verileri), <strong>kömürün en ucuz enerji kaynağı</strong> olduğunu, <strong>elektriğin ise en yüksek maliyetli enerji formu</strong> olduğunu görüyoruz.</p><div class="bg-indigo-50 p-3 rounded border-l-4 border-indigo-500 text-sm mb-2"><strong>Dağıtık Enerji Kaynakları (DER):</strong> Şebekeye veya tüketicinin sayacının kendi tarafına bağlanan kaynaklardır. "Geleneksel" (mikrotürbinler, gaz türbinleri) ve "Yeni Nesil" (yakıt hücreleri, güneş panelleri) olarak ikiye ayrılır.</div></div>

                    <div><h4 class="text-lg font-bold text-blue-800 mb-2">2. Elektrik Tarifeleri Nasıl Belirlenir?</h4><p class="mb-2">Elektrik fiyatının belirlenmesi karmaşıktır çünkü tedarikçi şirketlerin birçok maliyeti vardır:</p><ul class="list-disc list-inside pl-4 space-y-1 text-sm text-gray-700 marker:text-gray-500"><li><strong>Santral Maliyetleri:</strong> Elektrik üretimi (genellikle en yüksek maliyet)</li><li><strong>İletim/Dağıtım Sistemleri:</strong> Hatlar, trafo merkezleri ve dağıtım şebekelerinin maliyeti</li><li><strong>Yakıt Maliyetleri:</strong> Santralin tipine bağlı olarak kullanılan birincil yakıtın maliyeti</li><li><strong>İdari Maliyetler:</strong> Personel, sigorta ve ekipman bakımı</li><li><strong>Diğer Faktörler:</strong> Arz/talep koşulları (puant ve puant dışı dönemler)</li></ul><p class="mt-2 text-sm text-gray-600">Tedarikçiler, bu maliyetleri genellikle üç ana müşteri tipine (Konut, Ticari ve Endüstriyel) farklı tarife programları sunarak paylaştırır.</p></div>

                    <div><h4 class="text-lg font-bold text-blue-800 mb-2">3. Faturanızı Anlamak: Tarife Yapısının Bileşenleri</h4><p class="text-sm text-gray-600 mb-3 italic">Enerji yöneticisi olarak asıl ilgilenmemiz gereken yer burasıdır. Bir fatura sadece tüketilen enerji (kWh) için değildir. Birçok farklı bileşen içerir:</p>

                    <div class="mb-4"><h5 class="font-bold text-gray-800 mb-2">⚡ Faturalandırılan Talep (Billing Demand / Puant Talebi)</h5><p class="text-sm text-gray-700 mb-2">Bu, <strong>en kritik kavramdır</strong>. Tedarikçi, sizden sadece ne kadar enerji (kWh) tükettiğinizin değil, aynı zamanda o enerjiyi <strong>ne kadar hızlı (kW) çektiğinizin</strong> de bedelini alır.</p><p class="text-sm text-gray-700 mb-2">Faturanız, fatura dönemi içindeki <strong>en yüksek anlık talebe</strong> (genellikle 15 dakikalık maksimum ortalama) göre belirlenen bir "Talep Bedeli" (Demand Charge) içerir.</p><div class="bg-yellow-50 p-3 rounded border-l-4 border-yellow-500 text-sm"><strong>Örnek:</strong> A Profili (anlık zirveleri olan) ile B Profili (düz), ay sonunda aynı toplam enerjiyi (kWh) tüketmiş olabilir. Ancak A Profilini beslemek için tedarikçi daha büyük bir kapasite (daha büyük trafo, daha kalın kablolar) ayakta tutmak zorundadır. Bu nedenle, tedarikçiler talep bedeli uygulayarak müşterileri <strong>zirve taleplerini "tıraşlamaya" (peak shaving)</strong> teşvik eder.</div></div>

                    <div class="mb-4"><h5 class="font-bold text-gray-800 mb-2">⚡ Güç Faktörü (Power Factor) Maddesi</h5><p class="text-sm text-gray-700 mb-2"><strong>Güç Faktörü (PF)</strong>, harcanan gerçek gücün (kW) şebekeden çekilen toplam güçten (kVA) ne kadar verimli kullanıldığını gösterir.</p><p class="text-sm text-gray-700 mb-2">Düşük bir güç faktörü (genellikle <strong>0.9'un altı</strong>), şebekeden gereksiz yere <strong>reaktif güç (kVAR)</strong> çektiğiniz anlamına gelir. Tedarikçi, bu verimsizlik için sizi cezalandırır.</p><div class="bg-red-50 p-3 rounded border-l-4 border-red-500 text-sm"><strong>Türkiye Sınırları:</strong> 9-29.9 kW arası sözleşme gücü için endüktif Q<sub>L</sub>/P=0.33, kapasitif Q<sub>C</sub>/P=0.20</div></div>

                    <div class="mb-4"><h5 class="font-bold text-gray-800 mb-2">⚡ Ratchet Clause (Geçmişe Bağlı Talep Maddesi)</h5><p class="text-sm text-gray-700 mb-2">Bu, özellikle <strong>mevsimsel zirveleri</strong> (örn. yaz aylarında yüksek soğutma yükü) olan tesisler için önemlidir.</p><p class="text-sm text-gray-700 mb-2">Tedarikçi, o yüksek kapasiteyi tüm yıl boyunca sizin için hazır tutmak zorundadır. Bu madde, faturanızdaki talep bedelinin, mevcut ayın talebinden bağımsız olarak, <strong>son 6 veya 12 ay içinde ulaştığınız en yüksek talebin belirli bir yüzdesinden (örn. %70) az olamayacağını</strong> belirtir.</p></div>

                    <div class="mb-4"><h5 class="font-bold text-gray-800 mb-2">⚡ Diğer Maddeler</h5><ul class="list-disc list-inside pl-4 space-y-1 text-sm text-gray-700 marker:text-gray-500"><li><strong>Yakıt Maliyeti Ayarlaması:</strong> Tedarikçilerin, ana yakıt (kömür, gaz) fiyatlarındaki dalgalanmaları doğrudan faturaya yansıtmasını sağlar</li><li><strong>Hizmet Seviyesi:</strong> Enerjiyi ne kadar yüksek gerilimden alırsanız, birim fiyat o kadar ucuzlar. Kendi trafosuna sahip olan müşteriler genellikle indirim alır</li></ul></div>
                    </div>

                    <div><h4 class="text-lg font-bold text-blue-800 mb-2">4. Başlıca Tarife Türleri</h4><p class="mb-2">Fiyatlandırma, bu bileşenlere göre farklı şekillerde yapılandırılır:</p>

                    <div class="mb-3"><h5 class="font-semibold text-gray-800 mb-1">Blok Fiyatlandırma (Block Pricing)</h5><p class="text-sm text-gray-700">Enerji fiyatı (kWh başına), tüketim miktarına bağlı olarak değişir:</p><ul class="list-disc list-inside pl-4 space-y-1 text-sm text-gray-700 marker:text-gray-500 mt-1"><li><strong>Ters Blok (Inverted):</strong> Tüketim arttıkça fiyat artar (Konutlarda tasarrufu teşvik eder)</li><li><strong>Azalan Blok (Descending):</strong> Tüketim arttıkça fiyat düşer (Genellikle endüstriyel tesisler için)</li></ul></div>

                    <div class="mb-3"><h5 class="font-semibold text-gray-800 mb-1">Mevsimsel Fiyatlandırma (Seasonal Pricing)</h5><p class="text-sm text-gray-700">Yaz ve kış ayları için farklı fiyatlar uygulanır. Soğutma yükü nedeniyle yaz ayları genellikle daha pahalıdır.</p></div>

                    <div class="mb-3"><h5 class="font-semibold text-gray-800 mb-1">Yenilikçi Tarifeler (Innovative Rates)</h5><p class="text-sm text-gray-700 mb-2">Talep yönetimi (DSM) için kritik olan tarifeler:</p><div class="bg-blue-50 p-3 rounded mb-2"><p class="font-semibold text-sm mb-1">Zaman Esaslı Tarife (Time-of-Use - TOU):</p><p class="text-sm text-gray-700">Gün, "on-peak" (puant, pahalı) ve "off-peak" (puant dışı, ucuz) olarak belirli saat dilimlerine ayrılır. Örn. Utility Rate C'de yazın puant saatler 10:00-21:00 arasıdır.</p></div><div class="bg-purple-50 p-3 rounded"><p class="font-semibold text-sm mb-1">Gerçek Zamanlı Fiyatlandırma (Real-Time-Pricing - RTP):</p><p class="text-sm text-gray-700">En dinamik tarife. Elektriğin maliyeti saatlik olarak değişir ve fiyatlar genellikle saatler öncesinden duyurulur. "Curtailment Day" (Kısıntı Günü) örneğinde fiyat saat 15:00-16:00 arasında $1.063/kWh iken, sadece birkaç saat önce $0.036/kWh idi - bu, <strong>fiyatın 30 kattan fazla arttığı</strong> anlamına gelir!</p></div></div>
                    </div>

                    <div><h4 class="text-lg font-bold text-blue-800 mb-2">5. Türkiye'deki Durum</h4><p class="text-sm text-gray-700">Türkiye'de <strong>"Serbest Tüketici" (Eligible Consumer)</strong> olma limiti yıllar içinde ciddi oranda düşürülmüştür (2002'de 9000 MWh'ten 2015'te 4 MWh'e). Bu durum, rekabeti artırmış ve tüketicilerin tedarikçilerini seçerek <strong>indirim almalarına (yaklaşık %10'a varan)</strong> olanak sağlamıştır.</p><div class="bg-green-50 p-3 rounded border-l-4 border-green-500 text-sm mt-2"><strong>💡 Sonuç:</strong> Bir faturayı okumak, bir enerji yöneticisinin tasarruf için nereye odaklanması gerektiğini gösteren bir yol haritasıdır. Tasarruf sadece <strong>ne kadar (kWh)</strong> tükettiğimizle değil, aynı zamanda <strong>ne zaman (TOU/RTP), ne kadar hızlı (Demand Charge) ve ne kadar verimli (Power Factor)</strong> tükettiğimizle doğrudan ilişkilidir.</div></div>
                    
                    <div class="mt-8 pt-6 border-t border-gray-200">
                        <h4 class="text-xl font-bold text-blue-800 mb-4">📚 Örnek Soru Çözümleri (PDF 3)</h4>

                        <details class="mb-4 bg-slate-50 p-4 rounded-lg shadow-inner">
                            <summary class="font-semibold text-blue-700 cursor-pointer">Örnek 3.1: Güç Faktörü (PF) Ceza Hesabı</summary>
                            <div class="mt-4 prose prose-sm max-w-none text-gray-700">
                                <blockquote class="border-l-4 border-gray-300 pl-4 italic text-gray-600">
                                    <strong>Soru:</strong> (i) PF %60 iken fatura? (ii) PF >%80 olursa tasarruf? (Bedeller: Müşteri=$450, Talep=$20/kW, Enerji=$0.03/kWh. Tüketim: 300kW, 50,000kWh. PF Sınırı: %80)
                                </blockquote>
                                <p class="mt-4"><strong>Çözüm:</strong></p>
                                <p><strong>(i) Durum (PF = %60):</strong> Faturalanan Talep = 300kW * (80/60) = 400kW. Fatura = $450 + (400 * $20) + (50,000 * $0.03) = <strong>$10,000</strong>.</p>
                                <p><strong>(ii) Durum (PF > %80):</strong> Faturalanan Talep = 300kW. Fatura = $450 + (300 * $20) + (50,000 * $0.03) = <strong>$7,950</strong>.</p>
                                <p><strong>Tasarruf:</strong> $10,000 - $7,950 = <strong>$2,050</strong>.</p>
                            </div>
                        </details>

                        <details class="mb-4 bg-slate-50 p-4 rounded-lg shadow-inner">
                            <summary class="font-semibold text-blue-700 cursor-pointer">Örnek 3.2: Ratchet Clause Hesabı</summary>
                            <div class="mt-4 prose prose-sm max-w-none text-gray-700">
                                <blockquote class="border-l-4 border-gray-300 pl-4 italic text-gray-600">
                                    <strong>Soru:</strong> Örnek 1'e 'Ratchet Clause' eklendi: Faturalanan talep, son 12 ayın en yüksek (PF düzeltmeli) talebinin %70'inden az olamaz. Önceki en yüksek talep 700 kW ise Örnek 1'deki faturayı tekrar hesaplayın.
                                </blockquote>
                                <p class="mt-4"><strong>Çözüm:</strong></p>
                                <ul>
                                    <li><strong>1. Ratchet Eşiği (Minimum Talep):</strong> 700 kW × 0.70 = <strong>490 kW</strong></li>
                                    <li><strong>2. Örnek 1'deki Talep (PF cezalısı):</strong> <strong>400 kW</strong></li>
                                    <li><strong>3. Nihai Fatura Talebi:</strong> MAX(400 kW, 490 kW) = <strong>490 kW</strong></li>
                                    <li><strong>Yeni Fatura:</strong> $450 + (490 kW × $20) + (50,000 kWh × $0.03) = <strong>$11,750</strong></li>
                                </ul>
                            </div>
                        </details>

                        </div>
                </div>
            `
        },
        {
            id: 4,
            module: "Bölüm 4",
            title: "Ekonomik Analiz ve Mühendislik Ekonomisi",
            testUrl: "test4.html",
            content: `
                <div class="space-y-6">
                    <p class="text-gray-700 mb-4">Çoğu enerji tasarrufu önlemi, bir <strong>ilk yatırım maliyeti</strong> gerektirir (örn. yeni bir kazan almak). Bu projenin ekonomik olarak mantıklı olabilmesi için, bu ilk maliyetin, projenin ömrü boyunca işletme maliyetlerindeki azalmadan elde edilen tasarrufların toplamından düşük olması gerekir.</p>

                    <div><h4 class="text-lg font-bold text-blue-800 mb-2">1. Temel Kavramlar: Paranın Değeri Neden Değişir?</h4><p class="mb-2">Bugünkü 100 TL'nin, 10 yıl sonraki 100 TL'den daha değerli olduğunu hepimiz biliriz. Bu dersin temel taşı olan <strong>Paranın Zaman Değeri</strong> kavramının üç temel nedeni vardır:</p>

                    <div class="mb-3"><h5 class="font-semibold text-gray-800 mb-1">Faiz Oranı (i)</h5><p class="text-sm text-gray-700">Parayı borç almanın (veya yatırım yapmanın) bir bedeli (veya getirisi) vardır. Eğer bu para bankada dursaydı, <strong>bileşik faiz (compounded interest)</strong> ile kendi kendine büyüyecekti. Bir projeyi analiz ederken her zaman basit faizi değil, bu bileşik faiz formülünü dikkate alırız:</p><div class="bg-blue-50 p-3 rounded text-center font-mono text-sm mb-2"><strong>F = P(1 + i)<sup>N</sup></strong></div></div>

                    <div class="mb-3"><h5 class="font-semibold text-gray-800 mb-1">Enflasyon Oranı (λ)</h5><p class="text-sm text-gray-700">Mal ve hizmetlerin maliyetinin zamanla artmasıdır. Enflasyon, paranın gelecekteki satın alma gücünü azaltır.</p></div>

                    <div class="mb-3"><h5 class="font-semibold text-gray-800 mb-1">Vergi Oranı (t)</h5><p class="text-sm text-gray-700">Yatırımdan elde edilen faiz gelirlerinin vergilendirilmesi, net getiriyi azaltır.</p></div>

                    <div class="bg-indigo-50 p-3 rounded border-l-4 border-indigo-500 text-sm mb-2"><p class="mb-1">Bu üç faktörü (faiz, enflasyon ve vergi) birleştirdiğimizde, projemizi değerlendirirken kullanacağımız <strong>gerçekçi bir bileşik faiz oranı (veya iskonto oranı)</strong> elde ederiz:</p><div class="text-center font-mono"><strong>θ = [(1 - t)i - λ] / (1 + λ)</strong></div></div>
                    </div>

                    <div><h4 class="text-lg font-bold text-blue-800 mb-2">2. Nakit Akışı (Cash Flow) ve İskonto Faktörleri</h4><p class="mb-2">Bir projenin ekonomik analizini yapmak için, onun ömrü boyunca tüm <strong>nakit girişlerini (gelirler/tasarruflar)</strong> ve <strong>nakit çıkışlarını (giderler/maliyetler)</strong> listelediğimiz bir nakit akış tablosu oluştururuz.</p><div class="bg-red-50 p-3 rounded border-l-4 border-red-500 text-sm mb-3"><strong>⚠️ En Önemli Kural:</strong> Farklı yıllardaki nakit akışları, "paranın zaman değeri" nedeniyle doğrudan toplanamaz! 5. yıldaki 1000 TL tasarrufu bugüne getirmek için onu "iskonto" etmemiz gerekir.</div><p class="mb-2">Bu işi yapan formüllere <strong>Bileşik Faiz Faktörleri</strong> diyoruz:</p>

                    <div class="grid gap-3 sm:grid-cols-2 mb-3"><div class="bg-gray-50 p-3 rounded border border-gray-200"><strong class="block text-blue-900 mb-1 text-sm">SPPW (Single Payment Present Worth)</strong><p class="text-xs">Gelecekteki (N yıl sonra) tek bir F meblağının bugünkü değerini (P) bulur</p></div><div class="bg-gray-50 p-3 rounded border border-gray-200"><strong class="block text-blue-900 mb-1 text-sm">SPCA (Single Payment Compound Amount)</strong><p class="text-xs">Bugünkü P parasının gelecekteki değerini (F) bulur</p></div><div class="bg-gray-50 p-3 rounded border border-gray-200"><strong class="block text-blue-900 mb-1 text-sm">USPW (Uniform-Series Present Worth)</strong><p class="text-xs">N yıl boyunca her yıl elde edilecek sabit A miktarlı gelirin toplam bugünkü değerini (P) bulur</p></div><div class="bg-gray-50 p-3 rounded border border-gray-200"><strong class="block text-blue-900 mb-1 text-sm">USCR (Uniform-Series Capital Recovery)</strong><p class="text-xs">Bugün P kadar yatırımı N yıl boyunca yıllık ne kadar sabit (A) ödemeyle geri ödememiz gerektiğini bulur</p></div></div>
                    </div>

                    <div><h4 class="text-lg font-bold text-blue-800 mb-2">3. 📈 Ekonomik Değerlendirme Yöntemleri</h4><p class="mb-2 text-sm text-gray-600">Tüm nakit akışlarını ve doğru iskonto oranını (d) belirledikten sonra, projenin kârlı olup olmadığına karar vermek için şu yöntemleri kullanırız:</p>

                    <div class="mb-3"><h5 class="font-semibold text-gray-800 mb-1">Net Bugünkü Değer (Net Present Worth - NPW)</h5><p class="text-sm text-gray-700 mb-2">Projenin ömrü boyunca tüm gelir ve giderlerin (ilk yatırım CF<sub>0</sub> dahil) bugünkü değerlerinin toplamıdır.</p><div class="bg-green-50 p-3 rounded border-l-4 border-green-500 text-sm"><strong>Kriter:</strong> Eğer <strong>NPW > 0</strong> ise, proje kârlıdır (Yani proje, paranızı bankaya yatırmaktan daha fazla kazandırıyor demektir).</div></div>

                    <div class="mb-3"><h5 class="font-semibold text-gray-800 mb-1">Geri Dönüş Oranı (Rate of Return - ROR)</h5><p class="text-sm text-gray-700 mb-2">Bu yöntem, NPW'yi sıfıra eşitleyen "sihirli" iskonto oranını (d') bulur.</p><div class="bg-green-50 p-3 rounded border-l-4 border-green-500 text-sm"><strong>Kriter:</strong> Eğer projenin kendi iç getiri oranı (d') piyasadaki minimum kabul edilebilir getiri oranından (d) büyükse (<strong>d' > d</strong>), proje kârlıdır.</div></div>

                    <div class="mb-3"><h5 class="font-semibold text-gray-800 mb-1">Fayda-Maliyet Oranı (Benefit-Cost Ratio - BCR)</h5><p class="text-sm text-gray-700 mb-2">Tüm faydaların (gelirler) bugünkü değerinin, tüm maliyetlerin bugünkü değerine oranıdır.</p><div class="bg-green-50 p-3 rounded border-l-4 border-green-500 text-sm"><strong>Kriter:</strong> Eğer <strong>BCR > 1.0</strong> ise, proje kârlıdır (faydalar maliyetlerden fazladır).</div></div>

                    <div class="mb-3"><h5 class="font-semibold text-gray-800 mb-1">Geri Ödeme Süresi (Payback Period)</h5><p class="text-sm text-gray-700 mb-2">İlk yatırımın (CF<sub>0</sub>) kendini kaç yılda (Y) geri ödeyeceğini gösterir.</p><ul class="list-disc list-inside pl-4 space-y-1 text-sm text-gray-700 marker:text-gray-500"><li><strong>Basit Geri Ödeme (SPB):</strong> Paranın zaman değerini ihmal eder. Basitçe Y = İlk Maliyet / Yıllık Tasarruf formülüyle hesaplanır.</li><li><strong>İskontolu Geri Ödeme (DPB):</strong> Paranın zaman değerini dikkate alır ve daha gerçekçi bir süre verir.</li></ul><div class="bg-green-50 p-3 rounded border-l-4 border-green-500 text-sm mt-2"><strong>Kriter:</strong> Eğer geri ödeme süresi (Y), projenin toplam ömründen (N) kısaysa (<strong>Y < N</strong>) proje kabul edilebilir.</div></div>

                    <div class="mb-3"><h5 class="font-semibold text-gray-800 mb-1">Yaşam Döngüsü Maliyeti (Life-Cycle Cost - LCC) Analizi</h5><p class="text-sm text-gray-700 mb-2">Bu, özellikle <strong>alternatifleri</strong> (örn. A kazanı vs. B kazanı vs. hiçbir şey yapmamak) karşılaştırırken en çok kabul gören yöntemdir.</p><p class="text-sm text-gray-700 mb-2">Her bir alternatifin, proje ömrü boyunca tüm maliyetlerinin (ilk yatırım + tüm yakıt + tüm bakım maliyetleri) bugünkü değerini (LCC) hesaplar.</p><div class="bg-green-50 p-3 rounded border-l-4 border-green-500 text-sm"><strong>Kriter:</strong> En düşük LCC'ye (en düşük toplam maliyete) sahip olan alternatif, ekonomik olarak en iyi seçenektir.</div></div>
                    </div>

                    <div class="mt-8 pt-6 border-t border-gray-200">
                        <h4 class="text-xl font-bold text-blue-800 mb-4">📚 Örnek Soru Çözümleri (PDF 4)</h4>
                        
                        <details class="mb-4 bg-slate-50 p-4 rounded-lg shadow-inner">
                            <summary class="font-semibold text-blue-700 cursor-pointer">Örnek 4.1, 4.2 & 4.3: Faiz, Enflasyon ve Vergi</summary>
                            <div class="mt-4 prose prose-sm max-w-none text-gray-700">
                                <blockquote class="border-l-4 border-gray-300 pl-4 italic text-gray-600">
                                    <strong>Soru:</strong> $10,000 anapara, N=10 yıl, i=%7, &lambda;=%4, t=%28.
                                    (1) Bileşik faizle F? (2) Enflasyon dahil gerçek değer? (3) Enflasyon+Vergi dahil gerçek değer?
                                </blockquote>
                                <p class="mt-4"><strong>Çözüm:</strong></p>
                                <ul class="font-mono">
                                    <li><strong>1. Bileşik Faiz:</strong> F = P(1+i)<sup>N</sup> = $10,000(1.07)<sup>10</sup> = <strong>$19,671.50</strong></li>
                                    <li><strong>2. Enflasyon Dahil (&theta;=(i-&lambda;)/(1+&lambda;)):</strong> &theta; = (0.07-0.04)/(1.04) = 0.02884.
                                        F = $10,000(1.02884)<sup>10</sup> = <strong>$13,293.40</strong></li>
                                    <li><strong>3. Enflasyon+Vergi Dahil (&theta;=[(1-t)i-&lambda;]/(1+&lambda;)):</strong> &theta; = [(1-0.28)*0.07-0.04]/(1.04) = 0.01.
                                        F = $10,000(1.01)<sup>10</sup> = <strong>$11,046.20</strong></li>
                                </ul>
                            </div>
                        </details>

                        <details class="mb-4 bg-slate-50 p-4 rounded-lg shadow-inner">
                            <summary class="font-semibold text-blue-700 cursor-pointer">Örnek 4.6 (LCC Analizi)</summary>
                            <div class="mt-4 prose prose-sm max-w-none text-gray-700">
                                <blockquote class="border-l-4 border-gray-300 pl-4 italic text-gray-600">
                                    <strong>Soru:</strong> 3 seçenek: (A) Yeni Kazan ($10k, %85 verim), (B) Yeni Brülör ($2k, %66 verim), (C) Hiçbir şey yapma (%60 verim). (N=10 yıl, d=5%). LCC ile en iyi seçeneği bulun.
                                </blockquote>
                                <p class="mt-4"><strong>Çözüm:</strong></p>
                                <p>Tüm alternatiflerin LCC'si (İlk Yatırım + Yıllık Giderlerin Bugünkü Değeri) hesaplanır. Gerekli ısı = $3,600. USPW(5%, 10y) = 7.7217.</p>
                                <ul class="font-mono">
                                    <li><strong>LCC (A) Yeni Kazan:</strong> $10,000 + ($4,385.29 * 7.7217) = <strong>$43,908.50</strong></li>
                                    <li><strong>LCC (B) Yeni Brülör:</strong> $2,000 + ($5,604.54 * 7.7217) = <strong>$45,280.50</strong></li>
                                    <li><strong>LCC (C) Hiçbir Şey Yapma:</strong> $0 + ($6,150 * 7.7217) = <strong>$47,488.45</strong></li>
                                </ul>
                                <p class="font-semibold text-green-700"><strong>Sonuç:</strong> En düşük LCC'ye sahip <strong>Alternatif A (Yeni Kazan)</strong> en iyi ekonomik seçenektir.</p>
                            </div>
                        </details>
                    </div>
                </div>
            `
        }
    ],
    en: [
        // Chapter 1 - ENGLISH
        {
            id: 1,
            module: "Chapter 1",
            title: "Introduction to Energy Management and Fundamental Concepts",
            testUrl: "test1.html",
            content: `
                <div class="space-y-6">
                    <div><h4 class="text-lg font-bold text-blue-800 mb-2">1. Energy Management: Definition and Objectives</h4><p class="mb-2">In its simplest definition, energy management is "the judicious and effective use of energy to maximize profits (minimize costs) and enhance competitive position".</p><p class="mb-2">The primary goal is always to reduce costs or increase profit.</p><p class="font-semibold mb-1">Sub-objectives:</p><ul class="list-disc list-inside pl-4 space-y-1 text-gray-700 marker:text-blue-500"><li>Improve energy efficiency and reduce energy consumption</li><li>Develop effective monitoring, reporting, and management strategies for intelligent energy use</li><li>Discover new ways to increase returns on energy investments through R&D</li><li>Reduce the impact of interruptions in energy supply (brownouts, etc.)</li></ul></div>
                    <div><h4 class="text-lg font-bold text-blue-800 mb-2">2. Why Do We Need Energy Management? (Driving Forces)</h4><p class="mb-2">Key factors making energy management essential:</p><ul class="list-disc list-inside pl-4 space-y-2 text-gray-700 marker:text-blue-500"><li><strong>Climate Change:</strong> There is an urgent need to reduce fossil fuel consumption due to global warming. Remember, heating, cooling, and lighting of buildings account for 50% of total energy consumption and CO<sub>2</sub> emissions.</li><li><strong>Political Goals (EU 20-20-20):</strong> 20% reduction in greenhouse gas emissions, 20% share of renewable energy, 20% improvement in energy efficiency.</li><li><strong>Economic Pressure:</strong> The general upward trend in oil and gas prices and the necessity to reduce dependence on expensive fuel imports.</li><li><strong>Public Awareness:</strong> Increasing public consciousness about environmental issues.</li></ul></div>
                    <div><h4 class="text-lg font-bold text-blue-800 mb-2">3. The Value of Energy Management</h4><p class="mb-2">Energy management not only provides cost savings but also offers serious environmental and operational benefits:</p><div class="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500 mb-3"><p class="font-semibold mb-1">Environmental Value:</p><p class="text-sm">Commercial and industrial energy use is responsible for approximately 45% of CO<sub>2</sub> emissions from fossil fuels and 70% of SO<sub>2</sub> (causing acid rain) emissions. Energy management directly reduces this burden.</p></div><div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mb-3"><p class="font-semibold mb-2">Economic Value - Savings Potential:</p><ul class="list-none space-y-1 text-sm"><li>🔹 Low-cost activities (first 1-2 years): <strong>5% - 15%</strong></li><li>🔹 Medium-cost efforts (3-5 years): <strong>15% - 30%</strong></li><li>🔹 Long-term, high-engineering projects: <strong>30% - 50%</strong></li></ul></div><p class="text-sm"><strong>Efficiency:</strong> New energy efficiency technologies and materials also increase company productivity and product quality.</p></div>
                    <div><h4 class="text-lg font-bold text-blue-800 mb-2">4. Global and Turkish Current Energy Situation</h4><div class="mb-3"><p class="font-semibold text-gray-800 mb-1">Global Situation:</p><ul class="list-disc list-inside pl-4 space-y-1 text-sm text-gray-700 marker:text-gray-500"><li>World's primary energy supply increased by 49% from 1990 to 2011</li><li>As of 2011, 82% of global energy still came from fossil fuels</li><li>Motors have the largest share of global electricity demand at 45%, followed by appliances at 20% and lighting at 15%</li></ul></div><div><p class="font-semibold text-gray-800 mb-1">Turkey's Specific Situation:</p><ul class="list-disc list-inside pl-4 space-y-1 text-sm text-gray-700 marker:text-gray-500"><li><strong>Consumption Increase:</strong> Turkey is one of the fastest-growing countries with a 117% increase in primary energy supply between 1990-2011, after China and India. Our electricity consumption has shown continuous and strong growth from 1973 to 2016.</li><li><strong>Resource Dependency (2014):</strong> Most of our energy comes from Natural Gas (33.4%) and Coal (32.1%). The sector consuming the most energy is Electricity Generation at 43.8%.</li><li><strong>Per Capita Consumption (2015):</strong> Turkey's per capita energy consumption (1.6 toe) is well below the OECD average (4.2 toe). Similarly, our per capita net electricity consumption (2,971 kWh) is considerably behind the OECD average (7,822 kWh).</li><li><strong>Installed Capacity (2016):</strong> As of the end of 2016, 34.1% of our installed capacity is Hydroelectric and 34.1% is Natural Gas.</li><li><strong>Renewable Energy:</strong> We have seen rapid growth in renewable energy installed capacity since 2005. Government-provided base and local equipment incentives (Feed-in Tariff), especially for Solar (PV and CSP) and Biomass, have been effective in this growth.</li><li><strong>Energy Intensity:</strong> "A measure of the energy efficiency of a nation's economy" (energy units per GDP unit). High intensity indicates that converting energy to GDP is costly (inefficient). According to 2010 data, Turkey has relatively high energy intensity for its GDP level. Our goal is to move toward a more efficient point (lower energy intensity) that produces more GDP with less energy (like Japan, Germany, UK).</li></ul></div></div>
                    <div class="mt-8 pt-6 border-t border-gray-200"><h4 class="text-xl font-bold text-blue-800 mb-4">📚 Sample Problem Solutions</h4><div class="bg-slate-50 p-4 rounded-lg shadow-inner text-gray-600"><p>No numerical examples are provided in this chapter (PDF 1).</p></div></div>
                </div>
            `
        },
        {
            id: 2,
            module: "Chapter 2",
            title: "Load Characteristics and Analysis",
            testUrl: "test2.html",
            content: `
                <div class="space-y-6">
                    <div><h4 class="text-lg font-bold text-blue-800 mb-2">1. The Problem of Variable Electricity Demand</h4><p class="mb-2">The biggest challenge in electricity generation and distribution is that demand constantly varies:</p><ul class="list-disc list-inside pl-4 space-y-1 text-gray-700 marker:text-blue-500"><li>Demand varies by <strong>hours, days, and seasons</strong></li><li>Since electricity cannot be stored, production must match demand at all times</li><li>Therefore, the system must be sized according to <strong>peak demand</strong></li></ul><p class="mt-2">However, the system operating below this peak capacity most of the time results in huge capacity waste and costs. Therefore, the first step of energy management is to flatten demand: <strong>Peak Demand Management</strong>.</p></div>

                    <div><h4 class="text-lg font-bold text-blue-800 mb-2">2. Fundamental Definitions and Concepts</h4>
                    
                    <div class="mb-4"><h5 class="font-bold text-gray-800 mb-1">2.1. Connected Load / Installed Capacity</h5><p class="text-sm text-gray-700 mb-2">The <strong>sum of all power ratings</strong> of equipment connected to a facility (in kW or kVA). This is a measure of the maximum capacity installed at the facility.</p></div>

                    <div class="mb-4"><h5 class="font-bold text-gray-800 mb-1">2.2. Demand</h5><p class="text-sm text-gray-700 mb-2"><strong>The average power consumption over a specific time interval (e.g., 15, 30, 60 minutes).</strong> Demand can be thought of as the average load measured over a "window."</p><div class="bg-yellow-50 p-3 rounded border-l-4 border-yellow-500 text-sm"><strong>Example:</strong> In a facility with a 60-minute demand period, if 100 kW is used in the first half hour and 200 kW in the second half hour, the <strong>demand = (100 + 200) / 2 = 150 kW</strong> for that hour.</div></div>

                    <div class="mb-4"><h5 class="font-bold text-gray-800 mb-1">2.3. Peak Demand / Maximum Demand</h5><p class="text-sm text-gray-700 mb-2">The <strong>highest demand value measured</strong> during a specific period (usually a month, year, or billing cycle). Utility companies base their charges on this value.</p><div class="bg-red-50 p-3 rounded border-l-4 border-red-500 text-sm"><strong>Critical Note:</strong> A large portion of energy costs is tied to peak demand (Demand Charge). <strong>Reducing peak demand can yield huge savings!</strong></div></div>

                    <div class="mb-4"><h5 class="font-bold text-gray-800 mb-1">2.4. Demand Factor (DF)</h5><p class="text-sm text-gray-700 mb-2">Shows how much of a system's installed capacity is actually being used:</p><div class="bg-blue-50 p-3 rounded text-center font-mono text-sm mb-2"><strong>DF = (Maximum Demand) / (Connected Load)</strong></div><p class="text-sm text-gray-600">Typically <strong>DF < 1</strong> because not all devices operate at full capacity simultaneously. A high DF indicates efficient capacity utilization.</p></div>

                    <div class="mb-4"><h5 class="font-bold text-gray-800 mb-1">2.5. Capacity Factor (CF)</h5><p class="text-sm text-gray-700 mb-2">The ratio of <strong>actual energy produced</strong> by a plant or device over a period to the energy it could produce if operating at full capacity:</p><div class="bg-blue-50 p-3 rounded text-center font-mono text-sm mb-2"><strong>CF = (Actual Energy) / (Energy at Full Capacity)</strong></div><p class="text-sm text-gray-600">For example, wind plants typically have a CF of 30-40% (because wind doesn't blow constantly).</p></div>

                    <div class="mb-4"><h5 class="font-bold text-gray-800 mb-1">2.6. Load Factor (LF)</h5><p class="text-sm text-gray-700 mb-2">The ratio of <strong>average load to peak load</strong> over a specific time period:</p><div class="bg-blue-50 p-3 rounded text-center font-mono text-sm mb-2"><strong>LF = (Average Load) / (Peak Load)</strong><br>or<br><strong>LF = (Total Energy Consumption) / (Peak Demand × Period Duration)</strong></div><ul class="list-disc list-inside pl-4 space-y-1 text-sm text-gray-700 marker:text-gray-500 mt-2"><li><strong>LF = 1 (or 100%):</strong> Load never changes, ideal situation</li><li><strong>Low LF:</strong> Large peak fluctuations, inefficient system usage</li><li><strong>Goal:</strong> <strong>Increase</strong> load factor (i.e., flatten the load)</li></ul><div class="bg-green-50 p-3 rounded border-l-4 border-green-500 text-sm mt-3"><strong>💡 Golden Rule:</strong> The <strong>higher</strong> the load factor, the more <strong>efficient and economical</strong> the energy system. By reducing peak demand, we can increase LF and achieve huge savings!</div></div>

                    <div><h5 class="font-bold text-gray-800 mb-1">2.7. Diversity Factor (DiF)</h5><p class="text-sm text-gray-700 mb-2">In systems with multiple loads, the ratio of the sum of individual peak demands to the system's total peak demand:</p><div class="bg-blue-50 p-3 rounded text-center font-mono text-sm mb-2"><strong>DiF = (Sum of Individual Peak Demands) / (Total Peak Demand)</strong></div><p class="text-sm text-gray-600 mb-2">Typically <strong>DiF > 1</strong> because not all devices peak simultaneously.</p><div class="bg-purple-50 p-3 rounded border-l-4 border-purple-500 text-sm"><strong>Example:</strong> Consider 3 office buildings. Building A peaks at 50 kW at 10:00, Building B at 60 kW at 12:00, Building C at 40 kW at 14:00. Total individual peaks = 150 kW. However, if the measured system-wide peak is only 100 kW, <strong>DiF = 150/100 = 1.5</strong>. This shows the system operates more efficiently with distributed loads rather than one large peak.</div></div>
                    </div>
                    
                    <div class="mt-8 pt-6 border-t border-gray-200">
                        <h4 class="text-xl font-bold text-blue-800 mb-4">📚 Sample Problem Solutions (PDF 2)</h4>
                        
                        <details class="mb-4 bg-slate-50 p-4 rounded-lg shadow-inner">
                            <summary class="font-semibold text-blue-700 cursor-pointer">Example 2.1</summary>
                            <div class="mt-4 prose prose-sm max-w-none text-gray-700">
                                <blockquote class="border-l-4 border-gray-300 pl-4 italic text-gray-600">
                                    <strong>Question:</strong> Peak load at a power station is 60 MW. Connected loads have max demands of 30, 20, 15, and 10 MW. Plant capacity is 80 MW with annual LF of 0.80. Calculate: (a) average load, (b) annual energy supplied, (c) demand factor, (d) diversity factor, (e) utilization factor, (f) plant capacity factor.
                                </blockquote>
                                <p class="mt-4"><strong>Solution:</strong></p>
                                <ul>
                                    <li><strong>(a) Average Load:</strong> Max Demand × LF = 60 MW × 0.80 = <strong>48 MW</strong></li>
                                    <li><strong>(b) Annual Energy Supplied:</strong> Average Load × 8760 hours = 48 MW × 8760 h = <strong>420,480 MWh</strong></li>
                                    <li><strong>(c) Demand Factor:</strong> Max Demand / Total Connected Load = 60 MW / (30+20+15+10) MW = 60 / 75 = <strong>0.8</strong></li>
                                    <li><strong>(d) Diversity Factor:</strong> Sum of Individual Max / Station Max Demand = 75 MW / 60 MW = <strong>1.25</strong></li>
                                    <li><strong>(e) Utilization Factor:</strong> Max Demand / Plant Capacity = 60 MW / 80 MW = <strong>0.75</strong></li>
                                    <li><strong>(f) Plant Capacity Factor:</strong> Average Load / Plant Capacity = 48 MW / 80 MW = <strong>0.6</strong></li>
                                </ul>
                            </div>
                        </details>

                        <details class="mb-4 bg-slate-50 p-4 rounded-lg shadow-inner">
                            <summary class="font-semibold text-blue-700 cursor-pointer">Example 2.2</summary>
                            <div class="mt-4 prose prose-sm max-w-none text-gray-700">
                                <blockquote class="border-l-4 border-gray-300 pl-4 italic text-gray-600">
                                    <strong>Question:</strong> A 150 MW power station supplies 150 MW for 2 hours and 75 MW for 8 hours daily, shut down for the remainder. Additionally, it's closed 50 days/year for maintenance. Calculate annual Load Factor (LF).
                                </blockquote>
                                <p class="mt-4"><strong>Solution:</strong></p>
                                <ul>
                                    <li><strong>1. Operating Days:</strong> 365 - 50 = <strong>315 days</strong></li>
                                    <li><strong>2. Daily Energy Produced:</strong> (150 MW × 2 h) + (75 MW × 8 h) = 300 + 600 = <strong>900 MWh/day</strong></li>
                                    <li><strong>3. Annual Total Energy:</strong> 900 MWh/day × 315 days = <strong>283,500 MWh</strong></li>
                                    <li><strong>4. Annual Average Load:</strong> Annual Energy / Annual Hours = 283,500 MWh / 8760 h = <strong>32.36 MW</strong></li>
                                    <li><strong>5. Maximum Demand (Peak):</strong> Plant's peak value is <strong>150 MW</strong>.</li>
                                    <li><strong>6. Annual Load Factor (LF):</strong> Average Load / Max Demand = 32.36 MW / 150 MW = <strong>0.2157 (or 21.57%)</strong></li>
                                </ul>
                            </div>
                        </details>

                        <details class="mb-4 bg-slate-50 p-4 rounded-lg shadow-inner">
                            <summary class="font-semibold text-blue-700 cursor-pointer">Example 2.3</summary>
                            <div class="mt-4 prose prose-sm max-w-none text-gray-700">
                                <blockquote class="border-l-4 border-gray-300 pl-4 italic text-gray-600">
                                    <strong>Question:</strong> A power station has max demand of 20,000 kW. Annual LF is 40% and Plant Capacity Factor is 35%. Determine the plant's reserve capacity.
                                </blockquote>
                                <p class="mt-4"><strong>Solution:</strong></p>
                                <ul>
                                    <li><strong>1. Average Load:</strong> Max Demand × LF = 20,000 kW × 0.40 = <strong>8,000 kW</strong></li>
                                    <li><strong>2. Plant Capacity:</strong> Average Load / Capacity Factor = 8,000 kW / 0.35 = <strong>22,857.14 kW</strong></li>
                                    <li><strong>3. Reserve Capacity:</strong> Plant Capacity - Max Demand = 22,857.14 - 20,000 = <strong>2,857.14 kW</strong></li>
                                </ul>
                            </div>
                        </details>
                    </div>
                </div>
            `
        },
        {
            id: 3,
            module: "Chapter 3",
            title: "Energy Sources and Billing Structures (Tariffs)",
            testUrl: "test3.html",
            content: `
                <div class="space-y-6">
                    <div><h4 class="text-lg font-bold text-blue-800 mb-2">1. Energy Sources and Pricing</h4><p class="mb-2">Our energy sources are fundamentally <strong>coal, natural gas, petroleum products, and electricity</strong>. Electricity is produced from primary sources (fossil fuels, nuclear) or renewable sources (hydro, geothermal, wind, solar).</p><p class="mb-2">Looking at prices (1972-2006 data), we see that <strong>coal is the cheapest energy source</strong>, while <strong>electricity is the most expensive energy form</strong>.</p><div class="bg-indigo-50 p-3 rounded border-l-4 border-indigo-500 text-sm mb-2"><strong>Distributed Energy Resources (DER):</strong> Sources connected to the grid or the customer's side of the meter. Divided into "Conventional" (microturbines, gas turbines) and "New Generation" (fuel cells, solar panels).</div></div>

                    <div><h4 class="text-lg font-bold text-blue-800 mb-2">2. How Are Electricity Tariffs Determined?</h4><p class="mb-2">Electricity pricing is complex because utility companies have many costs:</p><ul class="list-disc list-inside pl-4 space-y-1 text-sm text-gray-700 marker:text-gray-500"><li><strong>Plant Costs:</strong> Electricity generation (usually the highest cost category)</li><li><strong>Transmission/Distribution Systems:</strong> Costs of lines, substations, and distribution networks</li><li><strong>Fuel Costs:</strong> Cost of primary fuel used depending on plant type</li><li><strong>Administrative Costs:</strong> Personnel, insurance, and equipment maintenance</li><li><strong>Other Factors:</strong> Supply/demand conditions (on-peak and off-peak periods)</li></ul><p class="mt-2 text-sm text-gray-600">Utilities distribute these costs by offering different rate schedules to three main customer types (Residential, Commercial, and Industrial).</p></div>

                    <div><h4 class="text-lg font-bold text-blue-800 mb-2">3. Understanding Your Bill: Tariff Structure Components</h4><p class="text-sm text-gray-600 mb-3 italic">This is where energy managers should really focus. A bill is not just for consumed energy (kWh). It includes many different components:</p>

                    <div class="mb-4"><h5 class="font-bold text-gray-800 mb-2">⚡ Billing Demand / Peak Demand</h5><p class="text-sm text-gray-700 mb-2">This is <strong>the most critical concept</strong>. The utility charges you not only for how much energy (kWh) you consume, but also for <strong>how fast (kW) you draw</strong> that energy.</p><p class="text-sm text-gray-700 mb-2">Your bill includes a "Demand Charge" determined by the <strong>highest instantaneous demand</strong> (usually the 15-minute maximum average) during the billing period.</p><div class="bg-yellow-50 p-3 rounded border-l-4 border-yellow-500 text-sm"><strong>Example:</strong> Profile A (with instant peaks) and Profile B (flat) may consume the same total energy (kWh) by month's end. However, to serve Profile A, the utility must maintain larger capacity (bigger transformers, thicker cables). Therefore, utilities apply demand charges to incentivize customers to "shave" their peak demands.</div></div>

                    <div class="mb-4"><h5 class="font-bold text-gray-800 mb-2">⚡ Power Factor (PF) Clause</h5><p class="text-sm text-gray-700 mb-2"><strong>Power Factor (PF)</strong> shows how efficiently you use the real power (kW) drawn from the grid's total power (kVA).</p><p class="text-sm text-gray-700 mb-2">A low power factor (typically <strong>below 0.9</strong>) means you're unnecessarily drawing <strong>reactive power (kVAR)</strong> from the grid. The utility penalizes you for this inefficiency.</p><div class="bg-red-50 p-3 rounded border-l-4 border-red-500 text-sm"><strong>Turkey Limits:</strong> For contract power 9-29.9 kW, inductive Q<sub>L</sub>/P=0.33, capacitive Q<sub>C</sub>/P=0.20</div></div>

                    <div class="mb-4"><h5 class="font-bold text-gray-800 mb-2">⚡ Ratchet Clause (Historical Demand Clause)</h5><p class="text-sm text-gray-700 mb-2">This is particularly important for facilities with <strong>seasonal peaks</strong> (e.g., high cooling loads in summer).</p><p class="text-sm text-gray-700 mb-2">The utility must keep that high capacity available for you all year long. This clause states that your billed demand cannot be less than a certain percentage (e.g., 70%) of <strong>your highest demand in the last 6 or 12 months</strong>, regardless of current month's demand.</p></div>

                    <div class="mb-4"><h5 class="font-bold text-gray-800 mb-2">⚡ Other Clauses</h5><ul class="list-disc list-inside pl-4 space-y-1 text-sm text-gray-700 marker:text-gray-500"><li><strong>Fuel Cost Adjustment:</strong> Allows utilities to directly reflect fluctuations in main fuel (coal, gas) prices in the bill</li><li><strong>Service Level:</strong> The higher the voltage level at which you receive energy, the cheaper the unit price. Customers with their own transformers typically get discounts</li></ul></div>
                    </div>

                    <div><h4 class="text-lg font-bold text-blue-800 mb-2">4. Main Tariff Types</h4><p class="mb-2">Pricing is structured in different ways based on these components:</p>

                    <div class="mb-3"><h5 class="font-semibold text-gray-800 mb-1">Block Pricing</h5><p class="text-sm text-gray-700">Energy price (per kWh) varies based on consumption amount:</p><ul class="list-disc list-inside pl-4 space-y-1 text-sm text-gray-700 marker:text-gray-500 mt-1"><li><strong>Inverted Block:</strong> Price increases as consumption increases (Encourages residential conservation)</li><li><strong>Descending Block:</strong> Price decreases as consumption increases (Usually for industrial facilities)</li></ul></div>

                    <div class="mb-3"><h5 class="font-semibold text-gray-800 mb-1">Seasonal Pricing</h5><p class="text-sm text-gray-700">Different prices applied for summer and winter months. Summer months are typically more expensive due to cooling loads.</p></div>

                    <div class="mb-3"><h5 class="font-semibold text-gray-800 mb-1">Innovative Rates</h5><p class="text-sm text-gray-700 mb-2">Rates critical for Demand-Side Management (DSM):</p><div class="bg-blue-50 p-3 rounded mb-2"><p class="font-semibold text-sm mb-1">Time-of-Use (TOU) Rate:</p><p class="text-sm text-gray-700">Day is divided into specific time blocks as "on-peak" (peak, expensive) and "off-peak" (off-peak, cheap). For example, in Utility Rate C, summer peak hours are 10:00-21:00.</p></div><div class="bg-purple-50 p-3 rounded"><p class="font-semibold text-sm mb-1">Real-Time-Pricing (RTP):</p><p class="text-sm text-gray-700">The most dynamic rate. Electricity cost varies hourly and prices are usually announced hours in advance. In the "Curtailment Day" example, price was $1.063/kWh at 15:00-16:00, while just hours earlier it was $0.036/kWh - meaning <strong>price increased by more than 30 times!</strong></p></div></div>
                    </div>

                    <div><h4 class="text-lg font-bold text-blue-800 mb-2">5. Turkey's Situation</h4><p class="text-sm text-gray-700">In Turkey, the <strong>"Eligible Consumer"</strong> limit has been significantly reduced over the years (from 9000 MWh in 2002 to 4 MWh in 2015). This has increased competition and enabled consumers to choose their suppliers and obtain <strong>discounts (up to approximately 10%)</strong>.</p><div class="bg-green-50 p-3 rounded border-l-4 border-green-500 text-sm mt-2"><strong>💡 Conclusion:</strong> Reading a bill is a roadmap showing where an energy manager should focus for savings. Savings are directly related not just to <strong>how much (kWh)</strong> we consume, but also to <strong>when (TOU/RTP), how fast (Demand Charge), and how efficiently (Power Factor)</strong> we consume.</div></div>
                    
                    <div class="mt-8 pt-6 border-t border-gray-200">
                        <h4 class="text-xl font-bold text-blue-800 mb-4">📚 Sample Problem Solutions (PDF 3)</h4>

                        <details class="mb-4 bg-slate-50 p-4 rounded-lg shadow-inner">
                            <summary class="font-semibold text-blue-700 cursor-pointer">Example 3.1: Power Factor (PF) Penalty Calculation</summary>
                            <div class="mt-4 prose prose-sm max-w-none text-gray-700">
                                <blockquote class="border-l-4 border-gray-300 pl-4 italic text-gray-600">
                                    <strong>Question:</strong> (i) Bill with PF 60%? (ii) Savings if PF >80%? (Charges: Customer=$450, Demand=$20/kW, Energy=$0.03/kWh. Consumption: 300kW, 50,000kWh. PF Limit: 80%)
                                </blockquote>
                                <p class="mt-4"><strong>Solution:</strong></p>
                                <p><strong>(i) Scenario (PF = 60%):</strong> Billing Demand = 300kW * (80/60) = 400kW. Bill = $450 + (400 * $20) + (50,000 * $0.03) = <strong>$10,000</strong>.</p>
                                <p><strong>(ii) Scenario (PF > 80%):</strong> Billing Demand = 300kW. Bill = $450 + (300 * $20) + (50,000 * $0.03) = <strong>$7,950</strong>.</p>
                                <p><strong>Savings:</strong> $10,000 - $7,950 = <strong>$2,050</strong>.</p>
                            </div>
                        </details>

                        <details class="mb-4 bg-slate-50 p-4 rounded-lg shadow-inner">
                            <summary class="font-semibold text-blue-700 cursor-pointer">Example 3.2: Ratchet Clause Calculation</summary>
                            <div class="mt-4 prose prose-sm max-w-none text-gray-700">
                                <blockquote class="border-l-4 border-gray-300 pl-4 italic text-gray-600">
                                    <strong>Question:</strong> Added 'Ratchet Clause' to Example 1: Billed demand cannot be less than 70% of highest (PF-adjusted) demand in last 12 months. If previous highest demand was 700 kW, recalculate Example 1's bill.
                                </blockquote>
                                <p class="mt-4"><strong>Solution:</strong></p>
                                <ul>
                                    <li><strong>1. Ratchet Threshold (Minimum Demand):</strong> 700 kW × 0.70 = <strong>490 kW</strong></li>
                                    <li><strong>2. Example 1's Demand (with PF penalty):</strong> <strong>400 kW</strong></li>
                                    <li><strong>3. Final Billed Demand:</strong> MAX(400 kW, 490 kW) = <strong>490 kW</strong></li>
                                    <li><strong>New Bill:</strong> $450 + (490 kW × $20) + (50,000 kWh × $0.03) = <strong>$11,750</strong></li>
                                </ul>
                            </div>
                        </details>

                        </div>
                </div>
            `
        },
        {
            id: 4,
            module: "Chapter 4",
            title: "Economic Analysis and Engineering Economics",
            testUrl: "test4.html",
            content: `
                <div class="space-y-6">
                    <p class="text-gray-700 mb-4">Most energy-saving measures require an <strong>initial investment cost</strong> (e.g., buying a new boiler). For this project to be economically viable, this initial cost must be less than the sum of savings obtained from reduced operating costs over the project's lifetime.</p>

                    <div><h4 class="text-lg font-bold text-blue-800 mb-2">1. Fundamental Concepts: Why Does Money's Value Change?</h4><p class="mb-2">We all know that today's 100 TL is more valuable than 100 TL 10 years from now. The fundamental concept of this course, <strong>Time Value of Money</strong>, has three basic reasons:</p>

                    <div class="mb-3"><h5 class="font-semibold text-gray-800 mb-1">Interest Rate (i)</h5><p class="text-sm text-gray-700">Borrowing money (or investing it) has a cost (or return). If this money sat in a bank, it would grow on its own through <strong>compound interest</strong>. When analyzing a project, we always consider this compound interest formula, not simple interest:</p><div class="bg-blue-50 p-3 rounded text-center font-mono text-sm mb-2"><strong>F = P(1 + i)<sup>N</sup></strong></div></div>

                    <div class="mb-3"><h5 class="font-semibold text-gray-800 mb-1">Inflation Rate (λ)</h5><p class="text-sm text-gray-700">The cost of goods and services increasing over time. Inflation reduces money's future purchasing power.</p></div>

                    <div class="mb-3"><h5 class="font-semibold text-gray-800 mb-1">Tax Rate (t)</h5><p class="text-sm text-gray-700">Taxation of interest income from investments reduces net return.</p></div>

                    <div class="bg-indigo-50 p-3 rounded border-l-4 border-indigo-500 text-sm mb-2"><p class="mb-1">When we combine these three factors (interest, inflation, and tax), we obtain a <strong>realistic compound interest rate (or discount rate)</strong> to use when evaluating our project:</p><div class="text-center font-mono"><strong>θ = [(1 - t)i - λ] / (1 + λ)</strong></div></div>
                    </div>

                    <div><h4 class="text-lg font-bold text-blue-800 mb-2">2. Cash Flow and Discount Factors</h4><p class="mb-2">To perform economic analysis of a project, we create a cash flow table listing all <strong>cash inflows (revenues/savings)</strong> and <strong>cash outflows (expenses/costs)</strong> throughout its lifetime.</p><div class="bg-red-50 p-3 rounded border-l-4 border-red-500 text-sm mb-3"><strong>⚠️ Most Important Rule:</strong> Cash flows from different years cannot be directly added due to "time value of money"! To bring 1000 TL savings from year 5 to the present, we must "discount" it.</div><p class="mb-2">The formulas that do this work are called <strong>Compound Interest Factors</strong>:</p>

                    <div class="grid gap-3 sm:grid-cols-2 mb-3"><div class="bg-gray-50 p-3 rounded border border-gray-200"><strong class="block text-blue-900 mb-1 text-sm">SPPW (Single Payment Present Worth)</strong><p class="text-xs">Finds present value (P) of a single future amount F (N years from now)</p></div><div class="bg-gray-50 p-3 rounded border border-gray-200"><strong class="block text-blue-900 mb-1 text-sm">SPCA (Single Payment Compound Amount)</strong><p class="text-xs">Finds future value (F) of today's amount P</p></div><div class="bg-gray-50 p-3 rounded border border-gray-200"><strong class="block text-blue-900 mb-1 text-sm">USPW (Uniform-Series Present Worth)</strong><p class="text-xs">Finds total present value (P) of uniform annual income A received each year for N years</p></div><div class="bg-gray-50 p-3 rounded border border-gray-200"><strong class="block text-blue-900 mb-1 text-sm">USCR (Uniform-Series Capital Recovery)</strong><p class="text-xs">Finds uniform annual payment A needed to repay today's investment P over N years</p></div></div>
                    </div>

                    <div><h4 class="text-lg font-bold text-blue-800 mb-2">3. 📈 Economic Evaluation Methods</h4><p class="mb-2 text-sm text-gray-600">After determining all cash flows and the correct discount rate (d), we use these methods to decide if a project is profitable:</p>

                    <div class="mb-3"><h5 class="font-semibold text-gray-800 mb-1">Net Present Worth (NPW)</h5><p class="text-sm text-gray-700 mb-2">Sum of present values of all revenues and expenses (including initial investment CF<sub>0</sub>) throughout project lifetime.</p><div class="bg-green-50 p-3 rounded border-l-4 border-green-500 text-sm"><strong>Criterion:</strong> If <strong>NPW > 0</strong>, project is profitable (meaning project earns more than putting your money in a bank).</div></div>

                    <div class="mb-3"><h5 class="font-semibold text-gray-800 mb-1">Rate of Return (ROR)</h5><p class="text-sm text-gray-700 mb-2">This method finds the "magic" discount rate (d') that makes NPW equal to zero.</p><div class="bg-green-50 p-3 rounded border-l-4 border-green-500 text-sm"><strong>Criterion:</strong> If project's internal rate of return (d') is greater than the market's minimum acceptable rate of return (d) (<strong>d' > d</strong>), project is profitable.</div></div>

                    <div class="mb-3"><h5 class="font-semibold text-gray-800 mb-1">Benefit-Cost Ratio (BCR)</h5><p class="text-sm text-gray-700 mb-2">Ratio of present value of all benefits (revenues) to present value of all costs.</p><div class="bg-green-50 p-3 rounded border-l-4 border-green-500 text-sm"><strong>Criterion:</strong> If <strong>BCR > 1.0</strong>, project is profitable (benefits exceed costs).</div></div>

                    <div class="mb-3"><h5 class="font-semibold text-gray-800 mb-1">Payback Period</h5><p class="text-sm text-gray-700 mb-2">Shows how many years (Y) it takes for initial investment (CF<sub>0</sub>) to pay itself back.</p><ul class="list-disc list-inside pl-4 space-y-1 text-sm text-gray-700 marker:text-gray-500"><li><strong>Simple Payback (SPB):</strong> Ignores time value of money. Simply calculated as Y = Initial Cost / Annual Savings.</li><li><strong>Discounted Payback (DPB):</strong> Considers time value of money and gives a more realistic duration.</li></ul><div class="bg-green-50 p-3 rounded border-l-4 border-green-500 text-sm mt-2"><strong>Criterion:</strong> If payback period (Y) is shorter than project's total lifetime (N) (<strong>Y < N</strong>), project is acceptable.</div></div>

                    <div class="mb-3"><h5 class="font-semibold text-gray-800 mb-1">Life-Cycle Cost (LCC) Analysis</h5><p class="text-sm text-gray-700 mb-2">This is the most widely accepted method, especially when <strong>comparing alternatives</strong> (e.g., boiler A vs. boiler B vs. do nothing).</p><p class="text-sm text-gray-700 mb-2">Calculates present value (LCC) of each alternative's total costs over project lifetime (initial investment + all fuel + all maintenance costs).</p><div class="bg-green-50 p-3 rounded border-l-4 border-green-500 text-sm"><strong>Criterion:</strong> The alternative with the lowest LCC (lowest total cost) is the economically best choice.</div></div>
                    </div>

                    <div class="mt-8 pt-6 border-t border-gray-200">
                        <h4 class="text-xl font-bold text-blue-800 mb-4">📚 Sample Problem Solutions (PDF 4)</h4>
                        
                        <details class="mb-4 bg-slate-50 p-4 rounded-lg shadow-inner">
                            <summary class="font-semibold text-blue-700 cursor-pointer">Examples 4.1, 4.2 & 4.3: Interest, Inflation and Tax</summary>
                            <div class="mt-4 prose prose-sm max-w-none text-gray-700">
                                <blockquote class="border-l-4 border-gray-300 pl-4 italic text-gray-600">
                                    <strong>Question:</strong> Principal $10,000, N=10 years, i=7%, &lambda;=4%, t=28%.
                                    (1) F with compound interest? (2) Real value with inflation? (3) Real value with inflation+tax?
                                </blockquote>
                                <p class="mt-4"><strong>Solution:</strong></p>
                                <ul class="font-mono">
                                    <li><strong>1. Compound Interest:</strong> F = P(1+i)<sup>N</sup> = $10,000(1.07)<sup>10</sup> = <strong>$19,671.50</strong></li>
                                    <li><strong>2. With Inflation (&theta;=(i-&lambda;)/(1+&lambda;)):</strong> &theta; = (0.07-0.04)/(1.04) = 0.02884.
                                        F = $10,000(1.02884)<sup>10</sup> = <strong>$13,293.40</strong></li>
                                    <li><strong>3. With Inflation+Tax (&theta;=[(1-t)i-&lambda;]/(1+&lambda;)):</strong> &theta; = [(1-0.28)*0.07-0.04]/(1.04) = 0.01.
                                        F = $10,000(1.01)<sup>10</sup> = <strong>$11,046.20</strong></li>
                                </ul>
                            </div>
                        </details>

                        <details class="mb-4 bg-slate-50 p-4 rounded-lg shadow-inner">
                            <summary class="font-semibold text-blue-700 cursor-pointer">Example 4.6 (LCC Analysis)</summary>
                            <div class="mt-4 prose prose-sm max-w-none text-gray-700">
                                <blockquote class="border-l-4 border-gray-300 pl-4 italic text-gray-600">
                                    <strong>Question:</strong> 3 options: (A) New Boiler ($10k, 85% efficiency), (B) New Burner ($2k, 66% efficiency), (C) Do nothing (60% efficiency). (N=10 years, d=5%). Find best option using LCC.
                                </blockquote>
                                <p class="mt-4"><strong>Solution:</strong></p>
                                <p>LCC (Initial Investment + Present Value of Annual Costs) calculated for all alternatives. Required heat = $3,600. USPW(5%, 10y) = 7.7217.</p>
                                <ul class="font-mono">
                                    <li><strong>LCC (A) New Boiler:</strong> $10,000 + ($4,385.29 * 7.7217) = <strong>$43,908.50</strong></li>
                                    <li><strong>LCC (B) New Burner:</strong> $2,000 + ($5,604.54 * 7.7217) = <strong>$45,280.50</strong></li>
                                    <li><strong>LCC (C) Do Nothing:</strong> $0 + ($6,150 * 7.7217) = <strong>$47,488.45</strong></li>
                                </ul>
                                <p class="font-semibold text-green-700"><strong>Result:</strong> <strong>Alternative A (New Boiler)</strong> with lowest LCC is the best economic choice.</p>
                            </div>
                        </details>
                    </div>
                </div>
            `
        }
    ]
};

// Helper function to get lecture data based on language
function getLectureData() {
    const lang = getLanguage();
    return lectureDataBilingual[lang] || lectureDataBilingual.tr;
}
