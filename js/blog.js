
/* ASYA HUKUK - BLOG SİSTEMİ */

const blogGrid = document.getElementById("blogPageGrid");
const blogSearch = document.getElementById("blogSearch");
const blogCategory = document.getElementById("blogCategory");
const blogEmpty = document.getElementById("blogEmpty");

const kategoriler = {
    "ev-sahibinin": "Kira Hukuku",
    "istifa-eden": "İş Hukuku",
    "anlasmali-ve": "Aile Hukuku",
    "trafik-kazasi": "Sigorta Hukuku",
    "internetten": "Tüketici Hukuku",
    "hakkimda-icra": "İcra ve İflas Hukuku",
    "mirasin": "Miras Hukuku",
    "miras-kalan": "Miras Hukuku",
    "yanlis-tedavi": "Sağlık Hukuku"
};

function kategoriBul(blok) {
    if (blok.category) return blok.category;

    const eslesen = Object.keys(kategoriler).find(
        key => blok.id.startsWith(key)
    );

    return eslesen ? kategoriler[eslesen] : "Hukuki Bilgiler";
}

function ozetOlustur(icerik) {
    const ilkParagraf = icerik.trim().split(/\n\s*\n/)[0];

    return ilkParagraf.length > 145
        ? ilkParagraf.slice(0, 145).trimEnd() + "..."
        : ilkParagraf;
}

function kartOlustur(blok) {

    const kart = document.createElement("article");
    kart.className = "blog-page-card";

    const kategori = document.createElement("span");
    kategori.className = "blog-category";
    kategori.textContent = kategoriBul(blok);

    const baslik = document.createElement("h2");
    baslik.textContent = blok.title;

    const ozet = document.createElement("p");
    ozet.textContent = ozetOlustur(blok.content);

    const link = document.createElement("a");
    link.href = "blog-detay.html?id=" +
                encodeURIComponent(blok.id);
    link.textContent = "Devamını Oku →";

    kart.append(kategori, baslik, ozet, link);

    return kart;
}

function bloglariGoster() {

    const arama = blogSearch.value
        .toLocaleLowerCase("tr-TR")
        .trim();

    const secilenKategori = blogCategory.value;

    const sonuc = bloklar.filter(blok => {

        const aramaMetni =
            (blok.title + " " + blok.content)
            .toLocaleLowerCase("tr-TR");

        const aramaUygun = aramaMetni.includes(arama);

        const kategoriUygun =
            secilenKategori === "all" ||
            kategoriBul(blok) === secilenKategori;

        return aramaUygun && kategoriUygun;
    });

    blogGrid.replaceChildren(
        ...sonuc.map(kartOlustur)
    );

    blogEmpty.hidden = sonuc.length !== 0;
}

if (typeof bloklar !== "undefined") {

    const kategoriListesi = [
        ...new Set(bloklar.map(kategoriBul))
    ].sort((a, b) => a.localeCompare(b, "tr"));

    kategoriListesi.forEach(kategori => {

        const option = document.createElement("option");
        option.value = kategori;
        option.textContent = kategori;
        blogCategory.appendChild(option);

    });

    blogSearch.addEventListener("input", bloglariGoster);
    blogCategory.addEventListener("change", bloglariGoster);

    bloglariGoster();
}
