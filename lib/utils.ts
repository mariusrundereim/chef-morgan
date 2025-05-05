export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("no-NO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}
