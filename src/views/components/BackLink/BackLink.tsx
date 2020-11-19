import React from "react";
import {useRouter} from "next/router";
import css from "./BackLink.module.scss";

interface BackLinkProps {
}

export const BackLink : React.FC<BackLinkProps> = () => {
  const router = useRouter();
  
  return <h2 className={css.BackLink} onClick={() => router.push("/artworks")}>Back</h2>;
}
