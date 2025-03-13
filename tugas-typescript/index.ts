console.log("Script berhasil dijalankan!");
// 1. Menghitung luas persegi panjang
function areaRectangle(length: number, width: number): number {
    return length * width;
}
console.log("Luas Persegi Panjang:", areaRectangle(5, 3));

// 2. Menghitung diameter, keliling, dan luas lingkaran
function circleCalculations(radius: number) {
    const diameter = 2 * radius;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * radius * radius;
    console.log(`Diameter: ${diameter}, Keliling: ${circumference.toFixed(4)}, Luas: ${area.toFixed(3)}`);
}
circleCalculations(5);

// 3. Menghitung sudut ketiga segitiga jika dua sudut diketahui
function thirdAngle(a: number, b: number): number {
    return 180 - (a + b);
}
console.log("Sudut ketiga segitiga:", thirdAngle(80, 65));

// 4. Menghitung selisih hari antara dua tanggal
function dateDifference(date1: string, date2: string): number {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const diff = Math.abs(d2.getTime() - d1.getTime());
    return diff / (1000 * 60 * 60 * 24);
}
console.log("Selisih hari:", dateDifference("2024-03-19", "2024-03-21"));

// 5. Mengambil inisial nama dalam huruf besar
function getInitials(name: string): string {
    return name.split(" ").map(n => n[0].toUpperCase()).join("");
}
console.log("Inisial Nama:", getInitials("John Doe"));

