
// este seria como el titulo
describe('Pruebas en <DemoComponent />', () => {
    
    test('Esta prueba no debe de fallar', () => { // esta es la descripcion d la prueb
    
        // son 3 pasos para la pruebas 
        // 1. inicialización
        const message1 = 'Hola Mundo';
    
        // 2. estímulo
        // trim sirve para quitar los espacios en blanco al inicio y al final
        const message2 = message1.trim();
        
        // 3. Observar el comportamiento... esperado
        // aca decimos que el message1 es igual al message2 es una condicion

        expect( message1 ).toBe( message2 );

    });
    
})