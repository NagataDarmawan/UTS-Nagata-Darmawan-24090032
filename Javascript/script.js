const loginBtn = document.getElementById("loginBtn");

function doLogin() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Email dan Password tidak boleh kosong!");
        return;
    }
        if (email === "nagata.2140@gmail.com" && password === "24090032") {
        alert("Login berhasil!");
        window.location.href = "dashboard.html";
    } else {
        alert("Email atau Password salah!");
    }
}

if (loginBtn) {
    loginBtn.addEventListener("click", doLogin);
}

document.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        doLogin();
    }
});


const summary = {
    totalProducts: 120,
    totalSales: 85,
    totalRevenue: 12500000
};

// ----HALAMAN DASHBOARD ----
if (document.getElementById("totalProducts")) {
    document.getElementById("totalProducts").textContent = summary.totalProducts;
    document.getElementById("totalSales").textContent = summary.totalSales;
    document.getElementById("totalRevenue").textContent =
        "Rp " + summary.totalRevenue.toLocaleString("id-ID");
}

// ---- DATA PRODUK ----
const products = [
    { id: 1, name: "Kopi Gayo", price: 25000, stock: 50 },
    { id: 2, name: "Teh Hitam", price: 18000, stock: 30 },
    { id: 3, name: "Coklat Aceh", price: 30000, stock: 20 }
];

const tableBody = document.getElementById("productTable");

function loadProducts() {
    tableBody.innerHTML = ""; 

    products.forEach((p, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${p.name}</td>
            <td>${p.price.toLocaleString("id-ID")}</td>
            <td>${p.stock}</td>
            <td>
                <img src="img/pensil.svg" class="action-icon" onclick="editProduct('${p.name}')">
                <img src="img/tempat sampah.svg" class="action-icon" onclick="deleteProduct(${index})">
            </td>
        `;

        tableBody.appendChild(row);
    });
}

if (tableBody) {
    loadProducts();
}

function editProduct(name) {
    alert("Edit produk: " + name);
}

function deleteProduct(index) {
    if (confirm("Yakin hapus produk ini?")) {
        products.splice(index, 1);
        loadProducts();
    }
}
