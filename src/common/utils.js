export const createClass = (...args) => args.join(' ')

export const formatDate = date => date.toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
})
