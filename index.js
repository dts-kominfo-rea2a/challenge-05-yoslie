const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = (data, sortByFunction) => {

  const sortedData = sortByFunction(data)
  const numberedData = []

  for (let i = 0; i < sortedData.length; i++) {
    numberedData.push(`${(i+1)}. ${sortedData[i]}`)
  }

  return numberedData
}

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (data) => {
  const sortedDataAsc = data.sort()
  return sortedDataAsc
}

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (data) => {
  const sortedDataDesc = data.sort().reverse()
  return sortedDataDesc
}

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
