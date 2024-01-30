import { cx } from 'class-variance-authority';

function TextField({ readOnly = false, rightButton, value, className, onChange, borderClass, onInput, name, ...props }) {
    const hoverClasses = 'hover:border-outline-high focus-within:border-txtElement-medium focus-within:shadow-02';
    return (
        <div
            className={cx(
                `relative flex items-center rounded-[10px] px-5 py-[15px] hover:border-outline-high`,
                className,
                borderClass,
                !borderClass && !readOnly && 'border border-solid border-outline-low',
                !readOnly && hoverClasses,
                readOnly && 'bg-surface-1'
            )}
        >
            <input
                className={cx(
                    'w-full bg-transparent text-body-14px-bold text-txtElement-medium outline-none focus:text-txtElement-high group-hover:text-txtElement-high'
                )}
                type="text"
                name={name}
                value={value}
                onInput={onInput}
                onChange={onChange}
                readOnly={readOnly}
                {...props}
            />
            {rightButton}
        </div>
    );
}

export default TextField;
