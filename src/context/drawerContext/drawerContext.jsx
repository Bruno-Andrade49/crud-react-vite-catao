import { createContext, useCallback, useContext, useState } from 'react';

const DrawerContext = createContext();

export const DrawerProvider = ({ children }) => {
    // Estado para controlar se o drawer está aberto ou fechado
    const [isOpen, setIsOpen] = useState(false);

    // Função para abrir o drawer
    const onOpen = useCallback(() => {
        setIsOpen(true);
    }, []);

    // Função para fechar o drawer
    const onClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    return (
        <DrawerContext.Provider value={{ isOpen, onOpen, onClose }}>
            {children}
        </DrawerContext.Provider>
    );
};

// Um hook personalizado para acessar o contexto
export const useDrawer = () => {
    const context = useContext(DrawerContext);
    if (!context) {
        throw new Error('useDrawer deve ser usado dentro de um DrawerProvider');
    }
    return context;
};
