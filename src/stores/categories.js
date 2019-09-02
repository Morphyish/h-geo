import { writable } from 'svelte/store'
import { firestore } from '../common/firebase'

function categoriesStore() {
    const categories = writable(undefined)

    let loaded = false
    let loading = false

    const fetch = () => {
        if (loading || loaded) return
        loading = true
        firestore.collection('categories')
            .orderBy('sort', 'asc')
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
                    categories.set(results)
                },
                () => {
                    loading = false
                    categories.set([])
                }
            )
    }

    return {
        ...categories,
        fetch,
    }
}

export const categories = categoriesStore()
