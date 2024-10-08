import { useState } from 'react'

export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    function handleEditClick() {
        setIsEditing(_ => !isEditing);
        if (isEditing) {
            onChangeName(symbol, playerName)
        }
    }

    function handleChange(e) {
        setPlayerName(e.target.value);
    }

    let editablePlayerName = <span className='player-name'>{initialName}</span>;

    if (isEditing) {
        editablePlayerName = <input type='text' required value={playerName} onChange={handleChange} />
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className='player'>
                {editablePlayerName}
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}