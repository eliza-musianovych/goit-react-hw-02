import css from "./Options.module.css";

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export default function Options({options, updateFeedback, totalFeedback, handleReset}) {
    return <ul className={css.optionList}>
    {Object.keys(options).map((option) => (
        <li key={option} >
            <button className={css.btn} value={option} onClick={() => updateFeedback(option)}>{capitalize(option)}</button>
        </li>
    ))}
    <li>
        {totalFeedback > 0 && <button className={css.btn} onClick={handleReset}>Reset</button>} 
    </li>
    </ul>
}