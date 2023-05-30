import axios from 'axios';



export const sendSurveyResponseToFunction = (surveyResponse: object) => {
  // Get curent date as YYYY-MM-DD
  const responseTime = new Date().toISOString();

  

  const data = { ...surveyResponse};
  const surveyId = data.id
  const responder = data.yexterId
  delete data.id

  var myPromptIds = Object.keys(data).toString()
  var myPromptResponses = Object.values(data).join('___')

  console.log(myPromptIds)
  console.log(myPromptResponses)

  console.log('Sending Following Survey Response', data);
  return axios.post ('survey.telescope.yext.com/serverless/createSurveyResponse', {
      surveyCompleted: surveyId,
      promptIds: myPromptIds,
      promptResponses: myPromptResponses,
      submissionTime: responseTime,
      surveryResponder: responder
  });
};

export default sendSurveyResponseToFunction;
