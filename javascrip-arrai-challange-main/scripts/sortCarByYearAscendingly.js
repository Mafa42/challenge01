function sortCarByYearAscendingly(cars) {
  // Clone array untuk menghindari side-effect
  const result = [...cars];

  // Implementasi Bubble Sort untuk pengurutan ascending berdasarkan tahun
  const n = result.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (result[j].year > result[j + 1].year) {
        // Tukar elemen jika diperlukan
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
      }
    }
  }
  return result;
}


