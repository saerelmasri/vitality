
const Button = ({title, action}) => {
    return(
        <button className='btn-action' onClick={action}>{title}</button>
    );
}
export default Button