import React, { useState, useEffect } from 'react';
import { useModal } from '../../Context/ModalContext.js'; // Hook do contexto

const ModalCard = () => {
    const { isModalOpen, closeModal } = useModal();
    const [cardName, setCardName] = useState('');
    const [file, setFile] = useState(null);

    const handleNameChange = (e) => setCardName(e.target.value);
    const handleFileChange = (e) => setFile(e.target.files[0]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ cardName, file });
        closeModal(); // Fechar a modal após o envio
    };

    // Configura o estado de animação de deslizar
    const [isAnimating, setIsAnimating] = useState(isModalOpen);

    useEffect(() => {
        if (isModalOpen) {
            setIsAnimating(true);
        } else {
            const timeout = setTimeout(() => setIsAnimating(false), 300); // Espera o tempo da animação
            return () => clearTimeout(timeout);
        }
    }, [isModalOpen]);

    if (!isModalOpen && !isAnimating) return null;

    return (
        <>
            <div
                className={`fixed inset-0  bg-white bg-opacity-50 z-50 transform transition-transform duration-200 ${isAnimating ? 'translate-x-0' : 'translate-x-full'}`}
                onClick={closeModal}
            ></div>
            <div
                className={`fixed top-0 right-0 w-1/3 h-full bg-white p-6 z-50 transform transition-transform duration-300 ${isAnimating ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <h2 className="text-2xl font-bold mb-4">Cadastro de Card</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Nome do Card</label>
                        <input
                            type="text"
                            value={cardName}
                            onChange={handleNameChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Selecione um Arquivo</label>
                        <input
                            type="file"
                            onChange={handleFileChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div className="flex justify-between">
                        <button
                            type="button"
                            onClick={closeModal}
                            className="px-4 py-2 bg-gray-500 text-white rounded-md"
                        >
                            Fechar
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-md"
                        >
                            Cadastrar
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ModalCard;