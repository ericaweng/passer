export function formatDate(date: any, local: any) {
  const d = new Date(date)
  d.setDate(d.getDate() + 1);
  const options: any = { year: 'numeric', month: 'short', day: 'numeric' }
  const res = d.toLocaleDateString(local, options)
  return res
}
