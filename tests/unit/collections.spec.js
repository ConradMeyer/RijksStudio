import { render, screen, fireEvent, waitFor } from '@testing-library/vue'
import '@testing-library/jest-dom'
import Collections from '../../src/views/Collections.vue'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

describe('Cuando se renderiza la página de Collections', () => {
    // Hay que mockear los datos del state
    render(Collections, {
        store: new Vuex.Store({
            state: {
                artistas: []
            },
            mutations: {
                setArtist(state, payload) {
                    state.artistas = payload
                }
            },
            actions: {
                getArtist({ commit }) {
                    let data = [
                        {
                            name: "Johannes Vermeer",
                            img: "https://lh3.googleusercontent.com/XblBODYvgEPrgAwRO7aqhc6jKkXsaYsdgC673pXNwWMEQG1yx81olmf1jk1ZYl9bHUnQzZw_xIZ8nf53NudshoLSs-s=s0",
                            resume: "Today Johannes Vermeer (1632-1675) is one of the most celebrated Dutch 17th century masters. Yet for centuries little importance was attached to his name. Works now known as Vermeers were attributed to other artists. It was only in the 1870s that he was rediscovered and 35 paintings identified as his. The son of a silk worker who bought and sold art, Vermeer lived and worked in Delft all his life. He may have served his apprenticeship under fellow townsman Carel Fabritius. In 1653, he joined the local artists guild, which he led at various times. Vermeer’s early paintings of historical scenes reveal the influence of the Utrecht Caravaggists. His later paintings are meticulous compositions of interiors featuring one or two figures, usually women. These are intimate genre paintings in which the subject is engaged in some everyday activity, usually in the light of a nearby window. Vermeer could render the way light plays on objects like few others. The Rijksmuseum has three domestic interiors by Vermeer and one outdoor scene: his world-famous "
                        }
                    ]
                    commit('setArtist', data)
                }
            }
        })
    })
    it('La vista muestra los artistas', async () => {

        waitFor(() =>
            expect(screen.getByText(/johannes/i))
        )

    })

    it('Redirige a la página del artista al hacer click en su nombre', async () => {

        waitFor(() =>
            fireEvent.click(screen.getByRole('button'))
        )

        waitFor(() =>
            expect(screen.getByText(/paintings/i))
        )
    })
})