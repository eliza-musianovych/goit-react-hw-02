const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export default function Feedback({options, feedbackTypeValue, totalFeedback}) {
    return <ul>
        {Object.keys(options).map((option) => (
            <li key={option}>{capitalize(option)}: {feedbackTypeValue[option]}</li>
        ))}
        <li>Total: {totalFeedback}</li>
    </ul>

}