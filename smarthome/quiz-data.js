// ============================================
// QUIZ QUESTIONS AND ANSWERS TRANSLATIONS
// Complete bilingual database for all quizzes
// ============================================

const quizTranslations = {
    // MIDTERM 1 - Mixed Exam 1
    midterm1: {
        tr: [
            {
                id: 1,
                question: "(Bölüm 1) 'Enerji Yoğunluğu' (Energy Intensity) kavramı nedir ve yüksek olması ne anlama gelir?",
                options: [
                    "Kişi başı tüketimdir; yüksek olması refahı gösterir.",
                    "GSYİH başına düşen enerjidir; yüksek olması verimsizliği gösterir.",
                    "Santral kapasitesidir; yüksek olması arz güvenliğini gösterir.",
                    "Yenilenebilir enerji oranıdır; yüksek olması çevreciliği gösterir."
                ],
                correctAnswer: "GSYİH başına düşen enerjidir; yüksek olması verimsizliği gösterir."
            },
            {
                id: 2,
                question: "(Bölüm 2) 'Yük Faktörü'nün (Load Factor) tanımı nedir?",
                options: [
                    "Ortalama Yük / Maksimum Talep",
                    "Maksimum Talep / Ortalama Yük",
                    "Maksimum Talep / Toplam Bağlı Yük",
                    "Toplam Bağlı Yük / Ortalama Yük"
                ],
                correctAnswer: "Ortalama Yük / Maksimum Talep"
            },
            {
                id: 3,
                question: "(Bölüm 3) Bir elektrik faturasındaki 'Talep Bedeli' (Demand Charge) neyin karşılığı olarak alınır?",
                options: [
                    "Ay içinde tüketilen toplam enerjinin (kWh)",
                    "Ay içinde ulaşılan en yüksek anlık gücün (kW)",
                    "Devlete ödenen sabit vergilerin",
                    "Tesisin sahip olduğu toplam bağlı yükün (kW)"
                ],
                correctAnswer: "Ay içinde ulaşılan en yüksek anlık gücün (kW)"
            },
            {
                id: 4,
                question: "(Bölüm 4) Bir projenin ekonomik analizinde 'Paranın Zaman Değeri' kavramı neden dikkate alınmalıdır?",
                options: [
                    "Çünkü bugünkü para, enflasyon ve faiz (fırsat maliyeti) nedeniyle gelecekteki paradan daha değerlidir.",
                    "Çünkü gelecekteki para, teknolojik gelişmeler nedeniyle bugünkü paradan daha değerlidir.",
                    "Çünkü muhasebe standartları sadece bugünkü değeri kabul eder.",
                    "Çünkü projelerin maliyeti zamanla hep azalır."
                ],
                correctAnswer: "Çünkü bugünkü para, enflasyon ve faiz (fırsat maliyeti) nedeniyle gelecekteki paradan daha değerlidir."
            },
            {
                id: 5,
                question: "(Bölüm 1) AB'nin '20-20-20' hedefleri arasında hangisi *yoktur*?",
                options: [
                    "%20 Enerji Verimliliği artışı",
                    "%20 Sera Gazı Emisyonu azaltma",
                    "%20 Yenilenebilir Enerji payı",
                    "%20 Nükleer Enerji payı"
                ],
                correctAnswer: "%20 Nükleer Enerji payı"
            },
            {
                id: 6,
                question: "(Bölüm 2) Santralin 'Baz Yükünü' (Base Load) belirlemek için en faydalı olan ve yükleri büyükten küçüğe sıralayan grafik hangisidir?",
                options: [
                    "Yük Eğrisi (Load Curve)",
                    "Yük Süreklilik Eğrisi (Load Duration Curve)",
                    "Çeşitlilik Grafiği (Diversity Chart)",
                    "Kapasite Faktörü Grafiği (Capacity Factor Chart)"
                ],
                correctAnswer: "Yük Süreklilik Eğrisi (Load Duration Curve)"
            },
            {
                id: 7,
                question: "(Bölüm 3) Faturanızdaki talep bedelinin, mevcut tüketiminizden bağımsız olarak, son 12 ayın en yüksek zirvesinin belli bir yüzdesinden az olmamasını sağlayan madde nedir?",
                options: [
                    "Güç Faktörü Cezası (Power Factor Clause)",
                    "Yakıt Ayarlama Bedeli (Fuel Adjustment Clause)",
                    "Ratchet Clause (Geçmişe Bağlı Talep Maddesi)",
                    "Blok Fiyatlandırma (Block Pricing)"
                ],
                correctAnswer: "Ratchet Clause (Geçmişe Bağlı Talep Maddesi)"
            },
            {
                id: 8,
                question: "(Bölüm 4) Bir projenin tüm nakit akışlarının (ilk yatırım, yıllık tasarruflar) bugünkü değerlerinin toplamını bulan ve sonucun > 0 olmasını hedefleyen yöntem nedir?",
                options: [
                    "Net Bugünkü Değer (NPW)",
                    "Basit Geri Ödeme Süresi (SPB)",
                    "Fayda-Maliyet Oranı (BCR)",
                    "Yaşam Döngüsü Maliyeti (LCC)"
                ],
                correctAnswer: "Net Bugünkü Değer (NPW)"
            },
            {
                id: 9,
                question: "(Bölüm 2) 'Çeşitlilik Faktörü'nün (Diversity Factor) 1'den büyük olması ne anlama gelir?",
                options: [
                    "Sistem çok verimsiz çalışıyor demektir.",
                    "Tüm tüketicilerin maksimum talepleri aynı anda oluyor demektir.",
                    "Tüketicilerin maksimum talepleri farklı anlarda oluyor demektir (bu santral için iyidir).",
                    "Santral kapasitesi yetersiz demektir."
                ],
                correctAnswer: "Tüketicilerin maksimum talepleri farklı anlarda oluyor demektir (bu santral için iyidir)."
            },
            {
                id: 10,
                question: "(Bölüm 3) Elektrik fiyatının saatlik olarak değiştiği ve fiyatların bir gün önceden duyurulduğu en dinamik tarife modeli hangisidir?",
                options: [
                    "Gerçek Zamanlı Fiyatlandırma (RTP)",
                    "Zaman Esaslı Tarife (TOU)",
                    "Ters Blok Tarife (Inverted Block Rate)",
                    "Düz Tarife (Flat Rate)"
                ],
                correctAnswer: "Gerçek Zamanlı Fiyatlandırma (RTP)"
            },
            {
                id: 11,
                question: "(Bölüm 1) Düşük maliyetli (low cost) enerji yönetimi faaliyetleri ile ilk 1-2 yılda elde edilebilecek tipik tasarruf oranı nedir?",
                options: [
                    "%1 - %2",
                    "%5 - %15",
                    "%15 - %30",
                    "%30 - %50"
                ],
                correctAnswer: "%5 - %15"
            },
            {
                id: 12,
                question: "(Bölüm 4) Farklı proje alternatiflerini (örn. A kazanı vs B kazanı) karşılaştırırken, her alternatifin *tüm ömrü boyunca* toplam maliyetini hesaplayan yöntem nedir?",
                options: [
                    "Net Bugünkü Değer (NPW)",
                    "Geri Ödeme Süresi (Payback Period)",
                    "Yaşam Döngüsü Maliyeti (LCC)",
                    "İç Verim Oranı (ROR)"
                ],
                correctAnswer: "Yaşam Döngüsü Maliyeti (LCC)"
            },
            {
                id: 13,
                question: "(Bölüm 2) 'Talep Faktörü'nün (Demand Factor) tanımı nedir?",
                options: [
                    "Ortalama Yük / Maksimum Talep",
                    "Maksimum Talep / Toplam Bağlı Yük",
                    "Toplam Bağlı Yük / Maksimum Talep",
                    "Ortalama Yük / Toplam Bağlı Yük"
                ],
                correctAnswer: "Maksimum Talep / Toplam Bağlı Yük"
            },
            {
                id: 14,
                question: "(Bölüm 3) 'Güç Faktörü' (Power Factor) neden önemlidir ve tedarikçiler neden düşük (örn. <0.9) PF'yi cezalandırır?",
                options: [
                    "Çünkü düşük PF, aynı iş (kW) için şebekeden daha fazla toplam akım (kVA) çekildiğini gösterir (verimsizlik).",
                    "Çünkü düşük PF, sadece konutlarda meydana gelir ve haksız yüktür.",
                    "Çünkü düşük PF, enerjinin daha pahalı üretildiği anlamına gelir.",
                    "Çünkü düşük PF, sayaçların daha az yazmasına neden olur."
                ],
                correctAnswer: "Çünkü düşük PF, aynı iş (kW) için şebekeden daha fazla toplam akım (kVA) çekildiğini gösterir (verimsizlik)."
            },
            {
                id: 15,
                question: "(Bölüm 4) Bir projenin 'Basit Geri Ödeme Süresi' (Simple Payback Period) nasıl hesaplanır?",
                options: [
                    "Toplam Proje Ömrü / Yıllık Tasarruf",
                    "İlk Yatırım Maliyeti / Yıllık Tasarruf",
                    "Yıllık Tasarruf / İlk Yatırım Maliyeti",
                    "İlk Yatırım Maliyeti / Proje Ömrü"
                ],
                correctAnswer: "İlk Yatırım Maliyeti / Yıllık Tasarruf"
            }
        ],
        en: [
            {
                id: 1,
                question: "(Chapter 1) What is the concept of 'Energy Intensity' and what does it mean when it is high?",
                options: [
                    "It is per capita consumption; high value indicates prosperity.",
                    "It is energy per GDP; high value indicates inefficiency.",
                    "It is power plant capacity; high value indicates supply security.",
                    "It is renewable energy ratio; high value indicates environmentalism."
                ],
                correctAnswer: "It is energy per GDP; high value indicates inefficiency."
            },
            {
                id: 2,
                question: "(Chapter 2) What is the definition of 'Load Factor'?",
                options: [
                    "Average Load / Maximum Demand",
                    "Maximum Demand / Average Load",
                    "Maximum Demand / Total Connected Load",
                    "Total Connected Load / Average Load"
                ],
                correctAnswer: "Average Load / Maximum Demand"
            },
            {
                id: 3,
                question: "(Chapter 3) What is the 'Demand Charge' in an electricity bill charged for?",
                options: [
                    "Total energy consumed during the month (kWh)",
                    "Highest instantaneous power reached during the month (kW)",
                    "Fixed taxes paid to the government",
                    "Total connected load owned by the facility (kW)"
                ],
                correctAnswer: "Highest instantaneous power reached during the month (kW)"
            },
            {
                id: 4,
                question: "(Chapter 4) Why should the 'Time Value of Money' concept be considered in a project's economic analysis?",
                options: [
                    "Because today's money is more valuable than future money due to inflation and interest (opportunity cost).",
                    "Because future money is more valuable than today's money due to technological developments.",
                    "Because accounting standards only accept present value.",
                    "Because project costs always decrease over time."
                ],
                correctAnswer: "Because today's money is more valuable than future money due to inflation and interest (opportunity cost)."
            },
            {
                id: 5,
                question: "(Chapter 1) Which of the following is *not* among the EU's '20-20-20' targets?",
                options: [
                    "20% Energy Efficiency increase",
                    "20% Greenhouse Gas Emission reduction",
                    "20% Renewable Energy share",
                    "20% Nuclear Energy share"
                ],
                correctAnswer: "20% Nuclear Energy share"
            },
            {
                id: 6,
                question: "(Chapter 2) Which graph is most useful for determining the power plant's 'Base Load' and orders loads from largest to smallest?",
                options: [
                    "Load Curve",
                    "Load Duration Curve",
                    "Diversity Chart",
                    "Capacity Factor Chart"
                ],
                correctAnswer: "Load Duration Curve"
            },
            {
                id: 7,
                question: "(Chapter 3) What clause ensures that the demand charge on your bill is not less than a certain percentage of the highest peak of the last 12 months, regardless of your current consumption?",
                options: [
                    "Power Factor Clause",
                    "Fuel Adjustment Clause",
                    "Ratchet Clause",
                    "Block Pricing"
                ],
                correctAnswer: "Ratchet Clause"
            },
            {
                id: 8,
                question: "(Chapter 4) What method finds the sum of present values of all cash flows (initial investment, annual savings) of a project and aims for a result > 0?",
                options: [
                    "Net Present Worth (NPW)",
                    "Simple Payback Period (SPB)",
                    "Benefit-Cost Ratio (BCR)",
                    "Life Cycle Cost (LCC)"
                ],
                correctAnswer: "Net Present Worth (NPW)"
            },
            {
                id: 9,
                question: "(Chapter 2) What does it mean when the 'Diversity Factor' is greater than 1?",
                options: [
                    "The system is operating very inefficiently.",
                    "All consumers' maximum demands occur at the same time.",
                    "Consumers' maximum demands occur at different times (this is good for the power plant).",
                    "Power plant capacity is insufficient."
                ],
                correctAnswer: "Consumers' maximum demands occur at different times (this is good for the power plant)."
            },
            {
                id: 10,
                question: "(Chapter 3) What is the most dynamic tariff model where electricity prices change hourly and prices are announced one day in advance?",
                options: [
                    "Real-Time Pricing (RTP)",
                    "Time-of-Use Tariff (TOU)",
                    "Inverted Block Rate",
                    "Flat Rate"
                ],
                correctAnswer: "Real-Time Pricing (RTP)"
            },
            {
                id: 11,
                question: "(Chapter 1) What is the typical savings rate that can be achieved in the first 1-2 years with low-cost energy management activities?",
                options: [
                    "1% - 2%",
                    "5% - 15%",
                    "15% - 30%",
                    "30% - 50%"
                ],
                correctAnswer: "5% - 15%"
            },
            {
                id: 12,
                question: "(Chapter 4) What method calculates the total cost of each alternative *throughout its entire life* when comparing different project alternatives (e.g., boiler A vs boiler B)?",
                options: [
                    "Net Present Worth (NPW)",
                    "Payback Period",
                    "Life Cycle Cost (LCC)",
                    "Rate of Return (ROR)"
                ],
                correctAnswer: "Life Cycle Cost (LCC)"
            },
            {
                id: 13,
                question: "(Chapter 2) What is the definition of 'Demand Factor'?",
                options: [
                    "Average Load / Maximum Demand",
                    "Maximum Demand / Total Connected Load",
                    "Total Connected Load / Maximum Demand",
                    "Average Load / Total Connected Load"
                ],
                correctAnswer: "Maximum Demand / Total Connected Load"
            },
            {
                id: 14,
                question: "(Chapter 3) Why is 'Power Factor' important and why do suppliers penalize low (e.g., <0.9) PF?",
                options: [
                    "Because low PF indicates that more total current (kVA) is drawn from the grid for the same work (kW) (inefficiency).",
                    "Because low PF only occurs in residences and is an unfair burden.",
                    "Because low PF means energy is produced more expensively.",
                    "Because low PF causes meters to record less."
                ],
                correctAnswer: "Because low PF indicates that more total current (kVA) is drawn from the grid for the same work (kW) (inefficiency)."
            },
            {
                id: 15,
                question: "(Chapter 4) How is the 'Simple Payback Period' of a project calculated?",
                options: [
                    "Total Project Life / Annual Savings",
                    "Initial Investment Cost / Annual Savings",
                    "Annual Savings / Initial Investment Cost",
                    "Initial Investment Cost / Project Life"
                ],
                correctAnswer: "Initial Investment Cost / Annual Savings"
            }
        ]
    }
};

// Export for use in HTML pages
if (typeof window !== 'undefined') {
    window.quizTranslations = quizTranslations;
}
