export type PlaceholderId = "main1" | "main2" | "demo1" | "demo2";

export function isPlaceholderId(id: string): id is PlaceholderId {
  return id === "main1" || id === "main2" || id === "demo1" || id === "demo2";
}
