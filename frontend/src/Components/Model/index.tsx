import React from 'react';
import './index.css';

export default ({ success, failure,onClick }: any) => {
    return <div className="modal">
        <div className="modal-content">
            <div className={`${success ? 'modal-header-success' : 'model-header-failure'}`} >
                <span className="close" onClick={onClick}>&times;</span>
                {success && <h2>Congrats! You won the game&#128512;</h2>}
                {failure && <h2>Sorry, you lose the game&#128543;. Please try again</h2>}
            </div>
        </div>
    </div>
}