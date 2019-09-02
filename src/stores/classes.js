import { get, writable } from 'svelte/store'
import { firestore } from '../common/firebase'

function classesStore() {
    const allClasses = writable([])
    const classes = writable(undefined)

    let currentNiveau
    let loaded = false
    let loading = false

    const load = niveau => {
        if (niveau === undefined) {
            classes.set(undefined)
            return
        }
        const selectedClasses = get(allClasses).filter(classe => classe.id_niveau === niveau.id)
        classes.set(selectedClasses)
        currentNiveau = niveau.id
    }

    const fetch = () => {
        if (loading || loaded) return
        loading = true
        firestore.collection('classes')
            .orderBy('path', 'asc')
            .get()
            .then(
                snapshot => {
                    const results = [];
                    snapshot.forEach(doc => results.push({
                        id: doc.id,
                        ...doc.data()
                    }));

                    loaded = true
                    loading = false
                    allClasses.set(results)
                    if (currentNiveau) {
                        const selectedClasses = get(allClasses).filter(classe => classe.id_niveau === currentNiveau)
                        classes.set(selectedClasses)
                    }
                },
                () => {
                    loading = false
                    allClasses.set([])
                }
            )
    }

    return {
        ...classes,
        fetch,
        load,
    }
}

export const classes = classesStore()
