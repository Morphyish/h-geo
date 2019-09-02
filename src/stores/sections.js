import { writable } from 'svelte/store'
import { firestore } from '../common/firebase'

function sectionsStore() {
    const sections = writable(undefined)

    let loaded = false
    let loading = false

    const fetch = () => {
        if (loading || loaded) return
        loading = true
        firestore.collection('sections')
            .orderBy('sort', 'asc')
            .get()
            .then(
                snapshot => {
                    const results = {}
                    snapshot.forEach(doc => {
                        const section = doc.data()
                        if (!results.hasOwnProperty(section.id_category)) {
                            results[section.id_category] = []
                        }
                        results[section.id_category].push({
                            id: doc.id,
                            ...section,
                        })
                    })

                    loaded = true
                    loading = false
                    sections.set(results)
                },
                () => {
                    loading = false
                    sections.set({})
                }
            )
    }

    return {
        ...sections,
        fetch,
    }
}

export const sections = sectionsStore()
