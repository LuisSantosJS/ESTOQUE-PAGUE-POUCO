import React, { useRef } from 'react';
import { Table } from 'react-bootstrap';
import FlatList from 'flatlist-react';
import { useDataTable, useInputFilter } from '../../Context/ContextMain';
import './styles.css'

interface PRODUTO {
    code: string,
    description: string,
    days: number,
    pricing: string,
    category: string
}


const TableComponent: React.FC = () => {
    const { dataTable } = useDataTable();
    const { inputFilter } = useInputFilter();
    const refLista = useRef<any>().current;
    const RenderPerson = (item: PRODUTO, index: number) => {

        return (
            <tr key={index}>
                <th>{item.code}</th>
                <th>{item.description}</th>
                <th>{item.days}</th>
                <th>{item.pricing}</th>
                <th>{item.category}</th>
            </tr>
        );
    }

    return (
        <>

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Descrição</th>
                        <th>Dias de estoque</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                    </tr>
                </thead>
                <tbody>
                    <FlatList
                        list={inputFilter.length === 0 ? dataTable : dataTable.filter(res => Number(res.days) <= Number(inputFilter))}
                        ref={refLista}
                        renderItem={(item: PRODUTO, index: number) => RenderPerson(item, index)}
                        renderWhenEmpty={() => <div className='listFinish'>Lista de produtos vazia!</div>}
                    />
                </tbody>
            </Table>        
        </>
    )
}
export default TableComponent;