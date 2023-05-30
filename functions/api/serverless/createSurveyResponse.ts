export async function main(argumentJson) {
    let responseBody = JSON.parse(argumentJson["body"])


   let surveyId = responseBody.surveyCompleted
   let responder = responseBody.surveyResponder
   let promptIdsString = responseBody.promptIds
   let promptResponsesString = responseBody.promptResponses
   let submissionTime = responseBody.submissionTime
   let key = "66614b6b080af99262448781a0989e2c";
 
   const postUrl = 'https://api.yext.com/v2/accounts/me/entities?api_key=' + key + '&entityType=ce_surveyResponse' + '&v=20230323';
   
   const title = 'Survey Response on ' + submissionTime

   let promptIds = promptIdsString.split(',')
   let promptResponses = promptResponsesString.split('___')

    var thePromptResponses : object[] = []

    for (var i = 0; i < promptIds.length; i++) {
        let myPrompt = {
            "prompt": promptIds[i],
            "promptResponse" : promptResponses[i]
        }
        thePromptResponses.push(myPrompt)
    }

    let data = {
        "name": title,
        "c_responder": responder,
        "c_surveyCompleted" : [surveyId],
        "c_promptResponses" : thePromptResponses
    }
   
    const response = await fetch(postUrl, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
	    'Cache-control': 'no-cache'
        },
        redirect: 'follow',
        body: JSON.stringify(data)
      });
   return {
  	"statusCode" : 200,
	"status": response.status
   }
}
