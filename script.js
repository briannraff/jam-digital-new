function updateJam() {
    const now = new Date();

    let jam = now.getHours().toString().padStart(2, '0');
    let menit = now.getMinutes().toString().padStart(2, '0');
    let detik = now.getSeconds().toString().padStart(2, '0');

    document.getElementById("jam").innerHTML =
        `${jam}:${menit}:${detik}`;
}

setInterval(updateJam, 1000);
updateJam();
