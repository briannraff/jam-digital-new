function updateClock() {
    const now = new Date();

    let jam = now.getHours().toString().padStart(2, '0');
    let menit = now.getMinutes().toString().padStart(2, '0');
    let detik = now.getSeconds().toString().padStart(2, '0');

    const hariList = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
    const bulanList = ["Januari","Februari","Maret","April","Mei","Juni",
                       "Juli","Agustus","September","Oktober","November","Desember"];

    let hari = hariList[now.getDay()];
    let tanggal = now.getDate();
    let bulan = bulanList[now.getMonth()];
    let tahun = now.getFullYear();

    document.getElementById("time").innerText = `${jam}:${menit}:${detik}`;
    document.getElementById("date").innerText = `${hari}, ${tanggal} ${bulan} ${tahun}`;
}

setInterval(updateClock, 1000);
updateClock();
