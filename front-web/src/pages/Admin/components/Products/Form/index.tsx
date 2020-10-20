import React from 'react';
import BaseFomr from '../../BaseForm';


const Form = () => {
    return (
        <BaseFomr title="cadastrar um produto">
            <div className="row">
                <div className="col-6">
                    <input type="text" className="form-control" />
                </div>
            </div>
        </BaseFomr>
    );
}

export default Form;