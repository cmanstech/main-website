export function useReveal(options = {}) {
    const defaultOpts = { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    const opts = Object.assign( ...defaultOpts, ...options)

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
            if (e.isIntersecting) e.target.classList.add('reveal-in')
        })
    }, opts)

    const observe = (el) => el && observer.observe(el)
    const unobserve = (el) => el && observer.observe(el)

    return { observe, unobserve }
}