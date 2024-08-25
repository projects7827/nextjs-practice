'use client'

// import { useSearchParams } from 'next/navigation'

// export default function SearchBar() {
//   const searchParams = useSearchParams()

//   const search = searchParams.get('search')
//   console.log(search)

//   return <>Search: {search}</>
// }
import React, { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'

export default function SearchBar() {
  let router = useRouter();

  const searchParams = useSearchParams()
  const [state, update] = useState({})

  const search = searchParams.get('search')
  console.log(search)
  useEffect(() => {
    get_data();
  }, []) // eslint-disable-next-line react-hooks/exhaustive-deps

  async function get_data() {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/' + search)
    if (response.status === 404) {
      router.push("/not-found")
    }
    else {
      let data = await response.json();
      update(data)
    }
  }

  return <>Search: {JSON.stringify(state)}</>
}