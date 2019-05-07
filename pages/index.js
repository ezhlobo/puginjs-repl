import { useEffect } from 'react'
import Router from 'next/router'

function useDidMount(callback) {
  useEffect(callback, [true])
}

function HomePage() {
  useDidMount(() => {
    Router.push('/repl', `/repl${window.location.hash}`)
  })

  return null
}

export default HomePage
