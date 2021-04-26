const AlertWidget = ({ msg }) => {
    return (
        <div className='alert alert-error'>
            <i className='fas fa-fw fa-times' />
            <span>{msg}</span>
        </div>
    );
};

export default AlertWidget;
