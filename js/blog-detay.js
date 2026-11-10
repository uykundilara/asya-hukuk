
/* ASYA HUKUK - BLOG DETAY SAYFASI */

const params = new URLSearchParams(window.location.search);
const blogId = params.get("id");

const baslikAlani = document.getElementById("blogDetailTitle");
const icerikAlani = document.getElementById("blogDetailContent");

const secilenYazi =
    typeof bloklar !== "undefined"
        ? bloklar.find(yazi => yazi.id === blogId)
        : null;

if (secilenYazi) {

    document.title =
        secilenYazi.title + " | ASYA Hukuk";

    baslikAlani.textContent = secilenYazi.title;

    // Yazıyı boş satırlardan paragraflara ayır
    const bolumler = secilenYazi.content
        .trim()
        .split(/\n\s*\n/);

    bolumler.forEach(function(bolum, index) {

        const metin = bolum.trim();

        if (!metin) return;

        // İlk bölüm giriş paragrafıdır.
        // Kısa ve noktayla bitmeyen sonraki
        // bölümler alt başlık kabul edilir.
        const altBaslik =
            index > 0 &&
            metin.length < 120 &&
            !/[.!?…]$/.test(metin);

        const element = document.createElement(
            altBaslik ? "h2" : "p"
        );

        element.textContent = metin;

        icerikAlani.appendChild(element);
    });

} else {

    baslikAlani.textContent = "Yazı Bulunamadı";

    const mesaj = document.createElement("p");
    mesaj.textContent =
        "Aradığınız blog yazısı bulunamadı.";

    icerikAlani.appendChild(mesaj);
}
