module.exports = clientes = [
    {
        id: 1, nome: 'Eduardo', email: 'emotton@gmail.com',
        pedidos: [
            { 
                data: '01/01/2022', produto: 'TV 50 polegadas', quantidade: 1, valor_unitario: 3450.55
            },
            { 
                data: '02/01/2022', produto: 'Celular', quantidade: 2, valor_unitario: 1550.22
            },
            { 
                data: '03/01/2022', produto: 'Monitor', quantidade: 3, valor_unitario: 1490.33
            }
        ]
    }, 
    {
        id: 2, nome: 'Pedro', email: 'pedro@gmail.com',
        pedidos: [
            { 
                data: '01/01/2022', produto: 'Mouse', quantidade: 5, valor_unitario: 120.5
            },
            { 
                data: '02/01/2022', produto: 'Ventilador', quantidade: 2, valor_unitario: 105.12            
            },
            { 
                data: '03/01/2022', produto: 'Monitor', quantidade: 2, valor_unitario: 1490.14
            }
        ]
    }, 
    {
        id: 3, nome: 'Godofredo', email: 'godo@gmail.com',
        pedidos: [
            { 
                data: '01/01/2022', produto: 'SSD 250GB', quantidade: 1, valor_unitario: 495.25
            },
            { 
                data: '02/01/2022', produto: 'No-break', quantidade: 2, valor_unitario: 1580.45
            },
            { 
                data: '03/01/2022', produto: 'Pendrive 4GB', quantidade: 30, valor_unitario: 54.24
            }
        ]
    }
];