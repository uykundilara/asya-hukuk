
/* ========================================
   ASYA HUKUK - ÇALIŞMA ALANLARI
======================================== */

const alanlar = {

    /* 1. CEZA HUKUKU */

    "ceza-hukuku.html": {
        baslik: "Ceza Hukuku",
        aciklama: "Ceza yargılamasına ilişkin hukuki süreçler.",
        hizmetler: [
            {
                baslik: "Şikâyet ve Suç Duyurusu İşlemleri",
                aciklama: `Mağduriyetlerin giderilmesi amacıyla
                Cumhuriyet Başsavcılığına suç duyurusunda
                bulunulması ve sürecin takibi.`
            },
            {
                baslik: "Soruşturma ve Kovuşturma Aşaması Savunması",
                aciklama: `Emniyet, savcılık ve mahkeme
                aşamalarında şüpheli, sanık veya müşteki
                vekilliği ile adil yargılanma hakkı
                çerçevesinde etkin savunma.`
            },
            {
                baslik: "Tutukluluk ve Gözaltı İtirazları",
                aciklama: `Haksız veya hukuka aykırı
                gözaltı ve tutuklama kararlarına karşı
                hukuki itirazların yapılarak özgürlük
                hakkının savunulması.`
            }
        ]
    },

    /* 2. İCRA VE İFLAS HUKUKU */

    "icra-ve-iflas-hukuku.html": {
        baslik: "İcra ve İflas Hukuku",
        aciklama: "İcra takipleri ve alacak uyuşmazlıkları.",
        hizmetler: [
            {
                baslik: "İlamlı ve İlamsız İcra Takibi",
                aciklama: `Mahkeme kararına dayanan ilamlı
                veya mahkeme kararına dayanmayan ilamsız
                alacakların tahsili için icra takiplerinin
                başlatılması ve yürütülmesi.`
            },
            {
                baslik: "İtirazın İptali Davaları",
                aciklama: `Haksız yere icra takibine
                yapılan itirazların iptal edilerek takibin
                devamı ve alacağın tahsili için açılan davalar.`
            },
            {
                baslik: "Menfi Tespit ve İstirdat Davaları",
                aciklama: `Borçlu olunmadığının tespiti
                veya haksız olarak ödenen bedelin geri
                alınması amacıyla yürütülen süreçler.`
            },
            {
                baslik: "Haciz İşlemleri",
                aciklama: `Alacağın tahsili amacıyla borçlunun
                taşınır, taşınmaz malları ile üçüncü kişilerdeki
                hak ve alacaklarına haciz konulması işlemleri.`
            },
            {
                baslik: "Karşılıksız Çek ve Senet İcrası",
                aciklama: `Kambiyo senetlerine özgü hızlı
                takip yolları ile çek ve senet tahsilatlarının
                gerçekleştirilmesi ve karşılıksız çek şikâyetleri.`
            },
            {
                baslik: "İcra Hukuk ve İcra Ceza Davaları",
                aciklama: `İcra mahkemelerinin görev alanına
                giren istihkak, şikâyet ve taahhüdü ihlal gibi
                hukuki ve cezai davaların takibi.`
            }
        ]
    },

    /* 3. İDARE HUKUKU */

    "idare-hukuku.html": {
        baslik: "İdare Hukuku",
        aciklama: "İdari işlemler ve idari yargı süreçleri.",
        hizmetler: [
            {
                baslik: "İptal Davaları",
                aciklama: `Kurumlar tarafından tesis edilen
                hukuka aykırı idari işlemlerin ve kararların
                mahkeme kanalıyla iptal ettirilmesi.`
            },
            {
                baslik: "Tam Yargı (Tazminat) Davaları",
                aciklama: `İdarenin işlem veya eylemleri
                neticesinde uğranılan maddi ve manevi
                zararların tazmini için açılan davalar.`
            },
            {
                baslik: "İdari Para Cezalarına İtiraz",
                aciklama: `Kamu kurumları tarafından
                haksız yere kesilen idari para cezalarına
                karşı iptal talebiyle itiraz edilmesi.`
            },
            {
                baslik: "Kamulaştırma ve Kamulaştırmasız El Atma Davaları",
                aciklama: `Devletin özel mülkiyete el atması
                durumunda bedel tespiti, tescil ve haksız
                el atmadan doğan tazminat davalarının takibi.`
            }
        ]
    },

    /* 4. İŞ HUKUKU */

    "is-hukuku.html": {
        baslik: "İş Hukuku",
        aciklama: "İşçi ve işveren uyuşmazlıkları.",
        hizmetler: [
            {
                baslik: "İşe İade Davaları",
                aciklama: `Geçerli veya haklı bir neden
                olmaksızın iş sözleşmesi feshedilen
                çalışanların işe iadesi ve boşta geçen
                süre tazminatlarının alınması.`
            },
            {
                baslik: "İşçilik Alacakları",
                aciklama: `Kıdem ve ihbar tazminatı,
                fazla mesai, yıllık izin, ulusal bayram
                ve genel tatil ücretlerinin hesaplanıp
                tahsil edilmesi.`
            },
            {
                baslik: "İş Kazası ve Meslek Hastalığı Tazminatı",
                aciklama: `İş yerinde veya işe bağlı
                olarak yaşanan kazalar ve hastalıklar
                sonucu oluşan bedensel zararlara ilişkin
                maddi ve manevi tazminat davaları.`
            },
            {
                baslik: "Hizmet Tespit Davaları",
                aciklama: `Sigortasız çalıştırılan
                veya eksik prim ödenen işçilerin hizmet
                sürelerinin tespiti ve SGK kayıtlarına
                işlenmesi.`
            }
        ]
    },

    /* 5. KİRA VE GAYRİMENKUL HUKUKU */

    "kira-hukuku.html": {
        baslik: "Kira ve Gayrimenkul Hukuku",
        aciklama: "Kira ilişkileri ve taşınmaz uyuşmazlıkları.",
        hizmetler: [
            {
                baslik: "Kira Tespit ve Uyarlama Davaları",
                aciklama: `Ekonomik koşullar veya emsal
                bedeller doğrultusunda kira bedelinin
                yeniden belirlenmesi ve güncellenmesi.`
            },
            {
                baslik: "Tahliye Davaları",
                aciklama: `Kiracının temerrüdü, ihtiyaç,
                onarım veya taahhütname gibi yasal
                sebeplerle taşınmazın tahliyesi süreçleri.`
            },
            {
                baslik: "Kira Alacağı ve Tazminat",
                aciklama: `Ödenmeyen kira bedellerinin
                icra yoluyla tahsili ve sözleşmeye
                aykırılıktan doğan zararların tazmini.`
            },
            {
                baslik: "Kira Sözleşmesi Hazırlama ve Depozito Uyuşmazlıkları",
                aciklama: `Hak kayıplarını önleyecek
                güncel mevzuata uygun kira sözleşmelerinin
                hazırlanması ve depozito iade süreçleri.`
            },
            {
                baslik: "Tapu İptal ve Tescil Davaları",
                aciklama: `Yolsuz tescil, muris muvazaası,
                inançlı işlem veya ehliyetsizlik gibi
                sebeplerle açılan tapu davaları.`
            },
            {
                baslik: "İzale-i Şüyu (Ortaklığın Giderilmesi) Davaları",
                aciklama: `Paylı mülkiyete konu taşınmazlarda
                ortaklığın mahkeme kanalıyla satış veya
                aynen taksim yoluyla giderilmesi.`
            },
            {
                baslik: "Kat Karşılığı İnşaat Sözleşmeleri",
                aciklama: `Arsa sahipleri ile müteahhitler
                arasındaki inşaat sözleşmelerinin
                hazırlanması ve bu sözleşmelerden
                doğan ihtilafların çözümü.`
            },
            {
                baslik: "Müdahalenin Men'i ve Ecrimisil Davaları",
                aciklama: `Taşınmaza yapılan haksız
                tecavüzlerin önlenmesi ve geçmişe dönük
                kullanım bedelinin tahsili.`
            }
        ]
    },

    /* 6. MİRAS HUKUKU */

    "miras-hukuku.html": {
        baslik: "Miras Hukuku",
        aciklama: "Miras paylaşımı ve tereke uyuşmazlıkları.",
        hizmetler: [
            {
                baslik: "Vasiyetname Hazırlama ve İptali",
                aciklama: `Resmî veya el yazılı vasiyetnamelerin
                yasal şartlara uygun hazırlanması ve geçerlilik
                şartlarını taşımayan vasiyetnamelerin iptali.`
            },
            {
                baslik: "Tenkis Davaları",
                aciklama: `Miras bırakanın yasal sınırları
                aşan tasarrufları nedeniyle saklı payı
                ihlal edilen mirasçıların haklarını
                koruyan indirim davaları.`
            },
            {
                baslik: "Mirası Red ve Miras Paylaşımı",
                aciklama: `Borca batık terekenin
                reddedilmesi işlemleri ve mirasçılar
                arası terekenin adil paylaşımı süreçleri.`
            },
            {
                baslik: "İstihkak Davaları",
                aciklama: `Miras bırakanın malvarlığında
                bulunan ancak üçüncü kişilerce haksız
                el konulan malların terekeye iadesi davaları.`
            },
            {
                baslik: "Veraset İlamı (Mirasçılık Belgesi) İşlemleri",
                aciklama: `Mirasçılık sıfatını ve miras
                paylarını gösteren yasal belgenin noter
                veya mahkeme kanalıyla hızlıca alınması.`
            },
            {
                baslik: "Miras Sözleşmelerinin Hazırlanması",
                aciklama: `Miras bırakan sağ iken
                mirasçılarıyla veya üçüncü kişilerle
                yaptığı mirasa ilişkin hukuki
                sözleşmelerin düzenlenmesi.`
            },
            {
                baslik: "Miras Sebebiyle Ortaklığın Giderilmesi",
                aciklama: `Miras kalan mallar üzerinde
                mirasçılar arası anlaşmazlık yaşanması
                durumunda malların mahkeme yoluyla
                paylaştırılması.`
            }
        ]
    },

    /* 7. SİGORTA HUKUKU */

    "sigorta-hukuku.html": {
        baslik: "Sigorta Hukuku",
        aciklama: "Sigorta ve tazminat uyuşmazlıkları.",
        hizmetler: [
            {
                baslik: "Yaralamalı Trafik Kazaları Tazminat Davaları",
                aciklama: `Ölümlü veya yaralamalı trafik
                kazalarından doğan bedensel zararların
                sigorta şirketlerinden ve
                sorumlulardan tahsili.`
            },
            {
                baslik: "Destekten Yoksun Kalma Tazminat Davaları",
                aciklama: `Kazalarda hayatını kaybeden
                kişilerin yakınlarının mahrum kaldığı
                maddi desteğin kusurlu taraftan tazmini.`
            },
            {
                baslik: "Araç Değer Kaybı Tazminatı Davaları",
                aciklama: `Kaza sonucu onarım gören
                araçta meydana gelen piyasa değeri
                düşüşünün kusurlu aracın
                sigortasından tahsili.`
            },
            {
                baslik: "Hasar Tazminatı ve Rücu Davaları",
                aciklama: `Sigorta poliçesi kapsamında
                meydana gelen her türlü araç veya konut
                hasarının tazmini ve sigorta şirketlerinin
                rücu süreçleri.`
            }
        ]
    },

    /* 8. TIBBİ UYGULAMA HATASI */

    "tibbi-uygulama-hatasi-malpraktis.html": {
        baslik: "Tıbbi Uygulama Hatası",
        aciklama: "Tıbbi müdahalelerden doğan hukuki uyuşmazlıklar.",
        hizmetler: [
            {
                baslik: "Yanlış Tanı ve Tedavi Davaları",
                aciklama: `Hekim veya sağlık personelinin
                kusurlu teşhis, tedavi ve bakım hizmeti
                sonucu oluşan zararların maddi
                ve manevi tazmini.`
            },
            {
                baslik: "Aydınlatma Yükümlülüğü İhlalleri",
                aciklama: `Tıbbi müdahale öncesinde hastanın
                olası riskler hakkında yeterince
                bilgilendirilmemesi yani aydınlatılmış
                onam eksikliği kaynaklı uyuşmazlıklar.`
            },
            {
                baslik: "Hastane ve Hekim Sorumluluğu",
                aciklama: `Özel hastanelerin, kamu
                hastanelerinin veya hekimlerin organizasyon
                kusuru ve personel hatasından doğan
                hukuki sorumluluklarına ilişkin davalar.`
            },
            {
                baslik: "Estetik Operasyon Hatalarından Doğan Davalar",
                aciklama: `Beklenen sonucun gerçekleşmemesi
                veya hatalı işlemler nedeniyle tıbbi estetik
                ve plastik cerrahi operasyonlarından
                kaynaklanan tazminat talepleri.`
            }
        ]
    },

    /* 9. TÜKETİCİ HUKUKU */

    "tuketici-hukuku.html": {
        baslik: "Tüketici Hukuku",
        aciklama: "Tüketici hakları ve satış uyuşmazlıkları.",
        hizmetler: [
            {
                baslik: "Ayıplı Mal ve Hizmet Davaları",
                aciklama: `Satın alınan ürün veya hizmetin
                kusurlu çıkması durumunda bedel iadesi,
                ayıp oranında indirim, değişim veya
                onarım talepli süreçler.`
            },
            {
                baslik: "Tüketici Hakem Heyeti Başvuruları ve İtirazlar",
                aciklama: `Belirli parasal sınırlara
                kadar olan uyuşmazlıklarda heyete
                başvuru ve aleyhe çıkan heyet
                kararlarına tüketici mahkemelerinde
                itiraz edilmesi.`
            },
            {
                baslik: "Abonelik ve Mesafeli Satış Uyuşmazlıkları",
                aciklama: `İnternetten alışveriş,
                cayma hakkının kullanımı ve haksız
                abonelik iptallerinden doğan
                hukuki ihtilafların çözümü.`
            }
        ]
    }
};

/* ========================================
   SAYFAYI OTOMATİK OLUŞTUR
======================================== */

const dosyaAdi = decodeURIComponent(
    window.location.pathname.split("/").pop()
);

const secilenAlan = alanlar[dosyaAdi];

const alanBaslik = document.getElementById("alanBaslik");
const alanAciklama = document.getElementById("alanAciklama");
const alanEtiket = document.getElementById("alanEtiket");
const alanKartlari = document.getElementById("alanKartlari");

if (secilenAlan) {

    document.title =
        secilenAlan.baslik + " | ASYA Hukuk & Danışmanlık";

    document.getElementById("pageDescription")
        .setAttribute(
            "content",
            "ASYA Hukuk & Danışmanlık - " +
            secilenAlan.baslik + " hakkında bilgiler."
        );

    alanBaslik.textContent = secilenAlan.baslik;
    alanAciklama.textContent = secilenAlan.aciklama;
    alanEtiket.textContent =
        secilenAlan.baslik.toLocaleUpperCase("tr-TR");

    secilenAlan.hizmetler.forEach(function(hizmet, index) {

        const kart = document.createElement("article");
        kart.className = "service-page-card";

        const numara = document.createElement("span");
        numara.className = "service-card-number";
        numara.textContent = String(index + 1).padStart(2, "0");

        const baslik = document.createElement("h3");
        baslik.textContent = hizmet.baslik;

        const aciklama = document.createElement("p");
        aciklama.textContent = hizmet.aciklama
            .replace(/\s+/g, " ")
            .trim();

        kart.append(numara, baslik, aciklama);

        alanKartlari.appendChild(kart);
    });

} else {

    alanBaslik.textContent = "Sayfa Bulunamadı";

    alanAciklama.textContent =
        "Aradığınız çalışma alanı bulunamadı.";

    alanKartlari.textContent = "";
}
