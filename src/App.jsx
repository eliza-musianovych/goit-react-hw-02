import { useState } from 'react';
import { useEffect } from 'react';
import Description from './components/description/Description';
import Options from './components/options/Options';
import options from "./options.json";
import Feedback from './components/feedback/Feedback';
import Notification from "./components/notification/Notification";

export default function App () {
  const [feedbackType, setFeedbackType] = useState(() => {
    const savedFeedback = window.localStorage.getItem("saved-feedback");
    return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0}});

  const updateFeedback = (type) => {
    setFeedbackType((values) => ({
      ...values,
      [type]: values[type] + 1
    }));
    };

  const totalFeedback = Object.values(feedbackType).reduce((sum, value) => sum + value, 0)
  
  const handleReset = () => {
    setFeedbackType({
      good: 0,
      neutral: 0,
      bad: 0
    })
  };

  const positiveFeedback =Math.round((feedbackType.good / totalFeedback) * 100);

  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(feedbackType));
  }, [feedbackType]);

  return (
    <>
    <Description />
    <Options 
    options={options} 
    updateFeedback={updateFeedback} 
    totalFeedback={totalFeedback} 
    handleReset={handleReset} 
    />
    {totalFeedback > 0 ? <Feedback 
    options={options} 
    feedbackTypeValue={feedbackType} 
    totalFeedback={totalFeedback} 
    positiveFeedback={positiveFeedback} 
    /> : <Notification />}
    </>
  )
}