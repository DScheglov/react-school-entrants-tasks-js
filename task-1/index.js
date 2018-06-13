const emptyArr = () => [];

function fillSpiralMatrix(n) {
  const result = Array.from({ length: n }).map(emptyArr);
  let current = 1;
  let layer = 0;
  
  while (n >= 1) {
    n = n - 1;
    result[layer][layer] = current;
    const n2 = current + n;
    const n3 = current + n * 3;
    const n4 = current + n * 4;
    const m = layer + n;
    for (let i = 1; i <= n; i++) {
      result[layer][layer + i] = current + i; // top side
      result[layer + i][m] = n2 + i; // right side
      result[m][layer + i] = n3 - i; // bottom side
      result[layer + i][layer] = n4 - i; // left side
    }
    n = n - 1;
    layer = layer + 1;
    current = n4;
  }

  return result;
}

export default fillSpiralMatrix;
