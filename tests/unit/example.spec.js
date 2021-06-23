import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Test from '../../src/components/Test.vue'

// Aquí hay algunas pruebas de Jasmine 2.0, aunque puede
// usar cualquier librería que prefiera
describe('MyComponent', () => {
  // Inspeccionar las opciones de componentes en bruto
  it('tiene un hook creado', () => {
    expect(typeof Test.created).toBe('function')
  })

  // Evaluar los resultados de las funciones env
  // las opciones de componentes en bruto
  it('establece los datos correctos por defecto', () => {
    expect(typeof Test.data).toBe('function')
    const defaultData = Test.data()
    expect(defaultData.message).toBe('Hola!')
  })

  // Inspeccionar la instancia del componente en el montaje
  it('establece correctamente el mensaje cuando se crea', () => {
    const vm = new Vue(Test).$mount()
    expect(vm.message).toBe('Chau!')
  })

  // Montar una instancia e inspeccionar la salida del render
  it('emite el mensaje correcto', () => {
    const Constructor = Vue.extend(Test)
    const vm = new Constructor().$mount()
    expect(vm.$el.textContent).toBe('Chau!')
  })
})