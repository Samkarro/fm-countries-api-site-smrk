"use client";

import { usePathname } from "next/navigation";
import "../(styles)/country-detail.styles.css";

export default function CountryDetail({ country }: { country: string }) {
  const pathname = usePathname();

  return <p className="test">{country}</p>;
}
