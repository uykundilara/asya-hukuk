
/* ASYA HUKUK - TEK TİP BLOG YAZILARI */

const params = new URLSearchParams(window.location.search);
const blogId = params.get("id");

const baslikAlani = document.getElementById("blogDetailTitle");
const icerikAlani = document.getElementById("blogDetailContent");

const secilenYazi =
    typeof bloklar !== "undefined"
        ? bloklar.find(yazi => yazi.id === blogId)
        : null;

// Önce eski içerikleri temizle
icerikAlani.replaceChildren();

if (secilenYazi) {

    document.title =
        secilenYazi.title + " | ASYA Hukuk";

    baslikAlani.textContent = secilenYazi.title;

    // Yazıyı paragraflara ayır
    const paragraflar = secilenYazi.content
        .trim()
        .split(/\n\s*\n/);

    paragraflar.forEach(function(paragraf) {

        const metin = paragraf.trim();

        if (metin === "") return;

        // Her metin normal paragraf olacak
        const p = document.createElement("p");

        p.textContent = metin;
        p.className = "blog-normal-text";

        icerikAlani.appendChild(p);
    });

} else {

    baslikAlani.textContent = "Yazı Bulunamadı";

    const p = document.createElement("p");
    p.className = "blog-normal-text";
    p.textContent = "Aradığınız blog yazısı bulunamadı.";

    icerikAlani.appendChild(p);
}
