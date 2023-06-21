
export const Calcbutton = (props) => {
    return (
        <span>
            <button className='Addbutton' onClick={() => props.calculate(props.symbol)}>{props.symbol}</button>
        </span>
    );

}