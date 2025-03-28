import { useState } from 'react';
import Description from './components/description/Description';
import Options from './components/options/Options';
import options from "./options.json";
import Feedback from './components/feedback/Feedback';
import Notification from "./components/notification/Notification";

export default function App () {
  const [feedbackType, setFeedbackType] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const updateFeedback = (type) => {
    setFeedbackType((values) => ({
      ...values,
      [type]: values[type] + 1
    }));
    };

  const totalFeedback = Object.values(feedbackType).reduce((sum, value) => sum + value)
    
  return (
    <>
    <Description />
    <Options options={options} updateFeedback={updateFeedback}/>
    {totalFeedback >0 ? <Feedback options={options} feedbackTypeValue={feedbackType} totalFeedback={totalFeedback}/> : <Notification />}
    </>
  )
}