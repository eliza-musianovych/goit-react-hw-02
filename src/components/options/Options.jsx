const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export default function Options({options, updateFeedback}) {
    return <ul>
    {Object.keys(options).map((option) => (
        <li key={option}>
            <button value={option} onClick={() => updateFeedback(option)}>{capitalize(option)}</button>
        </li>
    ))}
    <li>
        <button>Reset</button>
    </li>
    </ul>
}