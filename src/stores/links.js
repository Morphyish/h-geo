import { get, writable } from 'svelte/store'
import { firestore } from '../common/firebase'

function linksStore() {
    const allLinks = writable([])
    const links = writable(undefined)

    const loadedNiveaux = []
    let isLoaded = composite_id => loadedNiveaux.indexOf(composite_id) !== -1
    let loading = false

    const load = (niveau, category) => {
        if (niveau && category && !isLoaded(niveau.id + category.id)) {
            fetch(niveau.id, category.id)
            links.set(undefined)
        } else {
            const selectedLinks = get(allLinks).filter(link => link.id_niveau === (niveau || {}).id && link.id_category === (category || {}).id)
            links.set(selectedLinks)
        }
    }

    const fetch = (id_niveau, id_category) => {
        if (loading || isLoaded(id_niveau + id_category)) return
        loading = true
        firestore.collection('links')
            .where('id_niveau', '==', id_niveau)
            .where('id_category', '==', id_category)
            .where('date', '<=', new Date())
            .orderBy('date', 'desc')
            .get()
            .then(
                snapshot => {
                    const results = []
                    snapshot.forEach(doc => results.push({
                        id: doc.id,
                        ...doc.data(),
                    }))

                    loadedNiveaux.push(id_niveau + id_category)
                    loading = false
                    allLinks.update(links => [
                        ...links,
                        ...results,
                    ])
                    links.set(results)
                },
                () => {
                    loading = false
                    allLinks.update(links => [
                        ...links,
                    ])
                    links.set(undefined)
                }
            )
    }

    return {
        ...links,
        load,
    }
}

export const links = linksStore()
