import { makeRequest } from 'core/utils/request';
import React, { useState } from 'react';
import BaseFomr from '../../BaseForm';

type FormState = {
    name: string;
    price: string;
    category: string;
    description: string;
}

type FormEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

const Form = () => {
    const [formData, setFormData] = useState<FormState>({
        name: '',
        price: '',
        category: '1',
        description: ''
    });

    const handleOnChenge = (event: FormEvent) => {
        const name = event.target.name;
        const value = event.target.value;

        setFormData(data => ({ ...data, [name]: value }));
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const payload = {
            ...formData,
            imgUrl: 'https://opiniaobomvaleapena.com.br/imagens/game-horizon-zero-dawn-ps4.png',
            categories: [{ id: formData.category }]
        }

        makeRequest({ url: '/products', method: 'POST', data: payload })
            .then(() => setFormData({ name: '', category: '', price: '', description: '' }));
    }

    return (
        <form onSubmit={handleSubmit}>
            <BaseFomr title="cadastrar um produto">
                <div className="row">
                    <div className="col-6">
                        <input
                            value={formData.name}
                            name="name"
                            type="text"
                            className="form-control mb-5"
                            onChange={handleOnChenge}
                            placeholder="Nome do Produto"
                        />
                        <select
                            value={formData.category}
                            className="form-control mb-5" onChange={handleOnChenge}
                            name="category"
                        >
                            <option value="1">Livros</option>
                            <option value="3">Computadores</option>
                            <option value="2">Eletronicos</option>
                        </select>
                        <input
                            value={formData.price}
                            name="price"
                            type="text"
                            className="form-control"
                            onChange={handleOnChenge}
                            placeholder="Preço"
                        />
                    </div>
                    <div className="col-6">
                        <textarea
                            value={formData.description}
                            name="description"
                            className="form-control"
                            cols={30}
                            rows={10}
                            onChange={handleOnChenge}
                        />
                    </div>
                </div>
            </BaseFomr>
        </form>
    );
}

export default Form;