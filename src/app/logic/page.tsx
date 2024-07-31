export default async function Logic() {
  console.log(
    gb_sort(
      Array(20)
        .fill(100)
        .map((it) => Math.random() * it)
    )
  );
  return 123;
}

const gb_sort = (nums: number[]): number[] => {
  if (nums.length < 2) {
    return nums;
  }
  const m = Math.floor(nums.length / 2);
  const l = gb_sort(nums.slice(0, m));
  const r = gb_sort(nums.slice(m));
  const s: any[] = [];
  while (s.length < nums.length) {
    const a = l.pop() ?? "e";
    const b = r.pop() ?? "e";
    if (a === "e") {
      s.push(b);
    } else if (b === "e") {
      s.push(a);
    } else if (+a < +b) {
      s.push(a);
      r.push(b);
    } else {
      s.push(b);
      l.push(a);
    }
  }
  return s;
};
