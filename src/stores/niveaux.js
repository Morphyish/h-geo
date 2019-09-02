import { get, writable } from 'svelte/store'
import { firestore } from '../common/firebase'

function niveauxStore() {
    const niveaux = writable([])
    const currentNiveau = writable(undefined)

    let totalLength = 0
    let currentIndex = 0
    let loaded = false
    let loading = false

    const next = () => {
        currentIndex++
        if (currentIndex >= totalLength) {
            currentIndex = 0
        }
        currentNiveau.set(get(niveaux)[currentIndex])
    }

    const fetch = () => {
        if (loading || loaded) return
        loading = true
        firestore.collection('niveaux')
            .orderBy('label', 'asc')
            .get()
            .then(
                snapshot => {
                    const results = []
                    snapshot.forEach(doc => results.push({
                        id: doc.id,
                        ...doc.data(),
                    }))

                    loaded = true
                    loading = false
                    totalLength = results.length
                    niveaux.set(results)
                    currentNiveau.set(results[0])
                },
                () => {
                    loading = false
                    niveaux.set([])
                    currentNiveau.set(undefined)
                }
            )
    }

    return {
        ...currentNiveau,
        fetch,
        next,
    }
}

export const niveaux = niveauxStore()
