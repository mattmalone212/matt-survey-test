export async function main(argumentJson) {
   let url = argumentJson["requestUrl"];
   let questionMark = url.indexOf("?");
   url = url.substring(questionMark);
   let urlParams = new URLSearchParams(url);
   let surveyId = urlParams.get("surveyCompleted");
   let promptIdsString = urlParams.get("promptIds");
   let promptResponsesString = urlParams.get("promptResponses");
   let submissionTime = urlParams.get("submissionTime");
   let key = "66614b6b080af99262448781a0989e2c";
 
   const postUrl = 'https://api.yext.com/v2/accounts/me/entities?api_key=' + key + '&entityType=ce_surveyResponse' + '&v=20230323';
   
   const title = 'Survey Response on ' + submissionTime

   let promptIds = promptIdsString.split(',')
   let promptResponses = promptResponsesString.split(',')

    var thePromptResponses : object[] = []

    for (var i = 0; i < promptIds.length; i++) {
        let myPrompt = {
            "prompt": [
                promptIds[i]
              ],
            "promptResponse" : promptResponses[i].toString()
        }
        thePromptResponses.push(myPrompt)
    }

    let data = {
        "name": title,
        "c_surveyCompleted" : surveyId,
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
