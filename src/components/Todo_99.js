function Todo_99(props){
    return(
        <div>
            <div className='card'>
                <h2>{props.text}</h2>
                <div className='actions'>
                    <button className='btn'>Delete</button>
                </div>

            </div>
        </div>
    );
}

export default Todo_99;