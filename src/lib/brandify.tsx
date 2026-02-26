import type { ReactNode } from "react";

/**
 * Replaces "Hydrafit" / "HYDRAFIT" in a string with branded JSX
 * where "fit" / "FIT" is colored in tiffany.
 */
export function brandify(text: string): ReactNode {
  const parts = text.split(/(HYDRAFIT|Hydrafit|hydrafit)/g);
  if (parts.length === 1) return text;

  return parts.map((part, i) => {
    if (/^hydrafit$/i.test(part)) {
      const isUpper = part === "HYDRAFIT";
      return (
        <span key={i}>
          {isUpper ? "HYDRA" : "Hydra"}
          <span className="text-tiffany">{isUpper ? "FIT" : "fit"}</span>
        </span>
      );
    }
    return part;
  });
}
