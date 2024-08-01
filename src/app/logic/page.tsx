export default async function Logic() {
  let time = Date.now();
  const as = Array(100)
    .fill(1000)
    .map((it) => parseInt(`${Math.random() * it}`));
  // console.log(gb_sort(as));
  const res: any = await new Promise((resolve) => {
    const r = huisu(as);
    time = Date.now() - time;
    resolve(r);
  });
  return (
    <main className=" flex-1">
      <div>{time}ms</div>
      <div className=" flex flex-col">
        {[].concat(res).map((it, idx) => (
          <span key={idx}>{it}</span>
        ))}
      </div>
    </main>
  );
}

// 归并
const gb_sort = (nums: number[]): number[] => {
  if (nums.length < 2) {
    return nums;
  }
  const m = Math.floor(nums.length / 2);
  const l = gb_sort(nums.slice(0, m));
  const r = gb_sort(nums.slice(m));
  // console.log(l, r);
  const s: number[] = [];
  while (l.concat(r).length > 0) {
    if (l.length === 0) {
      s.push(r.pop()!);
    } else if (r.length === 0) {
      s.push(l.pop()!);
    } else {
      const a = l[l.length - 1];
      const b = r[r.length - 1];
      if (a < b) {
        s.push(l.pop()!);
      } else {
        s.push(r.pop()!);
      }
    }
  }
  return s.reverse();
};
// 回溯 适用于样本数量小的场景
const handle = (ary1: number[], ary2: number[]) => {
  const res = ary1.reduce((a, b) => a + b, 0) - ary2.reduce((a, b) => a + b, 0);
  return res < 0 ? -1 * res : res;
};
const huisu = (params: number[]) => {
  let res: any = null;
  const part: number[] = [];

  const fn = (nums: number[]) => {
    // 结束条件
    if (nums.length * 2 === params.length) {
      const s = handle(part, nums);
      console.log(s);
      if (!res || res.s > s) {
        res = {
          a: part.join("_"),
          b: nums.join("_"),
          s,
        };
      }
      return;
    }
    nums.forEach((it, idx) => {
      part.push(it);
      fn(nums.slice(0, idx).concat(nums.slice(idx + 1)));
      part.pop();
    });
  };
  fn(params);

  if (!res) {
    return false;
  }
  const { a, b, s } = res;
  return [a, b, s];
};
