import React from 'react'
import {useRouter} from "next/router";

export default function Articles() {
  const router = useRouter();
  const {post_id} = router.query
  
  return (
      <>
        <main>
          artwork {post_id}
        </main>
      </>
  )
}
