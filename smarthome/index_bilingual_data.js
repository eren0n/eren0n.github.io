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
                    <div><h4 class="text-lg font-bold text-blue-800 mb-2">1. Enerji Yönetimi: Tanım ve Amaçlar</h4><p class="mb-2">Enerji yönetimi, "kârı maksimize etmek (maliyetleri en aza indirmek) ve rekabetçi konumu geliştirmek için enerjinin akılcı ve etkin kullanılmasıdır".</p><ul class="list-disc list-inside pl-4 space-y-1 text-gray-700 marker:text-blue-500"><li><strong>Birincil Hedef:</strong> Maliyetleri düşürmek ve kârı artırmak.</li><li><strong>Alt Hedefler:</strong> Enerji verimliliğini artırmak, izleme ve raporlama stratejileri geliştirmek, kesintilerin etkilerini azaltmak.</li></ul></div>
                    <div><h4 class="text-lg font-bold text-blue-800 mb-2">2. İtici Güçler (Neden Gerekli?)</h4><ul class="list-disc list-inside pl-4 space-y-1 text-gray-700 marker:text-blue-500"><li><strong>İklim Değişikliği:</strong> Binaların ısıtılması, soğutulması ve aydınlatılması, toplam enerji tüketimi ve CO<sub>2</sub> emisyonunun %50'sini oluşturur.</li><li><strong>Politik Hedefler (AB 20-20-20):</strong> Emisyonlarda %20 azalma, Yenilenebilir enerjide %20 pay, Verimlilikte %20 artış.</li><li><strong>Ekonomik Baskı:</strong> Artan yakıt fiyatları ve ithalat bağımlılığı.</li></ul></div>
                    <div><h4 class="text-lg font-bold text-blue-800 mb-2">3. Enerji Yönetiminin Değeri</h4><div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500"><p class="font-semibold mb-2">Tasarruf Potansiyelleri:</p><ul class="list-none space-y-1 text-sm"><li>🔹 Düşük maliyetli önlemler (1-2 yıl): <strong>%5 - %15</strong></li><li>🔹 Orta maliyetli önlemler (3-5 yıl): <strong>%15 - %30</strong></li><li>🔹 Uzun vadeli projeler: <strong>%30 - %50</strong></li></ul></div></div>
                    <div><h4 class="text-lg font-bold text-blue-800 mb-2">4. Küresel ve Türkiye'deki Durum</h4><p>Türkiye, 1990-2011 arasında birincil enerji arzında %117'lik artışla en hızlı büyüyen ülkelerden biridir. Ancak, <strong>kişi başı enerji tüketimi (1.6 toe)</strong> OECD ortalamasının (4.2 toe) çok altındadır. Hedefimiz, "Enerji Yoğunluğunu" (GSYİH başına düşen enerji) azaltarak daha verimli bir ekonomiye geçmektir.</p></div>
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
                    <div><h4 class="text-lg font-bold text-blue-800 mb-2">1. Temel Sorun: Değişken Talep</h4><p>Tüketici talebi gün içinde sürekli değişir (sabah artar, akşam zirve yapar, gece düşer). Ancak santrallerin maksimum verimlilik için sabit güçte çalışması gerekir. Enerji yönetiminin amacı bu dengeyi kurmaktır.</p></div>
                    <div><h4 class="text-lg font-bold text-blue-800 mb-2">2. Kritik Tanımlar ve Faktörler</h4><div class="grid gap-4 md:grid-cols-2"><div class="bg-gray-50 p-4 rounded border border-gray-200"><strong class="block text-blue-900 mb-1">Bağlı Yük (Connected Load)</strong><p class="text-sm">Sisteme bağlı tüm cihazların etiket güçlerinin toplamıdır.</p></div><div class="bg-gray-50 p-4 rounded border border-gray-200"><strong class="block text-blue-900 mb-1">Maksimum Talep (Peak Load)</strong><p class="text-sm">Belirli bir dönemdeki en yüksek tüketim anıdır. Santralin kurulu gücünü bu belirler.</p></div><div class="bg-gray-50 p-4 rounded border border-gray-200"><strong class="block text-blue-900 mb-1">Talep Faktörü (Demand Factor)</strong><p class="text-sm">DF = Maks. Talep / Toplam Bağlı Yük (Her zaman < 1).</p></div><div class="bg-gray-50 p-4 rounded border border-gray-200"><strong class="block text-blue-900 mb-1">Yük Faktörü (Load Factor)</strong><p class="text-sm">LF = Ortalama Yük / Maks. Talep. 1'e yakın olması verimliliği gösterir.</p></div></div></div>
                    
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
                    <p class="text-gray-700 italic">Enerji maliyeti, sadece ne kadar tükettiğinizle değil, ne zaman ve nasıl tükettiğinizle ilgilidir.</p>
                    <div><h4 class="text-lg font-bold text-blue-800 mb-2">1. Faturanızı Anlamak: Tarife Bileşenleri</h4><ul class="list-disc list-inside pl-4 space-y-2 text-gray-700 marker:text-blue-500"><li><strong>Faturalandırılan Talep (Billing Demand):</strong> Tükettiğiniz enerji (kWh) dışında, enerjiyi ne kadar hızlı çektiğinizin (kW) bedelidir.</li><li><strong>Güç Faktörü (Power Factor) Cezası:</strong> Şebekeden verimsiz şekilde reaktif güç (kVAR) çekerseniz (PF < 0.9), ek ücret ödersiniz.</li><li><strong>Ratchet Clause (Geçmişe Bağlı Talep):</strong> Faturanızdaki talep bedeli, son 12 ay içindeki en yüksek zirve talebinizin belli bir oranından (örn. %70) az olamaz.</li></ul></div>
                    
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
                    <p class="text-gray-700">Bir enerji projesine (örn. yeni bir kazan almak) "Değer mi?" sorusunun cevabını verirken <strong>Paranın Zaman Değeri</strong> dikkate alınmalıdır.</p>
                    <div><h4 class="text-lg font-bold text-blue-800 mb-2">1. Temel Kavramlar</h4><ul class="list-disc list-inside pl-4 space-y-1 text-gray-700 marker:text-blue-500"><li><strong>Faiz ve Enflasyon:</strong> Bugünün 100 TL'si, gelecekteki 100 TL'den daha değerlidir. Hesaplamalarda basit faiz değil, <em>bileşik faiz</em> kullanılır.</li><li><strong>Nakit Akışı (Cash Flow):</strong> Proje ömrü boyunca tüm girişler (tasarruflar) ve çıkışlar (yatırım, bakım) yıllara göre listelenir.</li></ul></div>
                    <div><h4 class="text-lg font-bold text-blue-800 mb-2">2. Değerlendirme Yöntemleri</h4><div class="grid gap-4 sm:grid-cols-2"><div class="p-4 border-l-4 border-green-500 bg-green-50 rounded"><strong class="block text-green-900">Net Bugünkü Değer (NPW)</strong><span class="text-sm text-green-800">Tüm gelir ve giderlerin bugünkü toplamı. NPW > 0 ise proje kârlıdır.</span></div><div class="p-4 border-l-4 border-green-500 bg-green-50 rounded"><strong class="block text-green-900">Geri Ödeme Süresi (Payback)</strong><span class="text-sm text-green-800">Yatırımın kendini kaç yılda amorti edeceği. Süre proje ömründen kısa olmalıdır.</span></div><div class="p-4 border-l-4 border-green-500 bg-green-50 rounded"><strong class="block text-green-900">Fayda-Maliyet Oranı (BCR)</strong><span class="text-sm text-green-800">Toplam faydanın toplam maliyete oranı. BCR > 1 ise proje kârlıdır.</span></div><div class="p-4 border-l-4 border-green-500 bg-green-50 rounded"><strong class="block text-green-900">Yaşam Döngüsü Maliyeti (LCC)</strong><span class="text-sm text-green-800">Alternatifler arasında seçim yaparken kullanılır. Toplam ömür boyu maliyeti en düşük olan seçilir.</span></div></div></div>

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
                    <div><h4 class="text-lg font-bold text-blue-800 mb-2">1. Energy Management: Definition and Objectives</h4><p class="mb-2">Energy management is "the judicious and effective use of energy to maximize profits (minimize costs) and enhance competitive position".</p><ul class="list-disc list-inside pl-4 space-y-1 text-gray-700 marker:text-blue-500"><li><strong>Primary Goal:</strong> Reduce costs and increase profit.</li><li><strong>Sub-objectives:</strong> Improve energy efficiency, develop monitoring and reporting strategies, reduce impact of energy supply interruptions.</li></ul></div>
                    <div><h4 class="text-lg font-bold text-blue-800 mb-2">2. Driving Forces (Why Is It Necessary?)</h4><ul class="list-disc list-inside pl-4 space-y-1 text-gray-700 marker:text-blue-500"><li><strong>Climate Change:</strong> Heating, cooling, and lighting of buildings account for 50% of total energy consumption and CO<sub>2</sub> emissions.</li><li><strong>Political Goals (EU 20-20-20):</strong> 20% reduction in emissions, 20% share of renewable energy, 20% improvement in efficiency.</li><li><strong>Economic Pressure:</strong> Rising fuel prices and import dependency.</li></ul></div>
                    <div><h4 class="text-lg font-bold text-blue-800 mb-2">3. Value of Energy Management</h4><div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500"><p class="font-semibold mb-2">Savings Potential:</p><ul class="list-none space-y-1 text-sm"><li>🔹 Low-cost measures (1-2 years): <strong>5% - 15%</strong></li><li>🔹 Medium-cost measures (3-5 years): <strong>15% - 30%</strong></li><li>🔹 Long-term projects: <strong>30% - 50%</strong></li></ul></div></div>
                    <div><h4 class="text-lg font-bold text-blue-800 mb-2">4. Global and Turkish Situation</h4><p>Turkey is one of the fastest-growing countries with a 117% increase in primary energy supply between 1990-2011. However, <strong>per capita energy consumption (1.6 toe)</strong> is well below the OECD average (4.2 toe). Our goal is to transition to a more efficient economy by reducing "Energy Intensity" (energy per GDP).</p></div>
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
                    <div><h4 class="text-lg font-bold text-blue-800 mb-2">1. Core Problem: Variable Demand</h4><p>Consumer demand constantly varies throughout the day (increases in the morning, peaks in the evening, drops at night). However, power plants need to operate at constant power for maximum efficiency. The goal of energy management is to establish this balance.</p></div>
                    <div><h4 class="text-lg font-bold text-blue-800 mb-2">2. Critical Definitions and Factors</h4><div class="grid gap-4 md:grid-cols-2"><div class="bg-gray-50 p-4 rounded border border-gray-200"><strong class="block text-blue-900 mb-1">Connected Load</strong><p class="text-sm">Sum of nameplate power ratings of all devices connected to the system.</p></div><div class="bg-gray-50 p-4 rounded border border-gray-200"><strong class="block text-blue-900 mb-1">Maximum Demand (Peak Load)</strong><p class="text-sm">Highest consumption point during a specific period. Determines plant installed capacity.</p></div><div class="bg-gray-50 p-4 rounded border border-gray-200"><strong class="block text-blue-900 mb-1">Demand Factor</strong><p class="text-sm">DF = Max Demand / Total Connected Load (Always < 1).</p></div><div class="bg-gray-50 p-4 rounded border border-gray-200"><strong class="block text-blue-900 mb-1">Load Factor</strong><p class="text-sm">LF = Average Load / Max Demand. Closer to 1 indicates efficiency.</p></div></div></div>
                    
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
                    <p class="text-gray-700 italic">Energy cost is not just about how much you consume, but when and how you consume it.</p>
                    <div><h4 class="text-lg font-bold text-blue-800 mb-2">1. Understanding Your Bill: Tariff Components</h4><ul class="list-disc list-inside pl-4 space-y-2 text-gray-700 marker:text-blue-500"><li><strong>Billing Demand:</strong> Besides consumed energy (kWh), you pay for how fast you draw energy (kW).</li><li><strong>Power Factor (PF) Penalty:</strong> If you inefficiently draw reactive power (kVAR) from the grid (PF < 0.9), you pay extra.</li><li><strong>Ratchet Clause (Historical Demand):</strong> Your billed demand cannot be less than a certain percentage (e.g., 70%) of your highest peak demand in the last 12 months.</li></ul></div>
                    
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
                    <p class="text-gray-700">When answering "Is it worth it?" for an energy project (e.g., buying a new boiler), <strong>Time Value of Money</strong> must be considered.</p>
                    <div><h4 class="text-lg font-bold text-blue-800 mb-2">1. Fundamental Concepts</h4><ul class="list-disc list-inside pl-4 space-y-1 text-gray-700 marker:text-blue-500"><li><strong>Interest and Inflation:</strong> Today's 100 TL is more valuable than future 100 TL. Calculations use <em>compound interest</em>, not simple interest.</li><li><strong>Cash Flow:</strong> All inflows (savings) and outflows (investment, maintenance) are listed by year throughout project lifetime.</li></ul></div>
                    <div><h4 class="text-lg font-bold text-blue-800 mb-2">2. Evaluation Methods</h4><div class="grid gap-4 sm:grid-cols-2"><div class="p-4 border-l-4 border-green-500 bg-green-50 rounded"><strong class="block text-green-900">Net Present Worth (NPW)</strong><span class="text-sm text-green-800">Present-value sum of all revenues and expenses. Project is profitable if NPW > 0.</span></div><div class="p-4 border-l-4 border-green-500 bg-green-50 rounded"><strong class="block text-green-900">Payback Period</strong><span class="text-sm text-green-800">Years for investment to amortize itself. Period should be shorter than project lifetime.</span></div><div class="p-4 border-l-4 border-green-500 bg-green-50 rounded"><strong class="block text-green-900">Benefit-Cost Ratio (BCR)</strong><span class="text-sm text-green-800">Ratio of total benefits to total costs. Project is profitable if BCR > 1.</span></div><div class="p-4 border-l-4 border-green-500 bg-green-50 rounded"><strong class="block text-green-900">Life Cycle Cost (LCC)</strong><span class="text-sm text-green-800">Used when choosing among alternatives. Select the one with lowest total lifetime cost.</span></div></div></div>

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
