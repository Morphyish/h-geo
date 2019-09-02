import { get, writable } from 'svelte/store'
import { firestore } from '../common/firebase'

function entriesStore() {
    const allEntries = writable([])
    const entries = writable(undefined)

    const loadedClasses = []
    let isLoaded = id_classe => loadedClasses.indexOf(id_classe) !== -1
    let loading = false

    const load = classe => {
        if (classe && !isLoaded(classe.id)) {
            fetch(classe.id)
            entries.set(undefined)
        } else {
            const selectedEntries = get(allEntries).filter(entry => entry.id_classe === (classe || {}).id)
            entries.set(selectedEntries)
        }
    }

    const fetch = id_classe => {
        if (loading || isLoaded(id_classe)) return
        loading = true
        firestore.collection('entries')
            .where('id_classe', '==', id_classe)
            .orderBy('date', 'desc')
            .get()
            .then(
                snapshot => {
                    const results = []
                    snapshot.forEach(doc => results.push({
                        id: doc.id,
                        ...doc.data(),
                    }))

                    loadedClasses.push(id_classe)
                    loading = false
                    allEntries.update(entries => [
                        ...entries,
                        ...results,
                    ])
                    entries.set(results)
                },
                () => {
                    loading = false
                    allEntries.update(entries => [
                        ...entries,
                    ])
                }
            )
    }

    return {
        ...entries,
        load,
    }
}

export const entries = entriesStore()
