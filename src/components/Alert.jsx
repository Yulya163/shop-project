import {useEffect} from 'react';

function Alert(props) {

    const {alertName = '', closeAlert = Function.prototype} = props;

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000); 

        return () => {
            clearTimeout(timerId);
        }
    }, [alertName]);
 
    return (
     <div className="toast-container">
         <div className="toast">{alertName} добавлен в корзину</div>
     </div>
    )
}
export {Alert};
