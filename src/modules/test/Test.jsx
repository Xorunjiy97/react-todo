import React, { useState, useEffect } from  'react';

const Example = props => {
    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     console.log('useEffect')
    //     setCount(count + 1);
    // }, []);

    useEffect(() => {
        count && setCount(count + 1);
    }, []);

    return (
        <div>
            <p>Вы нажали кнопку ${count} раз</p>
            <button onClick={() => setCount(count + 1)}>
                Нажми на меня
            </button>
        </div>
    )
}

export default Example;
