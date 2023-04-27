import './form-input.styles.scss';

const FormInput = ({ label, ...otherprops }) => {
    return (
        <div className="group">
            {
                label && (
                    <label className={`${otherprops.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
                )
            }
            <input className="form-input" {...otherprops} />

        </div>
    )
}

export default FormInput;