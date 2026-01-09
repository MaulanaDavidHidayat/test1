let cart = [];

function addToCart(nama, harga) {
    cart.push({ nama, harga });
    document.getElementById("cartCount").innerText = cart.length;
}

function toggleCart() {
    const cartBox = document.getElementById("cartBox");
    cartBox.style.display = cartBox.style.display === "block" ? "none" : "block";
    renderCart();
}

function renderCart() {
    const list = document.getElementById("cartItems");
    list.innerHTML = "";
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.nama} - Rp ${item.harga.toLocaleString()}`;
        list.appendChild(li);
    });
}

function checkout() {
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const nohp = document.getElementById("nohp").value;
    const alamat = document.getElementById("alamat").value;
    const pembayaran = document.getElementById("pembayaran").value;

    if (!nama || !email || !nohp || !alamat || !pembayaran || cart.length === 0) {
        alert("Lengkapi data dan pilih produk!");
        return;
    }

    let pesan = `PESANAN BARU%0A
Nama: ${nama}%0A
Email: ${email}%0A
No HP: ${nohp}%0A
Alamat: ${alamat}%0A
Pembayaran: ${pembayaran}%0A%0A
Produk:%0A`;

    cart.forEach(item => {
        pesan += `- ${item.nama} (Rp ${item.harga})%0A`;
    });

    const nomorPenjual = "6285762463260"; // GANTI NOMOR WA KAMU
    window.open(`https://wa.me/${6285762463260}?text=${pesan}`, "_blank");
}
