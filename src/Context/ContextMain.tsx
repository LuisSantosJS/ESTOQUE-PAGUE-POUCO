import React, { createContext, useState, useContext, useEffect } from 'react';

interface PRODUTO {
    code: string,
    description: string,
    days: number,
    pricing: string,
    category: string
}

type ContextType = {
    selected: string;
    setSelected: (value: string) => void;
    dataTable: PRODUTO[];
    setDataTable: (value: PRODUTO[]) => void;
    inputFilter: string;
    setInputFilter: (value: string) => void;

};


const ContextMain = createContext<ContextType>({
    selected: '',
    setSelected: (value: string) => { },
    dataTable: [],
    setDataTable: (value: PRODUTO[]) => { },
    inputFilter: '',
    setInputFilter: (value: string) => { },

});


const Provider: React.FC = ({ children }) => {

    const [selected, setSelected] = useState<string>('LOJA');
    const [dataTable, setDataTable] = useState<PRODUTO[]>([]);
    const [inputFilter, setInputFilter] = useState<string>('')

    useEffect(() => {
        setDataTable([
            {
                code: '#24482',
                description: 'descrição do produto 1',
                days: 33,
                pricing: 'RS34,2',
                category: 'Limpeza'
            },
            {
                code: '#24512',
                description: 'descrição do produto 2',
                days: 2,
                pricing: 'RS3,2',
                category: 'Alimentos'
            },
            {
                code: '#24222',
                description: 'descrição do produto 3',
                days: 50,
                pricing: 'RS34,2',
                category: 'Limpe'
            },
            {
                code: '#454332',
                description: 'descrição do produto 4',
                days: 13,
                pricing: 'RS12,25',
                category: 'Higiene'
            },
            {
                code: '#46762',
                description: 'descrição do produto 5',
                days: 3,
                pricing: 'RS34,2',
                category: 'Limpeza'
            },
            {
                code: '#58962',
                description: 'descrição do produto 6',
                days: 94,
                pricing: 'RS39,2',
                category: 'Construção'
            },
            {
                code: '#21362',
                description: 'descrição do produto 7',
                days: 345,
                pricing: 'RS32,43',
                category: 'Açougue'
            },
       
        ])
    }, [])


    return (
        <ContextMain.Provider value={{
            selected, setSelected,
            dataTable, setDataTable,
            inputFilter, setInputFilter
        }}>
            {children}
        </ContextMain.Provider>
    );
}
export default Provider;


export function useSelected() {
    const infoUser: ContextType = useContext(ContextMain);
    const { selected, setSelected } = infoUser;
    return { selected, setSelected };
}


export function useDataTable() {
    const infoUser: ContextType = useContext(ContextMain);
    const { dataTable, setDataTable } = infoUser;
    return { dataTable, setDataTable };
}

export function useInputFilter() {
    const infoUser: ContextType = useContext(ContextMain);
    const { inputFilter, setInputFilter } = infoUser;
    return { inputFilter, setInputFilter };
}






