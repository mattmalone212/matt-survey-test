import axios from 'axios';



export const sendSurveyResponseToFunction = (surveyResponse: object, surveyId: any) => {
  // Get curent date as YYYY-MM-DD
  const responseTime = new Date().toISOString();

  const data = { ...surveyResponse};

  var myPromptIds = Object.keys(data)
  var myPromptResponses = Object.values(data)
  delete data.id

  console.log('Sending Following Survey Response', data);
  return axios.get ('https://stably-humorous-horse.pgsdemo.com/serverless/createSurveyResponse', {
    params: {
      surveyId: surveyId,
      promptIds: myPromptIds,
      promptResponses: myPromptResponses,
      submissionTime: responseTime
    },
  });
};

export default sendSurveyResponseToFunction;
