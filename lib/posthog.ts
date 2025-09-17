import posthog from 'posthog-js'

export function initPostHog() {
  if (typeof window !== 'undefined') {
    posthog.init('phx_ZlUW7Y9g6tDiZD4nle35A5VSb8yKsrNCpEW5pCeipomXK8j', {
      api_host: 'https://us.i.posthog.com',
      person_profiles: 'identified_only',
      loaded: (posthog) => {
        if (process.env.NODE_ENV === 'development') console.log('PostHog loaded')
      },
    })
  }
}

export { posthog }