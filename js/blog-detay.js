
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

    // Tüm içerikleri aynı paragraf biçiminde göster
    const paragraflar = secilenYazi.content
        .trim()
        .split(/\n\s*\n/);

    paragraflar.forEach(function(paragraf) {

        const metin = paragraf.trim();

        if (!metin) return;

        const p = document.createElement("p");
        p.textContent = metin;

        icerikAlani.appendChild(p);
    });

} else {

    baslikAlani.textContent = "Yazı Bulunamadı";

    const mesaj = document.createElement("p");
    mesaj.textContent = "Aradığınız blog yazısı bulunamadı.";

    icerikAlani.appendChild(mesaj);
}
